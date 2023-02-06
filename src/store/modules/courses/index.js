import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state() {
    return {
      sectionName: "Bölmə 1: Giriş",
      lessonName: "1. Kursla tanışlıq",
      lessonsContent: [
        {
          id: 1,
          name: "Giriş",
          details: [
            {
              id: 1,
              name: "Kursla tanışlıq",
              type: "video dərs",
              date: "12 aprel",
              url: "https://www.youtube.com/embed/53kB0GKAd2k"
            },

            {
              id: 2,
              name: "Dizayn proqramları ilə tanışlıq",
              type: "canlı dərs",
              date: "12 aprel"
            },

            {
              id: 3,
              name: "Dizaynın əsasları üzrə aralıq imtahanı",
              type: "aralıq imtahan",
              date: "12 aprel"
            },

            {
              id: 4,
              name: "Dizaynın əsasları üzrə oxu materialı",
              type: "oxu materialı",
              date: "12 aprel"
            },
          ],
        },
        {
          id: 2,
          name: "Giriş2",
          details: [
            {
              id: 1,
              name: "Kursla tanışlıq",
            },

            {
              id: 2,
              name: "Kursla tanışlıq",
            },

            {
              id: 3,
              name: "Kursla tanışlıq",
            },

            {
              id: 4,
              name: "Kursla tanışlıq",
            },
          ],
        },
        {
          id: 3,
          name: "Giriş3",
          details: [
            {
              id: 1,
              name: "Kursla tanışlıq",
            },

            {
              id: 2,
              name: "Kursla tanışlıq",
            },

            {
              id: 3,
              name: "Kursla tanışlıq",
            },

            {
              id: 4,
              name: "Kursla tanışlıq",
            },
          ],
        },
        {
          id: 4,
          name: "Bravo marketdə 4 günlük təcrübə məşğələsi",
          details: [
            {
              id: 1,
              name: "Adobe Photoshop-da işləmə üzrə praktiki məşğələ",
              type: "təcrübə",
              date: "12 aprel"
            },

            {
              id: 2,
              name: "Adobe İllustrator-da işləmə üzrə praktiki məşğələ",
              type: "təcrübə",
              date: "12 aprel"
            },

            {
              id: 3,
              name: "Figma-da səhifənin hazırlanması",
              type: "təcrübə",
              date: "12 aprel"
            },

            {
              id: 4,
              name: "Çapa materialların hazırlığı",
              type: "təcrübə",
              date: "12 aprel"
            },
          ],
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
