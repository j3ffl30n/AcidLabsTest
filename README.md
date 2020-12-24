# Acid Labs development test


<br>

------------
##### Primer deberas clonar este repositorio y entrar en el, encontraras dos directorios  ___AcidLabsTest___ y ___frontend___. Ingresaremos primero en el directorio del ___AcidLabsTest___.

### Backend - Api RESTful
<br>


##### Ingresamos al directorio desde una terminal, e instalamos las dependencias del proyecto, para ello ejecutamos el siguiente comando :
```bash
npm install
```
##### Una vez instaladas las dependencias, levantamos la aplicacion con el siguiente comando :
```bash
node server.js
```
##### La misma se ejecutara en el puerto 5000, podemos acceder a ella con la direccion 
[http://localhost:8080](http://localhost:8080)

######La api cuenta con los siguientes endpoints:

get ('/products')                  
get ('/products/id/:id')                     
get ('/products/find/:mark')                 
post ('/products')                       
put ('/products/:id')                    
delete ('/products/:id')8080

###### Para obtener todos los registros con el metodo GET basta con acceder desde cualquier cliente a al url 
[http://localhost:8080/products](http://localhost:8080/products)
<br>
###### Para crear un registros usando el metodo POST se debe pasar en el body un json como se muestra a continuacion y usando la url siguiente
[http://localhost:8080/products](http://localhost:8080/products)
```javascript
{
    "mark": "Apple",
    "image": "poner url",
    "name": "Iphone 12 pro",
    "description": "oso",
    "price": 780000
}


```
###### El mismo caso es para editar un registro usando el endpoint del metodo put, o para eliminar un registro solo basta con indicar el id del producto. Ademas en el header se debe indicar que el Content-Type debe ser de tipo application/json
<br><br>

------------
### Frontend - react js app
##### Ingresamos al directorio desde una terminal, e instalamos las dependencias del proyecto, para ello ejecutamos el siguiente comando :
```bash
npm install
```
##### Una vez instaladas las dependencias, levantamos la aplicacion con el siguiente comando :
```bash
npm start
```
##### La misma se ejecutara en el puerto 3000, podemos acceder a ella con la direccion 
[http://localhost:3000](http://localhost:3000)

###### Mostrara una tabla con todos los registros almacenados en la base de datos, al ser llamado el metodo GET de la api.
<br><br>
##### Para esta aplicación se uso una base de datos mongo la cual se encuentra en alojada en  https://cloud.mongodb.com los datos de acceso los enviare por correo electronico a fin de que puedan verificar que a traves de la api los datos se persisten en la misma.
<br>
