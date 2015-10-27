var max_date = new Date();

function setMaxDate() {
    var yyyy = max_date.getFullYear().toString();
    var mm = (max_date.getMonth() + 1).toString(); // getMonth() is zero-based
    var dd = max_date.getDate().toString();
    var date_str = yyyy + '-' + mm + '-' + dd;
    $('#date').attr('max', date_str);
    $('#date').attr('value', date_str);
}

function getUsrDate(){
    var selectedDate = $('#date').val();
    console.log(selectedDate);
}

$(document).ready(function() {

    setMaxDate();
    $('#date').on('change', function(e){
        getUsrDate();
    });

});
