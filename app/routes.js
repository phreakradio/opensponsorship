//Athlete model for new athelete info
var Athlete = require('./models/athlete');


module.exports = function(app){
    
    app.get('/sports', function(req,res){
        var sports = require('./data/sports.json');
//        console.log("DEBUG:: COUNTRIES" + sports.data);
        res.send(sports.data);
    });
    
    app.get('/countries', function(req, res){
        var countries = require('./data/countries.json');
//        console.log("DEBUG:: COUNTRIES" + countries.data);
        res.send(countries.data);
    });
    
    app.post('/createAthlete', function(req, res){
        Athlete.create({
            name:           req.body.name,
            dob:            req.body.dob,
            nationality:    req.body.nation,
            isMale:         req.body.gender,
            location:       req.body.loc,
            association:    req.body.assoc,
            team:           req.body.team,
            sports:         req.body.sports.split(' '),
            about:          req.body.about,
            interests:      req.body.interest.split(' '),
            charities:      req.body.interest.split(' '),
            socialMedia:    {
                facebook    :req.body.facebook,
                twitter     :req.body.twitter,
                instagram   :req.body.insta,
                youtube     :req.body.youtube,
                twitch      :req.body.twitch,
                snap        :req.body.snap
            },
            pets:           req.body.pets.split(' '),
            alcohol:        req.body.alcohol,
            married:        req.body.married
        },function(err,athlete){
            if(err)
                res.send(err);
            Athlete.find(function(err,athletes){
                if(err)
                    res.send(err);
                res.json(athletes);
            });
        });
    });    
    
    //Load single view file (angular will handle page changes on front)
    app.get('*', function(req, res){
        res.sendfile('./public/index.html');
    });
}