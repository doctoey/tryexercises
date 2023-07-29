//export const function fizzBuzz(): void {
//     for (let i = 1; i <= 100; i++) {
//       if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//       } else if (i % 3 === 0) {
//         console.log("Fizz");
//       } else if (i % 5 === 0) {
//         console.log("Buzz");
//       } else {
//         console.log(i);
//       }
//     }
//   }
  
// // simple-test.ts
// export const fizzbuzz = (totalNumber: number): string[] => {
    //     const result: string[] = [];
    
    //     for (let i: number = 1; i <= totalNumber; i++) {
        //         if (i % 3 === 0 && i % 5 === 0) {
            //             result.push("FizzBuzz");
            //         } else if (i % 3 === 0) {
                //             result.push("Fizz");
                //         } else if (i % 5 === 0) {
                    //             result.push("Buzz");
                    //         } else {
                        //             result.push("");
                        //         }
                        //     }
                        
                        //     return result;
                        // }

//   fizzBuzz();
  

export const fizzbuzz = (divider:number):string => {
    const totalNumber = 100

    for (let i:number = 0 ; i < totalNumber ; i++ ){
        if (divider === 3 && i % 3 === 0) {
            return "Fizz";
        }
        if (divider === 5 && i % 5 === 0) {
            return "Buzz";
        }

        if (divider === 15 && i % 15 === 0) {
            return "FizzBuzz";
        }
    }
    return "";
}

export const fizzbuzz2 = ():string => {
    const totalNumber = 100

    for (let i:number = 0 ; i < totalNumber ; i++ ){
        if (i % 3 === 0) {
            console.log("Fizz");
        }
        if (i % 5 === 0) {
            console.log("Buzz");
        }

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
    }
    return "";
}
                        
                        