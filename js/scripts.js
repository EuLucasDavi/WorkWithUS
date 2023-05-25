function Login() {

    let login = document.getElementById("email_index").value
    let password = document.getElementById("password_index").value

    let dados = JSON.parse(window.localStorage.getItem('tds'))

    for (let i = 0; i < dados.length; i++) {
        if (login == dados[i].email && password == dados[i].senha || login == dados[i].nome + dados[i].sobrenome && password == dados[i].senha) {
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
]

function register() {

    let add = { nome: '', sobrenome: '', email: '', senha: '' }

    add.nome = document.getElementById("name").value

    add.sobrenome = document.getElementById("second_name").value

    add.email = document.getElementById("email_singIn").value

    if (document.getElementById('password_singIn').value == document.getElementById('password_confirmed').value) {
        add.senha = document.getElementById("password_singIn").value
        dados.push(add)
        let n = JSON.stringify(dados)

        localStorage.setItem('tds', n)

        alert("CONTA CRIADA COM SUCESSO")
        window.location.href = "./index.html"

    } else {
        alert('SENHAS NÃO COINCIDEM')
    }




}

function showLoadingScreen() {
    // Cria um elemento de sobreposição para a tela
    var overlay = document.createElement('div')
    overlay.id = 'loading-overlay'

    // Estilo CSS para o elemento de sobreposição
    overlay.style.position = 'fixed'
    overlay.style.top = 0
    overlay.style.left = 0
    overlay.style.width = '100%'
    overlay.style.height = '100%'
    overlay.style.background = 'rgba(0, 0, 0, 0.8)'
    overlay.style.zIndex = 9999

    // Cria um elemento de spinner
    var spinner = document.createElement('div')
    spinner.id = 'loading-spinner'

    // Estilo CSS para o spinner
    spinner.style.position = 'absolute'
    spinner.style.top = '50%'
    spinner.style.left = '50%'
    spinner.style.transform = 'translate(-50%, -50%)'
    spinner.style.width = '40px'
    spinner.style.height = '40px'
    spinner.style.borderRadius = '50%'
    spinner.style.borderTop = '4px solid #fff'
    spinner.style.borderRight = '4px solid transparent'
    spinner.style.animation = 'spin 1s linear infinite'

    // Adiciona o spinner ao elemento de sobreposição
    overlay.appendChild(spinner)

    // Adiciona o elemento de sobreposição à página
    document.body.appendChild(overlay)

    // Define a animação de rotação do spinner
    var keyframes = `@keyframes spin {
      0% { transform: translate(-50%, -50%) rotate(0deg); }
      100% { transform: translate(-50%, -50%) rotate(360deg); }
    }`;

    // Cria um elemento de estilo para as animações
    var style = document.createElement('style')
    style.innerHTML = keyframes

    // Adiciona o elemento de estilo à página
    document.head.appendChild(style)
}

function hideLoadingScreen() {
    // Remove o elemento de sobreposição da página
    var overlay = document.getElementById('loading-overlay')
    document.body.removeChild(overlay)
}

function rodarPorTempo(tempo) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, tempo);
    });
}

async function executarPorTempo() {
    console.log("Início da execução");
    showLoadingScreen()
    await rodarPorTempo(5000); // Executa por 5 segundos (5000 milissegundos)
    hideLoadingScreen()
    window.location.href = './doce.html'
}