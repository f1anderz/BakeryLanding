<script>

export default {
  name: "ContactsBlock",
}
</script>

<template>
  <div class="contacts-block">
    <iframe class="contacts-block-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d534.230287409626!2d-73.98447454104439!3d40.760641896991125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1706018517440!5m2!1suk!2sua"
            style="filter: invert(90%); border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"/>
    <div class="contacts-block-social-media">
      <div class="contacts-block-social-media-icon">
        <a href="tel:+1 646-559-4851">
          <img src="@/assets/img/phone-receiver-silhouette.svg" alt="Phone">
          +1 646-559-4851</a>
      </div>
      <div class="contacts-block-social-media-icon">
        <a href="https://www.instagram.com" target="_blank">
          <img src="@/assets/img/instagram.svg" alt="Instagram">
          @BroadwayBoulangerie</a>
      </div>
      <div class="contacts-block-social-media-icon">
        <a href="https://www.facebook.com" target="_blank">
          <img src="@/assets/img/facebook-app-symbol.svg" alt="Facebook">
          BroadwayBoulangerie</a>
      </div>
      <div class="contacts-block-social-media-icon">
        <a href="https://twitter.com" target="_blank">
          <img src="@/assets/img/twitter.svg" alt="X">
          @BroadwayBoulangerie</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" id="contact">
@import "@/assets/scss/variables";

.contacts-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $back-color;

  @include breakpoint(xs) {
    height: 80vh;
    gap: 3em;
    font-size: .8em;
  }

  @include breakpoint(s) {
    height: 120vh;
    gap: 2em;
    font-size: .8em;
  }

  @include breakpoint(m) {
    height: 65vh;
    gap: 3em;
    font-size: .9em;
  }

  @include breakpoint(l) {
    height: 78vh;
    gap: 2em;
  }

  @include breakpoint(xl) {
    height: 75vh;
    gap: 2em;
  }

  @include breakpoint(xxl) {
    height: 92vh;
    gap: 5em;
  }

  @include breakpoint(xxxl) {
    height: 92vh;
    gap: 5em;
    font-size: 2em;
  }

  &-map {
    display: block;
    border-radius: .2em;

    @include breakpoint(xs) {
      width: 100%;
      height: 300px;
    }

    @include breakpoint(s) {
      width: 80%;
      height: 360px;
    }

    @include breakpoint(m) {
      width: 90%;
      height: 400px;
    }

    @include breakpoint(l) {
      width: 85%;
      height: 400px;
    }

    @include breakpoint(xl) {
      width: 75%;
      height: 580px;
    }

    @include breakpoint(xxl) {
      width: 67%;
      height: 620px;
    }

    @include breakpoint(xxxl) {
      width: 67%;
      height: 900px;
    }
  }

  &-social-media {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    width: 90%;
    margin: 0 auto;

    &-icon {
      color: $image-text-color;

      & a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: $image-text-color;
        text-decoration: none;

        @include breakpoint(xs) {
          gap: 1em;
        }

        @include breakpoint(s) {
          gap: 1em;
        }

        @include breakpoint(m) {
          gap: .8em;
        }

        @include breakpoint(l) {
          gap: .8em;
        }

        @include breakpoint(xl) {
          gap: .9em;
        }

        @include breakpoint(xxl) {
          gap: 1em;

          &:hover img {
            color: $image-text-color;
            transform: scale(1.15);
          }

          &:active {
            color: $image-text-color;
          }
        }

        @include breakpoint(xxxl) {
          gap: .8em;

          &:hover img {
            color: $image-text-color;
            transform: scale(1.15);
          }

          &:active {
            color: $image-text-color;
          }
        }

        & img {
          display: block;
          transition: transform .3s ease;

          @include breakpoint(xs) {
            width: 24px;
            height: 24px;
          }

          @include breakpoint(s) {
            width: 24px;
            height: 24px;
          }

          @include breakpoint(m) {
            width: 28px;
            height: 28px;
          }

          @include breakpoint(l) {
            width: 28px;
            height: 28px;
          }

          @include breakpoint(xl) {
            width: 32px;
            height: 32px;
          }

          @include breakpoint(xxl) {
            width: 32px;
            height: 32px;
          }

          @include breakpoint(xxxl) {
            width: 64px;
            height: 64px;
          }
        }
      }
    }
  }
}
</style>