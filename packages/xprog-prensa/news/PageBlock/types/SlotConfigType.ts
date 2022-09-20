import { SlotItemType } from './SlotItemType'

interface SlotConfigType {
  slotTemplate?: string
  slotAutoLeftElements?: SlotItemType[] | []
  slotAutoCenterElements?: SlotItemType[] | []
  slotAutoRightElements?: SlotItemType[] | []
  slotManualBottomLeft?: SlotItemType[] | []
  slotManualBottomCenter?: SlotItemType[] | []
  slotManualBottomRight?: SlotItemType[] | []
  slotManualExtra?: SlotItemType[] | []
  slotManualTopLeft?: SlotItemType[] | []
  slotManualTopCenter?: SlotItemType[] | []
  slotManualTopRight?: SlotItemType[] | []
  slotLeftComponent?: string
  slotLeftIconValue?: string
  slotLeftReadMoreEnabled?: boolean
  slotLeftReadMoreLink?: string
  slotLeftReadMoreTitle?: string
  slotLeftTeaserBgColor?: string
  slotLeftTeaserColor?: string
  slotLeftTeaserValue?: string
  slotLeftTitleEnabled?: boolean
  slotLeftTitleLink?: string
  slotLeftTitleValue?: string
  slotCenterComponent?: string
  slotCenterIconValue?: string
  slotCenterReadMoreEnabled?: boolean
  slotCenterReadMoreLink?: string
  slotCenterReadMoreTitle?: string
  slotCenterTeaserBgColor?: string
  slotCenterTeaserColor?: string
  slotCenterTeaserValue?: string
  slotCenterTitleEnabled?: boolean
  slotCenterTitleLink?: string
  slotCenterTitleValue?: string
  slotRightComponent?: string
  slotRightIconValue?: string
  slotRightReadMoreEnabled?: boolean
  slotRightReadMoreLink?: string
  slotRightReadMoreTitle?: string
  slotRightTeaserBgColor?: string
  slotRightTeaserColor?: string
  slotRightTeaserValue?: string
  slotRightTitleEnabled?: boolean
  slotRightTitleLink?: string
  slotRightTitleValue?: string
}

export { SlotConfigType }