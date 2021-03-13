<template>
  <div class="has-background-white">
    <b-navbar class="custom-navbar is-white py-2 container">
      <template #brand>
        <div class="custom-navbar_logo mr-5">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <figure class="image is-48x48">
              <img class="is-rounded" src="https://cdn.yellowimages.com/images/icons/logo-yi-new.svg">
            </figure>
            <h1 class="ml-4">GetYellow</h1>
          </b-navbar-item>
        </div>
      </template>
      <template #start>
        <div class="custom-navbar_menu is-flex">
          <b-navbar-dropdown label="Object Mockups">
            <b-navbar-item href="#">
              About
            </b-navbar-item>
          </b-navbar-dropdown>
          <b-navbar-dropdown label="Creative Store">
            <b-navbar-item href="#">
              About
            </b-navbar-item>
          </b-navbar-dropdown>
          <b-navbar-dropdown label="PNG Images">
            <b-navbar-item href="#">
              About
            </b-navbar-item>
          </b-navbar-dropdown>
          <b-navbar-dropdown label="Creative Fonts">
            <b-navbar-item href="#">
              About
            </b-navbar-item>
          </b-navbar-dropdown>
          <b-navbar-dropdown label="Jobs">
            <b-navbar-item href="#">
              About
            </b-navbar-item>
          </b-navbar-dropdown>
        </div>
      </template>

      <template #end>
        <div class="custom-navbar_actions is-flex">
          <b-navbar-dropdown label="Earn with us">
            <b-navbar-item href="#">
              About
            </b-navbar-item>
          </b-navbar-dropdown>
          <div class="is-flex is-align-items-center ml-4">
            <figure class="image is-48x48">
              <img class="is-rounded" src="https://thispersondoesnotexist.com/image">
            </figure>
          </div>
        </div>
      </template>
    </b-navbar>
  </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style lang="scss">
  @import '../assets/css/vars.scss';

  .custom-navbar {
    &_logo {
      a {
        background-color: white !important;
        img {
          max-height: unset;
        }
        h1 {
          font-weight: $bold-font;
          font-size: 18px;
          color: black !important;
        }
      }
    }
    &_menu, &_actions {
      a.navbar-link {
        background: transparent !important;
        font-size: 14px;
        font-weight: $bold-font;
        color: black;
        &:not(.is-arrowless) {
          padding-right: 1.5em;
          &::after {
            width: 0.425em;
            height: 0.425em;
            border-width: 2px;
            margin-top: -0.275em;
            right: .6em;
          }
        }
        &:hover {
          opacity: $hover-opacity;
        }
      }
    }
  }
</style>
