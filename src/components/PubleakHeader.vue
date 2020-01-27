<template>
  <div class="header">
    <div class="presentation">
      <router-link to="/">
        <img
          id="logo"
          alt="PubLeak logo"
          src="../assets/logo.svg"
        >
      </router-link>
      <div class="presentationText">
        <h1>{{ $t("publeakHeader.title") }}</h1>
        <p>{{ $t("publeakHeader.subtitle") }}</p>
      </div>
    </div>
    <div class="nav">
      <router-link to="/">
        <span>{{ $t("publeakHeader.home") }}</span>
      </router-link>
      <router-link to="/about">
        <span>{{ $t("publeakHeader.about") }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PubleakHeader',
};
</script>

<style scoped>
.header {
  display: grid;
  margin-bottom: 3rem;
}

.presentation {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
}

.nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  font-size: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.header a.router-link-exact-active {
  color: #42b983;
}

@media only screen and (max-width: 767px) {
  #logo {
    width: calc(16px + 20vw);
  }

  .header {
    grid-template-columns: repeat(1, 1fr);
  }

  .nav a:nth-child(1) {
    grid-column: 2;
  }
  .nav a:nth-child(2) {
    grid-column: 3;
  }
}

@media only screen and (min-width: 768px) {
  #logo {
    width: calc(160px + 0.1vw);
  }

  .header {
    grid-template-columns: repeat(2, 1fr);
  }

  .nav a:nth-child(1) {
    grid-column: 3;
  }
  .nav a:nth-child(2) {
    grid-column: 4;
  }
}
</style>
