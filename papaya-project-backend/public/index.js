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
  const facePapaya = papayas[0]
  let papayaFaceImg = document.getElementById('papaya-face-image')
  papayaFaceImg.src = facePapaya.image
  let faceLikeButton = document.getElementById('face-like-button')
  faceLikeButton.innerText = `Likes: ${facePapaya.likes}`
  let commentsList = document.getElementById('face-comments-list')
  facePapaya.comments.forEach(comment => {
    displayComments(comment, commentsList)})
    faceLikeButton.addEventListener("click", e => {
      faceIncreaseLikes(facePapaya, faceLikeButton)})
  faceCommentForm(facePapaya, commentsList)


  const messagePapaya = papayas[1]
  let papayaMessageImg = document.getElementById('papaya-message-image')
  papayaMessageImg.src = messagePapaya.image
  let messageLikeButton = document.getElementById('message-like-button')
  messageLikeButton.innerText = `Likes: ${messagePapaya.likes}`
  let messageCommentsList = document.getElementById('message-comments-list')
  messagePapaya.comments.forEach(comment => {
    displayComments(comment, messageCommentsList)})
    messageLikeButton.addEventListener("click", e => {
      messageIncreaseLikes(messagePapaya, messageLikeButton)})
}
    

function faceIncreaseLikes(facePapaya, faceLikeButton) {
    facePapaya.likes++
    faceLikeButton.innerText = `Likes: ${facePapaya.likes}`
    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        "likes": facePapaya.likes
      })
    };
    fetch(`${PAPAYA_URL}/${facePapaya.id}`, configObj)
  }

  function messageIncreaseLikes(messagePapaya, messageLikeButton) {
    messagePapaya.likes++
    messageLikeButton.innerText = `Likes: ${messagePapaya.likes}`
    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        "likes": messagePapaya.likes
      })
    };
    fetch(`${PAPAYA_URL}/${messagePapaya.id}`, configObj)
  }


function faceCommentForm(facePapaya, commentsList) {
    const faceCommentForm = document.getElementById('face-comment-form')
    faceCommentForm.addEventListener('submit', (event) => {
        faceCreateComment(event, facePapaya, commentsList)
  })

  function faceCreateComment(event, facePapaya, commentsList) {
    let form = event.currentTarget
    event.preventDefault()
    let commentInput = document.getElementById('face-papaya-comment')
    let newComment = document.createElement('li')
    newComment.innerText = commentInput.value
    commentsList.appendChild(newComment)
    fetch(COMMENT_URL, {
        method: "POST", 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            "content": commentInput.value,
            "papaya_id": facePapaya.id
        })
    })
    form.reset()
  }
}

function displayComments(comment, commentsList) {
    const commentLi = document.createElement('li')
    const starRating = document.createElement('p')
    commentLi.innerText= comment.content
    starRating.innerText = `${comment.star_rating} Stars`
    commentLi.appendChild(starRating)
    commentsList.appendChild(commentLi)

}