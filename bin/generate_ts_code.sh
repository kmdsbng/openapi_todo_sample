cd `dirname $0`
cd ..

docker pull openapitools/openapi-generator-cli

docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -i /local/openapi/todo.v1.yaml \
  -g typescript-fetch \
  --additional-properties=npmName='todo-api',typescriptThreePlus=true \
  -o /local/generated/ts

