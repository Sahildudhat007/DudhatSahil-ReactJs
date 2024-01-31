// {
//     const startRang = 1;
//     const endRang = 15;

//     for (let i = startRang; i <= endRang; i++) {
//         if (i % 2 != 0) {
//             continue;
//         }
//         document.write(i);
//     }
// }

{
    let a = 1, b = 15;

    while (a < b) {
        a++;
        if (a % 2 == 1) {
            continue;
        }
        document.write(a + " ");
        document.write("<br>")
    }
}