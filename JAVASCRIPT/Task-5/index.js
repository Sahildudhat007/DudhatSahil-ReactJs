
{
    let a = 0;
    let b = 1;
    let c;
    document.write(a + "<br>");
    document.write(b + "<br>");
    for(let i = 2; i <= 10; ++i){
        c = a + b;
        a = b;
        b = c;
        document.write(c + "<br>");
    }
}