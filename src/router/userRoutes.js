const router = require('express').Router();
const controller = require('../controller/userController');

router
.get('/', controller.getallTodos)
.post('/', controller.createTodo)
.put('/:id', controller.updateTodo)
.delete('/:id', controller.deleteTodo)

module.exports = router;