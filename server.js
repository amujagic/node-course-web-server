const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    res.render('maintenance.hbs', {
        title: "Our site is under maintance!",
        subtitle: "Please visit us back soon."
    });
});
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () =>{
    return new Date().getFullYear()+1;
});

app.get('/about', (req,res) => {
    res.render('about.hbs',{
        pageTitle:'About page',
        currentYear: new Date().getFullYear()
    });
});

app.listen(port, () =>{
    console.log(`Port number: ${port}`)
});