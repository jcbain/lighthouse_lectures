// 1 we don't just want to render one
// 1 we want to render all
// 1 so lets create a complementary function
// 1 that will take in our blogs array
// 1 and create posts for all of them
$(() => {
  $.ajax({
    url: '/api/blogs',
    method: 'GET',
    dataType: 'json', 
    success: (blogs) => {
      console.log("blogs", blogs);
      
      // 5 now instead of just creating a single post
      // 5 we can now create all the posts with our new function
      // 5 so we remove the old code and call our function
      createBlogs(blogs)

      // 6 we have now abstracted away our logic and effectively commented our code 
      // 6 with this function

      // const blog = blogs[0];
      // const $blog = createBlog(blog);

      // const $blogContainer = $('.blog-container');
      // $blogContainer.append($blog);
    },
    error: (err) => {
      console.err(`error: ${err}`)
    }
  });

  const createBlog = (blog) => {
    const $title = $('<h2>').text(blog.title); 
    const $body = $('<p>').text(blog.body);
    const $authorId = $('<p>').text(`author id: ${blog.userId}`);

    const $blog = $('<div>').addClass('blog-post');
    $blog.append($title, $body, $authorId);

    return $blog
  }

  // 2 so we can call this createBlogs (s is important)
  // 2 which will take in an array of blogs
  const createBlogs = (blogs) => {
    // 2 now we just need to loop through
    // 2 and call createBlog on each one
    for(const blog of blogs){
      const $blog = createBlog(blog);
      // 3 it would also be nice to grab the .blog-container
      // 3 and append each blog as we loop through it
      const $blogContainer = $('.blog-container');
      $blogContainer.append($blog);
      // 4 and now we should be ready to use this function

    }

  }

});
