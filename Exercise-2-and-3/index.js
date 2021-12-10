$(document).ready(function () {
    console.log("ready!");

    $('#go').click(function() {
        let firstName=$("<p>" + $('#fname').val() + "</p>");
        let lastName=$("<p>" + $('#lname').val() + "</p>");
        $('#jumbotron').append(firstName);
        $('#jumbotron').append(lastName);

        return false;
    });

    return false;
});

