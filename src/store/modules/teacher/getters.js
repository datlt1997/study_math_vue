export default {
  getTeacherFormat(state) {
    return state.users.filter(user => user.name === "Leanne Graham")
  }
}