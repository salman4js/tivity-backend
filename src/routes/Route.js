const express = require("express");
const router = express.Router()

const controller = require("../controllers/userController");

const task = require("../controllers/taskController");

const note = require("../controllers/noteController");

const meeting = require("../controllers/meetingController");

const expenses = require("../controllers/expenseController")


router.get('/', controller.allUsers)
router.post('/:id/singleuser', controller.singleUser)
router.post("/:id/allexpenseuser", expenses.allExpensesUser)
router.post("/:id/updatedata", controller.updateData)
router.post("/:id/average", expenses.averageOthers)
router.post("/:id/addexpense", expenses.addExpense)
router.post("/:id/expensetype", expenses.expenseType)
router.post("/:id/expensecheck", expenses.expenseArray)
router.post("/:id/received", expenses.received)
router.post('/signin', controller.signin)
router.post('/login', controller.login)
router.post('/deleteuser', controller.deleteUser)
router.post('/updatebal', controller.updateBalance)
router.post('/:id/createtask', task.createTask)
router.post('/:id/alltasks', task.allTasksUser)
router.post('/taskupdater', task.taskUpdater)
router.post('/deletetask', task.deleteTask)
router.post('/:id/createnote', note.createNote)
router.post('/:id/allnotes', note.allNotesUser)
router.post('/noteupdater', note.noteUpdater)
router.post('/deletenote', note.deleteNotes)
router.post('/:id/createmeeting', meeting.createMeetings)
router.post('/meetingupdate', meeting.meetingUpdater)
router.post('/:id/allmeetings', meeting.allMeetings)
router.post('/deletemeeting', meeting.deleteMeeting)

module.exports = router;
