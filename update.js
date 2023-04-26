async function createPost(post) {
    try {
      await updateLastUserActivityTime();
      console.log(`Post created: ${post}`);
      return post;
    } catch (error) {
      console.error(error);
    }
  }
  
  async function deleteLastPost(posts) {
    try {
      posts.pop();
      console.log(`New posts: ${posts.join(", ")}`);
      return posts;
    } catch (error) {
      console.error(error);
    }
  }
  
  // Usage:
  const posts = ["Post 1", "Post 2", "Post 3"];
  
  try {
    const postsCreated = await Promise.all([
      createPost(posts[0]),
      createPost(posts[1]),
      createPost(posts[2])
    ]);
  
    console.log("All posts created");
    console.log(`Posts: ${postsCreated.join(", ")}`);
  
    const newPosts = await deleteLastPost(postsCreated);
  
    console.log("Last post deleted");
    console.log(`New posts: ${newPosts.join(", ")}`);
  } catch (error) {
    console.error(error);
  }
  