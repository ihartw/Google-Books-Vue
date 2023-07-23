<template>
  <div class="container">
    <div class="row">
      <div class="col s4 offset-s4 bound-input">
        <h4 class="center-align">{{ input }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TitleSection',
    props: ['input']
  }
</script>

<style>
  .bound-input {
    height: 40px;
  }
</style>
