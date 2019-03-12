import { customElement, bindable } from '@aurelia/runtime';

import * as html from './jwx-table.html';
import './jwx-table.css';

@customElement({
    name: 'jwx-table', template: html
})
export class JwxTable {
    constructor() { console.log('?????????? jwx-table constructor'); }

    public scrolled(event: any): void {
        let elem = event.target;

        let translate = `translate(0, ${elem.scrollTop}px)`;

        for (let th of elem.querySelectorAll("th")) {
            th.style.transform = translate;
        }
    }
}
