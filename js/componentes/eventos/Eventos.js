import {btn_info, main, header} from './../index.js'
import {LINK} from './../index.js'
import {description, back} from './index.js'
export let verificaIframe = true;
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
    window.addEventListener('scroll', ()=>{
        if(document.documentElement.scrollTop > 1){
            header.classList.add('sticky')
        }else{
            header.classList.remove('sticky')
        }
    })
    


