//ARRAYS DE OBJETOS CON TODOS LOS AUTOS EN PROMOCIÓN
const autos = [
  { marca: 'BMW', modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco' },
  { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro' },
  { marca: 'Ford', modelo: 'Mustang', year: 2015, precio: 20000, puertas: 2, color: 'Blanco' },
  { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro' },
  { marca: 'BMW', modelo: 'Serie 5', year: 2016, precio: 70000, puertas: 4, color: 'Rojo' },
  { marca: 'Chevrolet', modelo: 'Camaro', year: 2018, precio: 60000, puertas: 2, color: 'Rojo' },
  { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo' },
  { marca: 'Dodge', modelo: 'Challenger', year: 2017, precio: 40000, puertas: 4, color: 'Blanco' },
  { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro' },
  { marca: 'Dodge', modelo: 'Challenger', year: 2012, precio: 25000, puertas: 2, color: 'Rojo' },
  { marca: 'BMW', modelo: 'Serie 5', year: 2019, precio: 90000, puertas: 4, color: 'Blanco' },
  { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro' },
  { marca: 'Dodge', modelo: 'Challenger', year: 2015, precio: 35000, puertas: 2, color: 'Azul' },
  { marca: 'BMW', modelo: 'Serie 3', year: 2018, precio: 50000, puertas: 4, color: 'Blanco' },
  { marca: 'BMW', modelo: 'Serie 5', year: 2017, precio: 80000, puertas: 4, color: 'Negro' },
  { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul' }
];

//Traigo el DOM todos los elementos que voy a estar utilizando
let show_cars = document.querySelector('#cards')
let titulo = document.querySelector('.titulo')
let btn_buscar = document.querySelector('.btn')
let form = document.querySelector('form')
let input_filtro = document.querySelector('#filtro')



window.onload = function () {
  //1.COLOCÁ ACÁ EL CÓDIGO PARA SETEAR TODOS LOS AUTOS EN PROMOCIÓN
  mostrarAutos()
}

//creo un pequeño evento, cuando hago click en el titulo me muestra otra vez todos los autos sin filtrar
titulo.addEventListener('click', () => {
  show_cars.innerHTML = ""
  mostrarAutos()
})

//Creo la funcion que me trae todoslos autos y sus propiedades y se crea un item por auto
const mostrarAutos = () => {
  autos.map(auto => {
    show_cars.innerHTML += `
    <div class="col-sm-4 mt-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${auto.marca} </h5>
          <p class="card-text">${auto.modelo} - ${auto.color} </p>
          <p class="h6"> ${auto.precio} </p>
          <a href="" class="btn btn-warning btnMasInfo" id="masInformacion">Mas info </a>        
        </div>          
      </div>
    </div>    
    `
  })
}




//2.CREA UNA FUNCIÓN ACÁ PARA FILTRAR LOS AUTOS POR MARCA
const autos_filtrados = () => {

  btn_buscar.addEventListener('click', (e) => {
    e.preventDefault()
    //creo una variable donde se van a guardar los elementos filtrados
    let marca = autos.filter(auto => auto.marca.toLowerCase() === input_filtro.value)

   console.log(marca)

   
    
    //borro la informacion que tiene el div que ya no voy a utilizar
    show_cars.innerHTML = ""
    //mapeo la variable con mis elementos filtrados y los muestro en el html
    marca.map(auto => {
      show_cars.innerHTML += `
              <div class="col-sm-4 mt-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">${auto.marca} </h5>
                    <p class="card-text">${auto.modelo} - ${auto.color} </p>
                    <p class="h6"> ${auto.precio} </p>
                    <a href="" class="btn btn-warning" id="masInformacion" >Mas info </a>        
                  </div>          
                </div>
              </div>    
              `
    })
    
   
    //reseteo el campo de busqueda
    form.reset()

  })

}

autos_filtrados()




