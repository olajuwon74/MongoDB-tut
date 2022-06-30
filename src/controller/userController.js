const Todo = require('../model/User');

//get all Todo tasks
exports.getallTodos = async(req, res) => {
    try {
        let todos = await Todo.find();
        if (todos.length == 0)
        return res.status(404).json({
            success:false,
            message:'No Todos were found'
        });
        res.status(200).json({
            success: true,
            message: "Todos found",
            todos
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "internal service error",
            error: error.message 
        });
    }
};
//delete Todo tasks

//delete all Todo tasks

//update Todo task

//add Todo task