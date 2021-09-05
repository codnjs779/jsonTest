
// const promise = new Promise(function(resolve, reject){
//   resolve('hi');
// });
// promise.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })


let todos = [];
async function msg(){
    const response = await fetch('https://jsonplaceholder.typicode.com/albums')
   
    const data = await response.json() //코드를 동기적으로 읽음 
    todos = data;
    console.log(data);
}
msg();
console.log(todos);
