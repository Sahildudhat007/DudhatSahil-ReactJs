// Task :- 4
// {
//     const number = 3;
//     let x = 0 , num = prompt("Guess the number game \n we give you a 10 chance : ");  
//  //    let sum = num * 10 ;
//     while(x<9)
//     {
//      x++;
//       if(num == number )
//       {
//          document.write( "<hr>" +"Right number is you win : " + number);
//          break;
//       }
//       document.write(x + ". " +"your chosen number is : " + num + "<br>");
//       num = prompt("Guess the number game \n we give you a 10 chance : ");  
//     }
//  }

// task :- 6
// {   
//     let x = 0 , fact = prompt("Calculate factorial of a number using a while loop \n Enter number : ", "4" ) , sum = 1 ;

//     while(x<fact)
//     {
//     // first time run :  " 4 " =  1  * ( 4 - 0 ) = 4; 
//     // first time run :  " 12 " =  4  * ( 4 - 1 ) = 3; 
//     // first time run :  " 24 " =  12  * ( 4 - 2 ) = 2; 
//     // first time run :  " 24 " =  24  * ( 4 - 3 ) = 1; 
//     // first time run :  " 0 " =  6  * ( 4 - 4 ) = 0; 
//     sum = sum * (fact - x);
//     x++;
// }
// document.write(fact + " factorial is : " + sum + " <br>");
// }


// task :- 8
// {
//     // document.write(num**power);
//     let num = prompt("Calculate the power of a number using a while loop \n Enter number : " , "4") , i = 1 , power = 1 ;

//     while(i<=3)
//     {
//         i++;
//         power*=num;
//     }

//     document.write(num + " power is : " + power);  
// }

// task :- 10
// {
//     let x = 0 , num = prompt("enter Search number between 1 to 20 : "); 

//     while(x<=20){
//         x++;
//         if(x == num)
//         {
            
//             document.write("your number is :" + x + "<br>");
//             break;
//         }
//         document.write(" your number is Search...." + x +"<br>");
//     }
// }

// task :- 11
// {
//     let i = prompt("Find the first odd number in a sequence using a while loop and break statement \n Enter a starting number value : " ) , num = prompt("enter a ending number value : " );  

//     while(i<=num)
//     {
//         i++;
//         if(1 == i%2)
//         {
//             document.write(" the first odd number is " + i );
//             break ;
//         }
//         // document.write(i);
//     }

// }

// task :- 13
// {
//     let i  , num = prompt("Loop with a conditional break statement based on user input \n Enter only single digit number number : ");

//     let sum =num*10;

//     for(i=0;i<sum;i++)
//     {
//         if(num < 10)
//         {
//             num = prompt("enter only single digit number number " );
//             document.write("loop is continue " + num + "<br>");
//         }else
//         {
//             document.write( "<br>" + "loop is break you enter double digit number " + num);
//             break;
//         }
//     }
// }

// task :- 14
// {
//     let x , num = prompt("Skip printing odd numbers using a for loop and continue statement \n Enter ending number : " );

//     for(x=0;x<num;x++)
//     {
//         if(x%2==0)
//         {
//             continue;
//         }
//         document.write( x +" ");
//     }
// }

// task :- 16
// {
//     let x =prompt("Enter starting numbers " , "1") , num=prompt("Enter ending numbers " , "30");

//     while(x<num){
//         x++;
//         if(x % 2 == 1)
//         {
//             continue;
//         }
//         document.write(x + " ");
//     }
// }


// task :- 17
// {
//     let x = 0 , num=prompt("Skip numbers divisible by 5 using a do-while loop and continue statement " , "10");

//     do{
//         x++;
//         if(x % 5 == 0)
//         {
//             continue;
//         }
//         document.write(x + " ");
//     }while(x<num);
// }