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
import Tab from './Tab'
import Lyrics from './Lyrics'
import SongMetaData from './SongMetaData'
import YouTube from './YouTube'
import SongsService from '../../services/SongsService'
import Panel from '../../components/Panel'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Panel,
    SongMetaData,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>


<style scoped>


</style>