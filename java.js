let title ;
let div ;
let value ;

function changeTitle() {

    title = document.getElementById("title") ;
    title.innerHTML = document.getElementById("inputD").value ;

}
function submit() {

    div = document.getElementById("container") ;
    value = document.getElementById("value1") ;

    div.innerHTML = value.value ;
    div.style.color = "black" ;

}