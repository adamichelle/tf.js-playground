<template>
  <div>
    <section class="error-container">
        <span class="four"><span class="screen-reader-text">4</span></span>
        <span class="zero"><span class="screen-reader-text">0</span></span>
        <span class="four"><span class="screen-reader-text">4</span></span>
    </section>

    <h1>OOPS!</h1>

    <p class="zoom-area">Looks like you lost your way. </p>
    <div class="link-container mb-5">
      <router-link :to="{name: 'Models'}"
       class="btn btn-md tp-btn-amber"
      >
        Back to Safety
      </router-link>
    </div>

    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'NotFound',
  components: {
    TheFooter,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700');
@import url('https://fonts.googleapis.com/css?family=Catamaran:400,800');
.error-container {
  text-align: center;
  font-size: 106px;
  font-family: 'Catamaran', sans-serif;
  font-weight: 800;
  margin: 70px 15px;
}
.error-container > span {
  display: inline-block;
  position: relative;
}
.error-container > span.four {
  width: 136px;
  height: 43px;
  border-radius: 999px;
  background:
    linear-gradient(140deg, rgba(0, 0, 0, 0.1) 0%,
     rgba(0, 0, 0, 0.07) 43%, transparent 44%, transparent 100%),
    linear-gradient(105deg, transparent 0%, transparent 40%,
     rgba(0, 0, 0, 0.06) 41%, rgba(0, 0, 0, 0.07) 76%, transparent 77%, transparent 100%),
    linear-gradient(to right, #F2B749, #F2BE7E);
}
.error-container > span.four:before,
.error-container > span.four:after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 999px;
}
.error-container > span.four:before {
  width: 43px;
  height: 156px;
  left: 60px;
  bottom: -43px;
  background:
    linear-gradient(128deg, rgba(0, 0, 0, 0.1) 0%,
     rgba(0, 0, 0, 0.07) 40%, transparent 41%, transparent 100%),
    linear-gradient(116deg, rgba(0, 0, 0, 0.1) 0%,
     rgba(0, 0, 0, 0.07) 50%, transparent 51%, transparent 100%),
    linear-gradient(to top, #041D26, #F2BE7E, #F2A649, #F2A649, #F2BE7E);
}
.error-container > span.four:after {
  width: 137px;
  height: 43px;
  transform: rotate(-49.5deg);
  left: -18px;
  bottom: 36px;
  background: linear-gradient(to right, #041D26, #F2BE7E, #F2A649, #F2A649, #F2BE7E);
}

.error-container > span.zero {
  vertical-align: text-top;
  width: 156px;
  height: 156px;
  border-radius: 999px;
  background: linear-gradient(-45deg, transparent 0%,
   rgba(0, 0, 0, 0.06) 50%,  transparent 51%, transparent 100%),
    linear-gradient(to top right, #041D26, #041D26, #F2BE7E, #F2A649, #F2A649, #F2B749, #F2B749);
  overflow: hidden;
  animation: bgshadow 5s infinite;
}
.error-container > span.zero:before {
  content: '';
  display: block;
  position: absolute;
  transform: rotate(45deg);
  width: 90px;
  height: 90px;
  background-color: transparent;
  left: 0px;
  bottom: 0px;
  background:
    linear-gradient(95deg, transparent 0%, transparent 8%,
     rgba(0, 0, 0, 0.07) 9%, transparent 50%, transparent 100%),
    linear-gradient(85deg, transparent 0%, transparent 19%,
     rgba(0, 0, 0, 0.05) 20%, rgba(0, 0, 0, 0.07) 91%, transparent 92%, transparent 100%);
}
.error-container > span.zero:after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 999px;
  width: 70px;
  height: 70px;
  left: 43px;
  bottom: 43px;
  background: #FDFAF5;
  box-shadow: -2px 2px 2px 0px rgba(0, 0, 0, 0.1);
}

.screen-reader-text {
  position: absolute;
  top: -9999em;
  left: -9999em;
}

@keyframes bgshadow {
  0% {
    box-shadow: inset -160px 160px 0px 5px rgba(0, 0, 0, 0.4);
  }
  45% {
    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
  55% {
    box-shadow: inset 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }
  100% {
    box-shadow: inset 160px -160px 0px 5px rgba(0, 0, 0, 0.4);
  }
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
h1 {
  text-align: center;
  margin: 15px 15px;
}
.zoom-area {
  max-width: 490px;
  margin: 15px auto 30px;
  font-size: 19px;
  text-align: center;
}
.link-container {
  text-align: center;
}
</style>
