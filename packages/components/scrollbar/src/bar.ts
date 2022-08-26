export const barProps = {
  height: {
    type: String
  },
  scrollX: {
    type: String
  },
  scrollY: {
    type: Number
  }
}

export const barEmits = {
  scroll: (val: number) => typeof val === 'number'
}