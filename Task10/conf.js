/**
 * Created by Valeriia_Trumanidze on 12/23/2016.
 */
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/*Test.js'],

    onPrepare: () => {
        browser.manage().window().maximize();
    }
};