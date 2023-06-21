function main() {
    var nascimento = document.getElementById("nascimento").value;
    var res = document.getElementById("res");
    var data = new Date();
    var data_nascimento = new Date(nascimento);

    if (nascimento === "") {
        alert("Por favor digite sua data de nascimento");
    } else {
        var idade = data.getFullYear() - data_nascimento.getFullYear();
        res.innerHTML = `Você tem ${idade} anos de vida`;
    }
}