import { visualizer } from 'rollup-plugin-visualizer'

export function createTreeMapViz() {
  return visualizer({
    filename: 'bundleEngine/viz/treeMapViz.html',
    template: 'treemap'
  })
}

export function createNetworkViz() {
  return visualizer({
    filename: 'bundleEngine/viz/networkViz.html',
    template: 'network'
  })
}