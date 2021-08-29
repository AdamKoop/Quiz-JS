let rus = {
    hello: 'Добро пожаловать на викторину по JavaScript',
    lorem: '<p>У вас есть 75 секунд, чтобы ответить на вопросы, проверяющие ваши знания основ JavaScript.</p><p>Неправильные ответы имеют 10-секундный штраф!</p><p>Получите ли вы высокий балл?</p><p>УДАЧИ!</p>',
    butbegin:'Начать',  
};
  
  let eng = {
    hello: 'WELCOME TO THE JAVASCRIPT CODE QUIZ!',
    lorem: '<p>You have 75 seconds to answer questions testing your knowledge of JavaScript fundamentals.</p> <p>Incorrect answers have a 10 second penalty!</p><p>Will you get the high score?</p><p>GOOD LUCK!</p>',
    butbegin:'Start',  
};
  
  changeLagnuage();
  
  function changeLagnuage(){
    let language = lang.checked ? rus : eng;
    document.querySelectorAll('[text]').forEach(el => {
      el.innerHTML = language[el.getAttribute('text')];
    })
  }