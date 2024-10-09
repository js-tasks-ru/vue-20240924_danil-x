import {computed, defineComponent, ref, watchEffect} from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      validator(value, props) {
        return value >= props.min && value <= props.max
      }
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: Infinity,
    }
  },

  setup(props, { emit }) {
   const countNow = ref(props.count);

    function increase(){
      emit('update:count', ++countNow.value)
    }
    function decrease(){
      emit('update:count', --countNow.value)
    }
    return {
      increase,
      decrease,
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" @click="decrease" :disabled="count === min">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton aria-label="Increment" @click="increase" :disabled="count === max">➕</UiButton>
    </div>
  `,
})
