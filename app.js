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
    const arr = [
      {name: "Crosstown", Latitude: 35.90892, Longitude: -78.98312, Distance: 4.5, Type: "Apartment", Social: 2, Br: 1, Bd: 2, Rent: 1422},
      {name: "Trinity at the Hill", Latitude: 35.89475, Longitude: -79.08498, Distance: 3.3, Type: "Apartment", Social: 2, Br: 2, Bd: 2, Rent: 1398},
      {name: "Alderman", Latitude: 35.9149, Longitude: -79.04816, Distance: 1.0, Type: "Residence Hall", Social:2},
      {name: "Morrison", Latitude: 35.90464167, Longitude: -79.04618652, Distance: 1.0, Type: "Residence Hall", Social:4}

      


    ]

    
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
  var data;
	$.ajax({
	  type: "GET",  
	  url: "databased.csv",
	  dataType: "text",       
	  success: function(response)  
	  {
		data = $.csv.toArrays(response);
		generateHtmlTable(data);
    print(data);
	  }   
	});
  var obj_csv = {
    size:0,
    dataFile:[]
};


function readImage(input) {
    console.log(input)
 if (input.files && input.files[0]) {
 let reader = new FileReader();
        reader.readAsBinaryString(input.files[0]);
 reader.onload = function (e) {
 console.log(e);
 obj_csv.size = e.total;
 obj_csv.dataFile = e.target.result
            console.log(obj_csv.dataFile)
            parseData(obj_csv.dataFile)
            
 }
 }
}
 
function parseData(data){
    let csvData = [];
    let lbreak = data.split("\n");
    lbreak.forEach(res => {
        csvData.push(res.split(","));
    });
    console.table(csvData);

}
