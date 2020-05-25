let osoba1 = {
  jmeno: 'Alena',
  uspory: 90000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 8000
};
let uspory1 = osoba1.uspory;
let uspory2 = osoba2.uspory;
let jmeno1 = osoba1.jmeno
let jmeno2 = osoba2.jmeno

let celkem = osoba1.uspory + osoba2.uspory;
function muzeme(celkem) {
  if (celkem >= 100000) {
    if ((uspory1 >= 50000) && (uspory2 >= 50000)) {
      return 'Perfektní, máte obě naspořeno dost a můžete odletět na Havaj! Aloha :).'
    }
    if ((uspory1 < 50000) && (uspory2 >= 50000)) {
      return `Hurá, máte naspořeno a můžete odletět na Havaj! Ale ${jmeno1} nemá dost peněz a musí pak vrátit dluh ${50000 - uspory1} Kč, které jí půjčila ${osoba2.jmeno}.`
    }
    else {
      return `Bezva, máte naspořeno a můžete odletět na Havaj. Ale ${jmeno2} nemá dost peněz a musí pak vrátit dluh ${50000 - uspory2} Kč, které jí půjčila ${jmeno1}.`
    }
  }
  if (celkem < 100000) {
    if ((uspory1 >= 50000) && (uspory2 < 50000)) {
      return `Super, už chybí jen málo. ${jmeno1} už má všechny potřebné penízky, ale ${jmeno2} musí ještě našetřit ${50000 - uspory2} Kč.`
    }
    if ((uspory2 >= 50000) && (uspory1 < 50000)) {
      return `Olala, už chybí jen málo. ${jmeno2} už má všechny potřebné penízky, ale ${jmeno1} musí ještě našetřit ${50000 - uspory1} Kč.`
    }
    else {
      return `Jaj, to je smůla. Ještě na Havaj nemůžete, musíte ještě chvíli programovat funkce v javascriptu a šetřit. ${jmeno1} musí jeste našetřit ${50000 - uspory1} Kč. A ${jmeno2} potřebuje jeste naspořit ${50000 - uspory2} Kč. Celkem vám tedy chybí ${100000 - (uspory1 + uspory2)} Kč. Aloha!`
    }
  }
}
muzeme(celkem)