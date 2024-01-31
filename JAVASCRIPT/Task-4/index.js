
{
    const number = 5;
    let a = 0;
    let num = prompt("guess the number : ");

    while(a < 10){
        a++;
        if(num == number){
            document.write("congratulations You are winer :\n" + number);
            break;
        }
        document.write("Your number is :\n" + num + "<br>");
        num = prompt("Guess the number : ");
    }
}