import { createStore } from "vuex";
import courses from "./modules/courses";
import questions from "./modules/questions";
import user from "./modules/user";

const store = createStore({
  modules: {
    courses: courses,
    questions: questions,
    user: user,
  },
});

export default store;
