function Login() {

    let login = document.getElementById("email_index").value
    let password = document.getElementById("password_index").value

    let dados = JSON.parse(window.localStorage.getItem('tds'))

    for (let i = 0; i < dados.length; i++) {
        if (login == dados[i].email || login == dados[i].nome + dados[i].sobrenome && password == dados[i].senha) {
            window.location.href = "./login.html"
            break
        } else {
            alert("E-MAIL OU SENHA NÃO CADASTRADOS")
            break
        }
    }
}

function GoToRegister() {
    window.location.href = "./cadastro.html"
}

function GoBack() {
    window.location.href = "./index.html"
}


let dados = [
    { nome: 'lucas', sobrenome: 'davi', email: 'lucas@lucas', senha: '123' },
    { nome: 'santos', sobrenome: 'pereira', email: 'lucas@davi', senha: '1212' }
]

function register() {

    let add = { nome: '', sobrenome: '', email: '', senha: '' }

    add.nome = document.getElementById("name").value

    add.sobrenome = document.getElementById("second_name").value

    add.email = document.getElementById("email_singIn").value

    add.senha = document.getElementById("password_singIn").value

    dados.push(add)

    let n = JSON.stringify(dados)

    localStorage.setItem('tds', n)

    alert("CONTA CRIADA COM SUCESSO")
    window.location.href = "./index.html"

}
