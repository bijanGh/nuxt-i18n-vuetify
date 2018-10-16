// lang/[lang].js

export default () => {
  return new Promise(function(resolve) {
    resolve({
      welcome: 'Bienvenue',
      home_page: {
        app_name: 'avin-enchère',
        app_desc: 'un système denchères pour la vente de marchandises'
      },
      nav: {
        auctions: 'Les enchères',
        registeredAuctions: 'Enchères enregistrées',
        heldAuctions: 'Enchères tenues',
        store: 'le magasin',
        tos: "Conditions d'utilisation",
        guide: 'le manuel',
        contactUs: 'Contactez nous',
        signOut: 'Déconnexion'
      },
      layout: {
        search: 'Chercher',
        brandFirstName: 'Avin',
        brandSecondName: 'enchère'
      }
    })
  })
}
// or
// export default {
//   welcome: 'Bienvenue'
// }
