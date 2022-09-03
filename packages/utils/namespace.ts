const Namespace = 'z'
const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string
) => {
  let cls = `${namespace}-${block}`
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (element) {
    cls += `__${element}`
  }
  return cls
}

export const useNamespace = (block: string) => {
  const b = (blockSuffix = '') => _bem(Namespace, block, blockSuffix, '')
  const m = (state: string | undefined) => {
    return state ? _bem(Namespace, block, state, '') : ''
  }
  const is = (attribute: string, state: Boolean) => {
    return state ? `is-${attribute}` : ''
  }
  const e = (element: string) => {
    return element ? _bem(Namespace, block, '', element) : ''
  }
  return {
    b,
    m,
    is,
    e
  }
}
