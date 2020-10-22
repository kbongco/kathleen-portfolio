mediumURL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kathleen-bongco'

const blogPosts = (blogs) => {
  blogs.forEach((blog) => {
    let blogEntrydiv = document.createElement('div')
    let blogLink = document.createElement('a')
    console.log(blogLink)
    blogLink.classList.add('links-here')
    blogLink.href = blog.link
    blogLink.innerText = blog.title
    console.log(blogLink.innerText)
    blogEntrydiv.appendChild(blogLink)
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

