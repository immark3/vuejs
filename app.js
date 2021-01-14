const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finsh the course and learn Vue!',
      vueLink: 'https://www.google.com/',
    };
  },
});

app.mount('#user-goal');
