let input = document.getElementById("input");
let addButton = document.getElementById("btn1");
let taskList = document.getElementById("task-list");
let completed = document.getElementById("completed");
let going = document.getElementById("going");

let tarefas =[];
let tarefasConcluidas=[];


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
    newlistItem.appendChild(Xbtn);
    taskList.appendChild(newlistItem);
    input.value = "";
    tarefas.push(newlistItem.firstChild.textContent);
    

}});

function completas(){

}

