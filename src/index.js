const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const method_override = require('method-override');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// Connect db
db.connect();
// <<==============================>>
// auto go to public, static folder
app.use(express.static(path.join(__dirname, 'public')));

// sd middleware
app.use(
    express.urlencoded({
        extended: true, // đang sd body-parser
    }),
); // sd form
app.use(express.json()); // sd code js

// rest api method
app.use(method_override('_method'));

// XMLHttpRequest, fetch, axios

// HTTP logger
// app.use(morgan('combined'));

// TEMPLATE ENGINE

app.engine(
    'hbs',
    engine({
        // config extension handlebars
        extname: '.hbs',
        // helpers (write function)
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);

// C:\Users\Windows\OneDrive\Desktop\Tiendat\Web\NodeJS\src
// console.log(path.join(__dirname, 'resources/views'));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); // xài dấu, path.join sẽ tự điền dấu / tương ứng hđh

// Route init
route(app);

// 127.0.0.1 - localhost

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});

/**
 *
 */
