# RETO3

## Base de Datos

Una de las siguientes opciones:

Cassandra. Tantas instancias como cpu-s tenga el host. Replicación dependiendo de la carga que se quiera alcanzar. Para el servidor python round robin para ir almacenando en las distintas instancias. En el caso del servidor node cada proceso almacena en una instancia diference.

Redis. Tantas instancias master como cpu-s tenga el host. Un slave por master. La politica de persistencia dependiente de la carga que se quiera alcanzar. Para el servidor python round robin para almacenar en las distintas instancias. En el caso del servidor node cada proceso almacena en una instancia master diferente. Los resultados se procesan a partir de los datos almacenados en las n instancias master ¿Por qué no?
 

## Métricas servidor

Apache Flink para procesar los datos y extaer valor de los mismos en modo streaming. Ventana de n segundos deslizante. Probar Apache Flink Cluster y HA.
Apache Kaftka como tuberia entre el servidor node/python y Apache Flink. Cualquier cosa menos guarrear los servidores. Probar Kafka Cluster.

Para las salida una de las siguientes opciones:

Elasticsearch como almacenamiento del resultado. Probar Elasticsearch Cluster. 

HDFS como alamacenamiento del resultado.

##  Otras cosillas

¿Cuál sería el rendiminto con un nginx balanceando varios servidores node/python?




