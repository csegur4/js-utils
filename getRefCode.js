// getRefCode.js
/*
URI: https://example.com/exmple?ref=code&
*/
function get_Code() {
  var URI = window.location.href;
  if (URI.search("ref") !== -1) { // if found ref in url
    var URI_REF = URI.substring(URI.search("ref") + 4);
    var REF_CODE;
    if (URI_REF.search("&") !== -1) {
      REF_CODE = URI_REF.substring(0, URI_REF.search("&"));
    } else {
      REF_CODE = URI_REF.substring(0);
    }
  } else {
    return -1;
  }
  if (REF_CODE !== "") {
    return REF_CODE;
  } else {
    return -1;
  }
} // end get_Code

function setCookie() {
  var name = "code";
  if (get_Code() !== -1) {
    var value = get_Code();
    var expires = "";
    var date = new Date();
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
}

/* change this function by $.cookie('yourCookie') */
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ')
      c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0)
      return c.substring(nameEQ.length, c.length);
  }
  return null;
}

/*create cookie once time*/
function createCookie() {
  setCookie();
}

createCookie();
