/**
 * Created by ninja on 30/06/14.
 */

Modernizr.addTest('bigscreen', function () {
    var dim = {
        width: 0, height: 0
    };

    if (document.body && document.body.offsetWidth) {
        dim.width = document.body.offsetWidth;
        dim.height = document.body.offsetHeight;

    }
    if (document.compatMode == 'CSS1Compat' && document.documentElement && document.documentElement.offsetWidth) {
        dim.width = document.documentElement.offsetWidth;
        dim.height = document.documentElement.offsetHeight;

    }
    if (window.innerWidth && window.innerHeight) {
        dim.width = window.innerWidth;
        dim.height = window.innerHeight;

    }
    /* Detect height both Portrait/landscape mode */
    height = Math.min(dim.width,dim.height);
    return height > 400;
});


