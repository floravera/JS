/*let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = (markMass/(markHeight*markHeight))
console.log (markBMI)

let johnBMI = (johnMass/(johnHeight*johnHeight))
console.log (johnBMI)

let markHigherBMI= true
markHigherBMI = markBMI>johnBMI
console.log (markHigherBMI)


 if ('markBMI'>'johnBMI') {
      console.log (`Marks'BMI (${markBMI}) is higher than John's`)
    } else {
        console.log(`Joh's BMI is higher than Mark's`)}*/

       /* const dolphinsAverage = (97+112+101)/3;
        const koalasAverage = (109+95+123)/3;

        if (koalasAverage>dolphinsAverage){ 
            console.log( 'The winner is "KOALAS"')
        } else {
            console.log( 'The winner is "Dolphins"')
        }

        if (koalasAverage>dolphinsAverage && koalasAverage>100) {
                console.log("Dolphins won")
            }*/

   
const calcAverage =(a,b,c) => (a+b+c)/3;
const avgKoalas= calcAverage(44,23,71);
console.log(avgKoalas);
const avgDolphins=calcAverage(65,54,49);
console.log(avgDolphins);
 function checkTheWinner(avgDolphins, avgKoalas) { 
     if(avgKoalas*2>avgDolphins) console.log("Koalas won" + ${avgKoalas}+ ':'+${avgDolphins})
     
 }