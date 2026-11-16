let input = document.getElementById("input");
let addButton = document.getElementById("btn1");
let taskList = document.getElementById("task-list");



addButton.addEventListener("click", function(){
    if(input.value === ""){
        alert("Por favor, digite uma tarefa.");
        return;
    } else {
    let newlistItem = document.createElement("li");
    let Xbtn = document.createElement("button");
    Xbtn.innerHTML = "X";
        Xbtn.addEventListener("click",function(){
        taskList.removeChild(newlistItem);
    });

    newlistItem.textContent = input.value;
    taskList.appendChild(newlistItem);
    input.value = "";

}});
