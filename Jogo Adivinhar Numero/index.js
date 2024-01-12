// Number Guessing Game

const min = 1;
const max = 100;

let tentativas = 0;
let tentativa;
let rodando = true;
let tentarDeNovo = false;

function jogar(){

    const resposta = Math.floor(Math.random() * (max - min + 1)+ min);
    console.log(resposta);

    while(rodando){
        rodando = true;
        tentarDeNovo = false;
        tentativa = Number(window.prompt(`Adivinhe um número entre ${min} e ${max}`));
    
        if(!(isNaN(tentativa))){
            if(tentativa > resposta){
                window.alert("VALOR MUITO ALTO, TENTE NOVAMENTE!");
                tentativas++;
            }else if(tentativa < resposta){
                window.alert("VALOR BAIXO ALTO, TENTE NOVAMENTE!");
                tentativas++;
            }else{
                window.alert(`Parabens, você acertou! O número era ${resposta}. Você acertou com ${tentativas} tentativas!`);
                while(!tentarDeNovo){
                    let tentarNovamente = window.prompt(`Deseja jogar mais uma vez? S/N`);
                    if(tentarNovamente.toUpperCase() == "S"){
                        break;
                    }else if (tentarNovamente.toUpperCase() == "N"){
                        tentarDeNovo = true;
                        rodando = false;
                    }else{
                        window.alert(`Por favor, digite apenas S/N`);
                        continue;
                    }
                }
            }
        }else{
            window.alert(`Por favor, digite um número entre ${min} e ${max}`);
        }
    };
};

jogar();
