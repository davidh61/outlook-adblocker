var isRemoved = false;

setTimeout(function () {
  isRemoved = RemoveComponents();

  if (!isRemoved) {
    debugger;
    setTimeout(function () {
      if (!RemoveComponents()) {
        console.log("Failed to remove components");
      }
    }, 1500);
  }
}, 2500);

function RemoveComponents() {

  var outlookBannerAdLink = $('a[href$="https://windows.microsoft.com/outlook/ad-free-outlook"]');

  if (outlookBannerAdLink.length) {
    var banner = $(outlookBannerAdLink[0]).parent().parent().parent().parent();
    $(banner).remove();
  }

  var outlookAdBtnText = $("span:contains('Upgrade to Office 365 with')");

  if (outlookAdBtnText.length) {
    var outlookAdBtn = $(outlookAdBtnText[0]).parent().parent().parent();
    $(outlookAdBtn).remove();
  }

  return (outlookBannerAdLink.length && outlookAdBtnText.length);
}


