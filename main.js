$(document).ready(function() {
  var movieColleciton = new MovieCollection(movies);
  new ListView({collection: movieColleciton});
  var formMarkup = new FormView({collection: movieColleciton});
});





// $(document).ready(function() {
//
//   page.init();
//
// });
// var movieCollection = new MovieCollection(movies);
//
// var page = {
//   init: function() {
//   page.addAll();
//   page.initEvents();
// },
//
// movieTmpl: _.template(templates.movie),
// initEvents: function() {
//   $('.container').on('click', '.delete', function(event) {
//     event.preventDefault();
//     var movieId = $(this).closest('article').data('id');
//     movieCollection.remove(movieId);
//     page.addAll();
//   });
//   $('.container').on('click', 'img', page.logSelectedModel);
// },
// logSelectedModel: function(event) {
//   event.preventDefault();
//   var movieId = $(this).closest('article').data('id');
//   console.log("This is the Movie you wanted", movieCollection.get(movieId).toJSON());
//   movieCollection.get(movieId).set({title: "hello"});
// },
// addOne: function (el) {
//   el.attributes.id = el.cid;
//   var markup = page.movieTmpl({movie: el.toJSON()});
//   $(".container").append(markup);
// },
// addAll: function() {
//   $(".container").html("");
//   _.each(movieCollection.models, page.addOne);
// },
//
// }
