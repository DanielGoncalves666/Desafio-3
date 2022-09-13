function abrirFormulario()
{
    document.getElementById("modal").style.display = "block";
    document.getElementById("headerElements").style.display = "none"
}

function fecharFormulario()
{
    document.getElementById("modal").style.display = "none";
    document.getElementById("headerElements").style.display = "block"
}

function mudaselect(valor){
    if(valor == 2){
    const sec1 = document.querySelectorAll('.conteudo');
    sec1.forEach(element =>{
        element.style.display = 'none';
    })
    const sec2 = document.querySelectorAll('.conteudoing');
    sec2.forEach(element =>{
        element.style.display = 'block';
    })
    const sec3 = document.querySelectorAll('.conteudoprep');
        sec3.forEach(element =>{
            element.style.display = 'none';
        })
    }else if(valor == 1){
        const sec1 = document.querySelectorAll('.conteudo');
        sec1.forEach(element =>{
            element.style.display = 'block';
        })
        const sec2 = document.querySelectorAll('.conteudoing');
        sec2.forEach(element =>{
            element.style.display = 'none';
        })
        const sec3 = document.querySelectorAll('.conteudoprep');
        sec3.forEach(element =>{
            element.style.display = 'none';
        })
    }else if(valor == 3){
        const sec1 = document.querySelectorAll('.conteudo');
        sec1.forEach(element =>{
            element.style.display = 'none';
        })
        const sec2 = document.querySelectorAll('.conteudoing');
        sec2.forEach(element =>{
            element.style.display = 'none';
        })
        const sec3 = document.querySelectorAll('.conteudoprep');
        sec3.forEach(element =>{
            element.style.display = 'block';
        })


    }

    
}

