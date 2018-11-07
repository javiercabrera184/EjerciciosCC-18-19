# Ejercicios Tema 3

## Ejercicio 1. Darse de alta en algún servicio PaaS tal como Heroku, zeit, BlueMix u OpenShift.

He elegido Heroku.

Se tienen que introducir los datos correspondientes y elegir el lenguaje que se va a usar, en este caso NodeJS.

## Ejercicio 2. Crear una aplicación en OpenShift o en algún otro PaaS en el que se haya dado uno de alta. Realizar un despliegue de prueba usando alguno de los ejemplos incluidos con el PaaS.

En Heroku usando [este](https://devcenter.heroku.com/articles/getting-started-with-nodejs) turorial de NodeJS.

Instalamos Heroku, en mi caso me da error al descargarmelo con snap, me lo he acabado descargando con los siguientes comandos:

```sudo add-apt-repository "deb https://cli-assets.heroku.com/branches/stable/apt ./"```

``` curl -L https://cli-assets.heroku.com/apt/release.key | sudo apt-key add - ```

``` sudo apt-get update ```

``` sudo apt-get install heroku ```

Nos registramos con heroku login.

Comprobamos que tenemos nodejs git y npm instalados.

Clonamos el codigo fuente de prueba.

```git clone https://github.com/heroku/node-js-getting-started.git```

Creamos la aplicacion con:

``` heroku create ```

y volvemos a introducir los credenciales

Ahora desplegamos el codigo:

``` git push heroku master ```

Ahora nos tenemos que asegurar que al menos una instancia de la aplicacion se esta ejecutando:

``` heroku ps:scale web=1 ```

Abrimos la aplicaioens con:

``` heroku open ```

y accedemos al buscando con esta direccion: https://young-taiga-25266.herokuapp.com/

## Ejercicio 3. Realizar una app en express (o el lenguaje y marco elegido) que incluya variables como en el caso anterior.

Usamos npm init, instalamos express con:

``` npm install express --save ```

Creamos un archivo index.js y escribimos nuestro programa:

```

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.put('/:suma1/:suma2/:total',function(req, res){

	res.send(req.params.suma1+"+"+req.params.suma2+"="+req.params.total);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

```
Para comprobar que funciona, ejecutamos el script con node index.js y desde la terminal ejecutamos:

``` curl -X PUT  http://localhost:3000/2/2/4 ```

## Ejercicio 4. Crear pruebas para las diferentes rutas de la aplicación.

Instalamos supertest:

``` npm install --save-dev supertest ```

Creamos un archivo test.js y lo ejecutamos con mocha.

```
var supertest = require('supertest');
	var server = supertest.agent("http://localhost:3000");

	describe( "PUT ej3", function() {
		it('should create', function (done) {
		server
			.put('/2/2/4')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200,done);
		});
	});
	describe( "GET ej3", function() {
		it('should say hello world', function (done) {
		server
			.get('/')
			.expect(200)
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect("Hello World!",done);
		});
	});
  ```

## Ejercicio 5. Instalar y echar a andar tu primera aplicación en Heroku.

Ya he realizado este proceso en el ejercicio 2 y usando el ejemplo en nodejs

## Ejercicio 6. Usar como base la aplicación de ejemplo de heroku y combinarla con la aplicación en node que se ha creado anteriormente. Probarla de forma local con foreman. Al final de cada modificación, los tests tendrán que funcionar correctamente; cuando se pasen los tests, se puede volver a desplegar en heroku.


He seguido el [quickstart]( https://theforeman.org/manuals/1.9/quickstart_guide.html) de foreman.
No se me llega a instalar completamente foreman debido a un problema en la instalacion. Pero si despues creamos un archivo Procfile donde llamamos con la siguiente linea

``` web: node app.js ```

y lanzamos foreman deberia de funcionar en local

## Ejercicio 7. Haz alguna modificación a tu aplicación en node.js para Heroku, sin olvidar añadir los tests para la nueva funcionalidad, y configura el despliegue automático a Heroku usando Snap CI o alguno de los otros servicios, como Codeship, mencionados en StackOverflow


Snap CI esta caido, codeship pide el ingreso de una tarjeta de credito, semaphore tambien.


## Ejercicio 8. Preparar la aplicación con la que se ha venido trabajando hasta este momento para ejecutarse en un PaaS, el que se haya elegido.

Para desplegarla en Heroku, debemos de seguir los siguientes pasos situandonos en el proyecto:

``` git init ```

``` git add . ```

``` git commit -am "Initial commit" ```

``` heroku create ``` suponemos que estamos ya registrados

``` git push heroku master ```

``` heroku open ```

y deberia de abrirse nuestra aplicacion en el navegador

en mi caso se ha desplegado en esta direccion: https://shrouded-everglades-26667.herokuapp.com/

para que se ejecute correctamente debemos de hacer cambios en el codigo, en el puerto de escucha, añadimos esta linea:

``` var port=process.env.PORT || 3000 ```

Asi le damos le opcion a heroku que lo ejecute en el puerto que el quiere.
