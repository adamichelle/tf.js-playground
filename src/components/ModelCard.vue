<template>
  <div class="card tp-model-card pb-2 mb-4">
    <div class="card-img-top text-center py-5">
      <i>
        <svg class="tp-feather tp-feather-lg">
          <use :href="require('../assets/feather-sprite.svg')+'#'+model.icon"></use>
        </svg>
      </i>
    </div>
    <div class="card-body" :title="model.description">
      <h5 class="card-title">{{model.name}}</h5>
      <h6 class="card-subtitle mb-2 text-muted text-capitalize">{{model.alias}}</h6>
      <p class="card-text text-truncate">{{model.description}}</p>
      <p class="pt-0"><a :href="model.url" class="card-link">
        <i>
          <svg class="tp-feather tp-feather-sm">
            <use href="../assets/feather-sprite.svg#github"></use>
          </svg>
        </i> Learn More
      </a>
      </p>
      <router-link
        class="btn tp-btn-amber"
        :to="{ name: 'Playground', params: { modelSlug: model.slug }}"
      >
        Check it out
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModelCard',
  props: ['model'],
};
</script>

<style scoped>
.tp-model-card {
  min-height: 400px;
  background-color: rgba(235, 244, 239, 0.2);
  border: 1px solid #EFF6F2;
  -webkit-box-shadow: 5px 6px 6px -6px #EBF4EF;
  -moz-box-shadow: 5px 6px 6px -6px #EBF4EF;
  box-shadow: 5px 6px 6px -6px #EBF4EF;
  width: 22rem;
}

@media only screen and (min-width: 769px)  {
  .tp-model-card {
    width: 20rem;
  }
}

@media only screen and (min-width: 912px)  {
  .tp-model-card {
    width: 22rem;
  }
}
</style>
