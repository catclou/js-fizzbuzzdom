// 1) Scrivi un programma che stampi in console i numeri da 1 a 100;
for (let i = 1; i<=100; i++) {
    console.log(i);
    // 4) Per i numeri che sono contemporaneamente multipli di 3 e di 5 stampi "FizzBuzz";
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`FizzBuzz`);
    // 2) Per i multipli di 3 stampi "Fizz" al posto del numero;
    } else if (i % 3 == 0) {
        console.log(`Fizz`);
    // 3) Per i multipli di 5 stampi "Buzz" al posto del numero;
    } else if (i % 5 == 0) {
        console.log(`Buzz`);
    } 
}

// NOTA: al posto dell'operatore logico && avrei potuto verificare la divisibilità del numero per 15 (perché 3*5=15)
// NOTA: visto che ho già 2 else if, avrei potuto usare uno switch al posto delle varie condizioni


// 5) Appendi un elemento HTML in un container del DOM, con il numero o la stringa corretta;


// 6) A seconda del valore di i, applica uno stile differente per i multipli di 3;
// 7) A seconda del valore di i, applica uno stile differente per i multipli di 5;
// 8) A seconda del valore di i, applica uno stile differente per i numeri che sono contemporaneamente multipli di 3 e di 5;
