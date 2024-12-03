function olaMundo(){
    console.log("Olá mundo!");
}

olaMundo();


function olaNome(nome){
    console.log(`ola ${nome}.`);
}

olaNome(nome);



function dobro(num){
    console.log(num * 2);
}

dobro(5);



function media(num1, num2, num3){
    console.log(num1 + num2 + num3 * 3);
}

media(5, 6, 6);


function maior(num1, num2){
    if(num1 > num2){
        console.log(num1)
    } else {
        if (num1 < num2){
            console.log(num2);
        } else {
            console.log("Os números não iguais!");
        }
    }
}


maior(7, 8);


function multi(num1){
    console.log(num1 * num1);
}

multi(10);