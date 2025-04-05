<script setup lang="ts">
///// imports /////

///// props/emits /////

///// refs and variables /////

///// computed /////

///// functions /////

///// watchers /////

///// lifecycle /////
</script>

<template>
  <div class="quiz-question">
    <div class="quiz-question__price">Current price</div>
    <div class="quiz-question__text">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.quiz-question {
  background: url('../assets/images/question.png') no-repeat center;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;

  &__price {
    font-size: 21px;
    line-height: 18px;
    font-weight: 700;
    color: #000;
    height: 45px;
    width: 75%;
    background: url(/src/assets/images/price.png) no-repeat center/contain;
    position: absolute;
    top: 1.5rem;
    left: 12%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__text {
    font-size: 21px;
    line-height: 18px;
    font-weight: 700;
    color: #fff;
    padding: 20px 50px;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 81vw;
    max-width: 400px;
    margin: 0;
    background-position: center;
    background-size: contain;
  }

  @media (max-width: 430px) {
    width: 95vw;

    &__text {
      font-size: 18px;
    }
  }
}
</style>
