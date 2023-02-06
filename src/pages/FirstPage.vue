<template>
  <div>
    <NavBar></NavBar>
    <div class="backButton">
      <router-link to="/">
        <i class="pi pi-chevron-left"></i>
        <span>Geri</span>
      </router-link>
    </div>
    <div class="titles">
      <p>Bölmə {{ sectionName.id }}: {{ sectionName.name }}</p>
      <span> {{ lessonName.id }}. {{ lessonName.name }}</span>
    </div>
  </div>

  <div class="mainContent grid">
    <div class="col-12 md:col-7 column">
      <div class="lastDate">
        <div>Dərsi bitirməyiniz üçün son tarix {{ lessonName.date }}</div>
      </div>
      <div class="lessonContent">
        <VideoLesson></VideoLesson>
      </div>
      <div class="lessonMaterials">
        <NormalButton label="Təlimə aid materiallar"></NormalButton>
        <NormalButton label="Testlər"></NormalButton>
      </div>
      <div class="test">
        <TestQuestions></TestQuestions>
      </div>
    </div>
    <div class="col-12 md:col-5 column">
      <div class="results">
        <NormalButton
          icon="pi pi-sliders-v"
          label="Dərs cədvəli və nəticələriniz"
        ></NormalButton>
        <NormalButton icon="pi pi-eye" class="eyeButton"></NormalButton>
      </div>
      <LessonsMenu />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import NavBar from "./../components/navbar/NavBar";
import LessonsMenu from "./../components/course/LessonsMenu";
import VideoLesson from "./../components/course/VideoLesson";
import TestQuestions from "./../components/course/TestQuestions";
export default {
  data() {
    return {};
  },
  created() {},
  components: {
    NavBar,
    LessonsMenu,
    VideoLesson,
    TestQuestions,
  },
  computed: {
    ...mapGetters({
      sectionName: "courses/sectionName",
      lessonName: "courses/lessonName",
    }),
  },
};
</script>
<style scoped>
.backButton {
  margin-top: 31px;
}
.backButton a {
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  color: #253858;
  text-decoration: none;
  display: flex;
  align-items: center;
}
.backButton a span {
  padding-left: 15px;
}

.titles {
  margin-top: 26px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  color: #253858;
}
.titles p {
  font-size: 14px;
}

.titles span {
  font-size: 20px;
}

.results {
  width: 100%;
  display: flex;
  align-items: right;
  justify-content: right;
}
.results .p-button {
  padding: 8px 24px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 6px;
  color: #606266 !important;
  font-size: 14px !important;
  margin-left: 10px;
}
.results .eyeButton {
  padding: 12px 13px;
  background: #f5f5f5;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  transform: matrix(1, 0, 0, -1, 0, 0);
}

.lastDate div {
  border: 1px solid #cdcdcd;
  border-radius: 6px;
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #2c7ef9;
  padding: 16px 0px;
  margin-top: 45px;
  margin-bottom: 20px;
}

.lessonMaterials {
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin-top: 50px;
}
.lessonMaterials .p-button:nth-child(1) {
  margin-right: 10px;
  background: #19cc95;
  border-radius: 6px;
  padding: 16px 32px;
  border: none;
}
.lessonMaterials .p-button:nth-child(2) {
  background: #253858;
  border-radius: 6px;
  padding: 16px 32px;
  border: none;
}

@media (min-width: 770px) {
  .column:nth-child(1) {
    padding-right: 50px;
  }
  .column:nth-child(2) {
    padding-left: 50px;
  }
}
</style>
