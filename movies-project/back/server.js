const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const PORT= 3000

// mongo db
var mongodb = require("mongodb");

// getting id
var ObjectID = mongodb.ObjectID;

let db;

Posts = "posts"


// const mongoUrl = 'mongodb://<dbuser>:<dbpassword>@ds145463.mlab.com:45463/movies'
const mongoUrl = 'mongodb://ahmadyassin:12345ahmad@ds145463.mlab.com:45463/movies'

// let Movies

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(mongoUrl, function (err, database) {
    if (err) {
      console.log(err);
    }

    // Save database object from the callback for reuse.
    db = database.db('movies');
    // Movies = db.collection('movies')
    console.log("Database connection ready");

    var server = app.listen(PORT, function () {
        console.log("App now running on port", PORT);
    });

})

// let ids = 3

// const movies = [
//     {
//       name: 'Harry Potter',
//       genre: 'Magic',
//       length: 126,
//       image: '../../assets/images/harry.png'
//     },
//     {
//       name: 'Naruto',
//       genre: 'Action',
//       length: 150,
//       image:  '../../assets/images/naruto.png'
//     },
//     {
//       name: 'One Piece',
//       genre: 'Adventure',
//       length: 175,
//       image:  '../../assets/images/lofi.png'
//     },
    
//   ]

  // for parsing and delevering the json
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}) );

  // for google auth and allowing passing headers from server to app
  app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });


  
app.get('/', (req, res) => {
    res.send({
        msg: 'Welcome to Movies Backend'
    })
})

app.get('/movies', (req, res) => {
    let movies = db.collection("movies").find({}).toArray((err, doc) => res.send(doc))
    // res.send(movies)
})
app.get('/getMovie/:id', (req, res) => {
    const movie = db.collection("movies").find( { _id: ObjectID(req.params.id) } ).toArray((err, doc) => res.send(doc[0]))

    // res.send(movie)
})

app.post('/addMovie', (req, res) => {
    // req.body.id = ids++
    // console.log(db)

    db.collection("movies").insertOne(req.body, function(err, result) {
        if (err) {
          console.log(err)
        } else {
          console.log(result)
        }
    });
    
    // remove this one
    // movies.push(req.body)
})

app.put('/updateMovie/:id', (req, res) => {
    console.log(req.body)
    let myQuery =  { _id: ObjectID(req.params.id) }
    let newValue = {$set: req.body}
    db.collection("movies").updateOne( myQuery, newValue, (err , collection) => {
		if(err) console.log(err)
            console.log("Record updated successfully");
            // console.log(collection);
        }
    )
    // { upsert: true }
})

app.delete('/deleteMovie/:id', (req, res) => {
    const movie = db.collection("movies").remove( { _id: ObjectID(req.params.id) } )
})

 

// app.listen(PORT, () => {
//     console.log(`Server is running at PORT ${PORT}`)
// })