import { ref, firebaseAuth } from 'config/constants'
import firebase from 'firebase'

export default function auth () {
  return firebaseAuth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
}

export function checkIfAuthed (store) {
  return store.getState().isAuthed
}

export function logout() {
  return firebaseAuth().signOut()
}

export function saveuser (user) {
  return ref.child(`users/${user.uid}`)
    .set(user)
    .then(() => user)
}
