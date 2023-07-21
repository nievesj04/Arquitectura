const nav = document.querySelector('.nav');
const menu = document.querySelectorAll('#menu a');

// ----------------------------------------------
//  Marcado de lo seleccionado en el menú
// ----------------------------------------------

menu.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        if (window.scrollY === 0) {
        	menu.forEach((menu) => menu.classList.remove('active','menu-up','menu-down'));
	    	evento.target.classList.add('active','menu-up');

        }else {
        	menu.forEach((menu) => menu.classList.remove('active','menu-up','menu-down'));
	    	evento.target.classList.add('active','menu-down');
        }
    })    
});

// ----------------------------------------------------------
//  Cambio de color de la seleccion (Menú Up y Menú Down)
// -----------------------------------------------------------

window.addEventListener('scroll', function(){
	nav.classList.toggle('active', window.scrollY > 0);

	if (window.scrollY > 0) {
		menu.forEach((menu) => menu.classList.replace('menu-up','menu-down'));
	}else {
		menu.forEach((menu) => menu.classList.replace('menu-down','menu-up'));
	}
})


