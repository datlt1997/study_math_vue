export default {
  getUserFormat(state) {
    return state.users.filter(user => user.name === "Leanne Graham")
  }
}