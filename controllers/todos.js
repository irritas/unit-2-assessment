var Todo = require('../models/todo');

module.exports = {
	index,
	create,
	delete: deleteTodo
};

function index(req, res) {
	res.render('index', {
		todos: Todo.getAll(),
		time: req.time
	});
}

function create(req, res) {
	Todo.create(req.body);
	res.redirect('/');
}

function deleteTodo(req, res) {
	Todo.deleteOne(req.params.id);
	res.redirect('/');
}