<template>
  <div>
    <NavBar/>
    <div class="container is-12 mt-3">
      <div class="columns">
        <div class="column is-one-fifth">
          <Menu></Menu>
        </div>
        <div class="column">
          <nuxt />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Menu from '~/components/Menu'
  import NavBar from '~/components/NavBar'

  export default {
    components: {
      Menu,
      NavBar
    }
  }
</script>
