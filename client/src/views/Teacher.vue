<template>
  <div class="teacher">
    <h1>Teacher</h1>
    <p>Post a question to students</p>

    <div class="row">
      <div class="col-6">
        <select v-model="questionType">
          <option value="">Select a question type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="matching">Matching Pairs</option>
        </select>
      </div>
      <div class="col-4">
        <input type="number" min="0" placeholder="Score" v-model="questionScore">
      </div>
      <div class="col-2">
        <TimeInput min="10" max="90" step="5" placeholder="Time" v-model="questionTime" @input="questionTime = $event" />
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <QuestionEntry v-bind:type="questionType" />
      </div>
    </div>

  </div>
</template>

<script>
import TimeInput from '../components/TimeInput';
import QuestionEntry from '../components/QuestionEntry';

export default {
  sockets: {
    connect() {
      console.log('Teacher.vue: socket connected');

      this.sockets.subscribe('student-registered', (data) => {
        this.students.push(data);
      })
    }
  },
  components: {
    TimeInput,
    QuestionEntry,
  },
  data() {
    return {
      questionType: "",
      questionTime: 0,
      questionScore: 0,
      students: [],
    }
  },
  mounted() {
  }
}
</script>
