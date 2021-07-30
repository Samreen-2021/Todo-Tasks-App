
$ = function(val){
    result = document.querySelector(val); 
    return result;
 };
all =function( val ){
    result = document.querySelectorAll(val); 
    return result;
};
function countList(){
    let count = 0;
    count =  all("#myul li").length;
    console.log(count);
    return count;
}
function addItem(){
    let inputItem = document.querySelector('input').value;
    console.log(inputItem);
    
    if(inputItem==""){
        alert ("enter some task");
    }
    else{
        let todo=document.getElementById('myul');
        let list=document.createElement('li');
        list.textContent = inputItem;
        let a=document.createElement('a');
        a.textContent='x';
        a.href="javascript:void(0)";
        a.className= "remove";
        list.appendChild(a);
        todo.appendChild(list);
        document.querySelector('span').innerHTML= countList();
    }
    document.querySelector('input').value = "";
}
let btn = document.querySelector('ul');
btn.addEventListener("click",function(e){
    let todo=document.getElementById('myul');
    console.log(e.target);
    let list=e.target.parentNode;
    todo.removeChild(list);
    if(countList()>=1){
        $("#count").innerHTML = countList();
    }
    else {
        $("#count").innerHTML = ""; 
    }
})

        
 
