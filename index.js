let osoba1 = {
  jmeno: 'Alena',
  uspory: 90000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 8000
};

let celkem = osoba1.uspory + osoba2.uspory;
function muzeme(celkem) {
  if (celkem >= 100000) {
    if ((osoba1.uspory >= 50000) && (osoba2.uspory >= 50000)) {
      return 'Perfektní, máte obě naspořeno dost a můžete odletět na Havaj! Aloha :).'
    }
    if ((osoba1.uspory < 50000) && (osoba2.uspory >= 50000)) {
      return `Hurá, máte naspořeno a můžete odletět na Havaj! Ale ${osoba1.jmeno} nemá dost peněz a musí pak vrátit dluh ${50000 - osoba1.uspory} Kč, které jí půjčila ${osoba2.jmeno}.`
    }
    else {
      return `Bezva, máte naspořeno a můžete odletět na Havaj. Ale ${osoba2.jmeno} nemá dost peněz a musí pak vrátit dluh ${50000 - osoba2.uspory} Kč, které jí půjčila ${osoba1.jmeno}.`
    }
  }
  if (celkem < 100000) {
    if ((osoba1.uspory >= 50000) && (osoba2.uspory < 50000)) {
      return `Super, už chybí jen málo. ${osoba1.jmeno} už má všechny potřebné penízky, ale ${osoba2.jmeno} musí ještě našetřit ${50000 - osoba2.uspory} Kč.`
    }
    if ((osoba2.uspory >= 50000) && (osoba1.uspory < 50000)) {
      return `Olala, už chybí jen málo. ${osoba2.jmeno} už má všechny potřebné penízky, ale ${osoba1.jmeno} musí ještě našetřit ${50000 - osoba1.uspory} Kč.`
    }
    else {
      return `Jaj, to je smůla. Ještě na Havaj nemůžete, musíte ještě chvíli programovat funkce v javascriptu a šetřit. ${osoba1.jmeno} musí jeste našetřit ${50000 - osoba1.uspory} Kč. A ${osoba2.jmeno} potřebuje jeste naspořit ${50000 - osoba2.uspory} Kč. Celkem vám tedy chybí ${100000 - (osoba1.uspory + osoba2.uspory)} Kč. Aloha!`
    }
  }
}
muzeme(celkem)