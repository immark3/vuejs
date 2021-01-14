const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finsh the course and learn Vue!',
      courseGoalA: 'Finsh the course and learn Vue!',
      courseGoalB: 'Master Vue and build amazing apps!',
      courseGoalC: '<h2>Master Vue and build amazing apps!</h2>',
      vueLink: 'https://www.google.com/',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return 'Learn Vue!';
      } else {
        return 'Master Vue!';
      }
    },
    newOutputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
    OutputGoalC() {
      return this.courseGoalC;
    },
  },
});

app.mount('#user-goal');
