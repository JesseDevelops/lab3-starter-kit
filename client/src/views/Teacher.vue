<template>
  <div class="teacher">
    <h1>Teacher</h1>
    <p>Post a question to students</p>

    <div class="row">
      <div class="col-6">
        <select v-model="question_type">
          <option value="">Select a question type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="matching">Matching Pairs</option>
        </select>
      </div>
      <div class="col-4">
        <input type="number" min="0" placeholder="Score" v-model="question_score">
      </div>
      <div class="col-2">
        <TimeInput min="10" max="90" step="5" placeholder="Time" v-model="question_time" @input="question_time = $event" />
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <QuestionEntry v-bind:type="question_type" />
      </div>
    </div>

  </div>
</template>

<script>
import TimeInput from '../components/TimeInput';
import QuestionEntry from '../components/QuestionEntry';

export default {
  components: {
    TimeInput,
    QuestionEntry,
  },
  data() {
    return {
      question_type: "",
      question_time: 0,
      question_score: 0,
      students: [],
    }
  }
}
</script>
