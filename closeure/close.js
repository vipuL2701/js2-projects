function outerFunction() {
    const outerVariable = "I'm from the outer function";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const myClosure = outerFunction();
  
  myClosure(); 