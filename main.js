document.querySelector("#add").addEventListener("click", addTask);

let currentTasks = JSON.parse(localStorage.todoList)
console.log(currentTasks)

let list = document.querySelector("ul");

if (currentTasks.length > 0) {
    currentTasks.forEach(item => {        
        let li = document.createElement("li")
        li.innerText = item
        list.appendChild(li)
        
        let doneBtn = document.createElement("button");
        doneBtn.className = "done-btn";
        doneBtn.innerText = "Done";
        li.appendChild(doneBtn);
        doneBtn.addEventListener("click", () => {
            doneBtn.parentElement.classList.toggle("checked");
        });

        let removeBtn = document.createElement("button");
        removeBtn.className = "remove-btn";
        removeBtn.innerText = "Delete";
        li.appendChild(removeBtn);

        removeBtn.addEventListener("click", () => {
            removeBtn.parentElement.remove();
            let index = currentTasks.indexOf(item)
            currentTasks.splice(index, 1)
            localStorage.todoList = JSON.stringify(currentTasks);
        });  
    })    
}

function addTask() {
  let input = document.querySelector("input").value;
  if (input.length === 0) {
    alert("Task cannot be empty!");
  } else {
      let task = document.createElement("li");
      task.innerText = input;
      list.appendChild(task);
      currentTasks.push(input)
      localStorage.todoList = JSON.stringify(currentTasks);

      let doneBtn = document.createElement("button");
      doneBtn.className = "done-btn";
      doneBtn.innerText = "Done";
      task.appendChild(doneBtn);   

      let removeBtn = document.createElement("button");
      removeBtn.className = "remove-btn";
      removeBtn.innerText = "Delete";
      task.appendChild(removeBtn);

      document.querySelector("input").value = "";
      location.reload()
  }
}