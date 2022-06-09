/**
 * As we are using hash based navigation, hack fix
 * to highlight the current selected menu
 *
 * Requires jQuery
 */
function menuFix(slug) {
  const $ = jQuery;
  const menuRoot = $("#toplevel_page_" + slug);

  function currentPath() {
    const currentUrl = window.location.href;
    return currentUrl.slice(currentUrl.indexOf("admin.php"));
  }

  menuRoot.on("click", "a", function () {
    const self = $(this);

    $("ul.wp-submenu li", menuRoot).removeClass("current");

    if (self.hasClass("wp-has-submenu")) {
      $("li.wp-first-item", menuRoot).addClass("current");
    } else {
      self.parents("li").addClass("current");
    }
  });

  $("ul.wp-submenu a", menuRoot).each(function (index, el) {
    if ($(el).attr("href") === currentPath()) {
      $(el).parent().addClass("current");
      return;
    }
  });

  $(window).on("hashchange", function () {
    $("ul.wp-submenu a", menuRoot).each(function (index, el) {
      if ($(el).attr("href") === currentPath()) {
        $(el).parent().addClass("current");
        return;
      }

      $(el).parent().removeClass("current");
    });
  });
}

export default menuFix;
