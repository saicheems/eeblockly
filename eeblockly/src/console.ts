const consoleEntries = document.getElementById("console-entries");

export class Entry {
  element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  setText(text: string) {
    this.element.firstChild.nodeValue = "> " + text;
  }
}

export function clearEntries() {
  // Removes all nodes after the first. I don't know why there are 3
  // children by default, but there are...
  while (consoleEntries.childNodes.length > 3) {
    consoleEntries.removeChild(consoleEntries.childNodes[3]);
  }
}

export function addEntry(text: string): Entry {
  var p = document.createElement("p");
  var textNode = document.createTextNode("> " + text);
  p.appendChild(textNode);
  consoleEntries.append(p);
  return new Entry(p);
}
