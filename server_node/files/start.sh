#!/bin/sh

mkfifo /tmp/stats_fifo
nohup node /root/stats_generator.js < /tmp/stats_fifo > /shared/server_stats.log &
nohup dstat --epoch --cpu --mem --net  --float --output /tmp/stats_fifo > /dev/null 2>&1 &

if [ ! -z ${THEDB+x} ]; then sed -i.bak s/db/$THEDB/ /root/dummy-web-server.js ; fi

node /root/dummy-web-server.js
