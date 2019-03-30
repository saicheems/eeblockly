declare var Split: any;
import console = require("./console");
import "./editor.ts";
import "./map.ts";

Split(["#left-pane", "#right-pane"], {
  direction: "horizontal",
  cursor: "col-resize",
  gutterSize: 24,
  minSize: [0, 400]
});

Split(["#editor", "#console"], {
  direction: "vertical",
  cursor: "row-resize",
  gutterSize: 24,
  sizes: [60, 40]
});
