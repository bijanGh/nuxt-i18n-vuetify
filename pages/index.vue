<template>
  <section
    :class="{ 'custom-font': getDir($i18n.locale)==='rtl' }"
    class="container">
    <div>
      <logo/>

      <h1
        :class="{ 'custom-font': getDir($i18n.locale)==='rtl' }"
        class="title"
      >
        {{ $t('home_page.app_name') }}
      </h1>
      <h2 class="subtitle">
        {{ $t('home_page.app_desc') }}
      </h2>
      <p class="subtitle">{{ $t('welcome') }}</p>
      <p
        class="subtitle"
        @click="increment">{{ counter }}</p>
      <div class="links">
        <nuxt-link
          v-for="locale in $i18n.locales"
          v-if="locale.code !== $i18n.locale"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          style="padding: 0.5em"
          @click.native="changeDir(locale.code)">{{ locale.name }}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapMutations, mapGetters, mapState } from 'vuex'

export default {
  components: {
    Logo
  },
  data() {
    return {
      test: 'test'
    }
  },
  computed: {
    ...mapState(['counter']),
    ...mapGetters(['getDir'])
  },
  watch: {},
  methods: {
    changeDir(locale) {
      if (locale === 'fa') this.$vuetify.rtl = true
      else this.$vuetify.rtl = false
    },
    ...mapMutations(['increment'])
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
