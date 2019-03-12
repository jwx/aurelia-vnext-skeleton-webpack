import { inject } from '@aurelia/kernel';
import { customElement } from '@aurelia/runtime';
import { Router } from '@aurelia/router';

@inject(Router)
@customElement({
  name: 'app', template:
    `<template>
  <div class="\${router.isNavigating ? 'routing' : ''}" style="--primary-color: \${color}">
    <div>
      <au-nav name="app-menu"></au-nav>
      <span class="loader \${router.isNavigating ? 'routing' : ''}">&nbsp;</span>
    </div>
    <jwx-panel title.bind="'Panel'">
      <template replace-part="content" class="info">
        Testing skeleton-webpack
      </template>
    </jwx-panel>
    <au-viewport name="content" default="hello-world"></au-viewport>
  </div>
</template>
` })
export class App {
  constructor(private readonly router: Router) {
    this.router.activate({}).catch(error => { throw error; });
    this.router.addNav('app-menu', [
      // {
      //   title: 'Authors',
      //   route: [Authors, About],
      //   consideredActive: [Authors],
      // },
      // {
      //   route: About,
      //   title: 'About',
      // },
    ]);
  }
}
