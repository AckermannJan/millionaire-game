<script setup>
import SingleQuestion from "@/components/SingleAnswer.vue";
import QuizQuestion from "@/components/QuizQuestion.vue";
import QuizJoker from "@/components/QuizJoker.vue";
</script>

<template>
  <header class="quiz-header">
    <QuizQuestion>
      When was the first episode of "Who Wants to Be a Millionaire?" aired?
    </QuizQuestion>
  </header>

  <main class="quiz-container">
    <div class="quiz-joker-group">
      <QuizJoker joker-type="50-50" :selected="true" :used="false"/>
      <QuizJoker joker-type="phone" :selected="false" :used="true"/>
      <QuizJoker joker-type="fans" :selected="false" :used="false"/>
    </div>

    <div class="answer-group">
      <SingleQuestion question-type="a" :correct="true"/>
      <SingleQuestion question-type="b" :correct="false"/>
      <SingleQuestion question-type="c"/>
      <SingleQuestion question-type="d"/>
    </div>
  </main>
</template>

<style>
.quiz-header {
  margin: 3rem 0 4rem 0;
}

.quiz-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

.quiz-joker-group {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
}

.answer-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}
</style>
