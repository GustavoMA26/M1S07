let nomeForm = document.getElementById('fname');

const botaoForm = document.getElementById("botao-enviar");
botaoForm.addEventListener('click', enviarForm)

function enviarForm() {
    console.log(document.getElementById("fname").value);
    alert(`${nomeForm.value}, a mensagem foi enviada com sucesso!`);
}
