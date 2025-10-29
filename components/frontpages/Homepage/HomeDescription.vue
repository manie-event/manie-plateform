<template>
  <div class="home-description">
    <div class="home-description__container">
      <h2 class="home-description__title">
        Notre mission ? Permettre à n'importe qui d'organiser n'importe quoi !
      </h2>
      <div>
        <div class="home-description__section1">
          <div class="home-description__section1__left-side">
            <h2 class="home-description__section1__big-title">Particuliers</h2>
          </div>
          <div class="home-description__section1__description">
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure officia facere sit sint
              voluptatem error tempore reprehenderit ex, praesentium similique mollitia minima
              veritatis nesciunt perspiciatis molestiae sapiente impedit repellat architecto.
            </p>
            <NuxtLink to="/auth/login" class="home-description__section1__description__link"
              >Je crée mon évènement</NuxtLink
            >
          </div>
          <Img :src="section1Img" class="home-description__section1__image"></Img>
        </div>
        <div class="home-description__section2">
          <Img :src="section1Img" class="home-description__section2__image"></Img>
        </div>
        <div class="home-description__section3">
          <Img :src="section1Img" class="home-description__section3__image"></Img>
          <div class="home-description__section3__right-side">
            <h2 class="home-description__section3__big-title">Entreprises</h2>
            <div class="home-description__section1__description">
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure officia facere sit
                sint voluptatem error tempore reprehenderit ex, praesentium similique mollitia
                minima veritatis nesciunt perspiciatis molestiae sapiente impedit repellat
                architecto.
              </p>
              <NuxtLink to="/auth/login" class="home-description__section1__description__link"
                >Je crée mon évènement</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import section1Img from '@/public/images/backgrounds/section1.jpg';
const { $gsap, $ScrollTrigger } = useNuxtApp();

onMounted(() => {
  $gsap.to('.home-description__section1__big-title', {
    left: '-10vw',
    scrollTrigger: {
      trigger: '.home-description__section1',
      start: 'top 100%',
      end: 'bottom 90%',
      scrub: 1.5,
    },
  });

  $gsap.to('.home-description__section3__big-title', {
    right: '-10vw',
    scrollTrigger: {
      trigger: '.home-description__section3',
      start: 'top 50%',
      end: 'bottom 70%',
      scrub: 1.5,
    },
  });
});
</script>
<style lang="scss" scoped>
.home-description {
  background: var(--bg-color);
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  &__container {
    width: 90vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
  }
  &__title {
    text-align: center;
    font-size: 2vw;
    font-family: 'Poppins';
    font-weight: 500;
    margin: 50px auto 170px;
    position: relative;
    z-index: 3;
  }
  &__section1 {
    // background: red;
    display: flex;
    align-items: center;
    position: relative;
    &__left-side {
      position: relative;
      z-index: 2; // au-dessus de l'image
      z-index: 99;
      height: 70vh;
    }
    &__big-title {
      // background: purple;
      position: absolute;
      padding: 0;
      margin: 0;
      font-size: clamp(10vw, 15vw + 1rem, 25vw);
      line-height: 0.5;
      z-index: 4;
      top: 0;
      left: 0vw;
      // background-color: purple;
    }
    &__description {
      margin-top: 250px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      &__link {
        position: relative;
        color: var(--manie-thirdy);
        text-decoration: none;
        font-family: 'Poppins';
        font-weight: 600;
        display: inline-block; // nécessaire pour que le ::after suive la largeur du texte

        &::after {
          content: '';
          position: absolute;
          bottom: -3px; // espace entre le texte et la ligne
          left: 0;
          width: 20%;
          height: 2px;
          background: var(--manie-thirdy);
          transition: transform 0.3s ease;
          transform: scaleX(0); // caché par défaut (effet animation)
          transform-origin: right;
        }

        &:hover::after {
          transform: scaleX(1); // se déploie au survol
          transform-origin: left;
        }
      }
    }
    &__image {
      position: relative;
      right: -100px;
      width: 100vw;
      // background: red;
      max-height: 900px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  &__section3 {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: -330px;
    margin-bottom: 100px;
    &__right-side {
      position: relative;
      z-index: 2; // au-dessus de l'image
      z-index: 99;
      height: 70vh;
      width: 100vw;
    }
    &__big-title {
      // background: purple;
      position: absolute;
      padding: 0;
      margin: 0;
      right: 0vw;
      font-size: clamp(10vw, 15vw + 1rem, 25vw);
      line-height: 0.5;
      z-index: 4;
      top: 0;
      // background-color: purple;
    }
    &__image {
      position: relative;
      left: -100px;
      width: 100vw;
      // background: red;
      max-height: 900px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  &__section2 {
    display: flex;
    justify-content: center;
    width: 70vw;
    z-index: 99;
    transform: translate(80px, -200px);
    position: relative;
    &__image {
      position: relative;
      width: 350px;
      height: 350px;
      // background: red;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: -10px 10px 0 10px var(--bg-color);
    }
  }
}
</style>
