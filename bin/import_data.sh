#!/usr/bin/env bash


echo "Start 100k api calls..."
for i in {1..100000}; do 
	if [ $(( $i % 10000 )) -eq 0 ] ; then
		echo $i" calls done!"
	fi
	JOB=$((1 + $RANDOM % 4))
	DAY=$((1 + $RANDOM % 30))
	DATE="2021-04-"$DAY
	curl -s -XPOST 'localhost:3000/api/v1.0/value' --header 'Content-Type: application/json' --data-raw '{
    "data": "'$DATE'",
    "job": "'$JOB'"
	}' > /dev/null
done