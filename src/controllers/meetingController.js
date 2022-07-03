const Meeting = require("../models/Meetings.js")
const User = require("../models/User.js");

const createMeetings = async (req,res,next) => {
  try{
    const meeting = new Meeting({
      meeting : req.body.meeting,
      title : req.body.title,
      time : req.body.time,
      user : req.params.id
    })
    console.log(meeting.user)
    if(meeting){
      await User.findByIdAndUpdate({_id : meeting.user}, {$push : {meetings : meeting}})
    }
    res.send("Meeting Added!")
    await meeting.save()
  } catch(err){
    res.send(err);
  }
}

const allMeetings = (req,res,next) => {
  Meeting.find({user : req.params.id})
  .then(data => {
    console.log(data)
    res.send(data)
  })
  .catch(err => {
    console.log(err)
    res.send(err)
  })
}

const meetingUpdater = (req,res,next) => {
  Meeting.findByIdAndUpdate(req.body.meetingId,{
    meeting : req.body.meeting,
    title : req.body.title,
    time : req.body.time
  })
  .then(data => {
    console.log(data)
    res.send("Meeting Updated!")
  })
}

const deleteMeeting = (req,res,next) => {
  Meeting.findByIdAndRemove(req.body.meetingId)
  .then(data => {
    console.log(data)
    res.send("Meeting deleted!")
  })
  .catch(err => {
    console.log(err)
    res.send(err)
  })
}

module.exports = {
  createMeetings, meetingUpdater, allMeetings, deleteMeeting
}
