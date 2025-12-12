<script setup>
import { useTerminalEgg } from '../lib/useTerminalEgg.js'

const { command, logs, submitCommand } = useTerminalEgg()
</script>

<template>
  <div class="terminal-wrapper">
    <div class="terminal-logs">
      <p v-for="(log, index) in logs" :key="index">{{ log }}</p>
    </div>
    <form class="terminal-form" @submit.prevent="submitCommand">
      <span class="prompt">&gt;</span>
      <input v-model="command" type="text" />
    </form>
  </div>
</template>

<style scoped>
.terminal-wrapper {
  color: #ffd95c;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.terminal-logs {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 0.8rem;
  opacity: 0.8;
  min-height: 30px;
  font-family: inherit;
  letter-spacing: 0.02em;
  white-space: pre;
}

.terminal-form {
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 0.9rem;
  color: #ffd95c;
}

.prompt {
  opacity: 0.6;
}

.terminal-form input {
  flex: 1;
  background: transparent;
  border: none;
  color: inherit;
  outline: none;
  font-family: inherit;
}

</style>
