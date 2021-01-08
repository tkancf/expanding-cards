<script lang="ts">
  import { onMount } from "svelte";

  let img1 = "cooking_camp_bbq.png";
  let img2 = "food_gyouza_enban.png";
  let img3 = "food_spaghetti_vongole_bianco.png";
  let img4 = "food_sushi_kobore_ikura_don.png";
  let img5 = "syougatsu_mark_mochi.png";

  onMount(() => {
    let imgs = document.querySelectorAll(".image");
    imgs.forEach((img) => {
      img.addEventListener("click", () => {
        removeActiveClasses();
        img.classList.add("active");
      });
    });

    function removeActiveClasses() {
      imgs.forEach((img) => {
        img.classList.remove("active");
      });
    }
  });
</script>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
  }

  .container {
    display: flex;
    width: 90vw;
    height: 90vh;
    overflow: hidden;
  }

  .image {
    widows: 90vh;
    background-color: red;
    cursor: pointer;
    flex: 0.5;
    margin: 5px;
    position: relative;
    overflow: hidden;
  }

  .image.active {
    flex: 5;
  }

  img {
    width: 80vh;
    height: 80vh;
  }

  @media (max-width: 480px) {
    .container {
      width: 100vw;
    }

    .image:nth-of-type(4),
    .image:nth-of-type(5) {
      display: none;
    }
  }
</style>

<svelte:head>
  <title>expanding-cards</title>
</svelte:head>
<body>
  <div class="container">
    <div class="image active"><img alt="img1" src={img1} /></div>
    <div class="image"><img alt="img2" src={img2} /></div>
    <div class="image"><img alt="img3" src={img3} /></div>
    <div class="image"><img alt="img4" src={img4} /></div>
    <div class="image"><img alt="img5" src={img5} /></div>
  </div>
</body>
