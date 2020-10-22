<template>
  <div class="student">
    <h1>Student</h1>
    <p>Answer questions posed by the teacher</p>

    <form>
      <div class="row">
        <div class="col-6">
          <h4>Status</h4>
          <div>{{ statusText }}</div>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <h4>Leaderboard</h4>
          <div v-if="leaderboardScores.length == 0">No scores recorded yet.</div>
          <div v-else>
            ...
          </div>
        </div>
      </div>

      <div class="dialog">
        <div v-if="!isReady">
          <h4>Please enter your name</h4>
          <input type="text" v-model="studentName" placeholder="e.g. John Smith">
          <button @click.prevent="startSession">Start</button>
        </div>

        <div v-if="isMatchingPairsQuestion">
          ...
        </div>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  components: {
  },
  sockets: {
    connect() {
      // Fired when the socket connects.
      this.isConnected = true;
    },
  },
  data() {
    return {
      sessionId: null,
      studentName: null,
      statusText: "Waiting for a question...",
      leaderboardScores: [],
      activeQuestionType: null,
      activeQuestionTime: 0,
      activeQuestionData: [
        {value: "", correct_answer: false},
      ],
    }
  },
  computed: {
    isReady() {
      return this.sessionId ? true : false;
    },
    isMatchingPairsQuestion() {
      return this.isReady && this.activeQuestionType == 'matching';
    }
  },
  methods: {
    startSession() {
      console.log(this.studentName);
      this.socket.emit('thing', {});
      this.sessionId = Math.floor(Math.random()*90000) + 10000;
    }
  },
  mounted() {
  }
}
</script>

<style type="scss" scoped>
  h4 {
    margin-bottom: 4px;
  }
</style>