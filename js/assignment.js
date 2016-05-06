


// put your javascript code here

var photos_template,category_template, current_animal,current_photo,current_category;

// a helper function that instantiates a template
// and displays the results in the content div
function showTemplate(template,data){
	var html = template(data);
	$('#content').html(html);
}

// document ready gets called when the whole document
// is loaded, so we put most of the code that needs to run
// in here

$(document).ready(function(){

  //
	// compile all of our templates ready for use
	//

	var source  = $("#photos-template").html();
	photos_template = Handlebars.compile(source);

	source  = $("#category-template").html();
	category_template = Handlebars.compile(source);

	source  = $("#modal-template-1").html();
  var modal_template_1 = Handlebars.compile(source);

  source  = $("#modal-template-2").html();
  var modal_template_2 = Handlebars.compile(source);

  source   = $("#slideshow-modal-template").html();
  var slideshow_modal_template = Handlebars.compile(source);

  source   = $("#albums-template").html();
  albums_template = Handlebars.compile(source);

  function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}

   
    $("#Animals-tab").click(function () {

      // make the slideshow tab the active one
      // first make the currently active tab inactive
      $(".nav-tabs .active").removeClass("active");
      // then make slideshow tab active
      $("#Album-tab").addClass("active");

    	<!-- Shuffle the array before using it -->
        animals_data.category = shuffle(animals_data.category);
        animals_data.category[0].animals = shuffle(animals_data.category[0].animals);
        animals_data.category[1].animals = shuffle(animals_data.category[1].animals);
        animals_data.category[2].animals = shuffle(animals_data.category[2].animals);

    		showTemplate(photos_template,animals_data);

        // display the modal when you click on a thumbnail
        $(".photo-thumbnail-1").click(function(){
           
            var parent_index = $(this).data('stuff');
            
             current_category = animals_data.category[parent_index[0]];
             current_animal =   current_category.animals[parent_index[1]];

            var html  = modal_template_1(current_animal);
              
            // put the modal template in the DOM
            $("#modal-container").html(html);

            // show the modal
            $("#imageModal").modal('show');

  });

        // display the modal when you click on a thumbnail
        $(".photo-thumbnail-2").click(function(){
            var parent_index = $(this).data('stuff');
            
             current_category = animals_data.category[parent_index[0]];
             current_animal =   current_category.animals[parent_index[1]];         
             
            var html  = modal_template_2(current_animal);
              
            // put the modal template in the DOM
            $("#modal-container").html(html);

            // show the modal
            $("#imageModal").modal('show');

          });
     
   	});

	

	$("#Reptiles-tab").click(function () {
		//  var index = $(".photo-thumbnail").data("id");
      current_category = search("Reptiles",animals_data.category);
    	
      //current_category = animals_data.category[0];
		  showTemplate(category_template,current_category);

       $(".photo-thumbnail-1").click(function(){
       
        var parent_index = $(this).data('stuff');
        
      //   current_category = animals_data.category[0];
         current_animal =   current_category.animals[parent_index[0]];
       
         
        var html  = modal_template_1(current_animal);
          
        // put the modal template in the DOM
        $("#modal-container").html(html);

        // show the modal
        $("#imageModal").modal('show');
        
        
       });
     
      $(".photo-thumbnail-2").click(function(){
       
        var parent_index = $(this).data('stuff');
        
       //  current_category = animals_data.category[0];
         current_animal =   current_category.animals[parent_index[0]];
       
         
        var html  = modal_template_2(current_animal);
          
        // put the modal template in the DOM
        $("#modal-container").html(html);

        // show the modal
        $("#imageModal").modal('show');
        
        
       });
     
       
	});

	$("#Mammals-tab").click(function () {

      current_category = search("Mammals",animals_data.category);

    //	current_category = animals_data.category[1];
		 showTemplate(category_template,current_category);

      $(".photo-thumbnail-1").click(function(){
       
        var parent_index = $(this).data('stuff');
        current_animal =   current_category.animals[parent_index[0]];
       
         
        var html  = modal_template_1(current_animal);
          
        // put the modal template in the DOM
        $("#modal-container").html(html);

        // show the modal
        $("#imageModal").modal('show');

       });
     
      $(".photo-thumbnail-2").click(function(){
       
        var parent_index = $(this).data('stuff');
        
      //   current_category = animals_data.category[1];
         current_animal =   current_category.animals[parent_index[0]];
       
         
        var html  = modal_template_2(current_animal);
          
        // put the modal template in the DOM
        $("#modal-container").html(html);

        // show the modal
        $("#imageModal").modal('show');
        
        
       });
	        
	});

	$("#Birds-tab").click(function () {
		//  var index = $(".photo-thumbnail").data("id");

      current_category = search("Birds",animals_data.category);
 
		  showTemplate(category_template,current_category);

       $(".photo-thumbnail-1").click(function(){
         
          var parent_index = $(this).data('stuff');
          current_animal =   current_category.animals[parent_index[0]];
           
          var html  = modal_template_1(current_animal);
            
          // put the modal template in the DOM
          $("#modal-container").html(html);

          // show the modal
          $("#imageModal").modal('show');
          
          
         });
     
        $(".photo-thumbnail-2").click(function(){
         
          var parent_index = $(this).data('stuff');
          
          current_animal =   current_category.animals[parent_index[0]];
           
          var html  = modal_template_2(current_animal);
            
          // put the modal template in the DOM
          $("#modal-container").html(html);

          // show the modal
          $("#imageModal").modal('show');
          
          
         });
	        
	});

  // 
  //  clicking on the slideshow tab displays the
  //  current album as a slide show
  //
  $("#Album-tab").click(function () {
    
    // make the slideshow tab the active one
    // first make the currently active tab inactive
    $(".nav-tabs .active").removeClass("active");
    // then make slideshow tab active
    $("#Album-tab").addClass("active");

      // displays the albums template
    showTemplate(albums_template,animals_data);

    $(".album-thumbnail").click(function(){
         var category_index = $(this).data('id');
          
         var current_category = animals_data.category[category_index];
           
          var html  = slideshow_modal_template(current_category);
            
          // put the modal template in the DOM
          $("#modal-container").html(html);

          // show the modal
          $("#imageModal").modal('show');
    });

  });

 
  
  var count = function(){
  	  var counter = [0,0,0,0]
      for (var i = 0; i < 3;i++) {
  		current_category = animals_data.category[i];
  		var animal_array = current_category.animals;

  		for (var key in animal_array) {
		    var obj = animal_array[key];
		    for(var prop in obj){
		    	 prop = prop.slice(0,-1);
		    	 if(prop == "image") {

		        counter[i]+=1;
		        }
		  }
  	    }
  	    counter[3] += counter[i];	
  }
  	
  	return counter;

 };

  var result = count();
   
  $(".number-1").html(result[0]);
  $(".number-2").html(result[1]);
  $(".number-3").html(result[2]); 
  $(".number").html (result[3]); 

/*
  $(".photo-thumbnail-1").hover(function(){
           var parent_index = $(this).data('stuff');
           current_category = animals_data.category[parent_index[0]];
           current_animal =   current_category.animals[parent_index[1]];
           
      });
 */

 $('[data-toggle="tooltip"]').tooltip();

     
  $("#Animals-tab").click();


});














