export default {
  changeCity(state, newcity) {
    state.city = newcity
    try {
      localStorage.city = newcity
    } catch (e) {}

  }
}
