{
    let number = 12345;

// Initializing the result variable 
    let result = 0;

    while(number>0){
    // Getting the rightmost digit
    rightmost = number%10;
    
    result = result*10 + rightmost;
    
    // Removing the rightmost digit from the number
    number = Math.floor(number/10);
    }
    console.log("Reversed number is : " + result)

}
