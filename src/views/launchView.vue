<script setup lang="ts">
import GameButton from '@/components/GameButton.vue'
import { useRouter } from 'vue-router'

const { push } = useRouter()

const handleClick = () => {
  push('/game')
}
</script>

<template>
  <main class="quiz-container">
    <div class="heart">
      <span> Alles gute zum Geburtstag! </span>
    </div>
    <GameButton center @click="handleClick"> Spiel starten </GameButton>
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
  font-size: 30px;
  font-weight: bold;
  color: goldenrod;
  span {
    margin-top: -50px;
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
