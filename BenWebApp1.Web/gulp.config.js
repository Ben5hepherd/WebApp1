module.exports = function () {
    var dist = 'dist/';
    var maps = 'maps/';
    var config = {};

    config.dist = {
        root: dist,
        js: dist + 'js/',
        content: dist + 'content/',
        css: dist + 'content/css',
        fonts: dist + 'content/fonts',
        emailtemplates: dist + 'content/emailtemplates',
        images: dist + 'content/images',
        documents: dist + 'content/documents'
    }

    config.src = {
        js: 'Scripts/**/*.js',
        less: 'Content/Site.less',
        documents: 'Content/documents/*.*',
        images: 'Content/images/**/*.*',
        fonts: 'fonts/*.*',
        emailtemplates: 'Content/emailtemplates/*.html',
        css: ['Content/*.css', '!Content/flipclock.css'],
        cssMinifyExclusions: ['Content/flipclock.css']
    }

    config.maps = maps;

    return config;
}