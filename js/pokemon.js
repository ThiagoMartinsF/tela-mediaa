
const btnConfirmar = document.getElementById("btnConfirmar")
const inputPoke = document.getElementById("requisito")


function requestPokeInfo(url, name) {
  fetch(url + name)
    .then(response => response.json())
    .then(data => {
      pokemon = data;
    })
    .catch(err => console.log(err));
}

 