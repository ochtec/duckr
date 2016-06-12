{
  users: {
    [uid]: {
      info: {
        name,
        uid,
        avatar
      }
    }
  }
},
ducks: {
  [duckId]: {
    info: {
      avatar,
      duckId,
      name,
      text,
      timestamp,
      uid
    }
  }
},
usersDucks: {
  [uid]: {
    duckIds: [duckId, duckId, duckId]
  }
},
likeCount: {
  [duckId]: 0
},
usersLikes: {
  [duckId]: true
},
replies: {
  [duckId]: {
    replies: {
      [replyId]: {
        name
        comment
        uid
        timestamp
        avatar
      }
    }
  }
}