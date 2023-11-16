for (let i = 0; i < 10; i++) 
{
    const nome = prompt('Digite seu nome');

    const peso = parseFloat(prompt('Digite seu peso'));

    const altura = parseFloat(prompt('Digite sua altura'));

    const imc = peso / (altura * altura);

    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso normal';
    } 
    else if (imc < 25.0) {
        classificacao = 'Peso adequado';
    } 
    else if (imc < 30.0) {
        classificacao = 'Excesso de peso';
    } 
    else if (imc < 35.0) {
        classificacao = 'Obesidade grau I';
    } 
    else if (imc < 40.0) {
        classificacao = 'Obesidade grau II';
    } 
    else {
        classificacao = 'Obesidade grau III';
    }

    console.log(`${nome} - IMC: ${imc.toFixed(2)} - ${classificacao}`);
}
