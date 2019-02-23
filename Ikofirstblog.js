fb = firebase.database(); //database //
let path = 'tartalomelemek';

$('#gomb').on('click', event => {
    
    event.preventDefault();

    let dataToSave = {
    Cim: $('.cim').val(),
    Tartalom: $('#Tartalomid').val(),
};
fb.ref(path).push(dataToSave);

    let cim = $('.cim').val();
    console.log(cim);
    let Tartalomid = $('#Tartalomid').val();
    $("main").prepend(`<div>
    <h3>${cim}</h3>
    <p>${Tartalomid}</p>
      </div>`);

});

fb.ref('tartalomelemek').once('value').then(data => {
    console.log(data.val())
    data.forEach(element => {
      $('#Firebasebolvissza').append(`
          <div>
          <h3> 
          ${element.child('Cim').val()}
          </h3>
          <p>
          ${element.child('Tartalom').val()}
          </p>
          </div>
      `);
    });
  });



