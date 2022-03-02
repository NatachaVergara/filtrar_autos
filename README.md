# EJERCICIO INTEGRADOR
#### Manipulación del DOM.
##### 1. Cloná el proyecto: https://github.com/programadesdetucasa/buscador-con-js-vanilla 
Este proyecto contiene una plantilla. Tomate el tiempo para ver cómo está
conformado. Toda la interfaz ya está hecha y sólo debes encargarte de la
lógica en el archivo JS.
En el archivo index.js, tenés algo de código JS que te brindará las bases
para trabajar tu propio código y lógica.

##### 2. Empecemos por mostrar de forma dinámica la información que se encuentra contenida en el objeto autos.
Para esto deberás crear una función llamada
mostrarAutos() y asegurarte de recorrer el array autos y setear la
información en el elemento HTML div.cards.

###### Ayuda: escribí a mano el siguiente template literals para el formato de las cards

    <div class="col-sm-4 mt-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Marca </h5>
              <p class="card-text">Modelo - color </p>
              <p class="h6"> precio </p>
              <a href="" class="btn btn-warning btnMasInfo" id="masInformacion">Mas info </a>        
            </div>          
          </div>
        </div>   


##### 3. Creá una función para filtrar las marcas de los autos y utilizá el método filter()
para hacer esto. Una vez que hayas obtenido el nuevo array con los autos
filtrados, recorrelo y setealo en el elemento HTML div.cards.

##### 4. Recordá limpiar el valor ingresado por el usuario al input buscar.

##### 5. Vinculá la función que creaste para filtrar las marcas al botón buscar.

© Creado por PDTC
