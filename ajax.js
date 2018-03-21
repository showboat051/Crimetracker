$(document).ready(function(){

    //have to click the submit button. This is intended for my testpage.
    $(document).on("click", ".submit", function(query){
        var queryURL = "https://www.dallasopendata.com/api/views/vkty-8qkv/rows.json?accessType=DOWNLOAD"
        // The for loop iterates through the 389 arrays and pulls only the description of the crime. I'm trying to find a better API fieldname 
        // to use in order to categorize the cimres.
            $.ajax({
            url: queryURL,

            method: "GET"

        }).then(function(response){
            var dataObject = response.data;
            for(i = 0; i < dataObject.length; i++){
                var crimeResult = response.data[i]
                //logs the 8th index of the crime types to the console.
                console.log(crimeResult[8]);
            };
        });
    }
)}
);