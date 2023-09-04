function nustatytiKlase(amzius) {
  if (isNaN(amzius)) {
      return "Netinkamai nurodytas amžius, amžius privalo būti skaičius.";
  } else if (amzius < 0) {
      return "Įvestas amžius yra per mažas.";
  } else if (amzius === 6) {
      return "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.";
  } else if (amzius >= 7 && amzius <= 10) {
      return "7-10 metų eina į pradinę klasę.";
  } else if (amzius === 10) {
      return "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.";
  } else if (amzius >= 11 && amzius <= 14) {
      return "11-14 metų eina į pagrindinę klasę.";
  } else if (amzius === 14) {
      return "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.";
  } else if (amzius >= 15 && amzius <= 18) {
      return "15-18 metų eina į gimnaziją.";
  } else if (amzius === 18) {
      return "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.";
  } else if (amzius > 120) {
      return "Įvestas amžius yra per didelis.";
  } else {
      return "19+ mokyklą baigė.";
  }
}

// Pavyzdiniai skambučiai funkcijai
console.log(nustatytiKlase(-5));    // Įvestas amžius yra per mažas.
console.log(nustatytiKlase(6));     // Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.
console.log(nustatytiKlase(10));    // Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.
console.log(nustatytiKlase(12));    // 11-14 metų eina į pagrindinę klasę.
console.log(nustatytiKlase(14));    // Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.
console.log(nustatytiKlase(18));    // Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.
console.log(nustatytiKlase(130));   // Įvestas amžius yra per didelis.
console.log(nustatytiKlase("Metai")); // Netinkamai nurodytas amžius, amžius privalo būti skaičius.
