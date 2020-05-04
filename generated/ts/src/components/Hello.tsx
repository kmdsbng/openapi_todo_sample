import * as React from "react";
import {DefaultApi} from "../apis";
import {Configuration} from "../runtime";
export * from '../runtime';
export * from '../apis';
export * from '../models';

export interface HelloProps { compiler: string; framework: string; }

// export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (<div>
                <h1>Hello from {this.props.compiler} and {this.props.framework} edited!</h1>
                <button onClick={this.onClickTodoList}>todo_list</button>
            </div>
        );
    }

    onClickTodoList = async () => {
        const config = new Configuration({basePath: "http://127.0.0.1:4010"});
        const api = new DefaultApi(config);

        const {todos} = await api.getTodoList();

        console.log(todos);

    }
}