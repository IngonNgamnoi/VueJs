<template>
  <div>
    <h4 class="title is-4">Getting started</h4>
    <hr>
    <div class="content">
      <p>There are several ways to get started with Bulma. You can either:</p>

      1.use npm to install the Bulma package<br>
      2.use the cdnjs CDN to link to the Bulma stylesheet<br>
      3.use the GitHub repository to get the latest development version<br><br>

      <p>1.Use NPM (recommended):</p>
      <div class="notification">
         npm install bulma
      </div>
      <p>2.Use the cdnjs CDN </p>
      <p>3.Download from the repository </p>
    </div>
     <h4 class="title is-4">Code requirements</h4>
     <div class="content">
       <p>For Bulma to work correctly, you need to make your webpage responsive.</p>
        <p>1.Use the HTML5 doctype</p>
      <div class="notification">
         <!DOCTYPE html>
      </div>
      <p>2.Add the responsive viewport meta tag</p>
      <div class="notification">
         <span class="nt">&lt;meta</span> <span class="na">name=</span><span class="s">"viewport"</span> <span class="na">content=</span><span class="s">"width=device-width, initial-scale=1"</span><span class="nt">&gt;</span>
      </div><br>



     </div>
  </div>
</template>
<style scoped>
  h4{
    margin-top: 40px;
    padding-left: 60px;

  }
  hr{
    width: 900px;
    margin-left: 40px;
  }
  .content{
    margin-left: 65px;
}
p{
   margin-left: -20px;
}
.notification{
 margin-top:10px;
 background-color: #0e0e0e;
 color: aliceblue;
 width: 600px;
}


</style>
