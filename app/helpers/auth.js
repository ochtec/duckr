export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Mike OConnor',
        avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_6_200x200.png',
        uid: 'miketoc'
      })
    }, 2000)
  })
}
