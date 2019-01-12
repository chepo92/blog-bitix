function() {
   echo "Hola $1!"
}

function("picodotdev")

Además los _scripts_ pueden incluir ciertas sentencias para controlar el flujo de ejecución del _script_ con expresiones condicionales, bucles y comparaciones.

for file in /etc/* do
    echo $file
done
{{% gist id="" file="" %}}

while getopts ":df" opt; do
  case $opt in
	d)
  	echo "Opción «d» indicada"
  	;;
	f)
  	echo "Opción «f» indicada"
  	;;
	\?)
  	echo "Opción inválida: -$OPTARG"
  	;;
  esac
done