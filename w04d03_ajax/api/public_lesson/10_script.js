// 1 any suggestions on how we can get our new post to 
// 1 be first
// 1 lets go down to our createBlogs function

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
      //  2 instead of append which makes it last child
      //  2 how about we prepend to make it the first child
      // $blogContainer.append($blog);
      $blogContainer.prepend($blog);
      // 3 lets try it out
      // 3 and there we have it
    }
  }

  const $form = $('#new-blog-form');
  $form.on('submit', function(event){
    event.preventDefault();
    
    const serializedData = $(this).serialize()
    console.log(serializedData);

    $.post('/api/blogs', serializedData, (response) => {

      console.log(response);
      fetchBlogs(); 
    })

    console.log('the form has been submitted');

  })

});
