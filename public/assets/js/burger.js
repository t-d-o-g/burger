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

  $('.devour-btn').on('click', function(event) {
    const id = $(this).data('id');

    const devouredTrue = {
      devoured: 1
    };

    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: devouredTrue 
    }).then(() => {
      console.log(`Burger with id: ${id} devoured!`);
      location.reload();
    });
  });
});
