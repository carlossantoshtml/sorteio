function generatenumber(){
    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);

    if(min >= max){
        alert("O valor minimo tem que ser MENOR que o valor maximo")
    }




    console.log(min, max)

    const result = Math.floor(Math.random() * (max - min) + min);

alert(result )



}


const digitarAsenha = true
const digitarOtoken =  true
const numeroDaConta = true

if (  digitarAsenha && digitarOtoken && numeroDaConta ){
    console.log("logado com suceeso")
}else {
    console.log("Auteticação FALHOU")

}
