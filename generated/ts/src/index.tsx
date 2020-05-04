import * as React from "react";
import * as ReactDOM from "react-dom";
import {Hello} from "./components/Hello";
export * from './runtime';
export * from './apis';
export * from './models';

ReactDOM.render(
    <Hello compiler={"TypeScript"} framework={"React"} />,
    document.getElementById("example")
);


