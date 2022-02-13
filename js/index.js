const headerLinks = document.querySelectorAll('.header nav a');

headerLinks.forEach((link)=> {
    let currentPath = window.location.href
    if( currentPath.includes (link.href) ) link.classList.add('ativo')
})

const params = new URLSearchParams(location.search);
params.forEach( (element, index) => {
    let el = document.getElementById(element)
    el.checked = true;
})

const buttonAnswers = document.querySelectorAll('.perguntas button')
buttonAnswers.forEach( answer => {
    answer.addEventListener('click', (ev) => {
        ev.preventDefault();
        let answerWrap = document.getElementById(ev.currentTarget.getAttribute('aria-controls') );
        answerWrap.classList.toggle('ativa');
        ev.currentTarget.setAttribute('aria-expanded', answerWrap.classList.contains("ativa"));
      console.log(res)
        
    })
} );

const imagesContainer = document.querySelector('.bicicleta-img');
const images = document.querySelectorAll('.bicicleta-img img');
images.forEach( image => {
    image.addEventListener('click', (ev) => {
        if (window.innerWidth <= 920) return;
        imagesContainer.prepend(ev.currentTarget)
    })
});

const a = new SimpleAnime();
window.addEventListener('scroll', e => {
    let bicicletas = document.querySelector('.bicicletas-lista ul');
    let offsetTop = bicicletas.offsetTop + 500;
    console.log(offsetTop);
    if( (!bicicletas.hasAttribute('animated')) && offsetTop >= e.currentTarget.scrollY){
        bicicletas.classList.add('fadeInDown')
        bicicletas.setAttribute('animated', "");
        bicicletas.style = "opacity:0; transform: translate3d(0, -20px, 0);"
        setTimeout( () => { 
            bicicletas.style = "opacity:1; transition: transform 0.8s, opacity 0.8s; transform: none;" 
        }, 600 )
    }
})