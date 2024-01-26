<script>

export default {
  name: "WelcomeBlock",
}
</script>

<template>
  <div class="welcome-block">
    <div class="welcome-block-header">
      <img src="../assets/img/bread.svg" alt="Logo" class="welcome-block-header-logo">
      <div class="welcome-block-header-title">
        <span>Broadway</span>
        <span class="highlighted">Boulangerie</span>
      </div>
      <div class="welcome-block-header-nav">
        <a href="#products" class="welcome-block-header-nav-link">Products</a>
        <a href="#why-us" class="welcome-block-header-nav-link">Why Us</a>
        <a href="#contact" class="welcome-block-header-nav-link">Contact</a>
      </div>
    </div>
    <div class="welcome-block-slogan">
      <span>Broadway Boulangerie:</span>
      <span>Crafting <span class="highlighted">Breads</span>, Creating <span
          class="highlighted">Moments.</span></span></div>
    <div class="welcome-block-description">
      <span>Rise to the Occasion with Broadway Boulangerie —</span>
      <span>Where Every Loaf Tells a Tale of Premium Ingredients and Passionate Craftsmanship!</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.welcome-block {
  height: 100vh;
  background-image: url(@/assets/img/main_image.webp);
  background-size: cover;
  color: $image-text-color;

  &-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto;

    @include breakpoint(xs) {
      width: 90%;
      gap: .75em;
      padding-top: .2em;
    }

    @include breakpoint(s) {
      width: 90%;
      gap: .75em;
      padding-top: .2em;
    }

    @include breakpoint(m) {
      width: 85%;
      gap: .75em;
      padding-top: .75em;
    }

    @include breakpoint(l) {
      width: 90%;
      gap: .75em;
      padding-top: .5em;
    }

    @include breakpoint(xl) {
      width: 90%;
      gap: .75em;
      padding-top: .8em;
    }

    @include breakpoint(xxl) {
      width: 70%;
      gap: .75em;
      padding-top: 1em;
    }

    @include breakpoint(xxxl) {
      width: 70%;
      gap: 1em;
      padding-top: 1em;
    }

    &-logo {
      @include breakpoint(xs) {
        width: 40px;
        height: 40px;
      }

      @include breakpoint(s) {
        width: 40px;
        height: 40px;
      }

      @include breakpoint(m) {
        width: 48px;
        height: 48px;
      }

      @include breakpoint(l) {
        width: 52px;
        height: 52px;
      }

      @include breakpoint(xl) {
        width: 56px;
        height: 56px;
      }

      @include breakpoint(xxl) {
        width: 64px;
        height: 64px;
      }

      @include breakpoint(xxxl) {
        width: 96px;
        height: 96px;
      }
    }

    &-title {
      display: flex;
      flex-direction: column;
      font-weight: weight(regular);

      @include breakpoint(xs) {
        font-size: .9em;
      }

      @include breakpoint(s) {
        font-size: .9em;
      }

      @include breakpoint(m) {
        font-size: 1em;
      }

      @include breakpoint(l) {
        font-size: 1.05em;
      }

      @include breakpoint(xl) {
        font-size: 1.2em;
      }

      @include breakpoint(xxl) {
        font-size: 1.25em;
      }

      @include breakpoint(xxxl) {
        font-size: 1.75em;
      }
    }

    &-nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: auto;

      @include breakpoint(xs) {
        gap: 1em;
      }

      @include breakpoint(s) {
        gap: 1em;
      }

      @include breakpoint(m) {
        gap: 1.5em;
      }

      @include breakpoint(l) {
        gap: 1.75em;
      }

      @include breakpoint(xl) {
        gap: 2em;
      }

      @include breakpoint(xxl) {
        gap: 2em;
      }

      @include breakpoint(xxxl) {
        gap: 3em;
      }

      &-link {
        display: block;
        color: $image-text-color;
        text-decoration: none;
        font-weight: weight(regular);
        transition: transform .3s ease;

        @include breakpoint(xs) {
          font-size: .8em;
        }

        @include breakpoint(s) {
          font-size: .8em;
        }

        @include breakpoint(m) {
          font-size: 1em;
        }

        @include breakpoint(l) {
          font-size: 1.1em;
        }

        @include breakpoint(xl) {
          font-size: 1.2em;
        }

        @include breakpoint(xxl) {
          font-size: 1.2em;

          &:hover {
            color: $highlight-color;
            transform: scale(1.1);
          }
        }

        @include breakpoint(xxxl) {
          font-size: 2em;

          &:hover {
            color: $highlight-color;
            transform: scale(1.1);
          }
        }
      }
    }
  }

  &-slogan {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: weight(light);
    margin: 0 auto;

    @include breakpoint(xs) {
      padding-top: 5em;
      width: 80%;
      font-size: 1.75em;
    }

    @include breakpoint(s) {
      padding-top: 4em;
      width: 75%;
      font-size: 1.3em;
    }

    @include breakpoint(m) {
      padding-top: 10em;
      width: 80%;
      font-size: 2em;
    }

    @include breakpoint(l) {
      padding-top: 5em;
      width: 80%;
      font-size: 2em;
    }

    @include breakpoint(xl) {
      padding-top: 6em;
      width: 80%;
      font-size: 2.7em;
    }

    @include breakpoint(xxl) {
      padding-top: 3em;
      width: 60%;
      font-size: 3em;
    }

    @include breakpoint(xxxl) {
      padding-top: 3em;
      width: 60%;
      font-size: 5em;
    }
  }

  &-description {
    display: flex;
    flex-direction: column;
    font-weight: weight(light);
    margin: 0 auto;

    @include breakpoint(xs) {
      font-size: 1.25em;
      padding-top: 5em;
      width: 90%;
    }

    @include breakpoint(s) {
      font-size: 1.25em;
      padding-top: 3em;
      width: 65%;
    }

    @include breakpoint(m) {
      font-size: 1.4em;
      padding-top: 6em;
      width: 70%;
    }

    @include breakpoint(l) {
      font-size: 1.4em;
      padding-top: 5em;
      width: 70%;
    }

    @include breakpoint(xl) {
      font-size: 1.6em;
      padding-top: 4em;
      width: 60%;
    }

    @include breakpoint(xxl) {
      font-size: 1.75em;
      padding-top: 3em;
      width: 50%;
    }

    @include breakpoint(xxxl) {
      font-size: 2.75em;
      padding-top: 3em;
      width: 50%;
    }
  }
}
</style>