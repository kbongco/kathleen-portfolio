mediumURL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kathleen.bongco'

const blogPosts = (blogs) => {
  blogs.forEach((blog) => {
    let blogEntrydiv = document.createElement('div')
    let blogTitle = document.createElement('h5')
    let blogLink = document.createElement('a')
    blogTitle.innerText = blog.title
    blogEntrydiv.appendChild(blogTitle)
    document.querySelector('.blog-container').append(blogEntrydiv)
    
  })
}

const getEntries = async () => {
  const url = mediumURL
  try {
    const entryResponse = await axios.get(url)
    console.log(entryResponse.data.items)
    blogPosts(entryResponse.data.items)
  } catch (error) {
    console.log(`OH NOOOO You have a ${error} ! `)
  }
}

getEntries();

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

