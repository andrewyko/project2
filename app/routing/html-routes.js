var path = require('path');

module.exports = function (app) {

    app.get("/api/:brew_name", function(req, res) {
        if (req.params.review) {
          Review.findAll({
            where: {
              brew_name: req.params.review
            }
          }).then(function(results) {
            res.json(results);
          });
        }
      });

    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    app.get('/locator', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/location.html'));
    });


    //app.use(function (req, res) 
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

    //age authenticated page for users navigating within the app
    app.get("/auth", function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home-auth.html'));
    });


    app.get("/view", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });

    // add route loads the add.html page, where users can enter new reviews to the db
    app.get("/add", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/add.html"));
    });

    // all route loads the all.html page, where all reviews in the db are displayed
    app.get("/all", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/all.html"));
    });

    // low ratings
    app.get("/low", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/low.html"));
    });

    // high ratings
    app.get("/high", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/high.html"));
    });



};
