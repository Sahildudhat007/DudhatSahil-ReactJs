{
    let i = 1;
    let num = prompt("Your number is prime or not primery: ");

    while (i <= num) {
        if (num % 2 == 1) {
            document.write("Prime Number : " + num);
            break;
        }
        else {
            document.write("Not a Prime Number : " + num);
            break;
        }
        i++;
    }
}