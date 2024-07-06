
function calcular(){
    let nome = document.getElementById("name").value;
    let peso = document.getElementById("peso");
    let altura = document.getElementById("altura");
    let cnome = document.getElementById("calc-name");
    let imagem = document.getElementById("image");
    let classe = document.getElementById("classe");
    
    //cálculo
    let pesof = Number(peso.value);
    let alturaf = Number(altura.value);
    alturaf = alturaf / 100
    let imc = pesof / (alturaf*alturaf);
    let imcarrendondado = imc.toFixed(2);


    if(nome === "" || pesof === 0 || alturaf === 0){
        window.alert("Preencha as informações!")
        imagem.style.backgroundImage = "none";
        imagem.style.display = "none"
        
        cnome.innerHTML = "CÁLCULO<br> IMC"
        cnome.style.margin = "auto"
        cnome.style.fontFamily = "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
        cnome.style.fontSize = "50px"
        cnome.style.fontWeight = 800
        classe.innerHTML = ""
    }
   
    else{
     
    //ESTILIZAÇÃO
        cnome.style.fontSize = "25px"
        cnome.style.marginTop = "30px"
        cnome.style.marginBottom = "0"
        cnome.style.textAlign = "center"
        cnome.style.fontFamily = "arial"
        classe.style.fontSize = "18px"
        cnome.style.fontWeight = 600

        cnome.innerHTML = `${nome}, seu IMC é de <br>${imcarrendondado} `
        imagem.style.backgroundImage = "none";
        if(imc < 18.5){
            classe.innerHTML = "Sua classificação é: Abaixo do peso"
            imagem.style.backgroundImage = "url('./Image/Abaixo-do-peso.png')"
        }
        else if( imc >= 18.6 && imc <= 24.9){
            classe.innerHTML = "Sua classificação é: <strong>Peso ideal"
            imagem.style.backgroundImage = "url('./Image/Peso-ideal.png')"
        }
        else if( imc >= 25 && imc <= 29.9){
            classe.innerHTML = "Sua classificação é: <strong>Levemente acima do peso"
            imagem.style.backgroundImage = "url('./Image/Acima-do-peso.png')"
        }
        else if ( imc >=30 && imc <= 34.9){
            classe.innerHTML = "Sua classificação é: <strong>Obesidade grau I" 
            imagem.style.backgroundImage = "url('./Image/Obesidade-1.png')"
        }
        else if ( imc >= 35 && imc <= 39.9){
            classe.innerHTML = "Sua classificação é: <strong>Obesidade grau II (severa)"
            imagem.style.backgroundImage = "url('./Image/Obesidade-2.png')"
        }
        else{
            classe.innerHTML = "Sua classificação é: <strong>Obesidade grau III(mórbida)"
            imagem.style.backgroundImage = "url('./Image/Obesidade-3.png')"
        }
        imagem.style.display = "block";

        peso.value = ""
        altura.value = ""
        document.getElementById("name").value = ""
    }
}