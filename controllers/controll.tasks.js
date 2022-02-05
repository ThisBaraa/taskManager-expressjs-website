const getAllTasks = (req, res) => {
    res.send('get all tasks');
};

var createTask = (req, res) => {
    res.json(req.body);
};

var getTask = (req, res) => {
    res.json({ id: req.params.id });
};

var updateTask = (req, res) => {
    res.send('update task');
};

var deleteTask = (req, res) => {
    res.send('delete task');
};


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};