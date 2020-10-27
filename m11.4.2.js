function getNum(numm){
    let a = true;
    switch (numm) {
      case 0:
        return console.log(numm1 + '- число равно 0');
        break;
      case 1:
        return console.log(numm1 + '- число равно 1 - это простое число');
        break;
      default:
        if (numm > 1000) {
          return console.log(numm1 + '- число более 1000')
          break
        } else {
        for (let i = 2; i < numm; i++) {
         if (numm % i == 0) {
          a = false
          break
         }}}
    }
      if ((a == true) && (numm != 0) && (numm != 1)) {
              return console.log(numm1 + '- это простое число')
      } else if (a == false) {
          return console.log(numm1 + '- это не простое число')}
    }
  let numm1 = 0;
getNum(numm1);