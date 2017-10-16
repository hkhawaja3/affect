

$(document).ready(function () {
    
    var favorites = [];

    //Basic search function
    function displayCharities() {

        var charity = $("#charity-input").val().trim();
        var queryURL = "https://api.data.charitynavigator.org/v2/Organizations?app_id=9169117e&app_key=dabb374558cf36e2fc99769ca3d5005b&pageSize=10&search=" +
            charity + "&searchType=NAME_ONLY&sort=RELEVANCE";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            var results = response;

            for (var i = 0; i < results.length; i++) {

                var charityName = results[i].charityName;
                var charityWebsiteInfo = $("<div> <a href=" + results[i].charityNavigatorURL + ">" + " " + charityName + " </a> </div>");
                var charityMailingInfoStreet = $("<div>").text(results[i].mailingAddress.streetAddress1);
                var charityDiv = $("<div>");
                var charityMailingInfoCity = $("<span>").text(results[i].mailingAddress.city);
                var charityMailingInfoState = $("<span>").text(", " + results[i].mailingAddress.stateOrProvince);
                
                var a = $("<button>");
                a.addClass("favorites");
                a.attr("data-name", charityName);
                a.attr('data-url', results[i].charityNavigatorURL);
                a.text("Add to Favorites");

                var charityMailingInfoZip = $("<span>").text(" " + results[i].mailingAddress.postalCode);
                charityDiv.append([charityMailingInfoCity, charityMailingInfoState, charityMailingInfoZip,]);
                var allCharityInfo = [charityWebsiteInfo, charityMailingInfoStreet, charityDiv, a, $("<br>")]
                var charityDatabaseInfo = [charityName, charityWebsiteInfo];

                $("#charityInformation").append(allCharityInfo);
                
            }
        });

    }
    
    $(document).on("click", ".favorites", function(){
        var profile = googleUser.getBasicProfile();
        console.log($(this).data('name'));
        console.log($(this).data('url'));
        console.log("Email: " + profile.getEmail());
    })

    $("#search-charity").on("click", function (event) {

        $('#charityInformation').empty();
        displayCharities();
        event.preventDefault();
        $("#charity-input").val("");

    });
    
    $("#search-charity").click(function() {
        $('html,body').animate({
        scrollTop: $("#charityInformation").offset().top},
        'slow');
    });

    function animalCharities() {
        var queryURL = "https://api.data.charitynavigator.org/v2/Organizations?app_id=9169117e&app_key=dabb374558cf36e2fc99769ca3d5005b&pageSize=10&search=animals&searchType=NAME_ONLY&sort=RELEVANCE"
        console.log("The queryURL is: " + queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            var results = response;

            for (var i = 0; i < results.length; i++) {
                
                var charityName = results[i].charityName;
                var charityWebsiteInfo = $("<div> <a href=" + results[i].charityNavigatorURL + ">" + " " + results[i].charityName + " </a> </div>");
                var charityMailingInfoStreet = $("<div>").text(results[i].mailingAddress.streetAddress1);
                var charityDiv = $("<div>");
                var charityMailingInfoCity = $("<span>").text(results[i].mailingAddress.city);
                var charityMailingInfoState = $("<span>").text(", " + results[i].mailingAddress.stateOrProvince);
                
                var a = $("<button>");
                a.addClass("favorites");
                a.attr("data-name", charityName);
                a.attr('data-url', results[i].charityNavigatorURL);
                a.text("Add to Favorites");

                var charityMailingInfoZip = $("<span>").text(" " + results[i].mailingAddress.postalCode);
                charityDiv.append([charityMailingInfoCity, charityMailingInfoState, charityMailingInfoZip])
                var allCharityInfo = [charityWebsiteInfo, charityMailingInfoStreet, charityDiv, a, $("<br>")]

                $("#charityInformation").append(allCharityInfo);

            }

        })

    }

    $("#animal-Charities").on("click", function (event) {

        $('#charityInformation').empty();
        animalCharities();
        event.preventDefault();
        var charityName = $("#charity-input").val().trim();

        $("#charity-input").val("");
    
         $("#animal-Charities").click(function() {
            $('html,body').animate({
            scrollTop: $("#charityInformation").offset().top},
            'slow');
            });
        
    });

    function educationCharities() {
        var queryURL = "https://api.data.charitynavigator.org/v2/Organizations?app_id=9169117e&app_key=dabb374558cf36e2fc99769ca3d5005b&pageSize=10&search=education&searchType=NAME_ONLY&sort=RELEVANCE"
        console.log("The queryURL is: " + queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            var results = response;

            for (var i = 0; i < results.length; i++) {
                
                var charityName = results[i].charityName;
                var charityWebsiteInfo = $("<div> <a href=" + results[i].charityNavigatorURL + ">" + " " + results[i].charityName + " </a> </div>");
                var charityMailingInfoStreet = $("<div>").text(results[i].mailingAddress.streetAddress1);
                var charityDiv = $("<div>");
                var charityMailingInfoCity = $("<span>").text(results[i].mailingAddress.city);
                var charityMailingInfoState = $("<span>").text(", " + results[i].mailingAddress.stateOrProvince);
                
                var a = $("<button>");
                a.addClass("favorites");
                a.attr("data-name", charityName);
                a.attr('data-url', results[i].charityNavigatorURL);
                a.text("Add to Favorites");

                var charityMailingInfoZip = $("<span>").text(" " + results[i].mailingAddress.postalCode);
                charityDiv.append([charityMailingInfoCity, charityMailingInfoState, charityMailingInfoZip])
                var allCharityInfo = [charityWebsiteInfo, charityMailingInfoStreet, a, $("<br>")]

                $("#charityInformation").append(allCharityInfo);

            }

        })

    }

    $("#education-Charities").on("click", function (event) {

        $('#charityInformation').empty();
        educationCharities();
        event.preventDefault();
        var charityName = $("#charity-input").val().trim();

        $("#charity-input").val("");
    
         $("#education-Charities").click(function() {
            $('html,body').animate({
            scrollTop: $("#charityInformation").offset().top},
            'slow');
            });
        
        
    });

    function environmentCharities() {
        var queryURL = "https://api.data.charitynavigator.org/v2/Organizations?app_id=9169117e&app_key=dabb374558cf36e2fc99769ca3d5005b&pageSize=10&search=environment&searchType=NAME_ONLY&sort=RELEVANCE"
        console.log("The queryURL is: " + queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            var results = response;

            for (var i = 0; i < results.length; i++) {
                
                var charityName = results[i].charityName;
                var charityWebsiteInfo = $("<div> <a href=" + results[i].charityNavigatorURL + ">" + " " + results[i].charityName + " </a> </div>");
                var charityMailingInfoStreet = $("<div>").text(results[i].mailingAddress.streetAddress1);
                var charityDiv = $("<div>");
                var charityMailingInfoCity = $("<span>").text(results[i].mailingAddress.city);
                var charityMailingInfoState = $("<span>").text(", " + results[i].mailingAddress.stateOrProvince);
                
                var a = $("<button>");
                a.addClass("favorites");
                a.attr("data-name", charityName);
                a.attr('data-url', results[i].charityNavigatorURL);
                a.text("Add to Favorites");

                var charityMailingInfoZip = $("<span>").text(" " + results[i].mailingAddress.postalCode);
                charityDiv.append([charityMailingInfoCity, charityMailingInfoState, charityMailingInfoZip])
                var allCharityInfo = [charityWebsiteInfo, charityMailingInfoStreet, charityDiv, a, $("<br>")]

                $("#charityInformation").append(allCharityInfo);

            }

        })

    }

    $("#environment-Charities").on("click", function (event) {

        $('#charityInformation').empty();
        environmentCharities();
        event.preventDefault();
        var charityName = $("#charity-input").val().trim();

        $("#charity-input").val("");
    
         $("#environment-Charities").click(function() {
            $('html,body').animate({
            scrollTop: $("#charityInformation").offset().top},
            'slow');
        });
        
        
    });

    function healthCharities() {
        var queryURL = "https://api.data.charitynavigator.org/v2/Organizations?app_id=9169117e&app_key=dabb374558cf36e2fc99769ca3d5005b&pageSize=10&search=health&searchType=NAME_ONLY&sort=RELEVANCE"
        console.log("The queryURL is: " + queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            var results = response;

            for (var i = 0; i < results.length; i++) {
                
                var charityName = results[i].charityName;
                var charityWebsiteInfo = $("<div> <a href=" + results[i].charityNavigatorURL + ">" + " " + results[i].charityName + " </a> </div>");
                var charityMailingInfoStreet = $("<div>").text(results[i].mailingAddress.streetAddress1);
                var charityDiv = $("<div>");
                var charityMailingInfoCity = $("<span>").text(results[i].mailingAddress.city);
                var charityMailingInfoState = $("<span>").text(", " + results[i].mailingAddress.stateOrProvince);
                
                var a = $("<button>");
                a.addClass("favorites");
                a.attr("data-name", charityName);
                a.attr('data-url', results[i].charityNavigatorURL);
                a.text("Add to Favorites");

                var charityMailingInfoZip = $("<span>").text(" " + results[i].mailingAddress.postalCode);
                charityDiv.append([charityMailingInfoCity, charityMailingInfoState, charityMailingInfoZip])
                var allCharityInfo = [charityWebsiteInfo, charityMailingInfoStreet, charityDiv, a, $("<br>")]

                $("#charityInformation").append(allCharityInfo);

            }

        })

    }

    $("#health-Charities").on("click", function (event) {

        $('#charityInformation').empty();
        healthCharities();
        event.preventDefault();
        var charityName = $("#charity-input").val().trim();

        $("#charity-input").val("");
    
         $("#health-Charities").click(function() {
            $('html,body').animate({
            scrollTop: $("#charityInformation").offset().top},
            'slow');
        });
        
        
        
        
    });

    function humanServicesCharities() {
        var queryURL = "https://api.data.charitynavigator.org/v2/Organizations?app_id=9169117e&app_key=dabb374558cf36e2fc99769ca3d5005b&pageSize=10&search=human+services&searchType=NAME_ONLY&sort=RELEVANCE"
        console.log("The queryURL is: " + queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            var results = response;

            for (var i = 0; i < results.length; i++) {
                
                var charityName = results[i].charityName;
                var charityWebsiteInfo = $("<div> <a href=" + results[i].charityNavigatorURL + ">" + " " + results[i].charityName + " </a> </div>");
                var charityMailingInfoStreet = $("<div>").text(results[i].mailingAddress.streetAddress1);
                var charityDiv = $("<div>");
                var charityMailingInfoCity = $("<span>").text(results[i].mailingAddress.city);
                var charityMailingInfoState = $("<span>").text(", " + results[i].mailingAddress.stateOrProvince);
                
                var a = $("<button>");
                a.addClass("favorites");
                a.attr("data-name", charityName);
                a.attr('data-url', results[i].charityNavigatorURL);
                a.text("Add to Favorites");

                var charityMailingInfoZip = $("<span>").text(" " + results[i].mailingAddress.postalCode);
                charityDiv.append([charityMailingInfoCity, charityMailingInfoState, charityMailingInfoZip])
                var allCharityInfo = [charityWebsiteInfo, charityMailingInfoStreet, charityDiv, a, $("<br>")]

                $("#charityInformation").append(allCharityInfo);

            }

        })

    }

    $("#humanServices-Charities").on("click", function (event) {

        $('#charityInformation').empty();
        humanServicesCharities();
        event.preventDefault();
        var charityName = $("#charity-input").val().trim();

        $("#charity-input").val("");
    
      $("#humanServices-Charities").click(function() {
        $('html,body').animate({
            scrollTop: $("#charityInformation").offset().top},
            'slow');
        });   
        
        
        
    });

    function internationalCharities() {
        var queryURL = "https://api.data.charitynavigator.org/v2/Organizations?app_id=9169117e&app_key=dabb374558cf36e2fc99769ca3d5005b&pageSize=10&search=international&searchType=NAME_ONLY&sort=RELEVANCE"
        console.log("The queryURL is: " + queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function (response) {
            var results = response;

            for (var i = 0; i < results.length; i++) {
                
                var charityName = results[i].charityName;
                var charityWebsiteInfo = $("<div> <a href=" + results[i].charityNavigatorURL + ">" + " " + results[i].charityName + " </a> </div>");
                var charityMailingInfoStreet = $("<div>").text(results[i].mailingAddress.streetAddress1);
                var charityDiv = $("<div>");
                var charityMailingInfoCity = $("<span>").text(results[i].mailingAddress.city);
                var charityMailingInfoState = $("<span>").text(", " + results[i].mailingAddress.stateOrProvince);
                
                var a = $("<button>");
                a.addClass("favorites");
                a.attr("data-name", charityName);
                a.attr('data-url', results[i].charityNavigatorURL);
                a.text("Add to Favorites");

                var charityMailingInfoZip = $("<span>").text(" " + results[i].mailingAddress.postalCode);
                charityDiv.append([charityMailingInfoCity, charityMailingInfoState, charityMailingInfoZip])
                var allCharityInfo = [charityWebsiteInfo, charityMailingInfoStreet, charityDiv, a, $("<br>")]

                $("#charityInformation").append(allCharityInfo);

            }

        })

    }

    $("#international-Charities").on("click", function (event) {

        $('#charityInformation').empty();
        internationalCharities();
        event.preventDefault();
        var charityName = $("#charity-input").val().trim();

        $("#charity-input").val("");
    
      $("#international-Charities").click(function() {
        $('html,body').animate({
            scrollTop: $("#charityInformation").offset().top},
            'slow');
        });   
        
        
    });
    

});