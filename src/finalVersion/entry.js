Handlebars.registerHelper('formatTime', time => {});

Handlebars.registerHelper('formatBDay', bday => {
  const months = [
    'января', 'февраля', 'марта', 'апреля',
    'мая', 'июня', 'июля', 'августа', 'сентября',
    'октября', 'ноября', 'декабря'
  ];
  const [day, month] = (bday || '').split('.');
  return [day, months[month - 1]].join(' ');
});

Handlebars.registerHelper('formatDate', ts => {
  return new Date( ts * 1000).toLocaleString();
});

import Model from './model.js';
import View from './view.js';
import Router from './router.js';

(async () => {
  try {
    const header = document.querySelector('#header');
    await Model.login( 7734691 , 2 | 8192 );
    const [me] = await Model.getUser({name_case: "gen" });

    header.innerHTML = View.render('header', me);
    Router.init();
  } catch (e) {
    console.error(e);
    alert('Ошибка: ' + e.message);
  }
})();
