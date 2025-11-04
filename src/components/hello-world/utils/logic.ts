import { ref } from 'vue'

export function useHelloWorld() {
  const count = ref(0)
  function increment() {
    count.value++
  }
  return { count, increment }
}
