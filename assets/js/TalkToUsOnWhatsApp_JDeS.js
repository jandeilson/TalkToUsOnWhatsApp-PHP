// talk to us on WhatsApp (modal window)

var TalkToUsOnWhatsApp_parser = new DOMParser();
var TalkToUsOnWhatsApp_url = "//yourdomain/TalkToUsOnWhatsApp"; // your script directory url


var xhr = new XMLHttpRequest();
xhr.open('GET', TalkToUsOnWhatsApp_url + '/client?token=' + TalkToUsOnWhatsAppClientToken_JDeS);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function () {
  if (xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);

    var TalkToUsOnWhatsApp_client = data[0];

    TalkToUsOnWhatsApp_initModal(TalkToUsOnWhatsApp_client);
  } else {
    console.log(xhr.status)
  }
};
xhr.send();


function TalkToUsOnWhatsApp_initModal(TalkToUsOnWhatsApp_client) {
  
  // create front iframes structure
  var iframes = document.createElement('div');
  iframes.className = "TalkToUsOnWhatsApp_iframes";
  iframes.innerHTML += '<div id="TalkToUsOnWhatsApp_iframe-button"><iframe id="TalkToUsOnWhatsApp__iframe_button" src="about:blank" frameborder="0" scrolling="no" title="WhatsApp widget button" allowfullscreen></iframe> <div class="TalkToUsOnWhatsApp_iframe_button_overlay"></div> </div> <div id="TalkToUsOnWhatsApp_iframe_modal"> <iframe id="TalkToUsOnWhatsApp__iframe_modal" src="about:blank" frameborder="0" scrolling="no" title="WhatsApp widget modal" allowfullscreen></iframe> <div class="TalkToUsOnWhatsApp_iframe_modal_overlay"></div> </div>';
  document.body.insertBefore(iframes, document.body.childNodes[0]);

  // set iframes css style
  var TalkToUsOnWhatsApp__iframe_button        = document.querySelector("#TalkToUsOnWhatsApp__iframe_button");
  var TalkToUsOnWhatsApp_iframe_button_overlay = document.querySelector(".TalkToUsOnWhatsApp_iframe_button_overlay");
  var TalkToUsOnWhatsApp_iframe_modal          = document.querySelector("#TalkToUsOnWhatsApp_iframe_modal");
  var TalkToUsOnWhatsApp__iframe_modal         = document.querySelector("#TalkToUsOnWhatsApp__iframe_modal");
  var TalkToUsOnWhatsApp_iframe_modal_overlay  = document.querySelector(".TalkToUsOnWhatsApp_iframe_modal_overlay");

  const mq = window.matchMedia("(max-width: 768px)");

  (function () {
    if (mq.matches) {
      TalkToUsOnWhatsApp__iframe_button.style.cssText        += "background: transparent !important; height: 40px !important; min-height: 40px !important; max-height: 40px !important; width: 100% !important; min-width: 100% !important; max-width: 100% !important; outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; opacity: 1 !important; position: fixed !important; border: 0px !important; padding: 0px !important; transition-property: none !important; z-index: 1000001 !important; cursor: auto !important; float: none !important; left: 0px !important; right: 0px !important; bottom: -1px !important; display: block !important;";
      TalkToUsOnWhatsApp_iframe_button_overlay.style.cssText += "background: transparent !important; height: 40px !important; min-height: 40px !important; max-height: 40px !important; width: 100% !important; min-width: 100% !important; max-width: 100% !important; outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; opacity: 1 !important; position: fixed !important; border: 0px !important; padding: 0px !important; transition-property: none !important; z-index: 1000001 !important; cursor: auto !important; margin: auto; float: none !important; left: 0px !important; right: 0px !important; bottom: 16px !important; display: block !important;";
      TalkToUsOnWhatsApp_iframe_modal.style.cssText          += "display: none !important; margin-left: auto !important; margin-right: auto !important; left: 0px !important; right: 0px !important; top: 128px !important; width: 320px !important; height: 250px !important; min-height: 250px !important; max-height: 250px !important; min-width: 320px !important; max-width: 320px !important; outline: none !important; resize: none !important; box-shadow: none !important; background: none transparent !important; opacity: 1 !important; position: fixed !important; border: 0px !important; padding: 0px !important; transition-property: none !important; transform: none !important; z-index: 2000000000 !important; cursor: auto !important; float: none !important; bottom: 0px !important;";
      TalkToUsOnWhatsApp__iframe_modal.style.cssText         += "top: 0px; width: 100%; height: 100%; margin: 0; margin-left: auto !important; margin-right: auto !important; left: 0px !important; right: 0px !important; outline: none !important; resize: none !important; box-shadow: none !important; background: none transparent !important; opacity: 1 !important; position: fixed !important; border: 0px !important; padding: 0px !important; transition-property: none !important; transform: none !important; z-index: 1000001 !important; cursor: auto !important; float: none !important; bottom: 0px !important; overflow: hidden;";
      TalkToUsOnWhatsApp_iframe_modal_overlay.style.cssText  += "cursor: pointer !important; background: transparent !important; right: 0 !important; top: 0 !important; width: 40px !important; height: 40px !important; min-height: 40px !important; max-height: 40px !important; min-width: 40px !important; max-width: 30px !important; outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; opacity: 1 !important; position: absolute !important; border: 0px !important; padding: 0px !important; transition-property: none !important; z-index: 1000001 !important; float: none !important; transform-origin: 50% center 0px !important; bottom: auto !important; margin: 0px 0px !important; display: block !important;";
    } else {
      TalkToUsOnWhatsApp__iframe_button.style.cssText        += "border-radius: 10px 10px 0px 0px !important; background: transparent !important; transform: rotate(-90deg) !important; height: 30px !important; min-height: 30px !important; max-height: 30px !important; width: 190px !important; min-width: 190px !important; max-width: 190px !important; outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; opacity: 1 !important; position: fixed !important; border: 0px !important; padding: 0px !important; transition-property: none !important; z-index: 1000001 !important; cursor: auto !important; float: none !important; transform-origin: 50% center 0px !important; right: -80px !important; left: auto !important; top: 50% !important; bottom: auto !important; margin: -20px 0px 0px !important; display: block !important;";
      TalkToUsOnWhatsApp_iframe_button_overlay.style.cssText += "cursor: pointer !important; background: transparent !important; position: fixed; transform: rotate(-90deg) !important; height: 30px !important; min-height: 30px !important; max-height: 30px !important; width: 190px !important; min-width: 190px !important; outline: none !important; resize: none !important; box-shadow: none !important; overflow: visible !important; opacity: 1 !important; border: 0px !important; padding: 0px !important; transition-property: none !important; z-index: 1000001 !important; float: none !important; transform-origin: 50% center 0px !important; right: -80px !important; left: auto !important; top: 50% !important; bottom: auto !important; margin: -20px 0px 0px !important; display: block !important; max-width: 190px !important;";
      TalkToUsOnWhatsApp_iframe_modal.style.cssText          += "display: none !important; margin-left: auto !important; margin-right: auto !important; left: 0px !important; right: 0px !important; top: 128px !important; width: 320px !important; height: 250px !important; min-height: 250px !important; max-height: 250px !important; min-width: 320px !important; max-width: 320px !important; outline: none !important; resize: none !important; box-shadow: none !important; background: none transparent !important; opacity: 1 !important; position: fixed !important; border: 0px !important; padding: 0px !important; transition-property: none !important; transform: none !important; z-index: 2000000000 !important; cursor: auto !important; float: none !important; bottom: 0px !important;";
      TalkToUsOnWhatsApp__iframe_modal.style.cssText         += "top: 0px; width: 100%; height: 100%; margin: 0; margin-left: auto !important; margin-right: auto !important; left: 0px !important; right: 0px !important; outline: none !important; resize: none !important; box-shadow: none !important; background: none transparent !important; opacity: 1 !important; position: fixed !important; border: 0px !important; padding: 0px !important; transition-property: none !important; transform: none !important; z-index: 1000001 !important; cursor: auto !important; float: none !important; bottom: 0px !important; overflow: hidden;";
      TalkToUsOnWhatsApp_iframe_modal_overlay.style.cssText  += "cursor: pointer !important; background: transparent !important; right: 0 !important; top: 0 !important; width: 40px !important; height: 40px !important; min-height: 40px !important; max-height: 40px !important; min-width: 40px !important; max-width: 30px !important; outline: none !important; visibility: visible !important; resize: none !important; box-shadow: none !important; overflow: visible !important; opacity: 1 !important; position: absolute !important; border: 0px !important; padding: 0px !important; transition-property: none !important; z-index: 1000001 !important; float: none !important; transform-origin: 50% center 0px !important; bottom: auto !important; margin: 0px 0px !important; display: block !important;";
    }
  })();

  
  // set actions
  document.getElementById("TalkToUsOnWhatsApp_iframe-button").addEventListener("click", TalkToUsOnWhatsApp_clickactions);
  document.getElementById("TalkToUsOnWhatsApp_iframe_modal").addEventListener("click", TalkToUsOnWhatsApp_clickactions);

  function TalkToUsOnWhatsApp_clickactions() {
    var el = document.getElementById("TalkToUsOnWhatsApp_iframe_modal");
    if (el.style.display === "none") {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  }

  // modal data structure
  
  var modalStructure_0 = [
    '<link rel="stylesheet" href="' + TalkToUsOnWhatsApp_url + '/assets/css/style.css" />',

    '<div id="modal">',
    '<div class="modal-content">',

    '<div class="header">',
    '<div class="btn">x</div>',
    '<img class="logo" src="' + TalkToUsOnWhatsApp_url + '/assets/images/logo-whatsapp.svg" alt="WhatsApp">',
    '<h3 class="tittle" style="">Talk to us <br>on <strong>WhatsApp!</strong></h3>',
    '</div>',

    '<div class="copy">',
  ].join("\n");

  var modalStructure_1 = [
    '<input type="hidden" name="phone" value="55' + TalkToUsOnWhatsApp_client.phone.replace(/[^0-9.]/g, '') + '">',
    '<input type="hidden" name="email" value="' + TalkToUsOnWhatsApp_client.email + '">',

    '<button class="submit" type="submit"><img class="icon-loading" src="' + TalkToUsOnWhatsApp_url + '/assets/images/loading-whatsapp.gif" id="load_send_whatsapp" alt="..."><img class="icon-send" src="' + TalkToUsOnWhatsApp_url + '/assets/images/send-whatsapp.svg" alt="Enviar" id="send-whatsapp"></button>',
    '</form>',
    '</div>',

    '<div class="footer">',
    '</div>',

    '</div>',
    '<div class="overlay"></div>',
    '</div>'
  ].join("\n");


  //modal configs
  var modalContent_0 = [
    '<form action="' + TalkToUsOnWhatsApp_url + '/config/processWhatsApp_0" method="get" id="whatsapp_form">',
    '<input type="text" placeholder="Name" name="lead" class="field" style="width: 82%;" required>',
  ].join("\n");

  var modalContent_1 = [
    '<form action="' + TalkToUsOnWhatsApp_url + '/config/processWhatsApp_1" method="get" id="whatsapp_form">',
    '<input type="hidden" name="message" value="' + TalkToUsOnWhatsApp_client.message + '">',
    '<input type="text" placeholder="Message" name="leadMessage" class="field" required>',
    '<div class="divisor"></div>',
    '<input type="text" placeholder="Name" name="lead" class="field" required>',
    '<input type="tel" name="leadPhone" placeholder="Phone" name="leadPhone" style="width: 82%;" class="field" required>',
  ].join("\n");

  // get iframes structure
  var iframe_button_doc = TalkToUsOnWhatsApp_parser.parseFromString('<link rel="stylesheet" href="' + TalkToUsOnWhatsApp_url + '/assets/css/style.css" /><div class="btn-TalkToUsOnWhatsApp" style="color:transparent;"><div class="icon-whatsapp"></div> WhatsApp Chat</div>', "text/html");
  var iframe_button = document.getElementById("TalkToUsOnWhatsApp__iframe_button").contentDocument;

  if (TalkToUsOnWhatsApp_client.config === "1") {
    var iframe_modal_doc = TalkToUsOnWhatsApp_parser.parseFromString(modalStructure_0 + modalContent_1 + modalStructure_1, "text/html");
  } else {
    var iframe_modal_doc = TalkToUsOnWhatsApp_parser.parseFromString(modalStructure_0 + modalContent_0 + modalStructure_1, "text/html");
  }

  var iframe_modal = document.getElementById("TalkToUsOnWhatsApp__iframe_modal").contentDocument;


  iframe_button.replaceChild(iframe_button_doc.documentElement, iframe_button.documentElement);
  iframe_modal.replaceChild(iframe_modal_doc.documentElement, iframe_modal.documentElement);
}

///// by Jandeilson De Sousa aka JDeS (https://github.com/jandeilson)
////////// v1.0