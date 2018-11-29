/*
* Window.
*/
(function(win, doc, $) {
  var trackingButton = queryElement('.tracking');
  var submitContactFormButton = queryElement('.btn-contact');

  function queryElement(selector) {
    return doc.querySelector(selector);
  }

  function onTrackingClick() {
    console.log('Redirect to tracker page. WIP (Work In Progress.)');
  }

  function onSubmitContactForm() {
    console.log('Contact form subimt');
  }

  // Event listeners
  if (trackingButton) {
    trackingButton.addEventListener('click', onTrackingClick, false);
  }
  submitContactFormButton.addEventListener('submit', onSubmitContactForm, false);

  // Mobile menu image handling
  $('.open-menu').show();
  $('.close-menu').hide();

})(window, document, jQuery);
