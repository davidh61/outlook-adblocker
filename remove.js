setTimeout(function () {

  var outlookBannerAdLink =  $('a[href$="https://windows.microsoft.com/outlook/ad-free-outlook"]'); 

  if (outlookBannerAdLink.length) {
    var banner = $(outlookBannerAdLink[0]).parent().parent().parent().parent();
    $(banner).remove();
  }

  var outlookAdBtnText = $("span:contains('Upgrade to Office 365 with')");

  if (outlookAdBtnText.length) {
    var outlookAdBtn = $(outlookAdBtnText[0]).parent().parent().parent();
    $(outlookAdBtn).remove();
  }

}, 2500);


