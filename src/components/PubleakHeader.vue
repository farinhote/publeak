<template>
  <div id="nav">
    <div>
      <img
        id="logo"
        alt="PubLeak logo"
        src="../assets/logo.svg"
      >
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
      <router-view />
      <div>
        <h1> {{ $t("publeakHeader.title") }} </h1>
        <p>
          {{ $t("publeakHeader.subtitle") }}
        </p>
      </div>
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
</style>
