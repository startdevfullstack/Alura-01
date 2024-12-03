function imc(altura, peso){
    let imc = (altura * altura) / peso;
    console.log(imc);
}

imc(1.70, 80);


let numDecrescente = 4;
let multi = 0;


// refatorar
function fatorial(num){

    let numInicial = num;
    let resultado = 0;
    let cont = 1;

        while(cont < numInicial){
            if(resultado == 0){
            resultado = numInicial * (num - cont);
            cont++;
            } else {
                resultado = resultado * (num - cont);
                cont++;
            }
        }
   
    console.log(resultado);
}


fatorial(4);




function conversor(valor){
    let dolar = 5.92;
    let reais = valor * dolar;
    console.log(reais);
}

conversor(2);




function areaRetangulo(a, l){
    let area = a*l;
    let perimetro = 2 * (a+l);
    console.log(`A area é ${area} e o perímetro é ${perimetro}.`);
}

areaRetangulo(10, 40);




function areaCirculo(a){
    let circulo = 3.14* (a * a);
    console.log(circulo);
}

areaCirculo(30);



function tabuada(num){
    let cont = 0;
    let resultado = 0;
    while(cont <= 10){
        resultado = num * cont;
        console.log(`${num} x ${cont} = ${resultado}`);
        cont++;
    }
}

tabuada(5);