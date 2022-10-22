import { ref } from 'vue'

interface T {
  a: string
  b: boolean
}
export const name = 'jiaHang'
export const age = ref(18)
export const tmp: T = {
  a: '6',
  b: false,
}
