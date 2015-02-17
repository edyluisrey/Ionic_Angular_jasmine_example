exports.config = {
          capabilities: {
                  // You can use other browsers
                  // like firefox, phantoms, safari, IE (-_-)
                  // webdriver-manager start --standalone
                  'browserName': 'chrome'
          },
          specs: [
                   // We are going to make this file in a minute
                'www/test/e2e/firstE2ETest.spec.js'
          ],
          jasmineNodeOpts: {
                  showColors: true,
                 defaultTimeoutInterval: 30000,
                isVerbose: true,
          },
        allScriptsTimeout: 20000,
          onPrepare: function(){
                browser.driver.get('http://localhost:8100');
        },
        seleniumAddress: 'http://localhost:4444/wd/hub'
};