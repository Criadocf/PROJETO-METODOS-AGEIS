
function app(){

    const qnome = document.getElementById('qnome')
    const qcodigo = document.getElementById('qcodigo')
    const qquanti = document.getElementById('qquanti')
    const qvalunit = document.getElementById('qvalunit')
    const qdata = document.getElementById('qdata')
    const qsalvar = document.getElementById('qsalvar')
    


    qsalvar.addEventListener('click', ()=>{
        let nome = qnome.value;
        let codigo = qcodigo.value;
        console.log(nome, codigo);

        let div_nome = document.getElementById('nome');
        div_nome.innerHTML = nome;
        })
    
        
    
    }

app()