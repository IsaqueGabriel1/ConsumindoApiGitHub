
function ApiGit(){
    let teste = document.getElementById("teste")
    let userName;
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
       console.log(resp)
       return resp.json()
    }).then((data) =>{
       //aqui é consumido os dados da API
       let img = document.getElementById("tImg")
       let user = document.getElementById("txtUser")
       let bio = document.getElementById("txtBio")
       let qntRepo = document.getElementById("txtQntRepos")
   
       user.innerText = data.login
       bio.innerText = data.bio
       qntRepo.innerText = data.public_repos
       img.src = data.avatar_url
    }).catch((data) =>{
        //Aqui será o tratamento de erro caso a requisição falhe
    })
}
    

