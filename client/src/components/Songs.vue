<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
      <Panel title="Songs">
            <v-btn 
              slot="action"
              @click="navigateTo({name: 'songs-create'})"
              class="cyan accent-2"
              light
              medium
              absolute
              right
              middle
              fab>
              <v-icon>add</v-icon>
            </v-btn>
        <div
        v-for="song in songs"
        :key="song.id">

        <v-layout>
            <v-flex xs6>
              <div class ="song-title">
              {{song.title}}
              </div>
             <div class ="song-artist">
              {{song.artist}}
              </div>
              <div class ="song-genre">
              {{song.genre}}
              </div>
            </v-flex>

            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl" />
            </v-flex>
        </v-layout>
        </div>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '../services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.getAllSongs()).data
  }
}
</script>


<style scoped>

.album-image {

  width: 70%;
  margin: 0 auto;
}

</style>