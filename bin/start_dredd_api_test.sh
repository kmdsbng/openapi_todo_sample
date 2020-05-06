cd `dirname $0`
cd ..

pin=$1
p=${pin:-4010}

echo "connecting port: $p"

docker pull apiaryio/dredd

# docker run -it -v $PWD:/api -w /api apiaryio/dredd dredd openapi/openapi.yaml host.docker.internal:4010 --hookfiles=/api/bin/dredd_hooks.js
docker run -it -v $PWD:/api -w /api apiaryio/dredd dredd openapi/openapi.yaml host.docker.internal:$p --hookfiles=/api/bin/dredd_hooks.js


