// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }



  function MapSearch() {
    var lat
    var long
    var distance
    var type_of
    var price
    var social
    var bed
    var bath

  }

  var data;
	$.ajax({
	  type: "GET",  
	  url: "js-tutorials.com_sample_file.csv",
	  dataType: "text",       
	  success: function(response)  
	  {
		data = $.csv.toArrays(response);
		generateHtmlTable(data);
	  }   
	});