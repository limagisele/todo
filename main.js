document.querySelector("#add").addEventListener("click", addTask);

let currentTasks = JSON.parse(localStorage.todoList || "[]")
console.log(currentTasks)

let list = document.querySelector("ul");

if (currentTasks.length > 0) {
    currentTasks.forEach(item => {        
        createLi(item)
    })    
}

let doneBtns = document.querySelectorAll(".done-btn")

doneBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        let btnLi = btn.parentElement
        btnLi.classList.toggle("checked");
        if (btnLi.classList.contains("checked")) {
            localStorage.setItem(btnLi.childNodes[0].nodeValue, "checked");
        } else {
            localStorage.removeItem(btnLi.childNodes[0].nodeValue);
        }
        
    });
})

let removeBtns = document.querySelectorAll(".remove-btn")

removeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      let btnLi = btn.parentElement;
      let index = currentTasks.indexOf(btnLi.childNodes[0].nodeValue);
      btnLi.remove();
      currentTasks.splice(index, 1);
        localStorage.todoList = JSON.stringify(currentTasks);
        localStorage.removeItem(btnLi.childNodes[0].nodeValue);
    });  
})

function addTask() {
  let input = document.querySelector("input").value;
  if (input.length === 0) {
    alert("Task cannot be empty!");
  } else {
      createLi(input)
      currentTasks.push(input)
      localStorage.todoList = JSON.stringify(currentTasks);
      document.querySelector("input").value = "";
      location.reload()
  }
}

function createLi(item) {
    let li = document.createElement("li");
    li.innerText = item;
    if (localStorage[item]) {
        localStorage.getItem(item)
        li.classList.add("checked")
    }
    list.appendChild(li);

    let doneBtn = document.createElement("button");
    doneBtn.className = "done-btn";
    doneBtn.innerText = "Done";
    li.appendChild(doneBtn);

    let removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.innerText = "Delete";
    li.appendChild(removeBtn);
}