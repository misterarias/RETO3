#!/bin/sh
if [ -z ${THEDB+x} ]; then 
  docker run --link reto1db -p 80 --name reto1server -v "$PWD"/../shared:/shared -d reto1server
else
  docker run -e "THEDB=$THEDB" -p 80 --name reto1server -v "$PWD"/../shared:/shared -d reto1server
fi
