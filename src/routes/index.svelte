<script>
  let img1 = 'cooking_camp_bbq.png';
  let img2 = 'food_gyouza_enban.png';
  let img3 = 'food_spaghetti_vongole_bianco.png';
  let img4 = 'food_sushi_kobore_ikura_don.png';
  let img5 = 'syougatsu_mark_mochi.png';
</script>


<svelte:head>
  <title>expanding-cards</title>
</svelte:head>

<style>
  body {
    height: 100vh;
    align-items: center;
    justify-content: center;
    margin: 0;
    overflow: hidden;
  }

  .container {
    background-color: pink;
    display: flex;
    height: 100vw;
  }

  .image{
    background-color: powderblue;
    margin: 0;
    flex: 5;
  }

  img {
    height: 400px;
  }

  .image.active {
    flex: 0.5;
  }

</style>

<h1>expanding-cards</h1>

<body>
  <div class="container">
    <div class="image active">
      <img alt="img1" src={img1}>
    </div>
    <div class="image">
      <img alt="img2" src={img2}>
    </div>
    <div class="image">
      <img alt="img3" src={img3}>
    </div>
    <div class="image">
      <img alt="img4" src={img4}>
    </div>
    <div class="image">
      <img alt="img5" src={img5}>
    </div>
  </div>
</body>
