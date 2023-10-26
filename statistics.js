window.addEventListener('load', async function() {
  try {
    let response = await fetch('https://sig.2px.ru/info', {
      method: 'GET',
      headers: {
        Authorization: 'token12345',
      },
    });
    let result = await response.json();
    let docsNum = result.docsVerified;

    if (docsNum) {
      //show block
      document
        .querySelector('.header-statistics')
        .classList.add('header-statistics--visible');
      //set num
      document.querySelector('.header-statistics__num').innerHTML = docsNum;
      //docs text
      document.querySelector(
        '.header-statistics__text'
      ).innerHTML = `${declOfNum(docsNum, [
        'документ',
        'документа',
        'документов',
      ])}<br>${declOfNum(docsNum, [
        'проверен',
        'проверено',
        'проверено',
      ])} сервисом`;
    }
  } catch (err) {
    return;
  }

  function declOfNum(number, titles) {
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? number % 10 : 5]
    ];
  }
});
