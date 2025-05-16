const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 7000,
  execTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  video: false,
  failOnStatusCode: false,
  viewportHeight: 1000,
  viewportWidth: 1600,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/html",
    charts: true,
    reportPageTitle: "My Test Suite",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  env: {
    "url": "https://www.automationexercise.com/",
    "name": "test0128879123898",
    "password": "test012890879123889",
    "email" : "alexsmkovtkvtzb4979128883@sgisfg.com",
    "wrong-password": "test01289087912377",
    "wrong-email" : "alexsmkovtkvtzb497912377@sgisfg.com",
    "testcasepageurl": "https://www.automationexercise.com/test_cases",
    "productpageurl": "https://www.automationexercise.com/products",
    "firstproductpageurl": "https://www.automationexercise.com/product_details/1",
    "cartpageurl": "https://www.automationexercise.com/view_cart",
    "name1": "tes791237845",
    "password1": "test0128791237845",
    "email1" : "alexsmkovtkv4979123784@sgisfg.com",
    "polobrandpageurl": "https://www.automationexercise.com/brand_products/Polo",
    "hnmbrandpageurl": "https://www.automationexercise.com/brand_products/H&M" ,
    "name2": "tes7912378898",
    "password2": "test01287912378898",
    "email2" : "alexsmkovtkv4889849552@sgisfg.com",

    "name3": "tes79123788987",
    "password3": "test01287912378897",
    "email3" : "alexsmkovtkv479849552@sgisfg.com"
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://www.automationexercise.com/',
  },
})
