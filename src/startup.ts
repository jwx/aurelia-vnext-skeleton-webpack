import { DebugConfiguration } from '@aurelia/debug';
import { BasicConfiguration } from '@aurelia/jit-html-browser';
import { Aurelia, IDOM } from '@aurelia/runtime';
import { NavCustomElement, ViewportCustomElement } from '@aurelia/router';

import { registerComponent } from './utils';

import { App } from './app';
import * as resources from './resources';
import * as components from './components';

const container = BasicConfiguration.createContainer();

container.register(
  ViewportCustomElement as any,
  NavCustomElement as any,
  App as any,
);

container.register(resources as any);
components.configure(container);

window['au'] = new Aurelia(container)
  // .register(DebugConfiguration)
  .app({ host: document.querySelector('app'), component: App })
  .start();
