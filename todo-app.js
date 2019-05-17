const todos = [{
    text: 'Order cat food',
    completed: false
    }, {
        text: 'Clean kitchen',
        completed: true
    }, {
        text: 'Buy food',
        completed: true
    }, {
        text: 'Do work',
        completed: false
    }, {
        text: 'Exercise',
        completed: true
    }]

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left.`
document.querySelector('body').appendChild(summary)

const filters = {
    searchText: ''
}

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#todo').innerHTML = ''

    filteredTodos.forEach(function (todo) {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.text
        document.querySelector('#todo').appendChild(todoEl)
    })
}


/* todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
}) */

document.querySelector('#add-todo').addEventListener('click', function (e) {
        e.target.textContent = 'This button is clicked'
})

document.querySelector('#new-todo').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})