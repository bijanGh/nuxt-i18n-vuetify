// lang/[lang].js

export default () => {
  return new Promise(function(resolve) {
    resolve({
      welcome: 'Welcome',
      home_page: {
        app_name: 'avin-bidding',
        app_desc: 'a bidding system for selling goods'
      },
      nav: {
        auctions: 'Auctions',
        registeredAuctions: 'Registered Auctions',
        heldAuctions: 'Held Auctions',
        store: 'Store',
        tos: 'Terms Of Service',
        guide: 'Guide',
        contactUs: 'Contact Us',
        signOut: 'Sign Out'
      },
      layout: {
        search: 'Search',
        brandFirstName: 'Avin',
        brandSecondName: 'Bidding'
      }
    })
  })
}
// or
// export default {
//   welcome: 'Welcome'
// }
