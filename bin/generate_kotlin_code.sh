cd `dirname $0`
cd ..

docker pull openapitools/openapi-generator-cli

docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -i /local/openapi/openapi.yaml \
  -g kotlin-server \
  -o /local/serverside

docker run --rm \
  -v ${PWD}:/local \
  -i \
  hairyhenderson/sed -i s/apis/apisimpl/g /local/serverside/src/main/kotlin/org/openapitools/server/AppMain.kt

