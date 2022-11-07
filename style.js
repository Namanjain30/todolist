console.log('hillo')

const text = document.querySelector('.text')
const btn = document.querySelector('.btn')
const todolist = document.querySelector('.todolist')

todolist.addEventListener('click',deletecheck)
btn.addEventListener('click',addtodo)

function addtodo(event){
    const tododiv = document.createElement('div')
    tododiv.classList.add('todo')

    const newtodo = document.createElement('li')
    newtodo.innerHTML = text.value
    newtodo.classList.add('list')
    tododiv.appendChild(newtodo)

    const checkbutton = document.createElement('button')
    checkbutton.innerText = 'Y'
    checkbutton.classList.add('check')
    tododiv.appendChild(checkbutton)

    const deletebutton = document.createElement('button')
    deletebutton.innerText = 'X'
    deletebutton.classList.add('delete')
    tododiv.appendChild(deletebutton)

    todolist.appendChild(tododiv)
    text.value = ''
}

function deletecheck(e){
    const item = e.target
    if (item.classList[0] === 'delete'){
        const todo = item.parentElement
        todo.classList.add('fall')
        todo.addEventListener('transitionend',function(){
            todo.remove()
        })
    }

    if(item.classList[0] === 'check'){
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}