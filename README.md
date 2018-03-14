# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

#Note:
# vtext
<p>{{ name }}</p>
#vhtml
<p v-html="name"></p> -->
#vif
<p v-if="name">Hi, {{ name }}</p> -->
#velse
<p v-else> No Data </p> -->
#vfor
<p v-for="(x,index) in list"> {{ x.message }} -  {{index }}</p> -->
#v-on
 ย่อได้ @
 #router-link
 no refresh page
 #code demo tes
 <mge/>
    <div class="user">
   Name: <input v-model="name">
   <hello v-bind:name="name"> </hello>
   </div>
    <a @click="confirmsubmit" class="submit button is-primary is-outlined"> submit</a>
    <br>
     <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <br>
    <router-view></router-view>
```




For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
