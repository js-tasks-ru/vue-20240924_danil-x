import { defineComponent, computed } from 'vue'
import WeatherDetailsItem from "./WeatherDetailsItem.js";

export default defineComponent({
  name: 'WeatherDetailsList',
  components: {WeatherDetailsItem},

  props: {
    current:{
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const fixedPressure = computed(()=> Number((props.current.pressure * 0.75).toFixed(0)))
    const items = {
      'Давление, мм рт. ст.': fixedPressure.value,
      'Влажность, %': props.current.humidity,
      'Облачность, %': props.current.clouds,
      'Ветер, м/с': props.current.wind_speed,
    }

    return {
      items,
    }
  },

  template: `
    <div class="weather-details">
      <WeatherDetailsItem v-for="(val, key) in items" :label="key" :value="val" />
    </div>
  `,
})
