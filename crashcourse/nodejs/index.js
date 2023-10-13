// // const utils = require('./util');
// // const { calvat, hello } = require('./util');
// // // const hello = require('./util');

// // // utils.calvat(100, 7)

// // // console.log(utils.calvat(100, 7));
// // // console.log(utils.hello());
// // hello();
// // const vat7 = calvat(100, 7);
// // console.log(vat7);



// // Path: crashcourse/nodejs/util.js
// const path = require('path');
// path.basename(__filename)
// console.log(path.basename(__filename)) // index.js

// path.dirname(__filename)
// console.log(path.dirname(__filename)) // /Users/doctoey/Desktop/code/tryexercises/crashcourse/nodejs

// path.extname(__filename)
// console.log(path.extname(__filename)) // .js

// path.parse(__filename)
// console.log(path.parse(__filename)) 

// // {
// //     root: '/',
// //     dir: '/Users/doctoey/Desktop/code/tryexercises/crashcourse/nodejs',
// //     base: 'index.js',
// //     ext: '.js',
// //     name: 'index'
// // }

// path.join(__dirname, 'test', 'hello.html')
// console.log(path.join(__dirname, 'test', 'hello.html')) // /Users/doctoey/Desktop/code/tryexercises/crashcourse/nodejs/test/hello.html

// // File System Module
// const fs = require('fs');
// fs.writeFileSync('hello.txt', 'Hello from Node.js');
// fs.appendFileSync('hello.txt', 'Hello from Node.js');
// fs.readFileSync('hello.txt', 'utf8');
// fs.renameSync('hello.txt', 'hello2.txt');

// // OS
// const os = require('os');
// os.platform();
// os.arch();
// os.cpus();
// os.freemem();
// os.totalmem();
// os.homedir();
// os.uptime();
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.homedir());
// console.log(os.uptime());



//====================================================================================================
const http = require('http');
const path = require('path');
const fs = require('fs');

function getPage(page) {
    const filePath = path.join(__dirname, page);
    return fs.readFileSync(filePath);
}

// http.createServer((req, res) => {
//     res.write('Hello from Node.js');
//     res.end();
// }).listen(5000, () => console.log('Server running...'));

function handleFiles(req, res) {
    const fileType = path.extname(req.url) || '.html';

    if (fileType === '.html') {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200)
    if (req.url === '/') {
        res.write(getPage('index.html'));
    } else {
        res.write(getPage(`about.html`));
    }
    res.end();
    } else {
        res.writeHead(404);
        res.end();
    }
}

function  getData (url) {
    let data;
    if (url === '/apis/time') {
        data = new Date().toString();
    } else if (url === '/apis/greet') {
        data = 'Hello from Node.js';
    } else if (url === '/apis/moment') {
        data = moment().format('MMMM Do YYYY, h:mm:ss a');
    } else if (url === '/apis/post') {
        data = [
            {
                title: 'Post 1',
                body: 'This is post 1'
            },
            {
                title: 'Post 2',
                body: 'This is post 2'
            }
        ]
    }
    return data;
}

function handleAPIs(req, res) {
    // const api = req.url.split('/')[2];
    // if (api === 'time') {
    //     res.writeHead(200);
    //     res.write(new Date().toString());
    //     res.end();
    // } else if (api === 'greet') {
    //     res.writeHead(200);
    //     res.write('Hello from Node.js');
    //     res.end();
    // } else {
    //     res.writeHead(404);
    //     res.end();
    // }
    let data = getData(req.url);

    if (data) {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.write(JSON.stringify(data));
    } else {
        res.writeHead(404);
    }
    res.end();

}

http.createServer((req, res) => {
    if (req.url.startsWith('/apis/')) {
        handleAPIs(req, res);
    } else {
        handleFiles(req, res);
    }
}).listen(3000);
    // res.setHeader('Content-Type', 'text/html');
    // res.writeHead(200)
    // res.write(getPage('index.html'));
    // res.end();