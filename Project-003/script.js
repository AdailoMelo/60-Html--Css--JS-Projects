const CHAVE_API = "995d4ba35876409cab7865586fbe9cc4";

async function pegarReceitas(){
    const resposta = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apikey=${CHAVE_API}`);

    const dados = await resposta.json();
    
    return dados.receitas 
}

async function main(){
    const receitas = await pegarReceitas();
    console.log(receitas);
}

main()