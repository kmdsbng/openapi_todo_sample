cd `dirname $0`
cd ..

docker pull stoplight/prism:3

docker run --rm \
  -v ${PWD}:/local \
  -it \
  -p 4010:4010 \
  stoplight/prism:3 mock -h 0.0.0.0 /local/openapi/openapi.yaml

