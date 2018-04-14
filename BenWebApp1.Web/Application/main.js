var scripts = "../dist/js";
requirejs.config({
    paths: {
        'durandal': scripts + '/durandal',
        'plugins': scripts + '/durandal/plugins',
        'transitions': scripts + '/durandal/transitions',
        'knockout': scripts + '/knockout-3.4.2.debug',
        'komapping': scripts + '/knockout.mapping-latest.debug',
        'text': scripts + '/text',
        'kovalidation': scripts + '/knockout.validation',
        'server': 'helpers/server',
        'moment': scripts + '/moment',
        'scripts': scripts
    },

    // break browser caching by creating unique url
    urlArgs: "bust=#{cacheBuster}"
});

define('jquery', function () { return jQuery; });

define(function (require) {
    var app = require('durandal/app'),
        viewLocator = require('durandal/viewLocator'),
        siteconfig = require('config/siteconfig'),
        server = require("server");

    siteconfig.configure();

    app.title = 'Ben Web App 1';

    app.configurePlugins({
        router: true,
        dialog: true
    });

    var model = {};
    model.isAuthorised = false;

    //function getCurrentUser() {
    //    return server.getData("api/User").done(function (data) {
    //        //var dog = data;
    //        model.isAuthorised = true;
    //    });
    //}

    app.start().then(function () {
        viewLocator.useConvention();

        //$.when(getCurrentUser()).then(function () {
        //    var shell = 'viewmodels/shell';
        //    app.setRoot(shell);
        //});

        var shell = 'viewmodels/shell';
        app.setRoot(shell);

    });
});
