import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyC-AsNc_5U8O2smoM9Uo_BE24GRu-yiOQA',
  authDomain: 'vuestatusite.firebaseapp.com',
  databaseURL: 'https://vuestatusite.firebaseio.com',
  projectId: 'vuestatusite',
  storageBucket: 'vuestatusite.appspot.com',
  messagingSenderId: '246919947012'
}

const connection = !Firebase.apps.length ? Firebase.initializeApp(config) : ''
const DB = connection.database()
const AUTH = connection.auth()
const STORAGE = connection.storage()

export default function install (Vue) {
  Object.defineProperties(Vue.prototype, {
    $db: {
      get () {
        return DB
      }
    },
    $auth: {
      get () {
        return AUTH
      }
    },
    $storage: {
      get () {
        return STORAGE
      }
    }
  })
}
