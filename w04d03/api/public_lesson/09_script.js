// 1 we have to serialize our data now
// 1 that we are taking in from our inputs
// 1 in other words convert our url-encoded body
// 1 to some other format
$(() => {

  const fetchBlogs = () => {
    $.ajax({
      url: '/api/blogs',
      method: 'GET',
      dataType: 'json', 
      success: (blogs) => {
        console.log("blogs", blogs);
        
        createBlogs(blogs)
      },
      error: (err) => {
        console.err(`error: ${err}`)
      }
    });
  }

  fetchBlogs();

  const createBlog = (blog) => {
    const $title = $('<h2>').text(blog.title); 
    const $body = $('<p>').text(blog.body);
    const $authorId = $('<p>').text(`author id: ${blog.userId}`);

    const $blog = $('<div>').addClass('blog-post');
    $blog.append($title, $body, $authorId);

    return $blog
  }

  const createBlogs = (blogs) => {
    const $blogContainer = $('.blog-container');
    $blogContainer.empty();
    for(const blog of blogs){
      const $blog = createBlog(blog);
      $blogContainer.append($blog);
    }
  }

  // 2 let's look up jquery serialize
  // 2 it says it is easier to serialize the entire form
  // 2 but oh goodness, now we are using `this`
  // 2 so we have to change to a function expression
  const $form = $('#new-blog-form');
  $form.on('submit', function(event){
    event.preventDefault();
    
    // 3 and let's just do what the documentation says
    // 3 lets serialize this and log it
    // 3 this refers to the form and we have to turn
    // 3 turn `this` into a jquery object 
    // 3 because serialize() is jquery method
    // 3 `this` in an event handler refers to whatever
    // 3 triggered the event
    const serializedData = $(this).serialize()
    console.log(serializedData);

    // 4 great, that is what our server is looking for
    // 4 url-encoded data
    // 4 so we are now ready to make our post request
    // 4 search "jquery ajax shorthand"
    // 4 look a jQuery.post

    // 5 now we can post to the server
    // 5 where we want, that data we are sending, a callback for the server response
    $.post('/api/blogs', serializedData, (response) => {
      // 5 we can just log what the server sends back, which 
      // 5 we can anticipate based off of our server file
      console.log(response);

      // 6 now this should work
      // 6 we can look at our logs to see the created post
      // 6 and if we refresh our page, we can see our new post
      // 6 but REFRESH
      // 6 if only there were a function that gets all of that data...
      // 6 once we resolve we can call fetchBlogs()
      fetchBlogs(); 
      // 7 and this should work
      // 7 and we are making our requests without refreshing
      // 7 only one problem now our new things are at the bottom
    })

    console.log('the form has been submitted');

  })

});
