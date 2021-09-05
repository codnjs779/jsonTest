let albums = document.querySelector('.albums');


fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(function (json){
        console.log(json);
       json.forEach((data) => {
           let{userId, id, title} = data;
           let element = document.createElement('li');
           element.innerText = `userId: ${userId}, id: ${id}, title: ${title}`
           albums.appendChild(element);
        });
        
    })


