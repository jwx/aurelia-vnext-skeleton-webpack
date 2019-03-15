import { customElement, bindable } from '@aurelia/runtime';

import * as html from './jwx-table.html';
import './jwx-table.css';

@customElement({
    name: 'jwx-table', template: html
})
export class JwxTable {
    @bindable rows: any[] = [];

    public get data() {
        const data = this.rows.map((row) => {
            return { id: row.id, text: `Data ${row.text}` }
        });
        return data;
    }

    public scrolled(event: any): void {
        let elem = event.target;

        let translate = `translate(0, ${elem.scrollTop}px)`;

        for (let th of elem.querySelectorAll("th")) {
            th.style.transform = translate;
        }
    }
}
