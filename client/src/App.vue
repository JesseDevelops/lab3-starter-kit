<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/teacher">Teacher</router-link> |
    <router-link to="/student">Student</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 40px;
}

input[type=text],
input[type=number],
textarea,
select {
  width: 100%;
}

.text-right {
  text-align: right;
}
</style>
