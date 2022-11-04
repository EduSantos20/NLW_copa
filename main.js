function creatGame(player1, hour, player2) {
  return `
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

document.querySelector('#cards').innerHTML =
  createCard('20/11', 'Domingo', creatGame('qatar', '13:00', 'ecuador')) +
  createCard(
    '21/11',
    'Segunda-Feira',
    creatGame('england', '10:00', 'iran') +
      creatGame('senegal', '13:00', 'netherlands') +
      creatGame('usa', '16:00', 'Wales')
  ) +
  createCard(
    '22/11',
    'Terca-Feira',
    creatGame('', '07:00', '') +
      creatGame('', '10:00', '') +
      creatGame('', '13:00', '') +
      creatGame('', '16:00', '')
  ) +
  createCard(
    '23/11',
    'Quarta-Feira',
    creatGame('', '07:00', '') +
    creatGame('', '10:00', '') +
    creatGame('', '13:00', '') +
    creatGame('', '16:00', '')
  )+
  createCard(
    '24/11',
    'Quinta-Feira',
    creatGame('', '07:00', '') +
    creatGame('', '10:00', '') +
    creatGame('', '13:00', '') +
    creatGame('', '16:00', '')
  )+
  createCard(
    '25/11',
    'Sexta-Feira',
    creatGame('', '07:00', '') +
    creatGame('', '10:00', '') +
    creatGame('', '13:00', '') +
    creatGame('', '16:00', '')
  )+
  createCard(
    '26/11',
    'Sabado',
    creatGame('', '07:00', '') +
    creatGame('', '10:00', '') +
    creatGame('', '13:00', '') +
    creatGame('', '16:00', '')
  )+
  createCard(
    '27/11',
    'Domigo',
    creatGame('', '07:00', '') +
    creatGame('', '10:00', '') +
    creatGame('', '13:00', '') +
    creatGame('', '16:00', '')
  )+
  createCard(
    '28/11',
    'Sexta-Feira',
    creatGame('', '07:00', '') +
    creatGame('', '10:00', '') +
    creatGame('', '13:00', '') +
    creatGame('', '16:00', '')
  )+
  createCard(
    '29/11',
    'Terça-Feira',
    creatGame('', '07:00', '') +
    creatGame('', '10:00', '') +
    creatGame('', '13:00', '') +
    creatGame('', '16:00', '')
  )+
  createCard(
    '30/11',
    'Quarta-Feira',
    creatGame('', '07:00', '') +
    creatGame('', '10:00', '') +
    creatGame('', '13:00', '') +
    creatGame('', '16:00', '')
  )+
  createCard(
    '01/12',
    'Quinta-Feira',
    creatGame('', '07:00', '') +
    creatGame('', '10:00', '') +
    creatGame('', '13:00', '') +
    creatGame('', '16:00', '')
  )+
  createCard(
    '02/12',
    'Sexta-Feira',
    creatGame('', '07:00', '') +
    creatGame('', '10:00', '') +
    creatGame('', '13:00', '') +
    creatGame('', '16:00', '')
  )
