    console.log("Maths fizzbang test")

    let number1 = 2

    let number2 = 3


    console.log(number1)

    let div = number1 / number2

    function fizzbangcalcu(num) {
      for (let i = 0; i <= num; i++) {
        if (i % 5== 0 && i % 3 == 0) {
          console.log ("fizzbang") ; }

        else if (i % 3== 0) {
         console.log ("fizz") ;}

         else if (i % 5== 0) {
          console.log ("bang") ;}
          else {console.log(i);

          }
        }
      }
fizzbangcalcu(30);

//note for future, study more on symbols and how they interact in javascript

