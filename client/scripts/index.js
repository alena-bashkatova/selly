$(document).on('ready', function () {
    var currentScrollTop = 0,
        targetScrollHeight = $('.selly').innerHeight(),
        windowTarget = $(window),
        sidebar = $('aside'),
        pushContent = $('.push');
    function showElem(target) {
        if (!target.hasClass('show')) {
            target.addClass('show');
        }
    }
    function hideElem(target) {
        if (target.hasClass('show')) {
            target.removeClass('show');
        }
    }
    windowTarget.scroll(function () {
        currentScrollTop = windowTarget.scrollTop();
        if (currentScrollTop >= targetScrollHeight || currentScrollTop == ($('html').height() - $(window).height())) {
            showElem(sidebar);
            showElem(pushContent);
        } else {
            hideElem(sidebar);
            hideElem(pushContent);
        }
    });
});