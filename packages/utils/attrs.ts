export const filterAttrs = (attrs: {}) => {
  let inputAttrs = {}
  let excludeArr = Object.entries(attrs).filter((attr: [string,any]) => {
    return attr[0] !== 'style' && attr[0] !== 'class'
  })
  for (const key of excludeArr) {
    inputAttrs[key[0]] = key[1]
  }
  return inputAttrs
}