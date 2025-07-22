function add(){
    const ul = document.querySelector('ul')
    const input = document.querySelector('input')
    const tarefa = input.value.trim()
    if (!tarefa) return

    const li = document.createElement('li')
    li.innerHTML = tarefa
    ul.appendChild(li)

    input.value = ''
}