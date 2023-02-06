export default {
  async getUsername(context) {
    const response = "Əli M."
    context.commit("setUserName", response);
  },
  async getUserActive(context) {
    const response = true
    context.commit("setUserActive", response);
  },

};
