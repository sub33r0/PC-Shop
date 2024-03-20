const mongoose = require('mongoose');

const pcPartsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        trim: true,
        minlength: 3
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: 0
    },
    image: {
        type: String,
        required: true,
        trim: [true, 'Image is required'],
        minlength: 3
    },
    owner : {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    
    }
});

const PcParts = mongoose.model('PcParts', pcPartsSchema);

module.exports = PcParts;