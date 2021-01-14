const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter = this.counter + 1;
    },
    remove() {
      this.counter = this.counter - 1;
      if (this.counter < 0) {
        this.counter = 0;
      }
    },
    addMore(num) {
      this.counter = this.counter + num;
    },
    removeMore(num) {
      this.counter = this.counter - num;
      if (this.counter < 0) {
        this.counter = 0;
      }
    },
    reset() {
      this.counter = 0;
    },
  },
});

app.mount('#events');
