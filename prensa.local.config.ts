import { createStitches } from '@stitches/react'

import { PrensaEngineDefaultConfig } from './prensa.default.config'

/**
 * Prensa | Components engine
 */
export const PrensaEngine = createStitches(PrensaEngineDefaultConfig)
/**
 * Prensa | Components types
 */
export type PrensaEngineTypes = typeof PrensaEngine
export type PrensaEngineTeste = typeof PrensaEngine['config']['media']