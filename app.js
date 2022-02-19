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
