<template>
<div>
  <h1 class="title">Test Demo</h1>
  <mge/>
    <div class="user">
   Name: <input v-model="name">
   <hello v-bind:name="name"> </hello>
   </div>
    <a @click="confirmsubmit" class="submit button is-primary is-outlined"> submit</a>
</div>



</template>

<script>
import Hello from "./components/Hello";
import Mge from "./components/Mge";
export default {
  components: {
    Hello,
    Mge
  },
  data() {
    return {
      name: "",

      list: [{ message: "Foo" }, { message: "Bar" }]
    };
  },
  methods: {
    confirmsubmit() {
      window.alert(this.name + " You ok submit");
    }
  }
};
</script>
<style scoped>
.title{
  text-align: center;
  margin-top: 20px;
}
.user {
  margin-top: 20px;
  margin-left: 40px;
}
.submit{
  margin-top: 10px;
  margin-left: 40px;
}
</style>


