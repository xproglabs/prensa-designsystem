import React from 'react'

import { EditWrap } from '../../../../components/EditArea/styled'
import { image_load } from './image'
/**
 * Render Preview component
 * @returns
 */
export const preview_render = ({
  children,
  text,
  preview,
  subject
}) => {
  if(!preview || !preview.enabled) {
    return children
  }
  // editable refs
  const ref_text = React.useRef(text || '')
  const ref_subject = React.useRef(subject || '')
  const [modified, set_modified] = React.useState(false)
  const [selected, set_selected] = React.useState(false)
  const [restart, set_restart] = React.useState(false)
  const [saving, set_saving] = React.useState(false)
  // editable reset function
  const resetEditionFields = () => {
    ref_text.current = text
    ref_subject.current = subject
    set_modified(false)
    set_saving(false)
    set_restart(true)
  }
  const submitEditionFields = () => {
    // const data = {
    //   title: ref_text.current,
    //   subject: ref_subject.current
    // }
    set_saving(true)
    // preview.save_action()
    setTimeout(() => {
      set_modified(false)
      set_saving(false)
      set_restart(true)
    }, 2000)
  }
  // editable reset effect
  React.useEffect(() => {
    if(restart === true) {
      set_restart(false)
    }
  }, [restart])
  return (
    <EditWrap
      enabled={modified}
      saving={saving}
      selected={selected}>
      {React.cloneElement(children, { 
        edit_buttons: {
          action: submitEditionFields,
          enabled: modified && !saving,
          reset: resetEditionFields
        },
        editable: {
          enabled: true,
          image_load,
          modified: modified,
          saving: saving,
          set_selected: set_selected,
          set_modified: set_modified,
        },
        states: {
          title: ref_text,
          subject: ref_subject
        }
      })}
    </EditWrap>
  )
}
/**
 * Action Save Mockup
 */
const save_action = async () => {
  await setTimeout(null, 2000)
  return true
}
// editable actions
export const preview_editable = {
  enabled: false,
  render: preview_render,
  save_action: save_action
}