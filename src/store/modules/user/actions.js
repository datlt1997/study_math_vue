export default {
  fetch({ commit }, number) {
    commit("setUser", number);
  }
}