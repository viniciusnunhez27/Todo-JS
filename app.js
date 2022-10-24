
const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')
const inputSearchTodo = document.querySelector('.form-search input')

const addTodo = inputValue => {
  if(inputValue.length) {
    todosContainer.innerHTML += ` 
   <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
     <span>${inputValue}</span>
    <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
     </li>
    `
    event.target.reset()
  }
} 

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

const inputValue = event.target.add.value.trim()
  addTodo(inputValue)
})

const removeTodo = clickedElement => {
  const dataTrash = clickedElement.dataset.trash
  const todo = document.querySelector(`[data-todo="${dataTrash}"]`)

  if(dataTrash) {
    todo.remove()
   }
}

todosContainer.addEventListener('click', event => {
   const clickedElement = event.target
   removeTodo(clickedElement)

})

const hiddenTodos = (todos, inputValue) => {
   todos
  .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
  .forEach(todo => {
    todo.classList.remove('d-flex')
    todo.classList.add('hidden')
  })
}

const showTodos = (todos, inputValue) => {
  todos
  .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
  .forEach(todo => {
    todo.classList.remove('hidden')
    todo.classList.add('d-flex')
  })
}

inputSearchTodo.addEventListener('input', event => {
   const inputValue = event.target.value.trim().toLowerCase()
   const todos = Array.from(todosContainer.children)
    
   hiddenTodos(todos , inputValue)
   showTodos(todos, inputValue)
   
 })
