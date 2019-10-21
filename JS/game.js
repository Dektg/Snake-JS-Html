const canvas = document.getElementById("game");//Переташил canvas в js
const ctx = canvas.getContext("2d");//Сказал что игра в формате 2d

const ground = new Image();//Добавил констане ground значение изображения
ground.src = "Image/ground.png";// Залил изображение поля в переменную (добавил ей значение)

const food = new Image();//Добавил констане food значение изображения
food.src = "Image/food.png";// Залил изображение еды в переменную (добавил ей значение)

let box = 32; //Сделал переменную которая отвечает за создание одного блока (всего в поле 17*15=255 блока по 32px каждый)

let score = 0;//Перемнная хранящая в себе счет

let food = {//Счайный спавн еды по x и по y
  x: Math.floor((Math.random() * 17 + 1)) * box,//Math.floor()округляет до целых; Math.random() случайное число от 0 до 1 (Напривмер: 0.2345678); Мы эту функцию умножаем на 17 (блоков в ширину) и прибавляем 1, потому что отчем начинаем с единицы, а не с нуля
  y: Math.floor((Math.random() * 15 + 1)) * box//Тут все немного по другому, в одном ряду по вертикали (по y) у нас 15 блоков; и умножаем это все дело на box (это длинна одного блока) то есть на 32px 
};

function Draw_Game() {
  ctx.drawImage(ground, 0, 0)//Нарисовал поле (ground) на всю ширену canvas
}

let game = setInterval(Draw_Game, 100);//Функция будет вызываться каждые 100 милисекунд (тоесть обновляться каждые 100 милимекунд)
