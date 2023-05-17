const lavadora = {
  power: false,
  waterLevel: 0,
  washingLevel: 0,
  washingTime: 0,
  blush: 0,
  wash: false,
};

const btnEncender = document.getElementById("power");
const btnLavar = document.getElementById("lavar");
const badgeLavar = document.getElementById("bdlavar");
const badgePower = document.getElementById("bdpower");
btnEncender.addEventListener("click", () => {
  if (!lavadora.power) {
    lavadora.power = true;
    lavadora.wash = true;
    badgePower.classList.remove("bg-danger");
    badgePower.classList.add("bg-success");
    badgeLavar.classList.remove("bg-secondary");
    badgeLavar.classList.add("bg-info");
  } else {
    lavadora.power = false;
    lavadora.wash = false;
    badgePower.classList.remove("bg-success");
    badgePower.classList.add("bg-danger");
    badgeLavar.classList.remove("bg-info");
    badgeLavar.classList.remove("bg-success");
    badgeLavar.classList.add("bg-secondary");
    for (let index = 0; index < badgeAgua.length; index++) {
      badgeAgua[index].classList.remove("bg-success");
      badgeAgua[index].classList.add("bg-secondary");
    }
    for (let index = 0; index < badgeLavado.length; index++) {
      badgeLavado[index].classList.remove("bg-success");
      badgeLavado[index].classList.add("bg-secondary");
    }
    for (let index = 0; index < badgeTiempo.length; index++) {
      badgeTiempo[index].classList.remove("bg-success");
      badgeTiempo[index].classList.add("bg-secondary");
    }
    for (let index = 0; index < badgeEnjuage.length; index++) {
      badgeEnjuage[index].classList.remove("bg-success");
      badgeEnjuage[index].classList.add("bg-secondary");
    }
  }
});

btnLavar.addEventListener("click", () => {
  if (!lavadora.power) {
    alert("Primero prende la lavadora");
  } else {
    if (lavadora.wash) {
      lavadora.wash = false;
      badgeLavar.classList.remove("bg-info");
      badgeLavar.classList.add("bg-success");
    } else {
      lavadora.wash = true;
      badgeLavar.classList.remove("bg-success");
      badgeLavar.classList.add("bg-info");
    }
  }
});

const btnAgua = document.getElementById("agua");
const badgeAgua = document.getElementsByClassName("badgeAgua");
var n = 0;
var t = null;
btnAgua.addEventListener("click", () => {
  if (!lavadora.power) {
    alert("Primero prende la lavadora");
  } else {
    if (lavadora.wash) {
      if (n < badgeAgua.length) {
        console.log(badgeAgua[n]);
        if (t !== null) {
          t.classList.remove("bg-success");
          t.classList.add("bg-secondary");
        }
        badgeAgua[n].classList.remove("bg-secondary");
        badgeAgua[n].classList.add("bg-success");
        t = badgeAgua[n];
        n++;
      } else {
        n = 0;
        for (let index = 0; index < badgeAgua.length; index++) {
          badgeAgua[index].classList.remove("bg-success");
          badgeAgua[index].classList.add("bg-secondary");
        }
      }
    } else {
      alert("Primero apaga la lavadora");
    }
  }
});

const btnLavado = document.getElementById("lavado");
const badgeLavado = document.getElementsByClassName("badgeLavado");
var n2 = 0;
var t2 = null;
btnLavado.addEventListener("click", () => {
  if (!lavadora.power) {
    alert("Primero prende la lavadora");
  } else {
    if (lavadora.wash) {
      if (n2 < badgeLavado.length) {
        console.log(badgeLavado[n2]);
        if (t2 !== null) {
          t2.classList.remove("bg-success");
          t2.classList.add("bg-secondary");
        }
        badgeLavado[n2].classList.remove("bg-secondary");
        badgeLavado[n2].classList.add("bg-success");
        t2 = badgeLavado[n2];
        n2++;
      } else {
        n2 = 0;
        for (let index = 0; index < badgeLavado.length; index++) {
          badgeLavado[index].classList.remove("bg-success");
          badgeLavado[index].classList.add("bg-secondary");
        }
      }
    } else {
      alert("Primero apaga la lavadora");
    }
  }
});

const btnTiempo = document.getElementById("tiempo");
const badgeTiempo = document.getElementsByClassName("badgeTiempo");
var n3 = 0;
var t3 = null;
btnTiempo.addEventListener("click", () => {
  if (!lavadora.power) {
    alert("Primero prende la lavadora");
  } else {
    if (lavadora.wash) {
      if (n3 < badgeTiempo.length) {
        console.log(badgeTiempo[n3]);
        if (t3 !== null) {
          t3.classList.remove("bg-success");
          t3.classList.add("bg-secondary");
        }
        badgeTiempo[n3].classList.remove("bg-secondary");
        badgeTiempo[n3].classList.add("bg-success");
        t3 = badgeTiempo[n3];
        n3++;
      } else {
        n3 = 0;
        for (let index = 0; index < badgeTiempo.length; index++) {
          badgeTiempo[index].classList.remove("bg-success");
          badgeTiempo[index].classList.add("bg-secondary");
        }
      }
    } else {
      alert("Primero apaga la lavadora");
    }
  }
});

const btnEnjuage = document.getElementById("enjuage");
const badgeEnjuage = document.getElementsByClassName("badgeEnjuage");
var n4 = 0;
var t4 = null;
btnEnjuage.addEventListener("click", () => {
  if (!lavadora.power) {
    alert("Primero prende la lavadora");
  } else {
    if (lavadora.wash) {
      if (n4 < badgeEnjuage.length) {
        console.log(badgeEnjuage[n4]);
        if (t4 !== null) {
          t4.classList.remove("bg-success");
          t4.classList.add("bg-secondary");
        }
        badgeEnjuage[n4].classList.remove("bg-secondary");
        badgeEnjuage[n4].classList.add("bg-success");
        t4 = badgeEnjuage[n4];
        n4++;
      } else {
        n4 = 0;
        for (let index = 0; index < badgeEnjuage.length; index++) {
          badgeEnjuage[index].classList.remove("bg-success");
          badgeEnjuage[index].classList.add("bg-secondary");
        }
      }
    } else {
      alert("Primero apaga la lavadora");
    }
  }
});
