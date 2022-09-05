export const filterAttrs = (attrs: any) => {
  const inputAttrs: any = {}
  const excludeArr = Object.entries(attrs).filter((attr) => {
    return attr[0] !== 'style' && attr[0] !== 'class'
  })
  for (const key of excludeArr) {
    inputAttrs[key[0]] = key[1]
  }
  return inputAttrs
}
