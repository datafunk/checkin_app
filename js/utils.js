var max_date = new Date();
var userInputs = {};

function setMaxDate() {
    var yyyy = max_date.getFullYear().toString();
    var mm = (max_date.getMonth() + 1).toString(); // getMonth() is zero-based
    var dd = max_date.getDate().toString();
    var date_str = yyyy + '-' + mm + '-' + dd;
    $('#date').attr('max', date_str);
    $('#date').attr('value', date_str);
}

function getUsrDate(){
    userInputs.selectedDate = new Date( $('#date').val() );
}

$(document).ready(function() {

    setMaxDate();


    /* listeners*/

    $('#date').on('change', function(e){
        getUsrDate();
    });

    $('#teams').on('change', function(e){
        userInputs.selectedTeam = $('#teams').val();
    });


    $('#users').on('change', function(e){
        userInputs.selectedUser = $('#users').val();
    });

    $('#checkin').on('click', function(e){

    });

});
