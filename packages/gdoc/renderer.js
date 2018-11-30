import Reconciler from 'react-reconciler';
import * as HostConfig from './hostConfig';

const reconciler = Reconciler(HostConfig);

export const render = (element, documentSection, callback) => {
  // element: This is the react element for App component
  // renderDom: This is the host root element to which the rendered app will be attached.
  // callback: if specified will be called after render is done.

  const isAsync = false; // Disables async rendering
  const container = reconciler.createContainer(documentSection, isAsync); // Creates root fiber node.

  const parentComponent = null; // Since there is no parent (since this is the root fiber). We set parentComponent to null.
  reconciler.updateContainer(element, container, parentComponent, callback); // Start reconcilation and render the result
};
