const carritoBtn = document.querySelector('.carritoBtn');
const carrito_overlay = document.querySelector('.carrito_overlay');
const car_shop = document.querySelector('.car_shop');
const close_carrito = document.querySelector('.close__carrito');
const añadir_car = document.querySelectorAll('.productos button');
const tableId = document.getElementById('car_table');
const footerPrice = document.querySelector('.carrito__total')

let counter = 0;
let footerCounter = 0;


carritoBtn.addEventListener('click', () => {
	carrito_overlay.classList.add('show');
	car_shop.classList.add('show');
})

close_carrito.addEventListener('click', () => {
	carrito_overlay.classList.remove('show');
	car_shop.classList.remove('show');
})

añadir_car.forEach((elemento) => {
	const name = elemento.parentNode.parentNode.dataset.name;
	const price = elemento.parentNode.parentNode.dataset.price;
	const img = elemento.parentNode.parentNode.dataset.src;
	const code = elemento.parentNode.parentNode.dataset.code;

	let counter = 0;

	elemento.addEventListener('click', (evento) => {
        evento.preventDefault();
        evento.target.classList.add('activo');

        counter++;
        if (counter === 1) {
        	tableId.insertAdjacentHTML('beforeend',`
				<div class="carrito__item" id="${code}">
				 	<img src="${img} " alt="">
				 	<div>
				 		<h3 class="h3__carrito">${name}</h3>
				 		<p class="price">${price}$</p>
				 	</div>
				 	<div class="div12">
				 		<span class="flechaUp" id="flecha__arriba__12">
				 			<i class="bx bxs-up-arrow" id="flechaUp-${code}"></i>
				 		</span>
				 		<p class="cantidad-carrito-${code}">1</p>
				 		<span class="flechaDown" id="flecha__abajo__12">
				 			<i class="bx bxs-down-arrow" id="flechaDown-${code}"></i>
				 		</span>
				 	</div>
				 	<div class="remove_car">
				 		<span class="remove__item" id="remove__item">
				 			<i class="bx bx-trash" id="eliminar-${code}"></i>
				 		</span>
				 	</div>
				</div>
			`);

			footerCounter += parseInt(price);
        	footerPrice.innerText = footerCounter;

        };

        const eliminar = document.querySelectorAll('i[id^="eliminar-"]');
	    eliminar.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				if (e.target === document.getElementById('eliminar-'+code)) {
					e.target.parentNode.parentNode.parentNode.remove();
					evento.target.classList.remove('activo');
					counter--;

					footerCounter -= parseInt(price)*counterFlechas;
        			footerPrice.innerText = footerCounter;
				}
			});
		});


        const flechaUp = document.querySelectorAll('.flechaUp')
        const flechaDown = document.querySelectorAll('.flechaDown')
        const cantidad = document.querySelector('.cantidad-carrito-'+code)

        let counterFlechas = 1;

        flechaUp.forEach((flecha_up) => {
        	flecha_up.addEventListener('click', (e) => {
        		if (e.target === document.getElementById('flechaUp-'+code)) {
        			counterFlechas++;
        			cantidad.innerText = counterFlechas;
        			footerCounter += parseInt(price)*1,5;
        			footerPrice.innerText = footerCounter;
        		}
        	})
        })

        flechaDown.forEach((flecha_down) => {
        	flecha_down.addEventListener('click', (e) => {
        		if (counterFlechas > 1 && e.target === document.getElementById('flechaDown-'+code)) {
        			counterFlechas--;
        			cantidad.innerText = counterFlechas;
        			footerCounter -= parseInt(price)*1,5;
        			footerPrice.innerText = footerCounter;
        		}
        	})
        })
    });
});







