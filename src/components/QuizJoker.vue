<script setup>
///// imports /////
import { defineProps } from 'vue';

///// props/emits /////

const props = defineProps({
  jokerType: {
    type: String,
    required: true,
  },
  selected: {
    type: Boolean,
    default: null,
  },
  used: {
    type: Boolean,
    default: null,
  },
});

///// refs and variables /////

///// computed /////

///// functions /////

///// watchers /////

///// lifecycle /////
</script>

<template>
  <div :class="['quiz-joker' , `quiz-joker--joker-${jokerType}`, {'quiz-joker--selected': selected, 'quiz-joker--used': used}]" />
</template>

<style lang="scss">
.quiz-joker {
  height: 6rem;
  width: 6rem;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;

  &--joker-50-50 {
    background-image: url('../assets/joker-50-50.png');
  }
  &--joker-fans {
    background-image: url('../assets/joker-fans.png');
  }
  &--joker-phone {
    background-image: url('../assets/joker-phone.png');
  }

  &--selected {
    filter: hue-rotate(190deg) saturate(4);
  }

  &--used {
    filter: saturate(0);
  }

  @media (max-width: 430px) {
    height: 10vh;
    background-position: center;
  }
}
</style>
