//LiNKS
const YOUR_KEY = 'fca1e7c3def50c574179a95d538d896c';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LINK = "https://www.themoviedb.org/t/p/original";
const YOUTUBE = "https://www.youtube-nocookie.com/embed/";
//SELETORES
const CARROSSEL = document.querySelector('.carrossel');
let btn_info = document.querySelector('#info');
let main = document.querySelector('main');
//VARIÁVEIS
let back;
let description;
let verificaIframe = true;
//ID DOS FILMES
let bloco = [
    [557,558,559,315635,429617,634649,335983,580489],
    [1893,1894,1895,11,1891,1892,140607,181808,181812],
    [671,672,673,674,675,12444,12445]
];
// CRIAR ELEMENTOS PARA O CARROSSEL
for(let x = 0; x < bloco.length; x++){
    let conteiner = document.createElement('div');
    conteiner.classList.add('container');
    conteiner.classList.add('owl-carousel');
    conteiner.classList.add('owl-theme');
    CARROSSEL.appendChild(conteiner);
    //
    for (let i = 0; i < bloco[x].length; i++){
        //
        let id = bloco[x][i];
        //
        let div = document.createElement('div');
        let imagem = document.createElement('img');
        let ficha = document.createElement('div');
        let popularidade = document.createElement('span');
        let genero1 = document.createElement('span');
        let genero2 = document.createElement('span');
        let plus = document.createElement('i');
        let play = document.createElement('i');
        let like = document.createElement('i');
        let dislike =document.createElement('i');
        
        conteiner.appendChild(div);
        div.appendChild(imagem);
        div.appendChild(ficha);
        ficha.appendChild(plus);
        ficha.appendChild(play);
        ficha.appendChild(like);
        ficha.appendChild(dislike);
        ficha.appendChild(genero1);
        ficha.appendChild(genero2);
        ficha.appendChild(popularidade);

        div.classList.add("item");
        ficha.classList.add("ficha");
        plus.classList.add("fas");
        plus.classList.add("fa-plus-circle");
        play.classList.add("far");
        play.classList.add("fa-play-circle");
        like.classList.add("far");
        like.classList.add("fa-thumbs-up");
        dislike.classList.add("far");
        dislike.classList.add("fa-thumbs-down");
        //
        db_movie(id, imagem, play, genero1, genero2, popularidade);
    };
};
//EVENTOS DE CLICK
const input = document.querySelector('.search');
input.addEventListener('click', ()=>{
    input.classList.add('add-input');
});

input.addEventListener('dblclick', ()=>{
    input.classList.remove('add-input');
});

btn_info.addEventListener('click', ()=>{
    let iframe = document.querySelector('iframe');
    let backdrop = document.createElement('div');
    let info = document.querySelector('.descricao');
    info.textContent = description;
    info.style.display = "block";
    main.removeChild(iframe);
    main.appendChild(backdrop);
    backdrop.classList.add('poster');
    backdrop.style.background= "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)100%), url("+LINK+back+")";
    backdrop.style.backgroundSize = "100% 315px";
    backdrop.style.height = "315px";
    verificaIframe = false;
});
//CONSUMO DA API TMDB
function db_movie(id, imagem, play, genero1, genero2, popularidade){
    fetch(BASE_URL+"/movie/"+id+"?api_key="+YOUR_KEY+"&language=pt-BR")
        .then(resp =>{resp.json()
            .then(dados => show(dados, imagem, play, genero1, genero2, popularidade))
        })
        .catch(e =>
            console.log(e.message))
        };
        
        function db_video(id){
            fetch(BASE_URL+"/movie/"+id+"/videos?api_key="+YOUR_KEY+"&language=pt-BR")
            .then(resp =>{resp.json()
                .then(dados =>  video(dados))
            })
            .catch(e =>
                console.log(e.message))
            };
            
            function show(dados, imagem, play, genero1, genero2, popularidade){
                genero1.textContent = dados.genres[0].name;
                genero2.textContent = dados.genres[1].name;
                popularidade.textContent = "Popularidade "+dados.popularity;
                imagem.setAttribute('src', LINK+dados['poster_path']);
                play.setAttribute('data-id', dados['id']);
                play.addEventListener('click', ()=>{
                    back = dados['backdrop_path'];
                    description = dados['overview'];
                    title = dados.original_title;
                    db_video(dados['id']);
    });
};

function video(dados){
    // console.log(JSON.stringify(dados));
    const key = dados.results[0].key;
    
    if(verificaIframe){
        let iframe = document.querySelector('iframe');
        main.removeChild(iframe);
    }else{
        let poster = document.querySelector('.poster');
        main.removeChild(poster);
        let info = document.querySelector('.descricao');
        info.style.display = "none";
    };

    let criar = document.createElement('iframe');
    criar.setAttribute('width', '100%');
    criar.setAttribute('height', '315');
    criar.setAttribute('src', YOUTUBE+key+'?&rel=0&controls=0&showinfo=0&autoplay=1&mute=1&loop=1&autopause=0&fs=0&modestbranding=1');
    criar.setAttribute('title', 'YouTube video player');
    criar.setAttribute('frameborder', 0);
    criar.setAttribute('allow', 'accelerometer; autoplay; clipboard-write;  gyroscope; picture-in-picture; loop');
    criar.setAttribute('allownetworking',"internal");
    main.appendChild(criar);
    verificaIframe = true;
};