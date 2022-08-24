import { ref } from "vue"

const zIndex = ref(2000)

export const useZIndex = () => {
  const currentZIndex = zIndex
  const nextZIndex = () => {
    currentZIndex.value ++
    return currentZIndex.value
  }
  return {
    currentZIndex,
    nextZIndex,
  }
}