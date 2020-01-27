<template>
  <div id="about-text">
    <h1>{{ $t("about.title") }}</h1>
    <p>{{ $t("about.tech") }}</p>
    <a
      href="https://github.com/farinhote/"
      target="_blank"
    >Farinhote</a>
  </div>
</template>

<script>
export default {
  name: 'AboutText',
};
</script>

<style scoped>
#about-text {
  padding: 5em 0;
  width: 100%;
}

h1 {
  line-height: 1.5em;
  text-shadow: 0 -0.0625em 0 #0c2ffb, 0 -0.125em 0 #2cfcfd,
    0 0.0625em 0 #fb203b, 0 0.125em 0 #fefc4b;
}

p {
  margin: auto;
  padding: 0 0 10em 0;
}

@media only screen and (min-width: 768px) {
  p {
    width: 50vw;
  }
}

@keyframes tipsy {
  0% {
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }
  100% {
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }
}

a {
  color: #fffbf1;
  text-shadow: 0 20px 25px #2e2e31, 0 40px 60px #2e2e31;
  font-size: 2.5em;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: -3px;
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
}

a:before,
a:after {
  content: '';
  padding: .9em .4em;
  position: absolute;
  left: 50%;
  width: 100%;
  top: 50%;
  display: block;
  border: 6px solid #9B541E;
  transform: translateX(-50%) translateY(-50%) rotate(0deg);
  animation: 10s infinite alternate ease-in-out tipsy;
}

a:before {
  border-color: #9B541E #9B541E rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
  z-index: -1;
}

a:after {
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #9B541E #9B541E;
  box-shadow: 25px 25px 25px rgba(46, 46, 49, .8);
}
</style>
