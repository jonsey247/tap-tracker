<template>
<div>
  <v-layout>
      <v-flex xs6>
            <song-meta-data :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <you-tube :youtubeId="song.youtubeId"/>
      </v-flex>
  </v-layout>

    <v-layout>
      <v-flex xs6 class="mt-2">
        <tab :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2 mt-2">
        <lyrics :song="song" />
      </v-flex>
  </v-layout>
</div>
</template>

<script>
import {mapState} from 'vuex'
import Tab from './Tab'
import Lyrics from './Lyrics'
import SongMetaData from './SongMetaData'
import YouTube from './YouTube'
import SongsService from '../../services/SongsService'
import SongHistoryService from '../../services/SongHistoryService'
export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'user',
      'isUserLoggedIn',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data
    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId
      })
    }
  },
  components: {
    SongMetaData,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>


<style scoped>


</style>