<template>
  <v-app
    id="keep"
    :class="{ 'custom-font': getDir($i18n.locale)==='rtl' }"
  >
    <v-navigation-drawer
      v-model="drawer"
      :right="getDir($i18n.locale)==='rtl'"
      fixed
      clipped
      class="thirdColor--text"
      app
      temporary
    >
      <v-list
        dense
        class=""
      >
        <template v-for="(item, i) in items">
          <v-layout
            v-if="item.heading"
            :key="i"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex
              xs6
              class="text-xs-right">
              <v-btn
                small
                flat>edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-3"
          />
          <v-list-tile
            v-else
            :key="i"
          >
            <v-list-tile-action>
              <v-icon color="firstColor" >{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title
                :class="{ 'text_align_right': getDir($i18n.locale)==='rtl' }"
                class="firstColor--text">
                {{ $t(item.text) }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="thirdColor"
      class=""
      app
      fixed
      clipped-left>
      <v-toolbar-side-icon
        class="fifthColor--text"
        @click.native="drawer = !drawer"/>
      <span
        :class="{ 'custom-font': getDir($i18n.locale)==='rtl' }"
        class="title ml-3 mr-5 fifthColor--text">{{ $t('layout.brandFirstName') }}&nbsp;<span class="font-weight-light">{{ $t('layout.brandSecondName') }}</span></span>
      <v-text-field
        :label="$t('layout.search')"
        solo-inverted
        flat
        hide-details
        prepend-inner-icon="fa-search"
      />
      <v-spacer/>
    </v-toolbar>
    <v-content>
      <v-container
        fluid
        fill-height
        class="">
        <v-layout
          justify-center
          align-center>
          <v-flex shrink>
            <nuxt/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapMutations, mapGetters, mapState } from 'vuex'

export default {
  props: {},
  data: () => ({
    drawer: null,
    items: [
      { icon: 'fa-tags', text: 'nav.auctions' },
      { divider: true },
      { icon: 'fa-calendar', text: 'nav.registeredAuctions' },
      { icon: 'fa-archive', text: 'nav.heldAuctions' },
      { icon: 'fa-shopping-basket', text: 'nav.store' },
      { divider: true },
      { icon: 'fa-tasks', text: 'nav.tos' },
      { icon: 'fa-question', text: 'nav.guide' },
      { icon: 'fa-phone', text: 'nav.contactUs' },
      { divider: true },
      { icon: 'fa-sign-out', text: 'nav.signOut' }
    ]
  }),
  computed: {
    ...mapState(['langs']),
    ...mapGetters(['getDir'])
  },
  methods: {
    ...mapMutations(['increment'])
  }
}
</script>

<style >
#keep .v-navigation-drawer__border {
  /*display: none;*/
}
.nav-padding-fix {
  padding-right: 0 !important;
}
</style>
