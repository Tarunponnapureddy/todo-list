const toDoInput=document.querySelector("form input");
const adddButton=document.querySelector("form button");
const toDoItems=document.querySelector(".todo-items");



adddButton.addEventListener("click",function(event){
    //prevent form from submitting
    event.preventDefault();
    if(toDoInput.value!="")
    {
    const toDoDiv=document.createElement("div");
    toDoDiv.classList.add("item");
    const newToDo=document.createElement("p");
    newToDo.innerText=toDoInput.value;
    newToDo.classList.add("matter");
    toDoDiv.appendChild(newToDo);
    //buttons
    const completedButton=document.createElement("button");
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("com-btn");
    toDoDiv.appendChild(completedButton);

    const deleteButton=document.createElement("button");
    deleteButton.innerHTML='<i class="fas fa-trash"></i>';
    deleteButton.classList.add("del-btn");
    toDoDiv.appendChild(deleteButton);
    toDoItems.appendChild(toDoDiv);

    toDoInput.value="";
    }

});

 document.addEventListener("click",function(event){
   if(event.target.classList[0]==="com-btn"){
        event.target.parentElement.classList.add("completed");
    }
   else if(event.target.classList[0]==="del-btn"){
      event.target.parentElement.remove();
   }
 });

