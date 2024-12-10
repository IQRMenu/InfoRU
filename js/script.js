const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav__links");
const navLogo = document.querySelector('.nav__logo');
const linkAll = document.querySelectorAll('.nav__links a');
hamburger.onclick = function () {
  hamburger.classList.toggle("hamburger_active");
  navLink.classList.toggle("nav__links_active");
  navContact.classList.toggle("nav__contact_active");
  navLogo.classList.toggle("nav__logo_active");
}
navLogo.onclick = function () {
  navLogo.classList.remove("nav__logo_active");
  hamburger.classList.remove("hamburger_active");
  navContact.classList.remove("nav__contact_active");
  navLink.classList.remove("nav__links_active");
}
for (let i = 0; i < linkAll.length; i++) {
  linkAll[i].onclick = function () {
    hamburger.classList.remove("hamburger_active");
    navLink.classList.remove("nav__links_active");
    navContact.classList.remove("nav__contact_active");
    navLogo.classList.remove("nav__logo_active");
  }
}

















const formContact = document.querySelector('.contact form');
const formIframe = formContact.querySelector('iframe');
let chatToken = '';
document.addEventListener("DOMContentLoaded", function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', './js/chatToken.php', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = xhr.responseText;
      var a = response.trim(); // Убираем возможные лишние пробелы и переносы строки
      chatToken = a;
    }
  };
  xhr.send();
});

formIframe.onload = function () {
  const formSubmitBlock = formContact.querySelector('.form-submit');
  formSubmitBlock.classList.add('_show');

  setTimeout(() => {
    formContact.reset();
    formSubmitBlock.classList.remove('_show');
  }, 3000);

  const chatId = '396606827';
  const Name = formContact.querySelector('#name').value;
  const Tel = formContact.querySelector('#tel').value;
  const messageText = `‼️ \nНовый заказ на меню\n🔘Имя - ${Name}\n🔘Телефон - ${Tel}`;

  const url = `https://api.telegram.org/bot${chatToken}/sendMessage`;
  const params = {
    chat_id: chatId,
    text: messageText,
  };
  axios.post(url, params)
    .then(response => {

    })
    .catch(error => {

    });
  return false

}