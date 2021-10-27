$('.owl-carousel').owlCarousel({ 
    // repetição das imagens 
    loop:false,
    margin:10,
    nav:false, //Botões de navegação < >
    responsive:{//exibição das imagens "itens" de acordo com a tamanho da tela
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})