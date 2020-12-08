import { Node } from './Node';
import { DijkstraAlgorithm } from './DijkstraAlgorithm';
import { ShortestRoute } from './ShortestRoute';

import graphTemplate from './graphs/graph1.json';

const createGraphFromTemplate = (template: Record<string, Record<string, number>>) => {
  const graphStore: Record<string, Node> = {};

  Object.keys(template).forEach((key) => {
    graphStore[key] = new Node([]);
  });

  Object.keys(graphStore).forEach((key) => {
    graphStore[key].siblings = Object.keys(template[key]).map((siblingKey) => {
      return {
        node: graphStore[siblingKey],
        weight: template[key][siblingKey]
      };
    });
  });

  return Object.values(graphStore);
}

const graphItems = createGraphFromTemplate(graphTemplate);

const algorithm = new DijkstraAlgorithm();
const shortestRoute = new ShortestRoute(algorithm);

shortestRoute
  .find(graphItems[0], graphItems[6])
  .then((result) => {
    console.log(result.route);
    console.log(result.distance);
    console.log(algorithm.getAdjacencyMatrix());
    console.log(algorithm.getGraphMap());
  });
