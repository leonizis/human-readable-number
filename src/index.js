module.exports = function toReadable (number) {
const one = ['','one','two','three','four', 'five','six','seven','eight','nine'];
const two = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
const three = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

  if(number == 0){
    return 'zero';
  }

  if(number > 0 && number < 10){
    return one[number];
  }
  if(number > 9 && number < 20){
    return two[number - 10];
  }
  if(number > 19 && number < 100){
    if(number % 10 == 0){
        return three[Math.floor(number / 10)];
    }
    return `${three[Math.floor(number / 10)]} ${one[number % 10]}`;
    
  }
  if(number > 99 && number < 1000){
    
    if(number % 10 == 0 && Math.floor(number / 10) % 10 == 0){
        return `${one[Math.floor(number / 100)]} hundred`;
    }
    else if(Math.floor(number / 10) % 10 == 0){
        return `${one[Math.floor(number / 100)]} hundred ${one[number % 10]}`;
    }
    if(number % 10 == 0 && Math.floor(number / 10) % 10 == 1){
        return `${one[Math.floor(number / 100)]} hundred ten`;
    }
    else if(number % 10 == 0){
    return `${one[Math.floor(number / 100)]} hundred ${three[Math.floor(number / 10) % 10]}`;
    }
    
    else if(Math.floor(number / 10) % 10 == 1){
        return `${one[Math.floor(number / 100)]} hundred ${two[number % 10]}`;
    }

    else {
        return `${one[Math.floor(number / 100)]} hundred ${three[Math.floor(number / 10) % 10]} ${one[number % 10]}`;
}
    
  }
 return console.log(`${one[Math.floor(number / 100)]} hundred ${one[number % 10]}`);
}; 

module.exports(910);
