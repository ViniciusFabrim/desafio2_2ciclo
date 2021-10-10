window.onload = function(){

    //https://viacep.com.br/ws/${cep}/json/

    function resultadoCep(informacoesCep){

        for(let campo in informacoesCep){

            if(document.querySelector(`#${campo}`)){
                document.querySelector(`#${campo}`).value= dadosCep[campo];
            }
        }
    }

    let dadosCep = async function(cep){

        let url = `https://viacep.com.br/ws/${cep}/json/`;

        try{ 
        let dadosFetch = await fetch(url);

        let dadosJson =  await dadosFetch.json();

        resultadoCep(dadosJson);
        } catch(error){

            alert(error);
        }


    }

    //dadosCep('87053660');

    const btnBuscar = document.querySelector("#botao");
    const caixaCep = document.querySelector("#cxCep");

    btnBuscar.addEventListener('click', function(){

        dadosCep(caixaCep.value);

        console.log(caixaCep);
        
    })

}