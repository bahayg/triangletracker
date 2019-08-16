$(document).ready(function(event) {
  $("#formOne").submit(function(event){
    var side1 = parseInt($("input#length1").val());
    var side2 = parseInt($("input#length2").val());
    var side3 = parseInt($("input#length3").val());
    var isTriangle = (side1 + side2) > side3 && (side2 + side3) > side1 && (side1 + side3) > side2;

    if (side1 === side2 && side2 === side3){
      $("#equilateral").show();
    }
      else if (side1 === side2 || side2 === side3 || side1 === side3){
      $("#isosceles").show();
    }
      else if (!isTriangle) {
      $("#notAtriangle").show();
    }
      else {
      $("#scalene").show();
      }



    event.preventDefault();
  });

});
