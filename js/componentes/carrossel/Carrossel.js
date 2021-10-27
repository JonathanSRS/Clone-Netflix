import {db_movie} from './../index.js'
import { CARROSSEL } from './../index.js'
import {bloco} from './../index.js'
import { likeDislike } from '../index.js';
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
            likeDislike(like, dislike)
        };
    };
