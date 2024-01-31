// methods

// {
//     const data = new Map([
//         ["option-1" , 10],
//         ["option-2" , 20],
//         ["option-3" , 30],
//         ["option-4" , 40]
//     ])
// }

// set methods
{
    // const newmap = new Map();

    // newmap.set("item-1" , "car");
    // newmap.set("item-2" , "bus");
    // newmap.set("item-3" , "truck");
    // newmap.set("item-4" , 50 )

    // document.getElementById("set1").innerHTML = newmap.get("item-2");
    // console.log(newmap);
}

// get methods
{   
    const newmap = new Map([
        ["item-1" , "car"],
        ["item-2" , "bus"],
        ["item-3" , "truck"]
    ]);

    newmap.set("item-1" , "truck");
    console.log(newmap);
    
    // document.getElementById("set2").innerHTML = newmap.get("item-1");
}