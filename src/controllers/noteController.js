const Note = require("../models/Notes.js");
const User = require("../models/User.js");

const createNote = async (req,res,next) => {
  try{
    const note = new Note({
      title : req.body.title,
      note : req.body.note,
      user : req.params.id
    })
    console.log(note.user)
    if(note){
      await User.findByIdAndUpdate({_id : note.user}, {$push : {notes : note._id}})
    }
    res.send(true)
    await note.save()
  } catch(err) {
    res.send(err);
  }
}

const allNotesUser = (req,res,next) => {
  Note.find({user : req.params.id})
  .then(data => {
    console.log(data)
    res.send(data)
  })
  .catch(err => {
    console.log(err)
    res.send(err)
  })
}

const noteUpdater = (req,res,next) => {
  Note.findByIdAndUpdate(req.body.noteId,{
    note : req.body.note,
    title : req.body.title
  })
  .then(data => {
    cpnsole.log(data)
    res.send("Note Updated!")
  })
  .catch(err => {
    console.log(err)
    res.send(err)
  })
}

const deleteNotes = (req,res,next) => {
  Note.findByIdAndRemove(req.body.noteId)
  .then(data => {
    console.log(data)
    res.send("Notes Deleted")
  })
  .catch(err => {
    console.log(err)
    res.send(err);
  })
}


module.exports = {
  createNote, allNotesUser, noteUpdater, deleteNotes
}
