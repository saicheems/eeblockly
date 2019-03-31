const consoleEntries = document.getElementById("console-entries");

export class Entry {
  node: Node;

  constructor(text: string) {
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(""));
    this.node = p;
    this.setText(text);
  }

  setText(text: string): void {
    this.node.firstChild.nodeValue = "> " + text;
  }
}

export function clearEntries(): void {
  // Removes all nodes after the first. I don't know why there are 3
  // children by default, but there are...
  while (consoleEntries.childNodes.length > 3) {
    consoleEntries.removeChild(consoleEntries.childNodes[3]);
  }
}

export function addEntry(text: string): Entry {
  let entry = new Entry(text);
  consoleEntries.append(entry.node);
  return entry;
}
