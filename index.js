const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

for (let i = 0; i < posts.length; i++) {
    const postsContainer = document.getElementById("posts")
    // create section
    const postSection = document.createElement("section")
    postSection.setAttribute("class", "post")
    // create container
    const container = document.createElement("div")
    container.setAttribute("class", "container")
    // create post inner 
    const postInner = document.createElement("div")
    postInner.setAttribute("class", "post__inner")
    // append main structure
    postsContainer.appendChild(postSection)
    postSection.appendChild(container)
    container.appendChild(postInner)
    // create userinfo
    const postHeader = document.createElement("div")
    postHeader.setAttribute("class", "post-header")
    const postHeaderImg = document.createElement("img")
    postHeaderImg.setAttribute("class", "post-header__img")
    postHeaderImg.setAttribute("src", `${posts[i].avatar}`)
    const postHeaderText = document.createElement("div")
    postHeaderText.setAttribute("class", "post-header__text")
    const postHeaderName = document.createElement("p")
    postHeaderName.setAttribute("class", "post-header__name")
    postHeaderName.textContent = posts[i].name
    const postHeaderLocation = document.createElement("p")
    postHeaderLocation.setAttribute("class", "post-header__location")
    postHeaderLocation.textContent = posts[i].location
    // append userinfo
    postInner.appendChild(postHeader)
    postHeader.appendChild(postHeaderImg)
    postHeader.appendChild(postHeaderText)
    postHeaderText.appendChild(postHeaderName)
    postHeaderText.appendChild(postHeaderLocation)
    // create post picture
    const postPictureDiv = document.createElement("div")
    postPictureDiv.setAttribute("class", "post-picture")
    const postPictureImg = document.createElement("img")
    postPictureImg.setAttribute("data-post-index", i)
    postPictureImg.setAttribute("src", `${posts[i].post}`)
    // append post picture
    postInner.appendChild(postPictureDiv)
    postPictureDiv.appendChild(postPictureImg)
    // create post buttons 
    const postButtons = document.createElement("div")
    postButtons.setAttribute("class", "post-buttons")
    const likeBtn = document.createElement("img")
    const commentBtn = document.createElement("img")
    const dmBtn = document.createElement("img")
    likeBtn.setAttribute("src", "images/icon-heart.png")
    commentBtn.setAttribute("src", "images/icon-comment.png")
    dmBtn.setAttribute("src", "images/icon-dm.png")
    likeBtn.setAttribute("class", "post-buttons__like")
    likeBtn.setAttribute("data-post-index", i)
    commentBtn.setAttribute("class", "post-buttons__comment")
    dmBtn.setAttribute("class", "post-buttons__dm")
    // append post buttons
    postInner.appendChild(postButtons)
    postButtons.appendChild(likeBtn)
    postButtons.appendChild(commentBtn)
    postButtons.appendChild(dmBtn)
    // create like section
    const postLikes = document.createElement("div")
    postLikes.setAttribute("class", "post-likes")
    const postLikesText = document.createElement("p")
    postLikesText.setAttribute("class", "post-likes__text")
    postLikesText.textContent = `${posts[i].likes} likes`
    // append like section
    postInner.appendChild(postLikes)
    postLikes.appendChild(postLikesText)
    // create comment section
    const postComment = document.createElement("div")
    postComment.setAttribute("class", "post-comment")
    const postCommentUsername = document.createElement("p")
    postCommentUsername.setAttribute("class", "post-comment__username")
    postCommentUsername.textContent = posts[i].username
    const postCommentText = document.createElement("p")
    postCommentText.setAttribute("class", "post-comment__text")
    postCommentText.textContent = posts[i].comment
    // append comment section
    postInner.appendChild(postComment)
    postComment.appendChild(postCommentUsername)
    postComment.appendChild(postCommentText)
    
    const likeBtnEl = likeBtn
    likeBtnEl.addEventListener("click", function(){
        const postIndex = likeBtn.getAttribute("data-post-index")
        const post = posts[postIndex]
        
        post.liked = !post.liked
        post.likes += post.liked ? 1 : -1
        postLikesText.textContent = `${post.likes} likes`
        likeBtn.setAttribute("src", post.liked ? "images/icon-heart-filled.png" : "images/icon-heart.png");
    })
    const postPictureImgEl = postPictureImg
    postPictureImgEl.addEventListener("dblclick", function(){
        const imgIndex = postPictureImg.getAttribute("data-post-index")
        const postImg = posts[imgIndex]
        postImg.liked = !postImg.liked
        postImg.likes += postImg.liked ? 1 : -1
        postLikesText.textContent = `${postImg.likes} likes`
        likeBtn.setAttribute("src", postImg.liked ? "images/icon-heart-filled.png" : "images/icon-heart.png");
    })
}
