<script setup>
///// imports /////
import { defineProps } from 'vue';

///// props/emits /////

const props = defineProps({
  questionType: {
    type: String,
    required: true,
  },
  correct: {
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
  <div :class="['question' , `question--answer-${questionType}`, { 'question--correct': correct, 'question--wrong': correct === false}]">
    <span class="question__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </span>
  </div>
</template>

<style lang="scss">
  .question {
    height: 76px;
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    margin: 0 10px;

    &__text {
      font-size: 21px;
      line-height: 18px;
      font-weight: 700;
      color: #fff;
      margin-left: 80px;
      display: block;
    }

    &--answer-a {
      background-image: url('../assets/answer-a.png');
    }
    &--answer-b {
      background-image: url('../assets/answer-b.png');
    }
    &--answer-c {
      background-image: url('../assets/answer-c.png');
    }
    &--answer-d {
      background-image: url('../assets/answer-d.png');
    }

    &--correct {
      filter: hue-rotate(300deg) saturate(2);
    }

    &--wrong {
      filter: hue-rotate(150deg) saturate(2);
    }
  }
</style>
