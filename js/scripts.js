$(document).ready(function() {
  var newContact = { firstName: ["John"], lastName: ["Doe"], address: ["123 Main Street"] };

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    $("ul#contacts").empty();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();

    function addContact(inputtedFirstName, inputtedLastName, inputtedAddress){
      newContact.firstName.push(inputtedFirstName);
      newContact.lastName.push(inputtedLastName);
      newContact.address.push(inputtedAddress);
    };

    addContact(inputtedFirstName, inputtedLastName, inputtedAddress);

    for (var i = 0; i < newContact.firstName.length; i++){
      $("ul#contacts").append("<li class='list-group-item'><span class='contact'>" + newContact.firstName[i] + " " + newContact.lastName[i] + "</span></li>");
    }

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");

    for (var i = 0; i < newContact.firstName.length; i++) {
      $(".contact").last().click(function() {  //by adding last, we don't add every elecment of Contact
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.firstName[i] + " " + newContact.lastName[i]);
        $(".first-name").text(newContact.firstName[i]);
        $(".last-name").text(newContact.lastName[i]);
        $(".address").text(newContact.address[i]);
      });
    }
  });
});
