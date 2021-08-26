let ul = document.querySelector('ul');

fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => response.json())
.then(function(json){
    console.log(json);
})
