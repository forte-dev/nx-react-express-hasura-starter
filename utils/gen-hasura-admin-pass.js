#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const envKeyName = 'HASURA_GRAPHQL_ADMIN_SECRET';
const keyName = 'hasuraAdminKey';

async function generateNewSecretKey() {
  const { stdout } = await exec(`node ./utils/keygen > ./secrets/${keyName}`);
  return stdout;
}

async function convertNewSecretKey() {
  const keyBuffer = await fs.readFileSync(
    path.join(__dirname, '../secrets', keyName)
  );
  return keyBuffer.toString('hex');
}

async function appendToHasuraEnvFile(stringEntry = '') {
  const { stdout, stderr } = await exec(
    `echo '${stringEntry}' >> ./hasura/.env`
  );
  if (stderr) throw stderr;
  return stdout;
}

async function appendToEnvFile(stringEntry = '') {
  const { stdout, stderr } = await exec(`echo '${stringEntry}' >> .env`);
  if (stderr) throw stderr;
  return stdout;
}

(async function main() {
  try {
    if (fs.existsSync(`./secrets/${keyName}`)) {
      console.log(
        `${keyName} file already exists, skipping generating process.`
      );

      return null;
    } else {
      console.log(`No ${keyName} file found, generating now...`);

      await generateNewSecretKey();
      const hexString = await convertNewSecretKey();

      const newStringEntry = `${envKeyName}=${hexString}`;

      await appendToEnvFile();
      await appendToEnvFile(newStringEntry);

      await appendToHasuraEnvFile();
      await appendToHasuraEnvFile(newStringEntry);

      console.log(
        `${keyName} file has been generated, parsed into hex, and added to the '.env' and './hasura/.env' files as ${envKeyName}!`
      );

      return 0;
    }
  } catch (e) {
    console.log('Something went wrong.');
    console.error(e);
  }

  return 1;
})();
