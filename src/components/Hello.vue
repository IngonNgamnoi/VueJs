<template>
  <div>

 <div class="columns is-gapless is-multiline is-mobile" >
  <div class="column is-half" v-for="item in data" :key="item.id">
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="item.image" />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">

      <div class="media-content">
        <p class="title is-4">{{ item.name }}</p>
        <p class="subtitle is-6">{{ item.prices }}</p>
      </div>
    </div>
    <button @click="send(item, $event)">Send</button>


  </div>
</div>
  </div>

</div>


<br>
  </div>

</template>

<script>
import {httpService} from '../service/httpService';

export default {
  data() {
    return {
      data: [],
      select:[]
    };
  },
  mounted() {
    httpService.get("data")
      .then(result => {
        this.data = result.data;
        console.log(this.data);
      });
  },
  methods: {
    send: function (item) {

      this.select.push(item)
       console.log(this.select);
    }

  }
};
</script>

<style scoped>
.card{
  max-width:60%;
  padding: 10px;
  margin-left: 70px;
  margin-top: 40px;
}
</style>
