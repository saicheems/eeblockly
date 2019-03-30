export function createMap(expression: object): Promise<object> {
  return fetch("http://localhost:5000/v1/projects/earthengine-legacy/maps", {
    method: "POST",
    body: JSON.stringify({
      expression: expression,
      fileFormat: "PNG",
      visualizationOptions: {}
    }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}

export function computeValue(expression: object): Promise<object> {
  return fetch("http://localhost:5000/v1/value:compute", {
    method: "POST",
    body: JSON.stringify({ expression: expression }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
