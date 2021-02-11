"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Videogame = /** @class */ (function () {
    function Videogame(id, title, price, rating, shortDescription, description, image) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.shortDescription = shortDescription;
        this.description = description;
        this.image = image;
    }
    return Videogame;
}());
var Videogames = [
    new Videogame(0, "Bat Videogame", 24.99, 4.3, "This is a short description of the First Videogame", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "http://placehold.it/820x320"),
    new Videogame(1, "Second Videogame", 64.99, 3.5, "This is a short description of the Second Videogame", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "http://placehold.it/820x320"),
    new Videogame(2, "Third Videogame", 74.99, 4.2, "This is a short description of the Third Videogame", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "http://placehold.it/820x320"),
    new Videogame(3, "Fourth Videogame", 84.99, 3.9, "This is a short description of the Fourth Videogame", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "http://placehold.it/820x320"),
    new Videogame(4, "Fifth Videogame", 94.99, 5, "This is a short description of the Fourth Videogame", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "http://placehold.it/820x320"),
    new Videogame(5, "Sixth Videogame", 54.99, 4.6, "This is a short description of the Fourth Videogame", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "http://placehold.it/820x320")
];
function getVideogames() {
    return Videogames;
}
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/videogames', bodyParser.json(), function (req, res) {
    var pNew = new Videogame(Videogames.length + 1, req.body.title, req.body.price, req.body.rating, req.body.shortDescription, req.body.description, req.body.image);
    Videogames.push(pNew);
    res.status(200).send({
        id: pNew.id,
        title: pNew.title,
        price: pNew.price,
        rating: pNew.rating,
        shortDescription: pNew.shortDescription,
        description: pNew.description,
        image: pNew.image
    });
});
app.get('/', function (req, res) {
    res.send('The URL of Videogames is http://localhost:8000/videogames');
});
app.get('/videogames', function (req, res) {
    res.json(getVideogames());
});
function getVideogamesById(VideogameId) {
    var p;
    p = Videogames.find(function (p) { return p.id == VideogameId; });
    return p;
}
app.get('/videogames/:id', function (req, res) {
    res.json(getVideogamesById(parseInt(req.params.id)));
});
function updateVideogamesById(req, VideogameId) {
    var p;
    p = Videogames.find(function (p) { return p.id == VideogameId; });
    var index = Videogames.indexOf(p);
    p.title = req.body.title,
        p.price = req.body.price,
        p.rating = req.body.rating,
        p.shortDescription = req.body.shortDescription,
        p.description = req.body.description,
        p.image = req.body.image;
    Videogames[index] = p;
    return p;
}
app.put('/videogames/:id', function (req, res) {
    res.json(updateVideogamesById(req, parseInt(req.params.id)));
    res.send('Got a UPDATE request at /user');
});
function deleteVideogamesById(VideogameId) {
    var p;
    p = Videogames.find(function (p) { return p.id == VideogameId; });
    var index = Videogames.indexOf(p);
    delete Videogames[index];
    return p;
}
app.delete('/videogames/:id', function (req, res) {
    res.json(deleteVideogamesById(parseInt(req.params.id)));
    res.send('Got a DELETE request at /user');
});
var server = app.listen(8000, "localhost", function () {
    var _a = server.address(), address = _a.address, port = _a.port;
    console.log('Listening on %s %s', address, port);
});
