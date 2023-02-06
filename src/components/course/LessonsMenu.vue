<template>
  <div v-for="item in lessonsContent" :key="item.id">
    <router-link :to="`/firstpage/${item.id}/1`">
      <div class="header">
        <span> Bölmə {{ item.id }}: {{ item.name }}</span>

        <i v-if="$route.params.id == item.id" class="pi pi-chevron-up"></i>
        <i v-else class="pi pi-chevron-down"></i></div
    ></router-link>

    <div v-if="$route.params.id == item.id" class="content">
      <div class="detail" v-for="detail in item.details" :key="detail.id">
        <router-link :to="`/firstpage/${item.id}/${detail.id}`">
          <div class="detail-header">{{ detail.id }}. {{ detail.name }}</div>
        </router-link>
        <div class="detail-info">
          <span>{{ detail.type }}</span>
          <span>{{ detail.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      lessonDetails: null,
    };
  },
  computed: {
    ...mapGetters({
      lessonsContent: "courses/lessonsContent",
    }),
  },
  watch: {
    async "$route.params.id"(val) {
      await this.$store.commit(
        "courses/setSectionName",
        this.lessonsContent.find((item) => item.id == val)
      );
      this.lessonDetails = this.lessonsContent.find((item) => item.id == val);
      await this.$store.commit(
        "courses/setLessonName",
        this.lessonDetails.details.find(
          (item) => item.id == this.$route.params.detailsId
        )
      );
    },
    async "$route.params.detailsId"(val) {
      await this.$store.commit(
        "courses/setLessonName",
        this.lessonDetails.details.find((item) => item.id == val)
      );
    },
  },
  async created() {
    await this.$store.commit(
      "courses/setSectionName",
      this.lessonsContent.find((item) => item.id == this.$route.params.id)
    );
    this.lessonDetails = this.lessonsContent.find(
      (item) => item.id == this.$route.params.id
    );
    await this.$store.commit(
      "courses/setLessonName",
      this.lessonDetails.details.find(
        (item) => item.id == this.$route.params.detailsId
      )
    );
  },
};
</script>
<style scoped>
.header {
  background: #2c7ef9;
  border: 1px solid #e8e8e8;
  padding: 30px 25px;
  display: flex;
  justify-content: space-between;
}
a {
  text-decoration: none;
}
a .header {
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  color: #ffffff;
}
.detail {
  padding: 20px 14px;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 0px;
  color: #253858;
}

.detail a {
  text-decoration: none;
}

.detail:hover {
  background: #f7f9fa;
}

.detail-info span {
  line-height: 20px;
  font-weight: 400;
  background: #efefef;
  padding: 1px 7px;
  border-radius: 64px;
}
.detail-info span:nth-child(1) {
  margin-right: 10px;
  font-size: 12px;
}

.detail-info span:nth-child(2) {
  font-size: 14px;
}

.detail-header {
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #253858;
  margin-bottom: 5px;
}
</style>
