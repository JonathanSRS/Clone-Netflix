import { BASE_URL, YOUR_KEY } from './../index.js'
import { video } from './../index.js'
import { show } from './../index.js';

export function db_movie(id, imagem, play, genero1, genero2, popularidade){
    fetch(BASE_URL+"/movie/"+id+"?api_key="+YOUR_KEY+"&language=pt-BR")
        .then(resp =>{resp.json()
            .then(dados => show(dados, imagem, play, genero1, genero2, popularidade))
        })
        .catch(e =>
            console.log(e.message))
        };
        
export function db_video(id){
    fetch(BASE_URL+"/movie/"+id+"/videos?api_key="+YOUR_KEY+"&language=en-US")
    .then(resp =>{resp.json()
        .then(dados =>  video(dados))
    })
    .catch(e =>
        console.log(e.message))
    };
    
