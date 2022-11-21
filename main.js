function creatGame(player1, hour, player2) {
  return `
  <div class="nomesTimes">
    <p>${player1} <strong>${""}</strong></p>
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
  createCard("20/11", "Domingo", creatGame("catar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "Segunda-Feira",
    creatGame("england", "10:00", "iran") +
      creatGame("senegal", "13:00", "netherlands") +
      creatGame("usa", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "Terça-Feira",
    creatGame("argentina", "07:00", "arabiaSaudita") +
      creatGame("dinamarca", "10:00", "tunisia") +
      creatGame("mexico", "13:00", "poland") +
      creatGame("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "Quarta-Feira",
    creatGame("morocco", "07:00", "croatia") +
      creatGame("germany", "10:00", "japan") +
      creatGame("spain", "13:00", "costaRica") +
      creatGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "Quinta-Feira",
    creatGame("switzerland", "07:00", "cameroon") +
      creatGame("uruguay", "10:00", "southKorea") +
      creatGame("portugal", "13:00", "ghana") +
      creatGame("brasil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "Sexta-Feira",
    creatGame("wales", "07:00", "iran") +
      creatGame("catar", "10:00", "senegal") +
      creatGame("netherlands", "13:00", "ecuador") +
      creatGame("england", "16:00", "usa")
  ) +
  createCard(
    "26/11",
    "Sabado",
    creatGame("tunisia", "07:00", "australia") +
      creatGame("poland", "10:00", "saudiArabia") +
      creatGame("france", "13:00", "dinamarca") +
      creatGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "Domigo",
    creatGame("japan", "07:00", "costaRica") +
      creatGame("belgium", "10:00", "morocco") +
      creatGame("croatia", "13:00", "canada") +
      creatGame("spain", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "Sexta-Feira",
    creatGame("cameroon", "07:00", "serbia") +
      creatGame("southKorea", "10:00", "ghana") +
      creatGame("brasil", "13:00", "switzerland") +
      creatGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "Terça-Feira",
    creatGame("ecuador", "12:00", "senegal") +
      creatGame("netherlands", "12:00", "catar") +
      creatGame("iran", "16:00", "usa") +
      creatGame("wales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "Quarta-Feira",
    creatGame("tunisia", "12:00", "france") +
      creatGame("australia", "12:00", "dinamarca") +
      creatGame("poland", "16:00", "argentina") +
      creatGame("saudiArabia", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "Quinta-Feira",
    creatGame("croatia", "12:00", "belgium") +
      creatGame("canada", "12:00", "morocco") +
      creatGame("japan", "16:00", "spain") +
      creatGame("costaRica", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "Sexta-Feira",
    creatGame("southKorea", "12:00", "portugal") +
      creatGame("ghana", "12:00", "uruguay") +
      creatGame("serbia", "16:00", "switzerland") +
      creatGame("cameroon", "16:00", "brasil")
  )
