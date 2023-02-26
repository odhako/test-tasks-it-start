class Product {
  constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }
}

const storage = [
  new Product('Shure SM57', 9000, 18, 'Dynamic instrumental microphone'),
  new Product('Shure beta58', 8000, 26, 'Dynamic vocal microphone'),
  new Product('Yamaha Pacifica', 15000, 4, 'Electric guitar'),
  new Product('H/K Go Play Mini', 23000, 1, 'Bluetooth speaker'),
  new Product('Boss OD-3', 4000, 2, 'Overdrive pedal'),
  new Product('Boss DS-1', 4500, 1, 'Distortion pedal'),
  new Product('JBL Extreme', 22000, 2, 'Bluetooth speaker'),
  new Product('Fender FA-125', 17000, 8, 'Acoustic guitar'),
  new Product('Fender Jazz Bass', 126000, 1, 'Bass guitar'),
  new Product('Gibson Les Paul Classic', 180000, 1, 'Electric guitar'),
];

function search(query, products) {
  let result = products;
  const queryList = query.split('&');

  for (const _ of queryList) {
    const param = _.split('-');

    if (param[0] === 'name' || param[0] === 'description') {
      if (param[1] === 'contains') {
        result = result.filter( (item) => item[param[0]].toLowerCase().includes(param[2]) );
      } else if (param[1] === 'starts') {
        result = result.filter( (item) => item[param[0]].toLowerCase().startsWith(param[2]) );
      } else if (param[1] === 'ends') {
        result = result.filter( (item) => item[param[0]].toLowerCase().endsWith(param[2]) );
      }

    } else if (param[0] === 'price' || param[0] === 'quantity') {
      if (param[1].startsWith('>=')) {
        result = result.filter( (item) => item[param[0]] >= Number(param[1].slice(2)) );
      } else if (param[1].startsWith('<=')) {
        result = result.filter( (item) => item[param[0]] <= Number(param[1].slice(2)) );
      } else if (param[1].startsWith('<')) {
        result = result.filter( (item) => item[param[0]] < Number(param[1].slice(1)) );
      } else if (param[1].startsWith('>')) {
        result = result.filter( (item) => item[param[0]] > Number(param[1].slice(1)) );
      } else if (param[1].startsWith('=')) {
        result = result.filter( (item) => item[param[0]] === Number(param[1].slice(1)) );
      }
    }

  }

  return result;
}


// const query1 = "name-starts-fd&quantity-=5";
// const query2 = "name-contains-fd&price-=2&quantity->5&description-ends-abc";
const query3 = "name-starts-boss&price-<=4000&quantity->0";
const query4 = "description-contains-bluetooth";
const query5 = "description-contains-guitar&price-<100000";

console.log(search(query5, storage));
