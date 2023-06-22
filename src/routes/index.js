const newsRouter = require('./news');
const courseRouter = require('./courses');
const meRouter = require('./me');
const siteRouter = require('./site');

function route(app) {
    // <<===========================>>

    // news page
    app.use('/news', newsRouter);
    app.use('/course', courseRouter);
    app.use('/me', meRouter);

    // các thành phần ko có trang con
    app.use('/', siteRouter);

    // main page
    // request, response
    // app.get('/', (req, res) => {
    //     // var a = 1;
    //     // var b = 2;
    //     // var c = a + b;
    //     // res.send('hi world')
    //     // mặc định vào view
    //     res.render('home');
    // });

    // app.get('/news', (req, res) => {
    // // mặc định vào view
    //     console.log(req.query.q);
    //     res.render('news');
    // });

    // Action ---> Dispatcher ---> Function handler
    // search page
    // app.get('/search', (req, res) => {
    //     // console.log(req.query.q);
    //     // mặc định vào view
    //     res.render('search');
    // });

    // app.post('/search', (req, res) => {

    //     // res.render('search');
    //     console.log(req.body.q)
    //     res.send('')
    // });
}

module.exports = route;
