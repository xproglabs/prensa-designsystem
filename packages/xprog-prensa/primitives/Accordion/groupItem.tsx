import React from 'react'

import { Block } from '../Block'
import AccordionContent from './content'
import { IconButton } from '../IconButton'
import { Link } from '../Link'
import { Typography } from '../Typography'
import ExpandLessIcon from './ExpandLessIcon'
import ExpandMoreIcon from './ExpandMoreIcon'
import { IAccordionItemGroup } from './types'

const AccordionItemGroup: React.FC<IAccordionItemGroup> = ({
  accordionContentAs,
  accordionTitleAs,
  accordionTitleVariant,
  children,
  customLink,
  customLinkProps,
  css,
  expanded,
  href,
  iconExpandedState,
  icon,
  iconNotExpandedState,
  id,
  innerSpace,
  onClick,
  title
}) => {

  let container_css: any = {}
  let content_css: any = {}
  let title_css: any = { align: ['row', 'between', 'middle'] }
  let icon_button_css: any = {}
  let icon_css: any = {}

  const button_id = `pds-accordion-button-${id}`
  const section_id = `pds-accordion-section-${id}`

  if (css && css.accordionItemGroupContainer) {
    container_css = { ...css.accordionItemGroupContainer }
  }

  if (css && css.accordionTitle) {
    if (css.accordionTitle.title) {
      title_css = { ...title_css, ...css.accordionTitle.title }
    }
    if (css.accordionTitle.iconButton) {
      icon_button_css = { ...css.accordionTitle.iconButton } 
    }
    if (css.accordionTitle.icon) {
      icon_css = { ...css.accordionTitle.icon } 
    }
  }

  if (css && css.accordionContent) {
    content_css = { ...content_css, ...css.accordionContent }
  }

  const renderExpandedStateIcon = () => {
    if (icon) {
      return icon
    }
    if (iconExpandedState) {
      return iconExpandedState
    }
    return <ExpandLessIcon />
  }

  const renderNotExpandedStateIcon = () => {
    if (icon) {
      return icon
    }
    if (iconNotExpandedState) {
      return iconNotExpandedState
    }
    return <ExpandMoreIcon />
  }

  const handleClick = (e) => {
    if (onClick) {
      onClick && onClick(e)
    }
  }

  const itemIcon = expanded ? renderExpandedStateIcon() : renderNotExpandedStateIcon()

  return (
    <Block
      className='pds-Accordion-ItemGroup-container'
      css={container_css}
    >
      <Typography
        as={accordionTitleAs}
        aria-controls={section_id}
        className='pds-Accordion-ItemGroup-title'
        id={button_id}
        variant={accordionTitleVariant}
        css={title_css}
      >
        <Link
          bypass={!href}
          component={customLink}
          href={href}
          {...customLinkProps}
        >
          {title}
        </Link>
        <Link
          bypass={children ? true : false}
          component={customLink}
          href={href}
          {...customLinkProps}
        >
          <IconButton
            className='pds-Accordion-ItemGroup-IconButton'
            variant='ghost'
            onClick={handleClick}
            icon={itemIcon}
            css={{ button: icon_button_css, icon: icon_css }}
          />
        </Link>
      </Typography>
      <AccordionContent
        className='pds-Accordion-ItemGroup-content'
        as={accordionContentAs}
        id={section_id}
        innerSpace={innerSpace}
        aria-labelledby={button_id}
        hidden={!expanded}
        css={content_css}
      >
        {children}
      </AccordionContent>
    </Block>
  )
}

AccordionItemGroup.defaultProps = {
  accordionTitleAs: 'h3',
  accordionTitleVariant: 'buttonLabel-default',
  accordionContentAs: 'section'
}

export default AccordionItemGroup