export default {
  fetch({ commit }, number) {
    console.log(123);
    commit("setUser", number);
  }
}