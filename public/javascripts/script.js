var flag = 0
var flag2 = 0
function clear(){
    document.querySelector("#fileinp").style.display = "none"
    document.querySelector("#folderinp").style.display = "none"
}

document.querySelector("#fileicon").addEventListener("click",function(){
    if(flag == 0){
        clear()
        document.querySelector("#fileinp").style.display = "initial"
        flag = 1
    }
    else{
        document.querySelector("#fileinp").style.display = "none"
        flag = 0
    }
})

document.querySelector("#foldericon").addEventListener("click",function(){
    if(flag2 == 0){
        clear()
        document.querySelector("#folderinp").style.display = "initial"
        flag2 = 1
    }
    else{
        document.querySelector("#folderinp").style.display = "none"
        flag2 = 0
    }
})

document.querySelectorAll("#edit").forEach(function(elem){
    elem.addEventListener("click",function(){
        document.querySelector("#overlay").style.display = "initial"
        document.querySelector("#changeinp").value = this.dataset.val  // elem.dataset.val ye bhi likh skte h
        document.querySelector("#changename").setAttribute("action",`/change/${this.dataset.val}`)
    })
})




















