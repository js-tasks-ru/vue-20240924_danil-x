import { defineComponent } from 'vue'
import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import MeetupAgenda from './MeetupAgenda.js'
import MeetupDescription from './MeetupDescription.js'
import MeetupCover from './MeetupCover.js'
import MeetupInfo from './MeetupInfo.js'
import './MeetupView.css'

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  setup(props){
    const {image, title, agenda, description, organizer, place, date} = props.meetup;
    return {
      image,
      title,
      agenda,
      description,
      organizer,
      place,
      date,
    }
  },

  template: `

      <!-- Обложка митапа -->
      <MeetupCover :image="meetup.image" :title="meetup.title" />
        <UiContainer>
          <div class="meetup">
            <div class="meetup__content">
              <h2>Описание</h2>
              <MeetupDescription :description="meetup.description" />
              <!-- Описание митапа -->

              <h2>Программа</h2>
              <MeetupAgenda v-if="meetup.agenda.length" :agenda="meetup.agenda" />
              <UiAlert v-else>Программа пока пуста...</UiAlert>
              <!-- Программа митапа -->
              <!-- Или при пустой программе - сообщение "Программа пока пуста..." в UiAlert -->

            </div>
            <div class="meetup__aside">

              <!-- Краткая информация о митапе -->
              <MeetupInfo :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date" />
              <div class="meetup__aside-buttons"></div>
            </div>
          </div>
        </UiContainer>


  `,
})