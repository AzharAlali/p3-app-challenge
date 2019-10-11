const divide = (x, y) => { return x / y }

const adder = new Vue({
  el: '#adder',
  data: {
    guest: 'Azhar',
    firstNumber: 10,
    secondNumber: 2
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber)
      return `${this.guest}, your sum is ${divide(i, j)}.`
    }
  }
})