const express = require('express');
const bParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');
const movies = require('./movies');
const app = express();

// Body Parser MiddleWare
app.use(bParser.json());
app.use(bParser.urlencoded({ extended:false}));

// Handlebars MiddleWare
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Homepage Route
app.get('/', (req,res) => res.render('index', {
  title: 'Movies App'}));

// Register
app.get('/register', (req,res) => res.render('create', {
  title: 'Register Movie'
}));

app.get('/read/:id', function(req, res) {
  res.render('read');
});
// set static folder
app.use(express.static(path.join(__dirname, 'public'))) ;

// Members API Routes
app.use('/movies', require('./routes/api/movies'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
