import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBYdEaoUIQLSbg6ix7faipCDcEOtxMX158',
  authDomain: 'testreact-d6515.firebaseapp.com',
  databaseURL: 'https://testreact-d6515.firebaseio.com',
  storageBucket: 'testreact-d6515.appspot.com',
  messagingSenderId: '76181379508',
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

export const usersDucksExpirationLength = 100000
export const userExpirationLength = 100000
export const repliesExpirationLength = 300000