const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const cliProgress = require('cli-progress');
const faker = require('faker');
const uuid = require('uuid');

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const csvWriterRestaurants = createCsvWriter({
  path: './restaurants.csv',
  header: [
    {id: 'id', title: 'id'},
    {id: 'cat', title: 'category'},
    {id: 'claimed', title: 'is_claimed'},
    {id: 'name', title: 'name'},
    {id: 'price', title: 'price'},
  ]
});

function generateRestaurants (numOfRecords) {
  const categories = ['Korean', 'Italian', 'American', 'Brunch', 'British', 'Chinese', 'Indian', 'French', 'Greek', 'Sushi', 'Pizza', 'Vegan', 'Steakhouse', 'Thai', 'Mexican'];
  
  // bar.start(numOfRecords, 0);
  const records = [];
  for (var i = 0; i < numOfRecords; i++) {
    var name = faker.company.companyName();
    var randomCategory = Math.floor(Math.random() * categories.length);
    var category = categories[randomCategory];
    var price = Math.ceil(Math.random() * 3);
    var claimed = Math.random() >= 0.5;

    var randomRecord = {
      id: uuid.v4(),
      cat: category,
      claimed: claimed,
      name: name,
      price: price,
    };
    records.push(randomRecord);
    // bar.update(i);
  }
  return records;
  // csvWriterRestaurants.writeRecords(records)
  //   .then(() => {
  //     bar.stop();
  //   });
}

module.exports = { generateRestaurants };
// writeCsvRestaurants(10000000);