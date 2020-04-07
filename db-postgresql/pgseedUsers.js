const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const cliProgress = require('cli-progress');
const faker = require('faker');

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const csvWriterUsers = createCsvWriter({
  path: './users.csv',
  header: [
    // {id: 'id', title: 'id'},
    {id: 'first_name', title: 'first_name'},
    {id: 'last_name', title: 'last_name'},
    {id: 'email', title: 'email'}
  ]
});

function writeCsvUsers (numOfRecords) {
  bar.start(numOfRecords, 0);
  const records = [];

  for (var i = 0; i < numOfRecords; i++) {
    var first_name = faker.name.firstName();
    var last_name = faker.name.lastName();
    var email = faker.internet.email();

    var randomRecord = {
      first_name: first_name,
      last_name: last_name,
      email: email
    };
    records.push(randomRecord);
    bar.update(i);
  }
  csvWriterUsers.writeRecords(records)
  .then(() => {
    bar.stop();
  });
}

writeCsvUsers(1000);