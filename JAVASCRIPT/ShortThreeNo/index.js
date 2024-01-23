let a = 10;
let b = 25;
let c = 30;

if(a < b && a < c){
    if(b < c){
        console.log("A, B, C")
    }
    else{
        console.log("A, C, B")
    }
}
else if(b < a && b < c){
    if(a < c){
        console.log("B, A, C")
    }
    else{
        console.log("B, C, A")
    }
}
else if(c < a && c < b){
    if(c < a){
        console.log("C, A, B")
    }
    else{
        console.log("C, B, A")
    }
}