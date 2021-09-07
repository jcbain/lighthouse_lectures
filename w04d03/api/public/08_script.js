// 1 we just need to tell our script
// 1 to grab the form
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

});
