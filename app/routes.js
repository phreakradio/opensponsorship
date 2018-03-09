//Athlete model for new athelete info
var Athlete = require('./models/athlete');


module.exports = function(app){
    //Get list of sports
    app.get('/sports', function(req,res){
        var sports = require('./data/sports.json');
        res.send(sports.data);
    });
    
    //Get list of countries
    app.get('/countries', function(req, res){
        var countries = require('./data/countries.json');
        res.send(countries.data);
    });
    
    //Create athlete profile
    app.post('/createAthlete', function(req, res){
        
        console.log("DEBUG::" + req.body);
        
        Athlete.create({
            name:           req.body.name,
            dob:            req.body.dob,
            nationality:    req.body.nation,
            isMale:         req.body.gender,
            location:       req.body.loc,
            association:    req.body.assoc,
            team:           req.body.team,
            sports:         req.body.sports.split(','),
            about:          req.body.about,
            interests:      req.body.interest.split(','),
            charities:      req.body.charities.split(','),
            socialMedia:    {
                facebook    :req.body.facebook,
                twitter     :req.body.twitter,
                instagram   :req.body.insta,
                youtube     :req.body.youtube,
                twitch      :req.body.twitch,
                snap        :req.body.snap
            },  
            alcohol:        req.body.alcohol,
            married:        req.body.married
        },function(err,athlete){
            if(err){
                res.send(err);
                console.log("ERROR:: ATHLETE FAILED CREATE IN ROUTES " + err);
            }
            
            //Athelete created, get all of them now
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