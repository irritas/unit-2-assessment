const todos = [

];

module.exports = {
	getAll,
	create,
	deleteOne,
};

function getAll() {
	return todos;
}

function create(todo) {
	todo.id = Date.now() % 1000000;
	todo.done = false;
	todos.push(todo);
}

function deleteOne(id) {
	const idx = todos.findIndex(todo => todo.id === parseInt(id));
	todos.splice(idx, 1);
}