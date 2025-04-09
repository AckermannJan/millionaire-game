<script setup lang="ts">
///// imports /////
import { defineProps } from 'vue'

///// props/emits /////
withDefaults(defineProps<{ center?: boolean }>(), {
  center: false,
})

///// refs and variables /////

///// computed /////

///// functions /////

///// watchers /////

///// lifecycle /////
</script>

<template>
  <div class="button">
    <span class="button__prepend">
      <slot name="prepend" />
    </span>
    <span :class="['button__text', { 'button__text--center': center }]" class="">
      <slot />
    </span>
  </div>
</template>

<style lang="scss">
.button {
  height: 68px;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-image: url('../assets/images/button.png');

  &__text {
    font-size: 21px;
    line-height: 18px;
    font-weight: 700;
    color: #fff;
    margin-left: 10px;
    display: block;

    &--center {
      text-align: center;
      flex: 1;
    }
  }

  &__prepend {
    font-size: 21px;
    line-height: 18px;
    font-weight: 700;
    color: #fff;
    margin-left: 40px;
    display: block;
  }

  // mobile
  @media (max-width: 768px) {
    width: 100%;
    max-width: 540px;
    height: 10vh;
    margin: 0;
    background-position: center;
  }

  @media (max-width: 430px) {
    height: 7vh;

    &__text {
      padding: 5px 40px 5px 0;
      font-size: 21px;
    }
  }

  @media (max-width: 390px) {
    height: 9vh;

    &__text {
      padding: 5px 30px 5px 0;
      font-size: 18px;
    }
  }
}
</style>
