cd `dirname $0`
cd ..

mkdir -p generated/ts

docker pull openapitools/openapi-generator-cli

docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -i /local/openapi/todo.v1.yaml \
  -g typescript-fetch \
  --additional-properties=npmName='todo-api',typescriptThreePlus=true \
  -o /local/generated/ts


mkdir -p frontend/src/
mkdir -p frontend/.openapi-generator/

cp -r generated/ts/src/models frontend/src/
cp -r generated/ts/src/apis frontend/src/
# cp generated/ts/src//index.ts frontend/src/
cp generated/ts/src/runtime.ts frontend/src/
cp generated/ts/README.md frontend/
cp -n generated/ts/package.json frontend/
cp -n generated/ts/tsconfig.json frontend/
cp -n generated/ts/.npmignore frontend/
cp -n generated/ts/.gitignore frontend/
cp generated/ts/.openapi-generator-ignore frontend/
cp generated/ts/.openapi-generator/VERSION frontend/.openapi-generator/


