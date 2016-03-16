var FormView = Backbone.View.extend({
  collection: null,
  model: null,
  el: ".navbar",
  template: _.template(templates.addMovie),
  events: {
    "submit form": "addMovie"
  },
  addMovie: function(event) {
    event.preventDefault();
    this.model.set({
      title: this.$el.find("input[name='title']").val(),
      taglines: this.$el.find("input[name='tagline']").val(),
      releaseDate: this.$el.find("input[name='releaseDate']").val(),
      coverImg: this.$el.find("input[name='coverImg']").val(),
      plot: this.$el.find("textarea").val()
    });
    this.$el.find("input").val(""),
    this.$el.find("textarea").val(""),
    this.collection.add(this.model);
    console.log(this.collection);
    this .model = new MovieModel({});
  },
  initialize: function() {
    if(!this.model) {
      this.model= new MovieModel({});
    }
    this.render();
  },
  render: function() {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
var MovieView = Backbone.View.extend({
  model: null,
  tagName: "article",
  template: _.template(templates.movie),
  templateEdit: _.template(templates.editMovie),
  events: {
    "click .delete": "removeMovie",
    "click .showEdit": "toggleEdit",
    "click .editMovie": "editMovie"
  },
  editMovie: function(event){
    event.preventDefault();
    //.set will change only the things you choose to change
    this.model.set({
      title: this.$el.find(".editTitle").val(),
      tagLine: this.$el.find(".editTagline").val(),
      releaseDate: this.$el.find(".editReleasDate").val(),
      coverImg: this.$el.find(".editCoverImg").val(),
      plot: this.$el.find('.editPlot').val()
    });
  },
  toggleEdit: function(event){
    console.log("WHAT IS THIS", this);
    this.$el.append(this.templateEdit(this.model.toJSON()));
  },
  removeMovie: function () {
    this.model.destroy();
  },
  alertMe: function(event){
    alert(this.model.toJSON().title);
  },
  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
// var myMovie = new MovieView({model: {title: "new title", tagline: "new tagline", releaseDate: "new year", plot: "new plot"}});

var ListView = Backbone.View.extend({
  el: '.container',
  initialize: function(){
    this.addAll();
    this.listenTo(this.collection, "update", this.addAll);
  },
  addOne: function (el, index, arr) {
    var modelView = new MovieView({model: el});
    this.$el.append(modelView.render().el);
  },
  addAll: function(){
    $(".container").html("");
    _.each(this.collection.models, this.addOne, this);
  }
});
