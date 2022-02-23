//algorithm dijkstra
const graph2 = {};
graph2.a = { b: 2, c: 1 };
graph2.b = { f: 7 };
graph2.c = { d: 5, e: 2 };
graph2.d = { f: 2 };
graph2.e = { f: 1 };
graph2.f = { g: 1 };
graph2.g = {};

const shortPath = (graph, start, end) => {
  let costs = {};
  let processed = [];
  let neighbors = {};
  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || 10000000000;
    }
  });
  let node = findNodeLowerCosts(costs, processed);
  while (node) {
    const cost = costs[node];
    neighbors = graph[node];
    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });
    processed.push(node);
    node = findNodeLowerCosts(costs, processed);
  }
  return costs;
};

function findNodeLowerCosts(costs, processed) {
  let lowerCost = 10000000000;
  let lowerNode;
  Object.keys(costs).forEach((node) => {
    let cost = costs[node];
    if (cost < lowerCost && !processed.includes(node)) {
      lowerCost = cost;
      lowerNode = node;
    }
  });
  return lowerNode;
}

console.log(shortPath(graph2, "a", "g")); //{ b: 2, c: 1, d: 6, e: 3, f: 4, g: 5 }
