let recaptcha_response = "";

function hide_flash_messages() {
  $("#flash-messages").hide("blind", {}, 500);
}

function make_proj_accordion() {
  $("#project-list").accordion();
}

function recaptcha_callback(response) {
  recaptcha_response = response;
}

function init() {
  make_proj_accordion();
  $("#flash-messages").hide();
}

$(document).ready(init);
