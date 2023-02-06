<template>
  <div class="navbar">
    <MenuBar>
      <template #start>
        <div class="logo">
          <img src="../../assets/logo.svg" />
          <span>MyLearning</span>
        </div>
      </template>

      <template #end>
        <div
          class="active"
          :style="
            isUserActive ? 'background-color: #19CC95' : 'background-color: red'
          "
        ></div>
        {{ userName }}
      </template>
    </MenuBar>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      status: true,
      instructor: "Eli",
      isActive: true,
    };
  },
  computed: {
    ...mapGetters({
      userName: "user/userName",
      isUserActive: "user/isUserActive",
    }),
  },
  created() {
    this.$store.dispatch("user/getUsername");
    this.$store.dispatch("user/getUserActive");
  },
};
</script>
<style scoped>
.navbar {
  padding: 40px 0px;
}
.p-menubar {
  padding: 0px;
  background: transparent;
  border: none;
}
.active {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #19cc95;
  border-radius: 100px;
}
.logo {
  display: flex;
  align-items: center;
}

.logo img {
  background: #19cc95;
  border-radius: 11px;
  padding: 2px 3px;
  padding-right: 4px;
}
.logo span {
  color: #2c7ef9;
  font-weight: 700;
  font-size: 24px;
  line-height: 20px;
  padding-left: 3px;
}
</style>
