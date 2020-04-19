docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  --config /local/reference/openapi-generator-kotlin.config \
  -i /local/reference/todo.v1.yaml \
  -g kotlin-server \
  -o /local/generated/kotlin

