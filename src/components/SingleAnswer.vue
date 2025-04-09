<script setup lang="ts">
///// imports /////
import { defineProps } from 'vue'
import GameButton from '@/components/GameButton.vue'

///// props/emits /////

defineProps<{
  questionType: string
  correct: boolean | null
  isHidden: boolean
}>()

///// refs and variables /////

///// computed /////

///// functions /////

///// watchers /////

///// lifecycle /////
</script>

<template>
  <GameButton
    :class="[
      'question',
      `question--answer-${questionType}`,
      { 'question--correct': correct },
      { 'question--wrong': correct === false },
      { 'question--is-hidden': isHidden },
    ]"
  >
    <template v-if="questionType === 'a'" #prepend>
      <span class="question__type">A:</span>
    </template>
    <template v-else-if="questionType === 'b'" #prepend>
      <span class="question__type">B:</span>
    </template>
    <template v-else-if="questionType === 'c'" #prepend>
      <span class="question__type">C:</span>
    </template>
    <template v-else-if="questionType === 'd'" #prepend>
      <span class="question__type">D:</span>
    </template>
    <slot />
  </GameButton>
</template>

<style lang="scss">
.question {
  &__type {
    color: goldenrod;
    font-size: 26px;
  }

  &--is-hidden {
    visibility: hidden;
  }

  &--correct {
    filter: hue-rotate(300deg) saturate(2);
  }

  &--wrong {
    filter: hue-rotate(150deg) saturate(2);
  }
}
</style>
