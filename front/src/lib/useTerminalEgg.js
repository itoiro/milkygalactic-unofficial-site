import { ref } from 'vue'

export const useTerminalEgg = () => {
  const command = ref('')
  const logs = ref([])

  const submitCommand = () => {
    const value = command.value.trim()
    if (!value) {
      return
    }

    logs.value.push(`> ${value}`)

    const lower = value.toLowerCase()

    if (lower === 'clear') {
      logs.value.splice(0)
    } else if (lower === 'whoami') {
      logs.value.push('  you')
      logs.value.push('  max')
    } else if (lower === 'max') {
      logs.value.push('  Can you hear me?')
    } else if (lower === 'whoareyou') {
      logs.value.push("  Hello, Earth! I'm Max.")
    } else {
      logs.value.push(`  command not found: ${value}`)
    }

    if (logs.value.length > 20) {
      logs.value.splice(0, logs.value.length - 20)
    }

    command.value = ''
  }

  return {
    command,
    logs,
    submitCommand,
  }
}
