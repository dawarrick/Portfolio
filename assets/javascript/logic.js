// logic.js - used for Deb's Portfolio


function clearInput() {
  // Clears all of the text-boxes
  $("#name-input").val("");
  $("#email-input").val("");
  $("#message-input").val("");
}


// when submit on modal is clicked.  Could be add or update
//$("#submit-train-btn").on("click", function (event) {
$('#myModal').on('submit', function (event) {

  // Submit contact form
  // Help from: http://blog.teamtreehouse.com/create-ajax-contact-form
/*  $(function () {
    var form = $('#contact-form');
    var formMessages = $('#form-messages');
    form.submit(function (event) {
      form.hide();
      formMessages.show();
      setTimeout(hideContactFormContainer, 2000)
      setTimeout(resetContactFormContainer, 4000)
      event.preventDefault();
      var formData = form.serialize();

      $.ajax({
        type: 'POST',
        url: form.attr('action'),
        data: formData
      })
        .done(function (response) {
          formMessages.removeClass('error');
          formMessages.addClass('success');
          formMessages.text(response);
          $('#name').val('');
          $('#email').val('');
          $('#message').val('');
        })
        .fail(function (data) {
          formMessages.removeClass('success');
          formMessages.addClass('error');
          if (data.responseText !== '') {
            formMessages.text(data.responseText);
          } else {
            formMessages.text('An error occured. Your message could not be sent.');
          };
        });
    });
  });

  // Hide #form-messages after showing result
  function hideContactFormContainer() {
    $('#contact-form-container').fadeOut(2000);
  };*/
  clearInput();
});



//if they click on the update, pull up the modal populated with associated row

$("#contact").on('click', '.contact', function () {
  //  $("#contact").click(function(){
  alert("clicked")
  // event.preventDefault();

  $('#myModal').modal('show');

});

