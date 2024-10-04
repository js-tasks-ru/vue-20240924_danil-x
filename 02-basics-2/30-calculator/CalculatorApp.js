import { defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const operandOne = ref(0)
    const operandTwo = ref(0)
    const output = ref(0)
    const operation = ref('')
    function calculate(val){
      switch (val) {
        case 'sum':
          output.value = operandOne.value + operandTwo.value
          break
        case 'subtract':
          output.value = operandOne.value - operandTwo.value
          break
        case 'multiply':
          output.value = operandOne.value * operandTwo.value
          break
        case 'divide':
          output.value = operandOne.value / operandTwo.value
          break
      }
    }
    return {
      operandOne,
      operandTwo,
      output,
      calculate,
      operation,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="operandOne" />

      <div class="calculator__operators">
        <label><input type="radio" @change="calculate(operation)" name="operator" v-model="operation" value="sum"/>➕</label>
        <label><input type="radio" @change="calculate(operation)" name="operator" v-model="operation" value="subtract"/>➖</label>
        <label><input type="radio" @change="calculate(operation)" name="operator" v-model="operation" value="multiply"/>✖</label>
        <label><input type="radio" @change="calculate(operation)" name="operator" v-model="operation" value="divide"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="operandTwo" />

      <div>=</div>

      <output>{{ output }}</output>
    </div>
  `,
})
