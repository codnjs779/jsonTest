let ul = document.querySelector('ul');

fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => response.json())
.then(function(json){
    console.log(json);
    for(let i = 0; i < json.length; i++){
        let title = json[i].title;
        let element = document.createElement("li");

        element.innerText = title;
    }
})
