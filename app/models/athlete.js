var mongoose = require('mongoose');

module.exports = mongoose.model('Athlete',{
    name:           String,
    dob:            Date,
    nationality:    String,
    location:       String,
    association:    String,
    team:           String,
    isMale:         Boolean,
    sports:         [String],
    about:          String,
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
});
