// 1 now that we are getting the data it
// 1 would be nice to render just 1 of the blogs
// 1 typically, we will do this by creating a function

$(() => {
  $.ajax({
    url: '/api/blogs',
    method: 'GET',
    dataType: 'json', 
    success: (blogs) => {
      console.log("blogs", blogs);
      
      // 6 lets grab a singular post
      // 6 create html element
      const blog = blogs[0];
      const $blog = createBlog(blog);
      // 6 then we can console.log it to see it
      // 6 look for the innerHTML in this object
      console.log($blog);

      // 6 now we need to attach it to the DOM
      // 6 lets grab our div of our .blog-container
      // 6 this will be my entry point
      // 6 and append our blog
      const $blogContainer = $('.blog-container');
      $blogContainer.append($blog);
    },
    error: (err) => {
      console.err(`error: ${err}`)
    }
  });

  // 2 this function will be responsible
  // 2 constructing the html with our blog content
  // 2 we don't care about this function adding it to the DOM
  // 2 bring in our static post for reference
  const createBlog = (blog) => {
    // 3 lets create a jquery element for the title
    // 3 and add a text node
    const $title = $('<h2>').text(blog.title); 
    // const $title = $(`<h2>${blog.title}</h2>`);
    const $body = $('<p>').text(blog.body);
    const $authorId = $('<p>').text(`author id: ${blog.userId}`);

    const $blog = $('<div>').addClass('blog-post');
    // 4 now we just need to add our children to our post
    // 4 we can do either append or prepend as long as we
    // 4 know what order
    // 4 show different ways of appending
    // $blog.append($title);
    // $blog.append($body);
    // $blog.append($authorId);
    // $blog.append($title).append($body).append($authorId);
    $blog.append($title, $body, $authorId);
    // 5 now we are ready after we return
    return $blog
  }

});
