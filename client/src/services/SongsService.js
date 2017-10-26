import Api from '@/services/Api'

export default {
  getAllSongs () {
    return Api().get('songs')
  },
  postNewSongs (song) {
    return Api().post('songs', song)
  }
}
