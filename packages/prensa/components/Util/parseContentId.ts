import { get } from 'lodash'
/**
 * Transform contentId or contentIdVersioned in a contentIdString
 * @param contentId contentId or contentIdVersioned
 * @returns a valid contentIdString
 */
function parseContentId(contentId: string) {

  let splitter: string[]

  splitter = contentId.split(':')

  contentId = get(splitter, '[0]', '')

  splitter = contentId.split('.')

  contentId = `${get(splitter, '[0]')}.${get(splitter, '[1]')}`

  return contentId
}

export { parseContentId }