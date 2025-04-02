<script setup>
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
    <div class="quiz-question__price">
      Current price
    </div>
    <div class="quiz-question__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
  </div>
</template>

<style lang="scss">
.quiz-question {
  height: 200px;
  background: url('../assets/question.png') no-repeat center;
  position: relative;

  &__price {
    font-size: 21px;
    line-height: 18px;
    font-weight: 700;
    color: #000;
    height: 45px;
    width: 70vw;
    background: url(/src/assets/price.png) no-repeat center/contain;
    position: absolute;
    top: -1rem;
    left: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__text {
    font-size: 21px;
    line-height: 18px;
    font-weight: 700;
    color: #fff;
    padding: 20px 70px;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
  }
}
</style>
