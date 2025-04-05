<script setup lang="ts">
import SingleQuestion from '@/components/SingleAnswer.vue'
import QuizQuestion from '@/components/QuizQuestion.vue'
import QuizJoker from '@/components/QuizJoker.vue'
import thinkingSound from '@/assets/sounds/thinking.mp3'
import wrongSound from '@/assets/sounds/wrong.mp3'
import correctSound from '@/assets/sounds/correct.mp3'
import nextQuestionSound from '@/assets/sounds/nextQuestion.mp3'
import { useSound } from '@vueuse/sound'
import questions from '@/assets/questions.json'
import { computed, onMounted, ref } from 'vue'
import { JokersEnum, Option, Question, SelectedAnswer } from '@/types/question.ts'

// Refs and Computed Properties
const currentQuestionIndex = ref(0)
const currentQuestion = computed<Question>(() => questions[currentQuestionIndex.value])
const dialog = ref<HTMLDivElement | null>(null)
const selectedAnswer = ref<SelectedAnswer>({
  answer: null,
  isCorrect: null,
})
const isSelectionAnimationActive = ref(false)
const hiddenAnswers = ref<number[]>([])
const quizResults = ref({
  correct: [],
  wrong: [],
})

const jokerMetaData = ref({
  [JokersEnum.fiftyFifty]: { isUsed: false, isActive: false },
  [JokersEnum.phoneAFriend]: { isUsed: false, isActive: false },
  [JokersEnum.askTheAudience]: { isUsed: false, isActive: false },
})

const questionTypeMap: Record<number, string> = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
}

// Sound Effects
const { play: playThinking, stop: stopThinking } = useSound(thinkingSound, {
  onend: () => {
    playThinking()
  },
})
const { play: playCorrect } = useSound(correctSound)
const { play: playWrong } = useSound(wrongSound)
const { play: playNextQuestion, stop: stopNextQuestion } = useSound(nextQuestionSound, {
  onend: () => {
    playThinking()
  },
})

// Methods
const handleQuestionSelection = (option: Option, index: number) => {
  if (isSelectionAnimationActive.value) return

  stopThinking()
  stopNextQuestion()
  selectedAnswer.value = { answer: index, isCorrect: option.isCorrect }
  isSelectionAnimationActive.value = true

  if (option.isCorrect) {
    quizResults.value.correct.push(index)
    playCorrect()
  } else {
    // TODO: Handle wrong answer
    quizResults.value.wrong.push(index)
    playWrong()
  }

  flashAnswer(index)
  setTimeout(nextQuestion, 7000)
}

const flashAnswer = (index: number) => {
  const flashCount = 7
  const flashInterval = setInterval(() => {
    selectedAnswer.value.answer = selectedAnswer.value.answer === null ? index : null
  }, 500)

  setTimeout(() => {
    clearInterval(flashInterval)
    selectedAnswer.value.answer = index
  }, flashCount * 500)
}

const handleJokerSelection = (joker: JokersEnum) => {
  const jokerData = jokerMetaData.value[joker]
  if (jokerData.isUsed) return

  jokerData.isActive = true
  if (joker === JokersEnum.fiftyFifty) {
    hiddenAnswers.value = currentQuestion.value.jokers[JokersEnum.fiftyFifty].optionsToRemove
  }
  if (joker === JokersEnum.askTheAudience) {
    // Open the dialog
    if (dialog.value) {
      dialog.value.showModal()
    }
  }
}

const nextQuestion = () => {
  resetGameForNextQuestion()
  playNextQuestion()
}

const resetGameForNextQuestion = () => {
  selectedAnswer.value = { answer: null, isCorrect: null }
  isSelectionAnimationActive.value = false
  hiddenAnswers.value = []

  Object.values(JokersEnum).forEach((joker) => {
    const jokerData = jokerMetaData.value[joker]
    if (jokerData.isActive) {
      jokerData.isUsed = true
      jokerData.isActive = false
    }
  })
}

onMounted(() => {
  dialog.value = document.getElementById('askTheAudience')
})
</script>

<template>
  <header class="quiz-header">
    <QuizQuestion>{{ currentQuestion.question }}</QuizQuestion>
  </header>

  <main class="quiz-container">
    <div class="quiz-joker-group">
      <QuizJoker
        v-for="joker in Object.keys(JokersEnum)"
        :key="joker"
        :joker-type="joker"
        :selected="jokerMetaData[joker].isActive"
        :used="jokerMetaData[joker].isUsed"
        @click="handleJokerSelection(joker)"
      />
    </div>

    <div class="answer-group">
      <SingleQuestion
        v-for="(option, key) in currentQuestion.options"
        :key="key"
        :question-type="questionTypeMap[key]"
        :correct="selectedAnswer.answer === key ? selectedAnswer.isCorrect : null"
        :is-hidden="hiddenAnswers.includes(key)"
        @click="handleQuestionSelection(option, key)"
      >
        {{ option.option }}
      </SingleQuestion>
    </div>

    <dialog id="askTheAudience" class="audience-joker-dialog">
      <div
        v-for="(option, index) in currentQuestion.jokers[JokersEnum.askTheAudience].audiencePoll"
        :key="index"
      >
        {{ option.option }}: {{ option.percentage }}%
        <div :style="{ width: `${option.percentage}%` }" class="audience-joker-dialog__bar" />
      </div>
      <button class="audience-joker-dialog__button" @click="dialog.close()">Close</button>
    </dialog>
  </main>
</template>

<style lang="scss">
.quiz-header {
  flex: 1;

  @media (max-width: 430px) {
    margin: 5vh 0 2rem 0;
  }
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
  gap: 2rem;
  justify-content: center;
}

.audience-joker-dialog {
  width: 80vw;
  max-width: 400px;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: auto auto;

  &[open] {
    display: flex;
    flex-direction: column;
  }

  &__bar {
    height: 2rem;
    background-color: #007bff;
    border-radius: 4px;
    margin-bottom: 1rem;
    transition: width 0.5s ease-in-out;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
}

@media (max-width: 430px) {
  .quiz-container,
  .quiz-joker-group,
  .answer-group {
    gap: 1rem;
  }
}
</style>
