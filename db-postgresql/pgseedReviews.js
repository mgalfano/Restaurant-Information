const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const cliProgress = require('cli-progress');
const faker = require('faker');

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const csvWriterReviews = createCsvWriter({
  path: './reviews.csv',
  header: [
    {id: 'restaurant_id', title: 'restaurant_id'},
    {id: 'user_id', title: 'user_id'},
    {id: 'rating', title: 'rating'},
    {id: 'date', title: 'date'}
  ]
});

function writeCsvReviews (numOfRecords) {
  bar.start(numOfRecords, 0);
  const records = [];

  for (var i = 0; i < numOfRecords; i++) {
    var restaurant_id = Math.ceil(Math.random() * numOfRecords);
    var user_id = Math.ceil(Math.random() * numOfRecords);
    var rating = Math.ceil(Math.random() * 5);
    var date = faker.date.past(10).toJSON();
  
    var randomRecord = {
      restaurant_id: restaurant_id,
      user_id: user_id,
      rating: rating,
      date: date
    };
    records.push(randomRecord);
    bar.update(i);
  }
  csvWriterReviews.writeRecords(records)
  .then(() => {
    bar.stop();
  });
}

writeCsvReviews(1000);