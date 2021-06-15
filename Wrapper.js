class Wrapper {
  constructor(element, text, display = true) {
    this.element = document.createElement(element);
    this.element.innerHTML = text;
    this.display = !display;
    this.toggleDisplay();
  }
}
