document.addEventListener('DOMContentLoaded',requestCategories);
function requestCategories(){
    fetch('http://localhost:8081/user/backend/menu.php', 
        {
            method: 'GET',

        })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error)=> console.log(error));
}