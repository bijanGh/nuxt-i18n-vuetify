import languages from '~/static/lang/languages'

export const state = () => ({
  counter: 0,
  langs: languages
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}
export const getters = {
  getDir: state => locale => {
    let currentLang = state.langs.find(lang => lang.code === locale)
    return currentLang.dir
  }
}
