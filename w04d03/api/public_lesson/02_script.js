// 1 now we are ready to dynamically add data!
// 1 even though our script is at the bottom
// 1 we still need the document.ready
// 1 jQuery also provide a further shorthand for document ready
// 1 $(document).ready(() => {})
// 1 just pass jQuery a callback
// 1 $(() => {})

$(() => {
  // 2 so to start, we are going to use the longhand way
  // 2 to make a request
  $.ajax({
    url: '/api/blogs',
    method: 'GET',
    dataType: 'json', // 3 optional
    // 3 if we successfully get the data, what do we do with it
    success: (blogs) => {
      console.log("blogs", blogs);
    },
    // 3 and if we get an error
    error: (err) => {
      console.log(`error: ${err}`)
    }
    // 4 and now we should see our data if we look
    // 4 in the console
    // 4 show xhr in network tab
  });
});