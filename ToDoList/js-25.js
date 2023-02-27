let taskDOM=document.querySelector("#task")
let ekleDOM=document.querySelector("#liveToastBtn")
let listDOM=document.querySelector("#list")

ekleDOM.addEventListener("click",addTodo)

function addTodo(e)
{
    let todo=taskDOM.value.trim()
    if(todo.length>0)
    {
        addTodoList(todo)
        deleteItem()

        taskDOM.value=""
    }
    else{
        $(".error.toast").toast("hide")
    }
    e.preventDefault()
}
function addTodoList(todo) {
    let liDOM = document.createElement("li")
    liDOM.classList.add("list-group")
    liDOM.innerHTML = `${todo}`
    let span = document.createElement("span")
    span.classList.add("close")
    span.innerHTML = `x`

    $(".success.toast").toast("show")
    
    checkLi(liDOM)
    liDOM.append(span)
    listDOM.appendChild(liDOM)
    
    //local storage ekle
    let object = [todo]
    let list = JSON.parse(localStorage.getItem("Todos"))
    if(list) {
        list.push(object)
        localStorage.setItem("Todos", JSON.stringify(list))
    } else {
        localStorage.setItem("Todos", JSON.stringify(object))
    }
      
}


function deleteItem() {
    let deleteItem = document.querySelectorAll(".close")
    if(deleteItem.length>0) {
        deleteItem.forEach(function(x) {
            x.addEventListener("click", function(){
                x.parentElement.remove()
                
            })
            
            
        })
    }
    
    



    
    


}

function checkLi(isaretlendi) {
    isaretlendi.addEventListener("click", function() 
            {  
                if(isaretlendi.classList.contains("checked")) {
                    isaretlendi.classList.remove("checked")
                    
                } else {
                    isaretlendi.classList.add("checked")
                    
                } })
}

