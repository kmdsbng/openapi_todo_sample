docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -i /local/reference/todo.v1.yaml \
  -g kotlin-server \
  -o /local/generated/kotlin

# docker run --rm -i hairyhenderson/sed

docker run --rm \
  -v ${PWD}:/local \
  -i \
  hairyhenderson/sed -i s/apis/apisgenerationgap/g /local/generated/kotlin/src/main/kotlin/org/openapitools/server/AppMain.kt

