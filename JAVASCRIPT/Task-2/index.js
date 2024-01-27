// while loop
{
    let i = 1;
    let j = 0;

    while (i <= 10) {
        j = j + i;
        document.write(i);
        document.write("<br>");
        i++;
    }
    document.write("Totle:\t\t", j);
    document.write("<br>");
}

// for loop
// {
//     let i;
//     let j = 0;

//     for (i = 1; i <= 10; i++) {
//         j = j + i;
//         document.write(i);
//         document.write("<br>");
//     }
//     document.write("Total : " + j);
// }

// do... while loop
// {
//     let i = 1;
//     let j = 0;
//     do {
//         document.write(i + "<br>");
//         j += i;
//         i++;
//     }
//     while (i <= 10);
//     document.write("Total : " + j);
// }