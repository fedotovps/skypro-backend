const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/users");

// Вызываем функцию конфигурации
dotenv.config();

const app = express();

// Адрес сервера и порт
const { PORT = 3000, API_URL = "http://127.0.0.1" } = process.env;

// Функция обработки данных
const helloWorld = (request, response) => {
  response.status(200);
  response.send("Hello, World");
};

// с помощью app.use используем роутер и body-parser (помогает обрабатывать данные, которые приходят в теле сообщения)
app.use(cors());
app.use(bodyParser.json());
app.use(userRouter);

// Обработка get-запроса
app.get("/", helloWorld);

// Обработка post-pапроса
app.post("/", (request, response) => {
  response.status(200);
  response.send("Hello from post");
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
