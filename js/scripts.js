$(document).ready(function() {
  var newContact = { firstName: ["John", "Mary"], lastName: ["Doe", "Jane"], address: ["123 Main Street", "567 State Street"]};
  var ivalue = 0;

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    $("ul#contacts").empty();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();

    function addContact(inputtedFirstName, inputtedLastName, inputtedAddress){
      ivalue++;
      newContact.firstName.push(inputtedFirstName);
      newContact.lastName.push(inputtedLastName);
      newContact.address.push(inputtedAddress);
      //newContact.ivalue.push(ivalue);
    };

    addContact(inputtedFirstName, inputtedLastName, inputtedAddress);

    for (var i = 0; i < newContact.firstName.length; i++){
      $("ul#contacts").append("<li class='list-group-item'><span class='contact'>" + newContact.firstName[i] + " " + newContact.lastName[i] + "</span></li>");
    }

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");

      for (var key in newContact) {
        $(".contact").last().click(function() {  //by adding last, we don't add every elecment of Contact
          $("#show-contact").show();
          $("#show-contact h2").text($(this).attr(firstName + " " + $(this).attr(lastName));
          $(".first-name").text($(this).attr(firstName);
          $(".last-name").text($(this).attr(lastName);
          $(".address").text($(this).attr(address);
        });
      }

  });
});
