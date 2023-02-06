import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      questions: [
        {
          id: 1,
          question:
            "Müştərini və layihəni başa düşmək üçün dizayner _______ mərhələsini başlamalıdır",
          answers: [
            { id: 1, answer: "Müəyyən etmə" },
            { id: 2, answer: "Dizayn vermə" },
            { id: 3, answer: "Dəyişmə" },
            { id: 4, answer: "Araşdırma" },
          ],
          correctAnswer: { id: 2, answer: "Dizayn vermə" },
          usersAnswer: null,
        },
        {
          id: 2,
          question: "Sual 2",
          answers: [
            { id: 1, answer: "Sehv" },
            { id: 2, answer: "Sehv" },
            { id: 3, answer: "Duz" },
            { id: 4, answer: "Sehv" },
          ],
          correctAnswer: { id: 3, answer: "Duz" },
          usersAnswer: null,
        },
        {
          id: 3,
          question: "Sual 3",
          answers: [
            { id: 1, answer: "Sehv" },
            { id: 2, answer: "Sehv" },
            { id: 3, answer: "Sehv" },
            { id: 4, answer: "Duz" },
          ],
          correctAnswer: { id: 4, answer: "Duz" },
          usersAnswer: null,
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
