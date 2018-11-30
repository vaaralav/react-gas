export const getPublicInstance = (...args) =>
  Logger.log('getPublicInstance', ...args);

export const getRootHostContext = rootInstance => ({
  rootInstance
});

export const getChildHostContext = (
  parentContext,
  fiberType,
  rootInstance
) => ({
  parentContext,
  fiberType,
  rootInstance
});

export const prepareForCommit = rootContainerInstance => {};

export const resetAfterCommit = rootContainerInstance => {};

export const createInstance = (
  type,
  newProps,
  rootContainerInstance,
  currentHostContext,
  workInProgress
) => {
  Logger.log('CreateInstance', JSON.stringify({ type, newProps }));
  rootContainerInstance.appendParagraph(
    JSON.stringify({ type, newProps }, null, 2)
  );
  switch (type) {
    case 'Paragraph': {
      const p = rootContainerInstance.appendParagraph();
      p.removeFromParent();
      return p;
    }
    case 'Text': {
      const p = rootContainerInstance.appendParagraph();
      p.removeFromParent();
      const text = p.appendText(newProps.children);
      text.removeFromParent();
      return text;
    }
    default: {
      throw new Error(`Unknown component ${type}`);
    }
  }
};

export const appendInitialChild = (parent, child) => {
  switch (child.getType()) {
    case 'PARAGRAPH': {
      return parent.appendParagraph(child);
    }
    case 'TEXT': {
      return parent.appendText(text);
    }
    default: {
      throw new Error('This is sparta ', { parent, child });
    }
  }
};

export const finalizeInitialChildren = (
  instance,
  type,
  newProps,
  rootContainerInstance,
  currentHostContext
) => false;

export const prepareUpdate = (...args) => Logger.log('prepareUpdate', ...args);

export const shouldSetTextContent = (type, nextProps) => false;

export const shouldDeprioritizeSubtree = (...args) =>
  Logger.log('shouldDeprioritizeSubtree', ...args);

export const createTextInstance = (
  newText,
  rootContainerInstance,
  currentHostContext,
  workInProgress
) => {
  const p = rootContainerInstance.appendParagraph();
  p.removeFromParent();
  const text = p.appendText(newProps.children);
  text.removeFromParent();
  return text;
};

export const scheduleDeferredCallback = (...args) =>
  Logger.log('scheduleDeferredCallback', ...args);

export const cancelDeferredCallback = (...args) =>
  Logger.log('cancelDeferredCallback', ...args);

export const setTimeout = (...args) => Logger.log('setTimeout', ...args);

export const clearTimeout = (...args) => Logger.log('clearTimeout', ...args);

export const noTimeout = (...args) => Logger.log('noTimeout', ...args);

export const now = Date.now;

export const isPrimaryRenderer = true;

export const supportsMutation = true;

export const supportsPersistence = (...args) =>
  Logger.log('supportsPersistence', ...args);

export const supportsHydration = (...args) =>
  Logger.log('supportsHydration', ...args);

export const appendChildToContainer = (parent, child) => {
  parent.appendParagrahp('append child to container');
  parent.appendParagraph(child);
};

export const commitMount = (domElement, type, newProps, fiberNode) => {
  //domElement.focus();
};
