class darko {
  static get prefers() {
    return matchMedia('(prefers-color-scheme: dark)').matches
  }
  static get state() {
    return localStorage.DARKO ? 'true' === localStorage.DARKO : darko.prefers
  }
  static set state(v) {
    if (((localStorage.DARKO = String(!!v)), v))
      document.documentElement.setAttribute('data-theme', 'dark')
    else document.documentElement.removeAttribute('data-theme')
  }
  static toggle() {
    return (this.state = !this.state)
  }
}
if (darko.state) {
  document.documentElement.setAttribute('data-theme', 'dark')
}
const _i = (v) =>
  v
    ? 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'
    : 'M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
class Darko extends HTMLElement {
  constructor() {
    super()
    const w = this.attachShadow({ mode: 'closed' })
    {
      const y = `<style>svg{cursor:pointer;fill:currentColor;height:1.12em;width:1.12em</style>`
      const p = `<path d="${_i(darko.state)}"/>`
      const s = `<svg viewBox="0 0 20 20">${p}</svg>`
      w.innerHTML = y + s
    }
    this._p = w.children[1].children[0]
    this.addEventListener('click', (event) => {
      if (event.shiftKey) {
        if (!localStorage.DARKO) return
        this._d((darko.state = darko.prefers))
        localStorage.removeItem('DARKO')
      } else {
        this._d(darko.toggle())
      }
    })
  }
  _d(v) {
    this._p.setAttribute('d', _i(v))
  }
}
customElements.define('x-darko', Darko)
