let usuarios = ["adriano", "Marcia","Jose"];

const inserirUsuarios = (nome, espera) => {
    setTimeout(() => {
        usuarios.push(nome)  
        espera();      
    }, 500);
}

const listarUsuarios = () => {
    console.log(usuarios);
}

inserirUsuarios("igor", listarUsuarios);