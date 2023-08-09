const assuntos = document.getElementById("assunto")

const assuntosDropDown = {
    "Manipulação":"",
    "Drogaria": "",
    "Fornecedor": "",
    "Vagas de Emprego": ""
}


function createOptions () {
    for (let key in assuntosDropDown) {
        let option = document.createElement("option");

        let optionText = document.createTextNode(key);
        option.appendChild(optionText);

        assuntos.appendChild(option);
    };
};

createOptions();