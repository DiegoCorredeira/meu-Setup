const botao = document.getElementById('light')
const header = document.getElementById('header')
const main = document.getElementById('main')

botao.addEventListener('click', ()=>{
    if(botao.classList.contains('fa-moon')){
        botao.classList.remove('fa-moon');
        botao.classList.add('fa-sun');

        header.classList.add('light')
        main.classList.add('light')
        return
    }
    botao.classList.remove('fa-sun');
    botao.classList.add('fa-moon');
    header.classList.remove('light')
    main.classList.remove('light')
})


console.log('mundo')
