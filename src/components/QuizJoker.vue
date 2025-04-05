<script setup lang="ts">
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

  &--joker-fiftyFifty {
    background-image: url('../assets/images/fiftyFifty.png');
  }
  &--joker-askTheAudience {
    background-image: url('../assets/images/askTheAudience.png');
  }
  &--joker-phoneAFriend {
    background-image: url('../assets/images/phoneAFriend.png');
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
