
const { redirect } = require('react-router-dom')
const Note = require('../../models/note')

module.exports = {
    create,
    show,
    delete:deleteNote,
    update
}

function create(req, res) {


        console.log("Note create running...", req.body.text)
        // Add the Note to the database
        const note = new Note(req.body)
        note.save(function(err){
            res.json(note)
        })
    console.log("Note", note)

}

function show(req,res) {
    console.log("Notes show is running on server", "USER:", req.user)
    Note.find({ user: req.user }, function (err, notes) {
        console.log("NOTESSSSSS",notes)
        res.json(notes)
    })
}

function deleteNote(req,res) {
    console.log("THIS IS req.body", req.body)
    Note.deleteOne({ _id: req.body._id }, function (err,note) {
        res.json(note)
    })
}

async function update(req,res) {
    console.log("UPDATE NOTE IS RUNNING", req.body_id, req.body.text)
    const note = await Note.getNote(req.body._id, req.body.text)
    res.json(note)
}