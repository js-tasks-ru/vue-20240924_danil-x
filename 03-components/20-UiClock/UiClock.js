import { defineComponent, computed, ref, onUnmounted } from 'vue';

export default defineComponent({
  name: 'UiClock',

  setup() {
    const lang = navigator.language;
    const date = ref(new Date);
    const time = computed(()=>{
      return date.value.toLocaleTimeString(lang, { timeStyle: 'medium' })
    })

    const intervalSec = setInterval(()=> {
      date.value = new Date();
    },100)

    onUnmounted(()=> clearInterval(intervalSec))

    return {
      time,
    }
  },

  template: `<div class="clock">{{ time }}</div>`,
})
