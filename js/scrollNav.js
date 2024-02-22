//появление и удаление навигации при прокрутке
let nav =  document.querySelector(".fixed");
window.onscroll = function (e) {
    if(window.scrollY>150){
      nav.classList.add("none");
    }else {
        nav.classList.remove("none");
    }
};

const nodemailer = require('nodemailer');

// Создать объект transporter для отправки писем
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'i04534748@gmail.com',
    pass: 'ThePassword'
  }
});

// Определить содержимое и настройки письма
let mailOptions = {
  from: 'i04534748@gmail.com',
  to: 'ilya.nesterov2323@example.com',
  subject: 'Тема сообщения',
  text: 'Текст сообщения'
};

// Отправить письмо
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
