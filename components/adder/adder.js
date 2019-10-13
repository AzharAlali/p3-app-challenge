const checker = (x) => { return 250 - x.length }

const adder = new Vue({
  el: '#adder',
  data: {
    guest: 'Azhar',

  },
  computed: {
    result: function () {
      const i = this.guest
      return `${this.guest}, you can type ${checker(i)} more characters.`
    }
  }
})