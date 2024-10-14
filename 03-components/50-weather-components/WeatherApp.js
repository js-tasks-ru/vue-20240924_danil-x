import { defineComponent } from 'vue'
import { getWeatherData } from './weather.service.ts'
import './WeatherApp.css'
import WeatherCard from "./components/WeatherCard.js";

export default defineComponent({
  name: 'WeatherApp',
  components: {WeatherCard},

  setup() {
    const cityList = getWeatherData();
    return {
      cityList,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <WeatherCard v-for="city in cityList" :city />
      </ul>
    </div>
  `,
})
