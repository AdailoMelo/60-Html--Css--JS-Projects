const dadoimg = ["https://img.icons8.com/?size=512&id=o1dGziQOijg4&format=png", "https://img.icons8.com/?size=512&id=Fwcx5mpkWd8P&format=png", "https://img.icons8.com/?size=512&id=q4ul9MoiyRtB&format=png", "https://img.icons8.com/?size=512&id=ByJ6Sp3X3_cv&format=png", "https://img.icons8.com/?size=512&id=5iWV5u7ve3PJ&format=png", "https://img.icons8.com/?size=512&id=sL5WaT_mFUmK&format=png"];

function main() {
    const res = document.getElementById("res");
    const dado = document.getElementById("dado");
    const resultado = Math.floor(Math.random() * 5);
    res.innerHTML += ` <article> 
    <p>Resultado:</p>
    <img src="${dadoimg[resultado]}" alt="" class="dadores">
    </article>`;
    dado.innerHTML = `<img src="${dadoimg[resultado]}" alt="">`;
}