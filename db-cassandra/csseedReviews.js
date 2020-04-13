const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const cliProgress = require('cli-progress');
const faker = require('faker');
const uuid = require('uuid');


const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const csvWriterReviews = createCsvWriter({
  path: './reviews.csv',
  header: [
    {id: 'restaurant_id', title: 'restaurant_id'},
    {id: 'id', title: 'id'},
    {id: 'date', title: 'date'},
    {id: 'rating', title: 'rating'},
    {id: 'user_id', title: 'user_id'},
  ]
});

function generateReviews (numOfRecords, users, restaurants) {
  // bar.start(numOfRecords, 0);
  const records = [];

  for (var i = 0; i < numOfRecords; i++) {
    var restaurant_id = restaurants[i].id;
    var user_id = users[i].id;
    var rating = Math.ceil(Math.random() * 5);
    var date = faker.date.past(10).toJSON();
  
    var randomRecord = {
      restaurant_id: restaurant_id,
      id: uuid.v4(),
      date: date,
      rating: rating,
      user_id: user_id,
    };
    records.push(randomRecord);
    // bar.update(i);
  }
  return records;
  // csvWriterReviews.writeRecords(records)
  // .then(() => {
  //   bar.stop();
  // });
}

module.exports = { generateReviews };
// writeCsvReviews(10000000);