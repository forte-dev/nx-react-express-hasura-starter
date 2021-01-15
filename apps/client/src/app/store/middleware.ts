const req = require.context('.', true, /\.\/.+\/middleware\.ts$/);

export default req.keys().map((key) => req(key).default);
