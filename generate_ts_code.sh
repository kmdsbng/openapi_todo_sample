docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -i /local/reference/todo.v1.yaml \
  -g typescript-fetch \
  --additional-properties=npmName='todo-api',typescriptThreePlus=true \
  -o /local/generated/ts

