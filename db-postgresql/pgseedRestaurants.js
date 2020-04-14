const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const cliProgress = require('cli-progress');
const faker = require('faker');
const fs = require('fs');

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

////////////////////////////////////////////

// function createRestaurantCsv(totalRecords, recordsPerBatch) {
//   bar.start(totalRecords, 0);
//   const numOfBatches = totalRecords / recordsPerBatch;
//   const categories = ['Korean', 'Italian', 'American', 'Brunch', 'British', 'Chinese', 'Indian', 'French', 'Greek', 'Sushi', 'Pizza', 'Vegan', 'Steakhouse', 'Thai', 'Mexican'];
  
//   function createRecords(numOfRecords) {
//     var records = [];
//     for (var i = 0; i < numOfRecords; i++) {
//       var name = faker.company.companyName();
//       var randomCategory = Math.floor(Math.random() * categories.length);
//       var category = categories[randomCategory];
//       var price = Math.ceil(Math.random() * 3);
//       var claimed = Math.random() >= 0.5;

//       var randomRecord = {
//         // id: i,
//         name: name,
//         cat: category,
//         price: price,
//         claimed: claimed
//       };
//       records.push(randomRecord);
//     }
//     return records;
//   }

//   function writeToCsv() {
//     let batchOfRecords = createRecords(recordsPerBatch);
//     csvWriterRestaurants.writeRecords(batchOfRecords)
//       .then(() => {
//         writeCount++;
//         writeToCsv();
//         // console.log(writeCount);
//         // console.log('success writing');
//         // writeToCsv();
//       })
//       .catch(() => {
//         console.error('error writing to CSV');
//       });
//   }

//   var writeCount = 0;
//   while (writeCount < numOfBatches) {
//     writeToCsv();
//     bar.increment();
//     // writeCount++;
//   } 

//   bar.stop();
//   console.timeEnd();

// }

// console.time();
// createRestaurantCsv(1000, 10);

///////////////////////////////////////////////

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
    
    // if (i % 10000 === 0) {
    //   // console.log();
    // }
  }
  csvWriterRestaurants.writeRecords(records)
    .then(() => {
      bar.stop();
    });
}

writeCsvRestaurants(10000000);