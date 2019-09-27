export default {
  bind(el, bindings, vnode) {
    // элемент, к которому привязывается директива; передаваемые свойства; объект виртуального дерева, где хранится директива
    const args = bindings.arg;

    el.style[args] = bindings.value;
  }
};
