class CustomComponent extends HTMLElement {
  constructor() {
    super();

    const oId = this.dataset.ider;
    const getElement = document.querySelector(`[data-parent-id=${oId}]`);
    const enlargeIt = document.querySelector(`[data-enlarge-id=${oId}]`);
    const removeRounded = document.querySelector(`[data-rounded-id=${oId}]`);
    const rotateIt = document.querySelector(`[data-icon-id=${oId}]`);
    const neonAdd = document.querySelector(`[data-neon-id=${oId}]`);
    const transparent = document.querySelector(`[data-transparent-id=${oId}]`);

    getElement?.addEventListener('click', () => {
      if (this.dataset.close === 'true') {
        enlargeIt?.classList.remove('hidden');
        enlargeIt?.classList.add('scale-y-100');
        transparent?.classList.add('text-transparent');
        removeRounded?.classList.remove('rounded-b-xl');
        neonAdd?.classList.add('blur-sm');
        rotateIt?.classList.add('rotate-90');
        this.setAttribute('data-close', 'false');
      } else {
        enlargeIt?.classList.add('hidden');
        enlargeIt?.classList.remove('scale-y-100');
        removeRounded?.classList.add('rounded-b-xl');
        transparent?.classList.remove('text-transparent');
        neonAdd?.classList.remove('blur-sm');
        rotateIt?.classList.remove('rotate-90');
        this.setAttribute('data-close', 'true');
      }
    });
  }
}
customElements.define('custom-component', CustomComponent);
