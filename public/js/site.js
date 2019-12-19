// page loaded 
// 1 get data from server using url = /data
//2 replace the data in html

$(document).ready(function() {
    $.getJSON("/data", function(data) {
        // console.log(JSON.stringify(data));
        // alert(JSON.stringify(data));
        $("#name").text(data.name);
        $("#age").text(data.age);

    })
})