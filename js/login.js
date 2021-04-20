window.onload = signUp;
function signUp() {
    const usuario = { usuario: "admin", clave: "1234" };
    // JSON.stringify para convetir el objeto en string porque localstorage solo recibe strings
    const jsonUsuario = JSON.stringify(usuario);
    //setItem('key',variable) eje: setItem('String','String')
    localStorage.setItem("usuario", jsonUsuario);
}
function signIn() {
    // document.getElementById('username') busca el elemento con el id 'username'
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "" || password === "") return alert("rellene los campos");
    const jsonUsuario = localStorage.getItem("usuario");
    const { usuario, clave } = JSON.parse(jsonUsuario);
    //JSON.parse convierte un string en obj
    if (username === usuario && password === clave) {
        localStorage.setItem("nuevo", true);
        return (location.href = "cartas.html");
    }
    return alert("Datos incorrectos");
}
