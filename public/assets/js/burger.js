$(() => {
  $('.input-form').on('submit', event => {
    event.preventDefault();

    var newBurger = {
      burger_name: $('#burgerInput').val().trim(),
      devoured: 0 
    };

    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(() => {
      console.log('Created my new burger');
      location.reload();
    });
  });
});
