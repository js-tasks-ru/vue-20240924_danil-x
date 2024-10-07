import { defineComponent, ref, computed} from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const operandOne = ref(0)
    const operandTwo = ref(0)
    const operation = ref(null)
    const output = computed(()=>{
      return calculate(operandOne.value, operandTwo.value, operation.value)
    })
    function calculate(one, two, val){
      switch (val) {
        case 'sum':
          return  one + two
        case 'subtract':
          return one - two
        case 'multiply':
          return one * two
        case 'divide':
          return one / two
      }
    }
    return {
      operandOne,
      operandTwo,
      output,
      operation,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="operandOne" />

      <div class="calculator__operators">
        <label><input type="radio" name="operator" v-model="operation" value="sum"/>➕</label>
        <label><input type="radio" name="operator" v-model="operation" value="subtract"/>➖</label>
        <label><input type="radio" name="operator" v-model="operation" value="multiply"/>✖</label>
        <label><input type="radio" name="operator" v-model="operation" value="divide"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="operandTwo" />

      <div>=</div>

      <output>{{ output }}</output>
    </div>
  `,
})
