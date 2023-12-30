const server = require('./src/app.js')

require('dotenv').config();
const { conn } = require('./src/db.js');
const{PORT}= process.env
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});