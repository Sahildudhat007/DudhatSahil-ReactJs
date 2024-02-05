// Task-1
{
    var x = 0;

    if(10 > 9 > 8){
        x += 1;
    }
    console.log(x);
}

// Task-2
{
    // var bar = function foo() {};
    // console.log(bar == foo)
}

// Task-3
{
    // let a = 1;
    // let b = 2;
    // let c = '1';

    // console.log(a + b + c);
    // console.log(c + a + b);
    console.log(1 + 2 + '1');
    console.log('1' + 1 + 2);
}

// Task-4
{
    // let a = "90"
    // let b = "19"
    // let c = "09"

    // console.log(a > b);
    // console.log(c > b)
    console.log("90" > "19");
    console.log("09" > "19");
}

// Task-5
{
    const f = new Boolean(false);

    if(f){
        console.log(1);
    }
    else{
        console.log(2);
    }
    console.log(typeof(f));
}

// Task-6
{
    let x = 100;
    let y = x++; /* x = 100 incrimant x++ = 101 */
    let z = ++x; /* ++x = 102 */
 
    let n = (x == y) ? z++ : ++z

    console.log(n);
}