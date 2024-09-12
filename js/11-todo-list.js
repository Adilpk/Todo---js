const todoList = [{name :'marry dinner',
  duedate : '2022-09-08'
},{
  name : 'kakaka',
  duedate : '2029-9-7'
}];
renderTodoList();
function renderTodoList(){
  let todoListHTML = '';
  for(let i=0;i<todoList.length;i++){
  const todoObject = todoList[i];
  const {name, duedate} = todoObject;
  const html = `
  <div>${name}</div>
  <div>${duedate}</div>
  <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
  " class="btn2">Delete</button> 
    `;
    todoListHTML += html;
}
document.querySelector('.para1').innerHTML = todoListHTML;
}
function add_Todo(){
  inputElement = document.querySelector('.js-input');
  const name = inputElement.value;
  const inputDate = document.querySelector('.date');
  const duedate = inputDate.value;
  todoList.push({name,duedate});
  inputElement.value = '';
  renderTodoList();
}

    