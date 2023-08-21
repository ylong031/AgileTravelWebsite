const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

//items in the global namespace are accessible throught out the node application
global.db = new sqlite3.Database('./database.db',function(err){
  if(err){
    console.error(err);
    process.exit(1); //Bail out we can't connect to the DB
  }else{
    console.log("Database connected");
    global.db.run("PRAGMA foreign_keys=ON"); //This tells SQLite to pay attention to foreign key constraints
  }
});
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/user/assets/gui', express.static(path.join(__dirname, 'user/assets/gui')));
app.use('/user/assets/backgrounds', express.static(path.join(__dirname, 'user/assets/backgrounds')));
app.use('/user/assets/characters', express.static(path.join(__dirname, 'user/assets/characters')));

// Serve static files from the 'story' directory
app.use('/story', express.static(path.join(__dirname, 'story')));

const userRoutes = require('./routes/user');

//set the app to use ejs for rendering
app.set('view engine', 'ejs');

app.use(express.static('img'));
//this adds all the userRoutes to the app under the path /user
app.use('/user', userRoutes);

app.use(express.static('assets'));
//this adds all the userRoutes to the app under the path /user
app.use('/user', userRoutes);

app.use(express.static('story'));
//this adds all the userRoutes to the app under the path /user
app.use('/user', userRoutes);


app.use('/story', (req, res, next) => {
  if (req.url.endsWith('.js')) {
    res.type('application/javascript');
  }
  next();
});

app.use('/assets', express.static(path.join(__dirname, 'assets'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

