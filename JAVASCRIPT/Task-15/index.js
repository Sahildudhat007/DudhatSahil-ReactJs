{
    let x = 0;
    let y = 20

    while (x < y) {
        x++;
        if (x % 3 == 0) {
            continue;
        }
        document.write(x + " ");
    }
}