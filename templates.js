var templates = {};
templates.movie =[
  //when using view.js take out the movie and leave property name
  //you don't need article due to view.js adding an article taganme
  // '<article data-id="<%= movie.id %>">',
  '<img src="<%= coverImg %>">',
  '<h3><span>Title: </span><%= title %></h3>',
  '<h5><span>Tagline:</span> <%= taglines %></h5>',
  '<p><span>Release Date:</span> <%= releaseDate %></p>',
  '<p><span>Plot:</span> <%= plot %></p>',
  '<ul>',
  '<li><button class="delete">delete</button></li>',
  '<h4>or</h4>',
  '<li><button class="edit showEdit">edit</button></li>',
  '</ul>',
].join("");

templates.addMovie =[
  //create a form
  '<form class="">',
    '<div class="addForm">',
      '<label for="title">Title: </label>',
    '<input type="text" name="title" placeholder="Title"value="">',
    '</div>',
    '<div class="addForm">',
      '<label for="tagling">Tagline: </label>',
    '<input type="text" name="tagline" placeholder="Tagline"value="">',
    '</div>',
    '<div class="addForm">',
      '<label for="releaseDate">Release Date: </label>',
    '<input type="text" name="releaseDate" placeholder="Release Date" value="">',
    '</div>',
    '<div class="addForm">',
      '<label for="coverImg">Cover Image Url: </label>',
    '<input type="text" name="coverImg" placeholder="Poster url" value="">',
    '</div>',
    '<div class="addForm">',
      '<label for="plot">Plot: </label>',
    '<input type="textarea" name="plot" rows="6" col="40" placeholder="Plot" value="">',
    '</div>',
      '<button class="newMovie" type="submit" name="submit">Add Movie</button>',
  '</form>'
].join("");

templates.editMovie = [
  // '<form class="">',
    '<div class="editForm">',
    '<input class="editTitle" type="text" value="<%= title %>">',
    '</div>',
    '<div class="editForm">',
    '<input class="editTaglines"  type="text" value="<%= taglines %>">',
    '</div>',
    '<div class="editForm">',
    '<input class="editReleasDate" type="text" value="<%= releaseDate %>">',
    '</div>',
    '<div class="editForm">',
    '<input class="editCoverImg" type="text" value="<%= coverImg %>">',
    '</div>',
    '<div class="editForm">',
    '<input class="editPlot" type="text" value="<%= plot %>">',
    '</div>',
    '<div class="editForm">',
    '<button type="submit" class="editMovie" name="submit">Edit Movie</button>',
    '</div>',
  // '</form>'
].join('');
