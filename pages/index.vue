<template>
  <section>
    <div class="columns">
      <div class="column is-8">
        <h1 class="is-size-4 has-text-weight-bold mb-2">Profile info</h1>
        <div class="card">
          <div class="card-image">
            <Cover/>
          </div>
          <div class="card-content">
            <Avatar/>
            <div class="divider my-5 has-background-white-ter"></div>
            <Form/>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-8">
        <Links/>
      </div>
    </div>
  </section>
</template>

<script>
  import Cover from '~/components/Cover'
  import Avatar from '~/components/Avatar'
  import Form from '~/components/Form'
  import Links from '~/components/Links'

  export default {
    name: 'Account',
    components: {
      Cover,
      Avatar,
      Form,
      Links
    }
  }
</script>

<style scoped>
  .card {
    overflow: visible;
  }
</style>
