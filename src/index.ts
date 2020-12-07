import { Node } from './Node';

import graphTemplate from './graphs/graph1.json';

const createGraphFromTemplate = (template: Record<string, Record<string, number>>) => {
  const graphStore: Record<string, Node> = {};

  Object.keys(template).forEach((key) => {
    graphStore[key] = new Node();
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

graphItems.forEach((item) => {
  console.log(item.id, item.siblings);
});
