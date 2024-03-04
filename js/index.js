 
   document.getElementById("btnLogin").addEventListener("click", (event) => {
    event.preventDefault();

    var senha = document.getElementById("senha").value;
    var usuario = document.getElementById("usuario").value;

    if(usuario === "usuario" && senha === "senha"){
        alert("Login concluído");
        window.location.href = "./pages/pokemon.html";
    } else {
        alert("Usuário ou senha incorretos");
    }
}); 