#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const keyName = 'secure-session-key';

async function generateNewSecretKey() {
    const { stdout, stderr } = await exec(`./node_modules/.bin/secure-session-gen-key > ./secrets/${keyName}`);
    if (stderr) throw stderr;
    return stdout;
}

async function convertNewSecretKey() {
    const keyBuffer = await fs.readFileSync(path.join(__dirname, '../secrets', keyName));
    return keyBuffer.toString('hex');
}

async function appendToEnvFile(stringEntry = '') {
    const { stdout, stderr } = await exec(`echo '${stringEntry}' >> .env`);
    if (stderr) throw stderr;
    return stdout;
}

(async function main() {
    try {
        if (fs.existsSync(`./secrets/${keyName}`)) {
            console.log('Secure session key file already exists, skipping generating process.');
        } else {
            console.log('No secure session key file found, generating now...');

            await generateNewSecretKey();
            const hexString = await convertNewSecretKey();

            const newStringEntry = `COOKIE_KEY=${hexString}`

            await appendToEnvFile();
            await appendToEnvFile(newStringEntry);

            console.log('Secure session key file has been generated, parsed into hex, and added to the .env file!');

            return 0;

        }
    } catch (e) {
        console.log('Something went wrong.');
        console.error(e);
    }

    return '';
})();
