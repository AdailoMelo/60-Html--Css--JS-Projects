function main(){
    var res = document.getElementById("res");
    var quantia = document.getElementById("quantia").value;
    var porcentagem = document.getElementById("porcentagem").value;
    quantia = Number(quantia);
    porcentagem = Number(porcentagem);

    var total = quantia * (1 + porcentagem / 100);
    res.innerHTML += `R$ ${total}`;
}
