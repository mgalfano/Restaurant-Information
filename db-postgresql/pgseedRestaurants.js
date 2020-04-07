const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const cliProgress = require('cli-progress');
const faker = require('faker');

const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

const csvWriterRestaurants = createCsvWriter({
  path: './restaurants.csv',
  header: [
    // {id: 'id', title: 'id'},
    {id: 'name', title: 'name'},
    {id: 'cat', title: 'category'},
    {id: 'price', title: 'price'},
    {id: 'claimed', title: 'is_claimed'}
  ]
});

function writeCsvRestaurants (numOfRecords) {
  const categories = ['Korean', 'Italian', 'American', 'Brunch', 'British', 'Chinese', 'Indian', 'French', 'Greek', 'Sushi', 'Pizza', 'Vegan', 'Steakhouse', 'Thai', 'Mexican'];
  
  bar.start(numOfRecords, 0);
  const records = [];
  for (var i = 0; i < numOfRecords; i++) {
    var name = faker.company.companyName();
    var randomCategory = Math.floor(Math.random() * categories.length);
    var category = categories[randomCategory];
    var price = Math.ceil(Math.random() * 3);
    var claimed = Math.random() >= 0.5;

    var randomRecord = {
      // id: i,
      name: name,
      cat: category,
      price: price,
      claimed: claimed
    };
    records.push(randomRecord);
    bar.update(i);
  }
  csvWriterRestaurants.writeRecords(records)
    .then(() => {
      bar.stop();
    });
}

writeCsvRestaurants(1000);