import { useSound } from '@vueuse/sound'
import thinkingSound from '@/assets/sounds/thinking.mp3'
import correctSound from '@/assets/sounds/correct.mp3'
import wrongSound from '@/assets/sounds/wrong.mp3'
import nextQuestionSound from '@/assets/sounds/nextQuestion.mp3'
import intro from '@/assets/sounds/intro.mp3'

export const useSounds = () => {
  const { play: playThinking, stop: stopThinking } = useSound(thinkingSound, {
    onend: () => {
      playThinking()
    },
  })
  const { play: playCorrect } = useSound(correctSound)
  const { play: playWrong } = useSound(wrongSound)
  const { play: playIntro, stop: stopIntro } = useSound(intro, {
    onend: () => {
      playThinking()
    },
  })
  const { play: playNextQuestion, stop: stopNextQuestion } = useSound(nextQuestionSound, {
    onend: () => {
      playThinking()
    },
  })

  return {
    playThinking,
    stopThinking,
    playCorrect,
    playWrong,
    playNextQuestion,
    stopNextQuestion,
    playIntro,
    stopIntro,
  }
}
