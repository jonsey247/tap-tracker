import Api from '@/services/Api'

export default {
  getAllSongs (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    })
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  postNewSongs (song) {
    return Api().post('songs', song)
  },
  put (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
