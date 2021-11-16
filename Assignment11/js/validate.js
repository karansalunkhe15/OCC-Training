
$(document).ready(function(){

    //validate FirstName
    $('#errFirstName').hide();   
    let usernameError = true;
    $('#firstName').keyup(function () {
        validateFirstName();
    });

    function validateFirstName() {
        let firstName = $('#firstName').val();
        if (firstName.length == '') {
        $('#errFirstName').show();
            usernameError = true;
            return false;
        }
        else if((firstName.length < 3)||
                (firstName.length > 10)) {
            $('#errFirstName').show();
            $('#errFirstName').html
  ("**length of FirstName must be between 3 and 10");
            usernameError = false;
            return false;
        }
        else {
            $('#errFirstName').hide();
        }
      }


      //validate LastName
      $('#errLastName').hide();   
      let userLastnameError = true;
      $('#lastName').keyup(function () {
          validateLastName();
      });
  
      function validateLastName() {
          let lastName = $('#lastName').val();
          if (lastName.length == '') {
          $('#errLastName').show();
          userLastnameError = false;
              return false;
          }
          else if((lastName.length < 3)||
                  (lastName.length > 10)) {
              $('#errLastName').show();
              $('#errLastName').html
    ("**length of LastName must be between 3 and 10");
    userLastnameError = false;
              return false;
          }
          else {
              $('#errLastName').hide();
          }
        }
  

        //validation city

         //validate LastName
      $('#errcity').hide();   
      let cityError = true;
      $('#city').keyup(function () {
          validateCity();
      });
  
      function validateCity() {
          let city = $('#city').val();
          if (city.length == '') {
          $('#errcity').show();
          cityError = false;
              return false;
          }
          else if((city.length < 3)||
                  (city.length > 10)) {
              $('#errcity').show();
              $('#errcity').html
    ("**length of city must be between 3 and 10");
    cityError = false;
              return false;
          }
          else {
              $('#errcity').hide();
          }
        }

  
});

$('#btn').click(function () {
    validateFirstName();
    validateLastName();
    validateCity();
   
   
    if ((usernameError == true) && (userLastnameError == true) && (cityError ==true)) {
        return true;
    }else {
        return false;
    }

});