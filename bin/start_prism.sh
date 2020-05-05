cd `dirname $0`
cd ..

docker run --rm \
  -v ${PWD}:/local \
  -it \
  -p 4010:4010 \
  stoplight/prism:3 mock -h 0.0.0.0 /local/openapi/todo.v1.yaml

