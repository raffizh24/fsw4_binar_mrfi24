const http = require("http");
const fs = require("fs");
const path = require("path");

const { PORT = 8000 } = process.env;
const people = require('./data/people.json');
const PUBLIC_DIRECTORY = path.join(__dirname, "public");

function getHTML(htmlFileName) {
    const htmlFile = path.join(PUBLIC_DIRECTORY, htmlFileName);
    const html = fs.readFileSync(htmlFile, 'utf-8');
    return html;
}

function onRequest(request, response) {
    switch (request.url) {
        case "/":
            response.writeHead(200);
            response.end(getHTML("index.html"));
            return
        case "/about":
            response.writeHead(200);
            response.end(getHTML("about.html"));
            return
        case "/api/people":
            response.setHeader("Content-Type", "application/json");
            response.writeHead(200);
            response.end(JSON.stringify(people));
            return
        default:
            response.writeHead(404);
            response.end(getHTML("404.html"));
            return
    }
}

const server = http.createServer(onRequest);

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}/`);
})