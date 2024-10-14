import { defineComponent, computed } from 'vue'
import { WeatherConditionIcons } from './../weather.service.ts'
import WeatherAlert from "./WeatherAlert.js";
import WeatherInfo from "./WeatherInfo.js";
import WeatherConditions from "./WeatherConditions.js";
import WeatherDetailsList from "./WeatherDetailsList.js";

export default defineComponent({
  name: 'WeatherCard',
  components: {WeatherDetailsList, WeatherConditions, WeatherInfo, WeatherAlert},

  props: {
    city: {
      type: Object,
      required: true,
    }
  },

  setup(props) {
    const isNight = computed(()=> props.city.current.dt < props.city.current.sunrise || props.city.current.dt > props.city.current.sunset)

    return {
      WeatherConditionIcons,
      isNight,
    }
  },

  template: `
    <li class="weather-card" :class="{'weather-card--night': isNight }">
      <WeatherAlert v-if="city.alert" :alert="city.alert" />
      <WeatherInfo :time="city.current.dt" :name="city.geographic_name"/>
      <WeatherConditions :title="city.current.weather.description" :temp="city.current.temp" :iconId="city.current.weather.id"/>
      <WeatherDetailsList :current="city.current"/>
    </li>

  `,
})
