$ mkdir directorio ; mkdir directorio ; echo "Directorio creado"
$ mkdir directorio && mkdir directorio && echo "Directorio creado"
$ mkdir directorio &> /dev/null || echo "La creación de directorio ha fallado"