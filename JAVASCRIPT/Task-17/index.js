
{
    let number = 1;

    do{
        if (number % 5 == 0){
            number++;
            continue;
        }
        document.write(number);
        document.write("<br>");
        number++;
    }
    while(number <= 20);
}