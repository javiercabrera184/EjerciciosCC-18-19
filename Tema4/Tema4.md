# Ejercicios Tema 4

### Ejercicio 1. Instalar chef-solo en la maquina virtual que vayamos a usar

En la maquina virtual buscamos esta URL https://downloads.chef.io/chefdk. Descargamos la version de nuestro sistema operativo. Abrimos el paquete que se nos ha descargado con el centro de software de ubuntu y le damos a instalar. Comprobamos que se ha instalado correctamente con la orden ``` chef-solo --version ```


### Ejercicio 2. Crear una receta para instalar nginx, tu editor favorito y algún directorio y fichero que uses de forma habitual.

Generamos la estructura de directorios con

``` chef generate app first_cookbook ```

Creamos el script en el directorio ./first_cookbook/cookbook/first_cookbook/recipes con el nombre default.rb

Y ponemos este contenido:

```package 'nginx'
package 'emacs'
directory '/home/antonio/Documents/Apuntes'
file "/home/antonio/Documents/Apuntes/LEEME" do
  owner "antonio"
  group "antonio"
  mode 00544
  action :create
  content "Directorio para apuntes"
end
```

Creamos el fichero node.json con el siguiente contenido:

```
{
  "run_list": ["recipe[first_cookbook]"]
}

```
A continuacion el fichero solo.rb con el siguiente contenido:

```
file_cache_path "/home/antonio/Documents/CC/first_cookbook"
cookbook_path "/home/antonio/Documents/CC/first_cookbook/cookbooks"
json_attribs "/home/antonio/Documents/CC/first_cookbook/node.json"
```

Ejecutamos chef para que realice las tareas:

```
sudo chef-solo -c first_cookbook/solo.rb

```

### Ejercicio 3. Escribir en YAML la siguiente estructura de datos en JSON

```
uno: dos
tres:
- 4
- 5
- Seis
- siete: 8
  nueve:
  - 10
  - 11
```
