<template>
  <div>
    <div class="question">
      <span class="question">
        {{ currentQuestion.question }}
      </span>
    </div>
    <div class="answers">
      <NormalButton
        :class="isCorrect ? 'answerCorrect' : 'answerWrong'"
        :label="answer.answer"
        class="answer"
        @click="setAnswer(answer)"
        v-for="answer of currentQuestion.answers"
        :key="answer.id"
      />
    </div>
  </div>
  <div class="questionButtons">
    <div>
      <NormalButton
        v-if="this.currentQuestion.id != 1"
        label="Əvvəlki sual"
        class="questionButton"
        @click="goToPrevious()"
      ></NormalButton>
    </div>
    <div>
      <NormalButton
        v-if="!isFinished"
        label="Növbəti sual"
        class="questionButton"
        style="background: #19cc95; color: #ffffff"
        @click="goToNext()"
      ></NormalButton>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      currentQuestionId: 1,
      isFinished: false,
      isFirst: true,
      usersAnswer: null,
      isCorrect: null,
    };
  },
  computed: {
    ...mapGetters({
      questions: "questions/questions",
    }),

    currentQuestion() {
      return this.questions.find((item) => item.id == this.currentQuestionId);
    },
  },

  methods: {
    setAnswer(answer) {
      this.currentQuestion.usersAnswer = answer;
      if (
        this.currentQuestion.usersAnswer.id ==
        this.currentQuestion.correctAnswer.id
      ) {
        console.log("correct");
        this.isCorrect = true;
      } else {
        this.isCorrect = false;
      }
    },
    goToNext() {
      if (this.currentQuestion.id < this.questions.length) {
        this.currentQuestionId++;
      }
      if (this.currentQuestionId == this.questions.length) {
        this.isFinished = true;
      }
    },
    goToPrevious() {
      if (this.currentQuestion.id != 1) {
        this.currentQuestionId--;
      }
      if (this.currentQuestionId != this.questions.length) {
        this.isFinished = false;
      }
    },
  },
};
</script>
<style scoped>
.question {
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #253858;
  margin-bottom: 30px;
  margin-top: 30px;
}
.answer {
  margin-left: 0px !important;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.15px;
  margin-bottom: 20px;
  color: #253858;
  background: transparent;
}

.answer:hover {
  color: white;
  background: #2c7ef9;
}

.answerCorrect:focus {
  color: white;
  background: green !important;
}

.answerWrong:focus {
  color: white;
  background: red;
}

.answer {
  padding: 27px 40px;
  width: 100%;
  text-align: left;
  display: block;
  border: 1px solid #cdcdcd;
  border-radius: 6px;
  cursor: pointer;
}

.questionButton {
  background: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 6px;
  padding: 10px 32px;
  color: #606266;
}
.questionButtons {
  display: flex;
  justify-content: space-between;
}
</style>
