// 1 we just need to tell our script
// 1 to grab the form
// 1 so we will go down to the bottom 
// 1 and grab our form
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

  // 2 let's grab our form with jquery
  // 2 then we want to listen for a submit
  const $form = $('#new-blog-form');
  $form.on('submit', (event) => {
    // 2 and when we submit, hopefully we
    // 2 can see this console.log fire off

    // console.log('the form has been submitted');

    // 3 you will see it show up but it will also refresh
    // 3 what gives? we are dealing with ajax
    // 3 the default behavior of a submit is to make a get request
    // 3 and we can see it url encoded our data
    // 3 we don't want to do that

    // 4 since we don't want to do that 
    // 4 we can tell the event to not do it's default
    event.preventDefault();
    console.log('the form has been submitted');

    // 5 now will the browser refresh...no because we told it not to
  })

});
