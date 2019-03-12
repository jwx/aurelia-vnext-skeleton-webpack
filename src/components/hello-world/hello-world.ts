import { customElement, BindingBehaviorResource } from "@aurelia/runtime";

import * as html from './hello-world.html';
import './hello-world.css';

@customElement({
    name: 'hello-world', template: html,
    dependencies: [BindingBehaviorResource.define('spy', class { bind(...args) { console.log(...args); } })]
})
export class HelloWorld {
    public greeted: string = 'world';
    public columns = [
        { name: 'id', title: 'Id' },
        { name: 'text', title: 'Text' },
    ];
    public rows = [];

    constructor() {
        for (let i = 0; i < 20; i++) {
            this.rows.push({ id: i, text: `Row No ${i}` });
        }
    }
}
