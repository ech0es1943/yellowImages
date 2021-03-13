<template>
  <figure class="image is-3by1 cover-image">
    <span class="cover-image_title has-text-white">Cover image</span>
    <img :src="url ? url : 'https://asiamountains.net/upload/slide/slide-1960x857-07.jpg'" alt="Placeholder image">
    <input @change="uploadImage" id="file" name="file"
           accept="image/x-png,image/gif,image/jpeg" ref="fileInput" type="file">
    <div class="cover-image_actions">
      <span @click="$refs.fileInput.click()" class="has-text-white">
        Change image
      </span>
      <span @click="removeImage" class="has-text-white">
        Remove
      </span>
    </div>
  </figure>
</template>

<script>
  export default {
    name: "Cover",
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
  .cover-image {
    &_title {
      position: absolute;
      font-size: $title-text;
      font-weight: $bold-font;
      top: 15px;
      left: 20px;
      z-index: 1;
    }
    &_actions {
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 1;
      span {
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px 15px;
        border-radius: 20px;
        text-align: center;
        font-weight: $bold-font;
        font-size: $desc-text;
        cursor: pointer;
        &:first-child {
          margin-right: 10px;
        }
        &:hover {
          opacity: $hover-opacity;
        }
      }
    }
  }
</style>
