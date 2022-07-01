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
exports.deleteTodo = async(req, res) => {
    try {
        let id = {_id: req.params.id}
        let todo = await req.body;
        let deleted = await Todo.findOneAndRemove(id);
        if(!deleted) return res.status(400).json({
            success: false,
            message: 'Todo not updated',
        });

        return res.status(200).json({
            success: true,
            message: 'Todo Deleted',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        });
    }
}
//delete all Todo tasks

//update Todo task
exports.updateTodo = async(req, res) => {
    try {
        let id = {_id: req.params.id}
        let todo = await req.body;
        let update = await Todo.findOneAndUpdate(id, todo, {new: true});
        if(!update) return res.status(400).json({
            success: false,
            message: 'Todo not updated',
        });

        return res.status(200).json({
            success: true,
            message: 'Todo Updated',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        });
    }
}

//add Todo task
exports.createTodo = async(req, res) => {
    try {
    let todo = await req.body;
    let created = await Todo.create(todo);
    if(!created) return res.status(400).json({
        success: false,
        message: "Todo creation failed"
    });
    return res.status(200).json({
        success: true,
        message: "Todo created successfully",
        todo: created,
    });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message
        });
    }
};