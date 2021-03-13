<template>
  <b-menu class="custom-menu">
    <b-menu-list class="custom-menu_list">
      <b-menu-item icon="information-outline" label="Overview"></b-menu-item>
      <b-menu-item icon="account" label="Account">
        <b-menu-item label="Account data"></b-menu-item>
        <b-menu-item label="Addresses"></b-menu-item>
      </b-menu-item>
      <b-menu-item icon="account" label="My Store">
        <b-menu-item label="Account data"></b-menu-item>
        <b-menu-item label="Addresses"></b-menu-item>
      </b-menu-item>
      <b-menu-item icon="account" label="Purchase">
        <b-menu-item label="Account data"></b-menu-item>
        <b-menu-item label="Addresses"></b-menu-item>
      </b-menu-item>
      <b-menu-item icon="account" label="Payouts">
        <b-menu-item label="Account data"></b-menu-item>
        <b-menu-item label="Addresses"></b-menu-item>
      </b-menu-item>
    </b-menu-list>
    <b-menu-list class="custom-menu_list">
      <b-menu-item label="Expo" icon="link" tag="router-link" target="_blank" to="/expo"></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script>
  export default {
    name: "Menu",
    data() {
      return {
        isActive: true
      }
    }
  }
</script>

<style lang="scss">
  .custom-menu {
    .menu-list {
      a {
        font-size: 14px;
        padding: .8em .75em;
        border-radius: 20px;
        span {
          &.icon {
            vertical-align: top;
            i {
              font-size: 20px;
            }
          }
          &:not(.icon) {
            margin-left: 15px;
          }
        }
      }
    }
  }
</style>
