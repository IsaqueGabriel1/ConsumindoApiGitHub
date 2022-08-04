function ApiGit(){
    let teste = document.getElementById("teste")
    let userName;
    let img = document.getElementById("tImg")
    let user = document.getElementById("txtUser")
    let bio = document.getElementById("txtBio")
    let qntRepo = document.getElementById("txtQntRepos")

    if(teste.value == ""){
        userName = "IsaqueGabriel1"
    }else{
        userName = teste.value
    }
    //realizando uma requisição na api do github
    fetch(`https://api.github.com/users/${userName}`, {
       method: 'GET',
       headers: {
           Accept: 'application/vnd.github.v3+json',
       },
       //caso haja exito na promessa, será retornado um json()
    }).then((resp) => {
       return resp.json()
    }).then((data) =>{
       //aqui é consumido os dados da API
       if(data.login == undefined){
            user.innerText = "Usuario não encontrado!"
            bio.innerText = ""
            qntRepo.innerText = ""
            img.src = ""
       }else{
            user.innerText = data.login
            bio.innerText = data.bio
            qntRepo.innerText = data.public_repos
            document.getElementsByTagName("p")[2].style.display = "none"
            img.src = data.avatar_url
       } 
    })
}
    

