const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}))

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    //res.send("Testing");
    //res.render('index');
    res.render('index',
    {
        title: 'Home',
        companyName: 'Business Ltd'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

//Folder for static files like css, jpg...
app.use(express.static('public'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));