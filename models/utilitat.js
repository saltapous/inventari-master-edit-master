const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UtilitatSchema = new Schema({



    nom: String,
    responsable: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }


});

module.exports = mongoose.model('Utilitat', UtilitatSchema);