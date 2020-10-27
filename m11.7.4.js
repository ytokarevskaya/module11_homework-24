function getNum(a, b) {
    let numm1 = a;
  
    let timerId = setInterval(function() {
      console.log(numm1);
      if (numm1 == b) {
        clearInterval(timerId);
      }
      numm1++;
    }, 1000);
  }
  
 
  getNum(5, 15);