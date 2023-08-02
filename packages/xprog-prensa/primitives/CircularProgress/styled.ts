import { PrensaEngine } from '../../prensa.default.config'

export const SVG = PrensaEngine.styled('svg', {})

export const CircularAnimation = PrensaEngine.keyframes({
  '0%': { strokeDashoffset: 0 },
  '100%': { strokeDashoffset: -220 },
})