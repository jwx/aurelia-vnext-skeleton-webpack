import { IContainer } from '@aurelia/kernel';

import { registerComponent } from '../utils';

import { HelloWorld } from './hello-world/hello-world';

export function configure(container: IContainer) {
    registerComponent(
        container,

        HelloWorld,
    );
}
