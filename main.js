const body = document.querySelector("body")
const root = document.querySelector(":root")
document.getElementById("btn").addEventListener("click", function () {
  if (body.dataset.theme === "white") {
    root.style.setProperty("--card-title-border-color", "#ad3f5b")
    root.style.setProperty("--card-color-primary", "#b8b8b8")
    root.style.setProperty("--card-bg-color", "#202024")
    root.style.setProperty("--body", "#e3e0dd")
    body.dataset.theme = "red"
  } else {
    root.style.setProperty("--card-title-border-color", "#b8b8b8")
    root.style.setProperty("--card-color-primary", "#ad3f5b")
    root.style.setProperty("--card-bg-color", "#1d1c19")
    root.style.setProperty("--body", "#ad3f5b")
    body.dataset.theme = "white"
  }
})

function gool(gool, gool1) {
  return `
  <div class="gool">
    <p>${gool}</p>
    <p>${gool1}</p>
  </div> 
  `
}
function creatGame(player1, hour, player2) {
  return `
  <hr/>
  <div class="nomesTimes">
    <p>${player1}</p>
    <p>${player2}</p>
  </div>
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
  </li>
  `
}
let delay = -0.4

function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay:${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
`
}

document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "Domingo",
    creatGame("catar", "13:00", "ecuador") + gool("0", "2")
  ) +
  createCard(
    "21/11",
    "Segunda-Feira",
    creatGame("england", "10:00", "iran") +
      gool("6", "2") +
      creatGame("senegal", "13:00", "netherlands") +
      gool("0", "2") +
      creatGame("usa", "16:00", "wales") +
      gool("1", "1")
  ) +
  createCard(
    "22/11",
    "Terça-Feira",
    creatGame("argentina", "07:00", "arabiaSaudita") +
      gool("1", "2") +
      creatGame("dinamarca", "10:00", "tunisia") +
      gool("0", "0") +
      creatGame("mexico", "13:00", "poland") +
      gool("0", "0") +
      creatGame("france", "16:00", "australia") +
      gool("4", "1")
  ) +
  createCard(
    "23/11",
    "Quarta-Feira",
    creatGame("morocco", "07:00", "croatia") +
      gool("0", "0") +
      creatGame("germany", "10:00", "japan") +
      gool("1", "2") +
      creatGame("spain", "13:00", "costaRica") +
      gool("7", "0") +
      creatGame("belgium", "16:00", "canada") +
      gool("1", "0")
  ) +
  createCard(
    "24/11",
    "Quinta-Feira",
    creatGame("switzerland", "07:00", "cameroon") +
      gool("1", "0") +
      creatGame("uruguay", "10:00", "southKorea") +
      gool("0", "0") +
      creatGame("portugal", "13:00", "ghana") +
      gool("3", "0") +
      creatGame("brasil", "16:00", "serbia") +
      gool("2", "0")
  ) +
  createCard(
    "25/11",
    "Sexta-Feira",
    creatGame("wales", "07:00", "iran") +
      gool("0", "2") +
      creatGame("catar", "10:00", "senegal") +
      gool("1", "3") +
      creatGame("netherlands", "13:00", "ecuador") +
      gool("1", "1") +
      creatGame("england", "16:00", "usa") +
      gool("0", "0")
  ) +
  createCard(
    "26/11",
    "Sabado",
    creatGame("tunisia", "07:00", "australia") +
      gool("0", "1") +
      creatGame("poland", "10:00", "saudiArabia") +
      gool("2", "0") +
      creatGame("france", "13:00", "dinamarca") +
      gool("2", "1") +
      creatGame("argentina", "16:00", "mexico") +
      gool("2", "0")
  ) +
  createCard(
    "27/11",
    "Domigo",
    creatGame("japan", "07:00", "costaRica") +
      gool("0", "1") +
      creatGame("belgium", "10:00", "morocco") +
      gool("0", "2") +
      creatGame("croatia", "13:00", "canada") +
      gool("4", "1") +
      creatGame("spain", "16:00", "germany") +
      gool("1", "1")
  ) +
  createCard(
    "28/11",
    "Sexta-Feira",
    creatGame("cameroon", "07:00", "serbia") +
      gool("3", "3") +
      creatGame("southKorea", "10:00", "ghana") +
      gool("2", "3") +
      creatGame("brasil", "13:00", "switzerland") +
      gool("1", "0") +
      creatGame("portugal", "16:00", "uruguay") +
      gool("2", "0")
  ) +
  createCard(
    "29/11",
    "Terça-Feira",
    creatGame("ecuador", "12:00", "senegal") +
      gool("0", "0") +
      creatGame("netherlands", "12:00", "catar") +
      gool("0", "0") +
      creatGame("iran", "16:00", "usa") +
      gool("0", "0") +
      creatGame("wales", "16:00", "england") +
      gool("0", "0")
  ) +
  createCard(
    "30/11",
    "Quarta-Feira",
    creatGame("tunisia", "12:00", "france") +
      gool("0", "0") +
      creatGame("australia", "12:00", "dinamarca") +
      gool("0", "0") +
      creatGame("poland", "16:00", "argentina") +
      gool("0", "0") +
      creatGame("saudiArabia", "16:00", "mexico") +
      gool("0", "0")
  ) +
  createCard(
    "01/12",
    "Quinta-Feira",
    creatGame("croatia", "12:00", "belgium") +
      gool("0", "0") +
      creatGame("canada", "12:00", "morocco") +
      gool("0", "0") +
      creatGame("japan", "16:00", "spain") +
      gool("0", "0") +
      creatGame("costaRica", "16:00", "germany") +
      gool("0", "0")
  ) +
  createCard(
    "02/12",
    "Sexta-Feira",
    creatGame("southKorea", "12:00", "portugal") +
      gool("0", "0") +
      creatGame("ghana", "12:00", "uruguay") +
      gool("0", "0") +
      creatGame("serbia", "16:00", "switzerland") +
      gool("0", "0") +
      creatGame("cameroon", "16:00", "brasil") +
      gool("0", "0")
  )
