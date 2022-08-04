
function ApiGit(){
    let teste = document.getElementById("teste")
    let userName;
    if(teste.value == ""){
        userName = "IsaqueGabriel1"
    }else{
        userName = teste.value
    }
    
    
    fetch(`https://api.github.com/users/${userName}`, {
       method: 'GET',
       headers: {
           Accept: 'application/vnd.github.v3+json',
       },
    }).then((resp) => {
       console.log(resp)
       return resp.json()
    }).then((data) =>{
       
       let img = document.getElementById("tImg")
       let user = document.getElementById("txtUser")
       let bio = document.getElementById("txtBio")
       let qntRepo = document.getElementById("txtQntRepos")
   
       user.innerText = data.login
       bio.innerText = data.bio
       qntRepo.innerText = data.public_repos
       img.src = data.avatar_url
    })
}
    

