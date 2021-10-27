import {main} from '../seletores/Seletores.js'
import {verificaIframe} from '../eventos/Eventos.js'
import { YOUTUBE } from '../index.js';
const verificaIframe1 = true;

export function video(dados){
    // console.log(JSON.stringify(dados));
    const key = dados.results[0].key;
    
    if(verificaIframe && verificaIframe1){
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
};