docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -i /local/reference/todo.v1.yaml \
  -g typescript-fetch \
  -o /local/generated/ts
  -DnpmName='todo-api'

