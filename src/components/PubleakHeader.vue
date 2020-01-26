<template>
  <div id="nav">
    <div>
      <router-link to="/">
        <span>{{ $t("publeakHeader.home") }}</span>
      </router-link>|
      <router-link to="/about">
        <span>{{ $t("publeakHeader.about") }}</span>
      </router-link>
    </div>
    <router-link to="/">
      <img
        id="logo"
        alt="PubLeak logo"
        src="../assets/logo.svg"
      >
    </router-link>|

    <div>
      <h1>{{ $t("publeakHeader.title") }}</h1>
      <p>{{ $t("publeakHeader.subtitle") }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PubleakHeader',
};
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media only screen and (max-width: 767px) {
  #logo {
    width: 25vw;
    position: absolute;
    top: 0;
    left: 0;
  }
}
@media only screen and (min-width: 768px) {
  #logo {
    position: absolute;
    top: 0px;
    left: 25vw;
    border-top: 2px solid #9B541E;
    width: 10vw;
  }
}
</style>
