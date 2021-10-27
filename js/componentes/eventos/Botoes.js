import { LINK } from "../index.js";
import { db_video } from "../index.js";
export let back;
export let description;
export function show(dados, imagem, play, genero1, genero2, popularidade){
    genero1.textContent = dados.genres[0].name;
    genero2.textContent = dados.genres[1].name;
    popularidade.textContent = "Popularidade "+dados.popularity;
    imagem.setAttribute('src', LINK+dados['poster_path']);
    play.setAttribute('data-id', dados['id']);
    play.addEventListener('click', ()=>{
        db_video(dados['id']);
        back = dados['backdrop_path'];
        description = dados['overview'];
        // title = dados.original_title;
    });
};

export function likeDislike(like, dislike){
    like.addEventListener('click', ()=>{
        if(like.classList.contains('far')){
            like.classList.remove('far')
            like.classList.add('fas')
            dislike.style.display = "none"
        }else{
            like.classList.remove('fas')
            like.classList.add('far')
            dislike.style.display = "block"
        }
    })
    dislike.addEventListener('click', ()=>{
        if(dislike.classList.contains('far')){
            dislike.classList.remove('far')
            dislike.classList.add('fas')
            like.style.display = "none"
        }else{
            dislike.classList.remove('fas')
            dislike.classList.add('far')
            like.style.display = "block"
        }
    })
}
