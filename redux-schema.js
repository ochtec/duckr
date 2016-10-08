{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    [uid]: {
      lastUpdated,
      info: {
        name,
        uid,
        avatar
      }
    }
  }
},
modal: {
  duck,
  isOpen,
}
ducks: {
  isFetching,
  error,
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