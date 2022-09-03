export const placementType = [
  'top',
  'left',
  'right',
  'bottom',
  'topLeft',
  'topRight',
  'bottomLeft',
  'bottomRight',
  'leftTop',
  'leftBottom',
  'rightTop',
  'rightBottom'
]
export const TriggerType = ['hover', 'active']
export const popoverProps = {
  trigger: {
    type: String,
    default: 'hover',
    validator(value: string) {
      return TriggerType.includes(value)
    }
  }
}
