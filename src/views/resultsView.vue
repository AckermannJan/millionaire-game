<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const hasAllCorrect = computed(() => {
  return route.query.wrong === '0'
})
</script>

<template>
  <main class="quiz-container">
    <div v-if="hasAllCorrect" class="heart"><span>Du hast alles richtig beantwortet!</span></div>
    <div v-else class="heart">
      <span>Du hast {{ route.query.wrong }} Frage(n) falsch beantwortet!</span>
    </div>
  </main>
</template>

<style scoped>
#app {
  @media (max-width: 768px) {
    justify-content: center;
  }
}

.heart {
  background: url('../assets/images/heart.png') no-repeat center center;
  background-size: contain;
  height: 30%;
  padding: 0 10%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: goldenrod;
  span {
    margin-top: -50px;
    width: 80%;
    display: block;
  }
}

.quiz-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
}
</style>
