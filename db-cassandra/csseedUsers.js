const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const cliProgress = require('cli-progress');
const faker = require('faker');
const uuid = require('uuid');

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const csvWriterUsers = createCsvWriter({
  path: './users.csv',
  header: [
    {id: 'id', title: 'id'},
    {id: 'email', title: 'email'},
    {id: 'first_name', title: 'first_name'},
    {id: 'last_name', title: 'last_name'},
  ]
});

function generateUsers (numOfRecords) {
  // bar.start(numOfRecords, 0);
  const records = [];

  for (var i = 0; i < numOfRecords; i++) {
    var first_name = faker.name.firstName();
    var last_name = faker.name.lastName();
    var email = faker.internet.email();

    var randomRecord = {
      id: uuid.v4(),
      email: email,
      first_name: first_name,
      last_name: last_name,
    };
    records.push(randomRecord);
    // bar.update(i);
  }
  return records;
  // csvWriterUsers.writeRecords(records)
  // .then(() => {
  //   bar.stop();
  // });
}

module.exports = { generateUsers };
// writeCsvUsers(10000000);
