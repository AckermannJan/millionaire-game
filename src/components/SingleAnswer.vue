<script setup lang="ts">
///// imports /////
import { defineProps } from 'vue'

///// props/emits /////

defineProps({
  questionType: {
    type: String,
    required: true,
  },
  correct: {
    type: Boolean,
    default: null,
  },
  isHidden: {
    type: Boolean,
    default: null,
  },
})

///// refs and variables /////

///// computed /////

///// functions /////

///// watchers /////

///// lifecycle /////
</script>

<template>
  <div
    :class="[
      'question',
      `question--answer-${questionType}`,
      { 'question--correct': correct },
      { 'question--wrong': correct === false },
      { 'question--is-hidden': isHidden },
    ]"
  >
    <span class="question__text">
      <slot />
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
  width: 65%;
  margin: 0 auto;

  &__text {
    font-size: 21px;
    line-height: 18px;
    font-weight: 700;
    color: #fff;
    margin-left: 70px;
    display: block;
  }

  &--is-hidden {
    visibility: hidden;
  }

  &--answer-a {
    background-image: url('../assets/images/answer-a.png');
  }
  &--answer-b {
    background-image: url('../assets/images/answer-b.png');
  }
  &--answer-c {
    background-image: url('../assets/images/answer-c.png');
  }
  &--answer-d {
    background-image: url('../assets/images/answer-d.png');
  }

  &--correct {
    filter: hue-rotate(300deg) saturate(2);
  }

  &--wrong {
    filter: hue-rotate(150deg) saturate(2);
  }

  // mobile
  @media (max-width: 768px) {
    width: 100%;
    max-width: 540px;
    height: 10vh;
    margin: 0;
    background-position: center;

    &__text {
      margin-left: 15vw;
      height: 100%;
      padding: 20px 60px 20px 0;
      width: 70vw;
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 430px) {
    height: 7vh;

    &__text {
      padding: 5px 40px 5px 0;
      font-size: 18px;
    }
  }

  @media (max-width: 390px) {
    height: 9vh;

    &__text {
      padding: 5px 30px 5px 0;
      font-size: 16px;
    }
  }
}
</style>
