const http = require('http');
const getUsers = require("./modules/users");

const server = http.createServer((request, response) => {

    const url = new URL(request.url, 'http://127.0.0.1:3003');
    const urlParams = url.searchParams;

    // Проверить, есть ли какие-либо параметры, кроме 'hello'
    const isOtherParamsPresent = Array.from(urlParams.keys()).some(param => param !== 'hello');

    if (isOtherParamsPresent) {
        response.statusCode = 500;
        response.end();
        return;
    }

    const helloParam = url.searchParams.get('hello');
    
    if (helloParam !== null) {
        if (helloParam.trim() === "") {
            response.status = 400;
            response.statusMessage = "OK";
            response.header = ("Content-Type", "text/plain");
            response.write("Enter a name");
            response.end();

            return;
        } else {
            response.status = 200;
            response.statusMessage = "OK";
            response.header = ("Content-Type", "text/plain");
            response.write("Hello " + helloParam);
            response.end();

            return;
        }
    }

    if (request.url === "/users") {
        response.statusCode = 200;
        response.statusMessage = "OK";
        response.setHeader = ("Content-Type", "application/json");
        response.write(getUsers());
        response.end();

        return;
    }

    response.status = 200;
    response.statusMessage = "OK";
    response.header = ("Content-Type", "text/plain");
    response.write("Hello World!");
    response.end();
});

server.listen(3003, () => {
    console.log("Сервер запущен по адресу http://127.0.0.1:3003");
});