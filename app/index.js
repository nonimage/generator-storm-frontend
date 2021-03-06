'use strict';
var util = require('util')  ;
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay'); 

var StormFrontendGenerator = yeoman.generators.Base.extend({

    init: function () {
        this.pkg = require('../package.json');

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function () {
        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the Storm Frontend generator. ** Now with Gulp **'));
    },

    app: function () {

        // directories
        this.mkdir('app');
        this.mkdir('app/_');
        this.mkdir('app/_/images');
        this.mkdir('app/_/images/icons');
        this.mkdir('app/_/js');
        this.mkdir('app/_/css');
        this.mkdir('app/_/sass');
        this.mkdir('app/templates/pages');
        this.mkdir('app/templates/layouts');
        this.mkdir('app/templates/partials');

        // assemble files
        this.copy('header.hbs', 'app/templates/partials/header.hbs');
        this.copy('footer.hbs', 'app/templates/partials/footer.hbs');
        this.copy('index.hbs', 'app/templates/pages/index.hbs');
        this.copy('sample-page.hbs', 'app/templates/pages/sample-page.hbs');
        this.copy('default.hbs', 'app/templates/layouts/default.hbs');
        
        // js files
        this.copy('app.js', 'app/_/js/app.js');
        
        //images
        this.copy('apple-touch-icon.png', 'app/_/images/icons/apple-touch-icon.png');
        this.copy('favicon.ico', 'app/_/images/icons/favicon.ico');
        
        // sass files
        this.copy('app.scss', 'app/_/sass/app.scss');
        this.copy('legacy.scss', 'app/_/sass/legacy.scss');
        this.copy('_utils.scss', 'app/_/sass/_utils.scss');
        
        // npm and bower files
        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');
    },

    projectfiles: function () {
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
        this.copy('gulpfile.js', 'gulpfile.js');
        this.copy('gitignore', '.gitignore');
    }

});

module.exports = StormFrontendGenerator;