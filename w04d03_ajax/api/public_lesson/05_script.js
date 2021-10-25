// 1 now that we have our fetching logic
// 1 all defined, it would be good to wrap 
// 1 it in a function 

$(() => {
  // 2 now we have a function we can call
  // 2 any time we invoke this function
  // 2 it fetches our blogs
  // 3 create button in html <button id="fetch-button">fetch blogs</button>
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

  // 4 then we have to go down here and tell jQuery
  // 4 that we want to set up an event listener on this
  // 4 button so when it is clicked, it fetches our blogs
  $("#fetch-button").on('click', () => {
    fetchBlogs();
  })
  // 5 click the button and show that are posts are there
  // 5 but everytime i click the posts i am appending
  // 5 the new fetch to the dom
  // 5 so how do we fix this?

  const createBlog = (blog) => {
    const $title = $('<h2>').text(blog.title); 
    const $body = $('<p>').text(blog.body);
    const $authorId = $('<p>').text(`author id: ${blog.userId}`);

    const $blog = $('<div>').addClass('blog-post');
    $blog.append($title, $body, $authorId);

    return $blog
  }

  // 6 we need to clean our blog-container
  // 6 look up jquery empty
  // 6 removes all child nodes from an element
  // 6 so where should we call this method?
  const createBlogs = (blogs) => {
    // 6 before we start iterating and adding new things
    // 6 which means we will need to grab our blog-container here
    // 6 instead of every iteration in our loop
    const $blogContainer = $('.blog-container');
    $blogContainer.empty();
    for(const blog of blogs){
      const $blog = createBlog(blog);

      // const $blogContainer = $('.blog-container');
      $blogContainer.append($blog);
    }
  }

  // 7 think about that with your tweets
  // 7 do i need to clear out the tweet container before
  // 7 i fill it back up?

});
