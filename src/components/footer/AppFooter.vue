<template>
  <div class="footer">
    <div class="logo">
      <img src="../../assets/logo.svg" />
      <span>MyLearning</span>
    </div>
    <div class="footer-text">
      <p>Bütün hüquqlar qorunur</p>
      <p>lorem ipsum</p>
    </div>
  </div>
</template>
<style scoped>
.footer {
  height: 190px;
}
.footer-text {
  display: flex;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  padding-top: 20px;
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

.footer-text {
  color: white;
  margin-top: 50px;
}
</style>
