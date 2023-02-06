<template>
  <div class="container">
    <div class="innerContainer">
      <router-view></router-view>
    </div>
  </div>
  <div class="footer">
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppFooter from "./components/footer/AppFooter";
export default {
  components: {
    AppFooter,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.innerContainer {
  padding: 0px 120px;
}
@media (min-width: 770px) {
  .innerContainer {
    padding: 0px 120px;
  }
}
.footer {
  padding: 0px 60px;
  margin-top: 110px;
  background: #2c7ef9;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
