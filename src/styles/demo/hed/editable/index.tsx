import { PageBlockPreview } from '../../../../components/PageBlock/types'
/**
 * Action Save Mockup
 */
const save_action = async () => {
  await setTimeout(null, 2000)
  return true
}
// editable actions
export const preview_editable: PageBlockPreview = {
  enabled: true,
  save_action: save_action
}