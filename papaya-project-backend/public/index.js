const BASE_URL = "http://localhost:3000"
const PAPAYA_URL = "http://localhost:3000/papayas"
const COMMENT_URL = "http://localhost:3000/comments"

document.addEventListener("DOMContentLoaded", () => {
    getPapayas()
})

function getPapayas(){
    fetch(PAPAYA_URL)
        .then(resp => resp.json())
        .then(papayas => showPapayas(papayas))
}

function showPapayas(papayas){
    papayas.forEach(papaya => {
        const papayaDiv = document.getElementById("single-papaya")
        const papayaImage = document.createElement("img")
        papayaImage.src = papaya.image
        papayaDiv.appendChild(papayaImage)
        const likesTag = document.createElement("p")
        likesTag.innerText = papaya.likes
        papayaDiv.appendChild(likesTag)
        const desc = document.createElement("h4")
        desc.innerText = papaya.description
        papayaDiv.appendChild(desc)
        const commentUl = document.createElement('ul')
        createForm(papaya, papayaDiv, commentUl)
        papaya.comments.forEach(comment => {
            displayComments(comment, papayaDiv, commentUl)
        })
        likeButton(papaya, likesTag, papayaDiv)
    })
}

function likeButton(papaya, likesTag, papayaDiv) {
    let button = document.createElement('button');
        button.addEventListener("click", e => {
          increaseLikes(papaya, likesTag);
        })
        button.className = "like-btn"
        button.innerText = "<3"
        papayaDiv.appendChild(button)
}

function increaseLikes(papaya, likesTag) {
    papaya.likes++
    likesTag.innerText = papaya.likes
    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        "likes": papaya.likes
      })
    };
    fetch(`${PAPAYA_URL}/${papaya.id}`, configObj)
  }


function createForm(papaya, papayaDiv, commentUl) {
    const commentForm = document.createElement('form')
    commentForm.id = papaya.id
    commentForm.innerHTML = `
    <input id="comment-input-${papaya.id}" type="text" name="comment" placeholder="Add Comment"/>
    <input type="submit" value="Submit"/>
    `
    papayaDiv.appendChild(commentForm)
    commentForm.addEventListener('submit', (event) => {
        createComment(event, papaya, commentUl)
  })

  function createComment(event, papaya, commentUl) {
    let form = event.currentTarget
    event.preventDefault()
    let commentInput = document.getElementById(`comment-input-${papaya.id}`)
    let newComment = document.createElement('li')
    newComment.innerText = commentInput.value
    commentUl.appendChild(newComment)
    fetch(COMMENT_URL, {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            "content": commentInput.value,
            "papaya_id": papaya.id
        })
    })
    form.reset()
  }
}

function displayComments(comment, papayaDiv, commentUl) {
    const commentLi = document.createElement('li')
    const starRating = document.createElement('p')
    commentLi.innerText= comment.content
    starRating.innerText = `${comment.star_rating} Stars`
    commentLi.appendChild(starRating)
    commentUl.appendChild(commentLi)
    papayaDiv.appendChild(commentUl)

}