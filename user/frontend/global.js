document.addEventListener('DOMContentLoaded',requestCategories);
function requestCategories(){
    fetch('http://localhost:3306/menu.php')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error)=> console.log(error));
}