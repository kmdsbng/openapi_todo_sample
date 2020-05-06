cd `dirname $0`
cd ..

docker pull apiaryio/dredd

# docker run -it -v $PWD:/api -w /api apiaryio/dredd dredd openapi/todo.v1.yaml host.docker.internal:8080 -h "Accept:application/json"
# docker run -it -v $PWD:/api -w /api apiaryio/dredd dredd openapi/todo.v1.yaml host.docker.internal:4010 --hookfiles=/api/bin/dredd_hooks.js
docker run -it -v $PWD:/api -w /api apiaryio/dredd dredd openapi/todo.v1.yaml host.docker.internal:8080 --hookfiles=/api/bin/dredd_hooks.js

# dredd petstore_simple.yaml localhost:4010 -h "Accept:application/json"

