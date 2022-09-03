export const scrollbarProps = {
  height: {
    type: String
  },
  always: {
    type: Boolean
  }
}

export const scrollbarEmits = {
  scroll: ({
    scrollLeft,
    scrollTop
  }: {
    scrollLeft: number
    scrollTop: number
  }) => typeof scrollLeft === 'number' && typeof scrollTop === 'number'
}
