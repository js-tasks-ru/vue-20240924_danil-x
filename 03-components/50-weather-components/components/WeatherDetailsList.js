import { defineComponent } from 'vue'
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
    const {pressure, humidity, clouds, wind_speed} = props.current
    const fixedPressure = Number((pressure * 0.75).toFixed(0))
    const items = {
      'Давление, мм рт. ст.': fixedPressure,
      'Влажность, %': humidity,
      'Облачность, %': clouds,
      'Ветер, м/с': wind_speed,
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
