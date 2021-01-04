#!/usr/bin/env node

const fs = require('fs');
const execSync = require('child_process').execSync;

const privateKeyName = 'private.pem';
const publicKeyName = 'public.pem';

(function main() {
    try {
        if (fs.existsSync(`./secrets/${privateKeyName}`) && fs.existsSync(`./secrets/${publicKeyName}`)) {
            console.log('RSA key files already exists, skipping generating process.');
        } else {
            console.log('No RSA key files found, generate the RSA keys now...');
            // Generate the RSA keys
            execSync(`openssl genrsa -out ${privateKeyName} 2048`, { cwd: 'secrets' });
            execSync(`openssl rsa -in private.pem -pubout > ${publicKeyName}`, { cwd: 'secrets' });
        }

        if (fs.existsSync(`./secrets/authPrivateKey`) && fs.existsSync(`./secrets/hasuraGraphQlJwtSecret`)) {
            console.log('Escaped format AUTH_PRIVATE_KEY & HASURA_GRAPHQL_JWT_SECRET files found, skipping generating process.');
        } else {
            console.log('No escaped format AUTH_PRIVATE_KEY & HASURA_GRAPHQL_JWT_SECRET files found, generating now...');

            // Generate the AUTH_PRIVATE_KEY key in the escaped format
            execSync(`echo "AUTH_PRIVATE_KEY='{\\"type\\":\\"RS256\\", \\"key\\": \\"" > authPrivateKey`, { cwd: 'secrets', stdio: "pipe" });
            execSync(`awk -v ORS='\\\\n' '1' ${privateKeyName} >> authPrivateKey`, { cwd: 'secrets', stdio: "pipe" });
            execSync(`echo "\\"}'" >> authPrivateKey`, { cwd: 'secrets', stdio: "inherit" });

            // Print the HASURA_GRAPHQL_JWT_SECRET public key in the escaped format
            execSync(`echo "HASURA_GRAPHQL_JWT_SECRET='{\\"type\\":\\"RS256\\", \\"key\\": \\"" > hasuraGraphQlJwtSecret`, { cwd: 'secrets', stdio: "pipe" });
            execSync(`awk -v ORS='\\\\n' '1' ${publicKeyName} >> hasuraGraphQlJwtSecret`, { cwd: 'secrets', stdio: "pipe" });
            execSync(`echo "\\"}'" >> hasuraGraphQlJwtSecret`, { cwd: 'secrets', stdio: "inherit" });

            // Add the AUTH_PRIVATE_KEY to the root env
            console.log('Add AUTH_PRIVATE_KEY to the root .env file');
            execSync(`sed '$!N;s/\\n//' authPrivateKey >> ../.env`, { cwd: 'secrets', stdio: "inherit" });

            // Add the HASURA_GRAPHQL_JWT_SECRET to the Hasura env
            console.log('Add HASURA_GRAPHQL_JWT_SECRET to the hasura/.env file');
            execSync(`sed '$!N;s/\\n//' hasuraGraphQlJwtSecret >> ../hasura/.env`, { cwd: 'secrets', stdio: "inherit" });
        }
    } catch (e) {
        console.log('Something went wrong.');
        console.error(e);
    }
})();
