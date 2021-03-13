<template>
  <div class="columns px-3 pt-3 avatar-image">
    <figure class="image is-64x64">
      <input class="avatar-image_input" @change="uploadImage" id="file" name="file"
             accept="image/x-png,image/gif,image/jpeg" ref="fileInput" type="file">
      <img class="is-rounded" :src="url ? url : 'https://thispersondoesnotexist.com/image'">
    </figure>
    <div class="column py-2">
      <div class="avatar-image_actions mb-1">
        <span @click="$refs.fileInput.click()">Change photo</span>
        <span @click="removeImage">Remove</span>
      </div>
      <p class="avatar-image_desc has-text-grey">Recommended to use JPEG, PNG or GIF, 1980x332px, max 3MB</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Avatar",
    data() {
      return {
        url: null,
      }
    },
    methods: {
      uploadImage() {
        let image = this.$refs.fileInput.files[0];
        this.url = URL.createObjectURL(image);
      },
      removeImage() {
        this.url = null;
        this.$refs.fileInput.value = null;
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/css/vars.scss';

  .avatar-image {
    &_actions {
      span {
        color: $main-color;
        font-size: $label-text;
        font-weight: $bold-font;
        cursor: pointer;
        &:first-child {
          margin-right: 10px;
        }
        &:hover {
          opacity: $hover-opacity;
        }
      }
    }
    &_desc {
      font-size: $desc-text;
    }
    &_input {
      display: none;
    }
  }
</style>
