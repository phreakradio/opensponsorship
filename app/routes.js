var Athlete = require('./models/athlete');

module.exports = function(app){
    app.post('/createAthlete', function(req, res){
        Athlete.create({
            name:           req.body.name,
            dob:            req.body.dob,
            nationality:    req.body.nation,
            isMale:         Boolean,
            location:       req.body.loc,
            association:    req.body.assoc,
            team:           req.body.team,
            sports:         [String],
            interests:      [String],
            charities:      [String],
            socialMedia:    {
                facebook    :{handle:String},
                twitter     :{handle:String},
                instagram   :{handle:String},
                youtube     :{handle:String},
                twitch      :{handle:String},
                snap        :{handle:String}
            },
            pets:           [String],
            alcohol:        Boolean,
            married:        Boolean
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