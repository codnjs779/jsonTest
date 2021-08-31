let albums = document.querySelector('.albums');

fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(function (json){
        console.log(json);
        for(let i=0; i < json.length; i++){
            let userId = json[i].userId;
            let id = json[i].id;
            let title = json[i].title;

            let element = document.createElement('li');
            element.innerText = `userId: ${userId}, id: ${id}, title: ${title}`;

            albums.appendChild(element);
        }
        
    })


