$(document).ready(function() {
  $('#Track-Form').submit(function(event){
    var inputtedName = $("input#User-Name").val();
    var inputtedFav1 = $("input#favorite-1").val();
    var inputtedFav2 = $("input#favorite-2").val();
    var inputtedFav3 = $("input#favorite-3").val();
    event.preventDefault();

    var favorites = [inputtedFav1, inputtedFav2, inputtedFav3];
    alert(favorites);
    var secondFavorite = favorites[1];
    var firstFavorite = favorites[0];
    var thirdFavorite = favorites[2];
    var newFavorites = [];
    newFavorites.push(secondFavorite);
    newFavorites.push(firstFavorite);
    newFavorites.push(thirdFavorite);
    alert(newFavorites);
    $("#name").text(inputtedName);
    $("#array0").text(newFavorites[0]);
    $("#array1").text(newFavorites[1]);
    $("#array2").text(newFavorites[2]);
    

  });

});
