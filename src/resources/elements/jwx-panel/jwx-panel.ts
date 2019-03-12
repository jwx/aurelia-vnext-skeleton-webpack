import { customElement, bindable } from '@aurelia/runtime';

import * as html from './jwx-panel.html';
import  './jwx-panel.css';

@customElement({
  name: 'jwx-panel', template: html
})
export class JwxPanel {
  @bindable public widget: string;
  @bindable public title: string;
  @bindable public name: string;
  @bindable public css: string = "";

  @bindable public expanded: boolean = true;
  @bindable public contentMonitor: boolean = false;
  @bindable public refreshContent: any;
  public loading: boolean = false;

  public get panelCss(): string {
    return this.css +
      (this.expanded || this.widget ? ' expanded' : '') +
      (this.loading ? ' loading' : '') +
      (this.contentMonitor ? ' child-content-loading' : '');
  };

  public toggleExpanded() {
    if (this.widget) {
      return;
    }
    this.expanded = !this.expanded;
  }

  public refresh(ev) {
    console.log('refresh', ev);
    if (this.refreshContent) {
      this.refreshContent();
    }
    ev.stopPropagation();
  }
}
