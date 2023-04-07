const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true
})

noteSchema.statics.getNote = function(noteId, newText) {
    console.log("Find one and update method is runnung on backend", noteId, newText)
    return this.findOneAndUpdate(
        //filter:
        {_id:noteId},
        // update:
        {text: newText},
        // to return updated document
        {new: true}
        )
}

module.exports = mongoose.model('Note', noteSchema);