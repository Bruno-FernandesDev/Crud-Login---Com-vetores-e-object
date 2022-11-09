

let nomeInput = document.getElementById("user");
let senhaInput = document.getElementById("pass");

let usuarioNomes = []
let usuarioPassword = []

function Cadastrar() {

    usuarioNomes = JSON.parse(localStorage.getItem('userSalvos'));
    usuarioSenha = JSON.parse(localStorage.getItem('senhaSalvos'));

    if(usuarioNomes == null){

        usuarioNomes = []
        usuarioPassword = []

        usuarioNomes.push(nomeInput.value);
        usuarioPassword.push(senhaInput.value);
    
        localStorage.setItem('userSalvos',JSON.stringify (usuarioNomes));
        localStorage.setItem('passSalvos',JSON.stringify (usuarioPassword));
    
        alert("Cadastro Efetuado")


    } else {
        
        usuarioNomes.push(nomeInput.value);
        usuarioPassword.push(senhaInput.value);
    
        localStorage.setItem('userSalvos',JSON.stringify (usuarioNomes));
        localStorage.setItem('passSalvos',JSON.stringify (usuarioPassword));
    
        alert("Cadastro Efetuado")
    }


   
}


/*

let nomeInput = document.getElementById("user");
let senhaInput = document.getElementById("pass");

let usuariosVetores = []

function Cadastrar() {

    usuariosVetores = JSON.parse(localStorage.getItem('userSalvos'));

    if (usuariosVetores == null) {

        usuariosVetores = []
        CadastrarUsuario()


    } else {

        CadastrarUsuario()
    }



}

function CadastrarUsuario() {

    let objUser = {

        username: '',
        password: ''

    }


    objUser.username = nomeInput.value
    objUser.password = senhaInput.value

    usuariosVetores.push(objUser)

    localStorage.setItem('userSalvos', JSON.stringify(usuariosVetores));

    alert("Cadastro Efetuado")
}
*/