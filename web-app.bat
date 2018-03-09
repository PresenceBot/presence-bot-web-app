docker build -t react:app .
docker run -it -p 3000:3000 -p 25729:25729 -v ${PWD}:/app -e CHOKIDAR_USEPOLLING=true react:app