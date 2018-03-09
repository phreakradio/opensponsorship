var mongoose = require('mongoose');

module.exports = mongoose.model('Athlete',{
    dateCreated:    {type:Date, default:Date.now},
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
    alcohol:        {type:Boolean, default:false},
    married:        {type:Boolean, default:false}
});
