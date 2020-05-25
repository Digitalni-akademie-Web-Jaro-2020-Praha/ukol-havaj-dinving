let osoba1 = {
  jmeno: 'Alena',
  uspory: 90000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 8000
};

let osoba3 = {
  jmeno: 'Lenka',
  uspory: 80000
};

function muzeme(osobaX, osobaY) {
  let usporyX = osobaX.uspory;
  let usporyY = osobaY.uspory;
  let jmenoX = osobaX.jmeno;
  let jmenoY = osobaY.jmeno;
  let celkem = osobaX.uspory + osobaY.uspory;

  if (celkem >= 100000) {
    if ((usporyX >= 50000) && (usporyY >= 50000)) {
      return 'Perfektní, máte obě naspořeno dost a můžete odletět na Havaj! Aloha :).'
    }
    if ((usporyX < 50000) && (usporyY >= 50000)) {
      return `Hurá, máte naspořeno a můžete odletět na Havaj! Ale ${jmenoX} nemá dost peněz a musí pak vrátit dluh ${50000 - usporyX} Kč, které jí půjčila ${osobaY.jmeno}.`
    }
    else {
      return `Bezva, máte naspořeno a můžete odletět na Havaj. Ale ${jmenoY} nemá dost peněz a musí pak vrátit dluh ${50000 - usporyY} Kč, které jí půjčila ${jmenoX}.`
    }
  }
  if (celkem < 100000) {
    if ((usporyX >= 50000) && (usporyY < 50000)) {
      return `Super, už chybí jen málo. ${jmenoX} už má všechny potřebné penízky, ale ${jmenoY} musí ještě našetřit ${50000 - usporyY} Kč.`
    }
    if ((usporyY >= 50000) && (usporyX < 50000)) {
      return `Olala, už chybí jen málo. ${jmenoY} už má všechny potřebné penízky, ale ${jmenoX} musí ještě našetřit ${50000 - usporyX} Kč.`
    }
    else {
      return `Jaj, to je smůla. Ještě na Havaj nemůžete, musíte ještě chvíli programovat funkce v javascriptu a šetřit. ${jmenoX} musí jeste našetřit ${50000 - usporyX} Kč. A ${jmenoY} potřebuje jeste naspořit ${50000 - usporyY} Kč. Celkem vám tedy chybí ${100000 - (usporyX + usporyY)} Kč. Aloha!`
    }
  }
}

muzeme(osoba1, osoba2)