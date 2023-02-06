<template>
  <div v-if="lessonName.url" class="videoLesson">
    <iframe width="100%" height="331" :src="lessonName.url"></iframe>
    <p class="videoLesson-info">
      Salam, hörmətli təlim iştirakçısı. Kursa tanışlıq videosuna baxmağınız
      xahiş olunur.
    </p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      lessonName: "courses/lessonName",
    }),
  },
};
</script>
<style>
.videoLesson-info {
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #253858;
  margin-top: 30px;
}
</style>
