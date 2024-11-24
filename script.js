var array=[];
function addToArray(newItem){
    array.push(newItem);

console.log('${item}added to array')
}

addToArray("primer");
addToArray("concealer");
console.log(array);

function searcharray(){
const input=document.getElementById("input").value.toLowerCase();
const Myresult=document.getElementById("results");
Myresult.innerHTML="";
const results=array.filter(item => item.toLowerCase().includes(input));

if(results.length>0){
results.forEach(result=>{
    const items=document.createElement("p");
    items.textContent=result;
    Myresult.appendChild(items);
});
}else{
    Myresult.textContent="product not found";
}
}


