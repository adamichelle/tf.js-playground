<template>
  <div class="about">
    <div class=" container py-3">
      <h1>About tf.js Playground</h1>
      <p>Say hello to tf.js Playground -
        a client-side codepen.io-like application that loads Tf.js models into your browser
        and allows you to experiment with them.
      </p>
      <img src="../assets/hero-image.png"
      class="img-fluid" alt="Image of tf.js Plauground Components">

      <h2>Why?</h2>
      <p>
        Last year, one of the projects I was interested in for the Outreachy Internship program was
        the 'Create reusable technical demos for Tensorflow.js' project.
        <br />
        At the time, to try out the models, I had to clone the repos locally,
        install the required dependencies and run the demos.
        <br />
        There was a lot of setup involved and by the time I was done getting my local environment
        setup, my creative juices were all dried out.
        <br />
        Some of the demos were also not visual enough for me to see what was
        possible to achieve with these models.
        <br />
        So I struck out and with my move for school and whatnot,
        there was not enough time to come up with something for the final application.
      </p>
      <p>For the Hashnode x Netflify Hackathon,
        I figured I could make something that removes that setup time
        and allows people dive right in to experimenting with the models.
        I thought it would not hurt to create visualized use cases of some of the models,
        giving birth to the idea.
      </p>

      <h2>Features?</h2>
      <p>
        - A three-tab code editor loaded with TF.JS models; <br />
        - A preview pane; <br />
        - Autosave to local storage on code changes.
      </p>

      <h2>License terms</h2>
      <p>tf.js Playground is an open-source project hosted
        on GitHub licensed under the
        <a
          href="https://github.com/adamichelle/tf.js-playground/blob/87bea2d239d4373efebd962e907cdb462fceb8b9/LICENSE"
          target="__blank">MIT license terms</a>.
      </p>
    </div>

    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from '../components/TheFooter.vue';

export default {
  name: 'AboutPage',
  components: {
    TheFooter,
  },
};
</script>
