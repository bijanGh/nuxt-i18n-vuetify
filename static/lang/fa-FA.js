// lang/[lang].js

export default () => {
  return new Promise(function(resolve) {
    resolve({
      welcome: 'خوش آمدید',
      home_page: {
        app_name: 'مزایده-آوین',
        app_desc: 'یک بستر مزایده برای خرید محصولات'
      },
      nav: {
        auctions: 'حراجی ها',
        registeredAuctions: 'حراجی های ثبت نام شده',
        heldAuctions: 'حراجی های برگزار شده',
        store: 'فروشگاه',
        tos: 'قوانین و مقررات',
        guide: 'راهنما',
        contactUs: 'تماس با ما',
        signOut: 'خروج'
      },
      layout: {
        search: 'جستجو',
        brandFirstName: 'مزایده',
        brandSecondName: 'آوین'
      }
    })
  })
}
// or
// export default {
//   welcome: 'خوش آمدید'
// }
