function o(){
    let text = document.getElementById('select').value;

    if(text == "open" || text== "closed"){
    console.log(text)
    document.getElementById('h1').innerHTML =  "we are " + text
} 
else{
    document.getElementById('h1').innerHTML =  "select the another options"
}
}
   


