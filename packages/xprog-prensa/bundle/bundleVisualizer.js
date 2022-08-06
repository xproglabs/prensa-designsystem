import { visualizer } from 'rollup-plugin-visualizer'

export function createTreeMapViz(filename) {
  return visualizer({
    filename: `bundle/viz/${filename}_map.html`,
    template: 'treemap'
  })
}

export function createNetworkViz(filename) {
  return visualizer({
    filename: `bundle/viz/${filename}_network.html`,
    template: 'network'
  })
}