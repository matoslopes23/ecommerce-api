#!/bin/bash

printf "\n\n\nNpm install:"
npm install

# check this script because docker use it
# env before start
printf "\n\n\nCopy .env file:"
file="./.env.example"
fileroot="./.env"
if [ ! -f "$fileroot" ];
then
if  [ -f "$file" ];
then
	printf "$file found."
	cp $file ./.env
	printf ".env created"
else
	printf "$file not found."
	exit 1
fi
fi

printf "\n\n\nRun migration:\n"
#node ace migration:run

printf "\n\n\nRun seed\n"
#node ace db:seed


printf "\n\n\nStart node server:"
node ace serve --watch --node-args="--inspect=0.0.0.0"
