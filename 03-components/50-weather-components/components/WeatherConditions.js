import { defineComponent } from 'vue'
import { WeatherConditionIcons } from './../weather.service.ts'
export default defineComponent({
  name: 'WeatherConditions',

  props: {
    title: {
      type: String,
      required: true,
    },

    iconId: {
      type: Number,
      required: true,
    },

    temp: {
      type: Number,
      required: true,
    }

  },

  setup(props) {
    const celTemp = (props.temp - 273.15).toFixed(1);
    return {
      WeatherConditionIcons,
      celTemp,
    }
  },

  template: `
    <div class="weather-conditions">
      <div class="weather-conditions__icon" :title="title">{{ WeatherConditionIcons[iconId] }}</div>
      <div class="weather-conditions__temp">{{ celTemp }} °C</div>
    </div>
  `,
})
