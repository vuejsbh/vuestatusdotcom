<template lang="html">
    <div id="firebaseui-auth-container"></div>
</template>

<script>
import firebaseui from 'firebaseui'
import firebase from 'firebase'

export default {
  name: 'AppLogin',
  mounted () {
    var uiConfig = {
      callbacks: {
        signInSuccess: function (currentUser, credential, redirectUrl) {
          // Do something.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true
        },
        uiShown: function () {
          // The widget is rendered.
          // Hide the loader.
          // document.getElementById('loader').style.display = 'none'
        }
      },
      credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
      signInSuccessUrl: '/',
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ]
    }
    var ui = new firebaseui.auth.AuthUI(this.$auth)
    ui.start('#firebaseui-auth-container', uiConfig)
    this.$auth.onAuthStateChanged(user => {
      if (user) {
        this.$router.push({ path: '/' })
      }
    })
  }
}
</script>

<style lang="stylus">
  #firebaseui-auth-container
    bottom: 50px
    position: fixed
    text-align: center
    width: 100%
    .firebaseui-info-bar
      margin-top: 20px
    .mdl-shadow--2dp
      box-shadow: none
    .mdl-progress
      height: 5px
    div.mdl-progress::after
      color: black
      content: 'Conectando...'
      display: block
      margin: 20px auto
      text-align: center
</style>
