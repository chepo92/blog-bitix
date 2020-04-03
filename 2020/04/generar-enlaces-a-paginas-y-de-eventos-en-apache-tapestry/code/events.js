require(["t5/core/ajax", "jquery"], function (ajax, $) {
    $('#result').click(function() {
        ajax('answer', { 
            element: null, // $('#result')
            success: function(response) {
                $('#result').text(response.json.origin);
            }
        });
    });
});