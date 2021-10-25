// 1 so lets make a quick change
// 1 let's go back to the behavior of loading
// 1 the posts immediately, so lets remove the 
// 1 button from the html and the event handler
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

  // 2 removal of the event handler because
  // 2 we removed the button
  // $("#fetch-button").on('click', () => {
  //   fetchBlogs();
  // })

  // 3 now we just need to call fetchBlogs();
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

});
