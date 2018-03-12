<template>
  <span>

  <img :src="image" />
  </span>
</template>
<style scoped>
img {
  width: 100px;
  height: 100px;
  margin-left: 30px;
}
</style>
<script>
export default {
  data() {
    return {
      image:
        "http://icons.iconarchive.com/icons/icons8/ios7/512/Users-User-Male-2-icon.png",


   };
  }
};
</script>
