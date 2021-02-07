document.getElementById("btn").addEventListener("click", function() {
    fetch('https://foodish-api.herokuapp.com/api/images/burger')
    .then(response => response.json())
    .then(photo => {
        document.getElementById("food").src = photo.image;
    })
})