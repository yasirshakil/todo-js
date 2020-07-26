
function addTodo(){
    var todo_item = document.getElementById("todo-item");

    var li = document.createElement("li")
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    var delBtn = document.createElement("button");
    var delText = document.createTextNode("REMOVE");
    delBtn.setAttribute("class","Btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)
    
    

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.setAttribute("class","Btn")
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)



    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)

    todo_item.value = ""
}

function deleteItem(e){
    e.parentNode.remove()
}

function remTodo(){
    list.innerHTML = ""
}


function editItem(e){
    var edit = prompt("Enter your Updation Here: ",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = edit;
}