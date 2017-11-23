import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyA8SSldujYq67vA1Ot-MpmuiEJeaToclRU',
  authDomain: 'clipboardwebsite.firebaseapp.com',
  databaseURL: 'https://clipboardwebsite.firebaseio.com',
  projectId: 'clipboardwebsite',
  storageBucket: 'clipboardwebsite.appspot.com',
  messagingSenderId: '229237374348'
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
