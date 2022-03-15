// 1) Scrivi un programma che stampi in console i numeri da 1 a 100;
for (let i = 1; i<=100; i++) {
    
    // 4) Per i numeri che sono contemporaneamente multipli di 3 e di 5 stampi "FizzBuzz";
    if (i % 3 == 0 && i % 5 == 0) {
        // 8) A seconda del valore di i, applica uno stile differente per i numeri che sono contemporaneamente multipli di 3 e di 5;
        document.getElementById("numeri").innerHTML += `<div class="bg_fizzbuzz d-flex fs-1 mx-2 my-2 justify-content-center align-items-center" style="width: 170px; height: 170px;">FizzBuzz</div>`;

    // 2) Per i multipli di 3 stampi "Fizz" al posto del numero;
    } else if (i % 3 == 0) {
        // 6) A seconda del valore di i, applica uno stile differente per i multipli di 3;
        document.getElementById("numeri").innerHTML += `<div class="bg_fizz d-flex fs-1 mx-2 my-2 justify-content-center align-items-center" style="width: 170px; height: 170px;">Fizz</div>`;

    // 3) Per i multipli di 5 stampi "Buzz" al posto del numero;
    } else if (i % 5 == 0) {
        // 7) A seconda del valore di i, applica uno stile differente per i multipli di 5;
        document.getElementById("numeri").innerHTML += `<div class="bg_buzz d-flex fs-1 mx-2 my-2 justify-content-center align-items-center" style="width: 170px; height: 170px;">Buzz</div>`;

    } else {
        // 5) Appendi un elemento HTML in un container del DOM, con il numero o la stringa corretta;
        document.getElementById("numeri").innerHTML += `<div class="bg_standard d-flex fs-1 mx-2 my-2 justify-content-center align-items-center" style="width: 170px; height: 170px;">${i}</div>`;
    }
}

// NOTA: al posto dell'operatore logico && avrei potuto verificare la divisibilità del numero direttamente per 15 (perché 3*5=15)
// NOTA: visto che ho già 2 else if, avrei potuto usare uno switch al posto delle varie condizioni?
