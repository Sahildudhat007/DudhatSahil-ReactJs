
{
    let x = 1;
    let y = 2;

    while (x <= 10) {
        document.write(y + "\tx\t" + x + "\t=\t" + x * y)
        document.write("<br>");
        x++;
    }
}

// {
//     link: for (let i = 1; i <= 10; i++) {
//         document.write("<br>");
//         for (let j = 1; j <= 10; j++) {
//             if (i == 11) {
//                 break link;
//             }
//             document.write(i + "x" + j + "=" + i * j);
//             document.write("<br>");
//         }
//     }
// }