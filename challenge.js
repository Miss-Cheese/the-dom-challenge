// As a user, i should see the timer increment every second once the page has loaded

// document.addEventListener("DOMContentLoaded", function() {
// })

let counter = document.getElementById('counter')

let timer = setInterval(function(){
    counter.innerText = parseInt(counter.innerText) + 1
}, 1000)

let plusButton = document.getElementById("+")
let minusButton = document.getElementById("-")
let heartButton = document.getElementById("<3")

let likesList = document.querySelector("ul")

let likesObj = {}

// As a user, i can manually increment and decrement the counter as i like
// As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
// As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number

document.body.addEventListener('click', function(e){
    
    switch (e.target.id) {
        case "-":
            counter.innerText === "0" ? null : counter.innerText = parseInt(counter.innerText) - 1
            break;
        case "+":
            counter.innerText = parseInt(counter.innerText) + 1
            break;
        case "<3":
            if (Object.keys(likesObj).includes(counter.innerText)) {
                likesObj[`${counter.innerText}`] += 1
                let likedLi = document.querySelector(`li[data-id="${counter.innerText}"]`)
                likedLi.innerText = `${counter.innerText} has been liked ${likesObj[`${counter.innerText}`]} times`
            } else {
                let likedNum = counter.innerText
                let li = document.createElement("li")
                li.innerText = `${likedNum} has been liked`
                li.dataset.id = likedNum
                likesList.appendChild(li)
                likesObj[`${likedNum}`] = 1
            }
            break;
        case "resume":
            plusButton.disabled = false
            minusButton.disabled = false
            heartButton.disabled = false
            timer = setInterval(function(){
                counter.innerText = parseInt(counter.innerText) + 1
            }, 1000)
            break;
        case "pause":
            e.target.innerText = "resume"
            e.target.id = "resume"
            clearInterval(timer)
            plusButton.disabled = true
            minusButton.disabled = true
            heartButton.disabled = true
            break;
        default:
            break;
    }
})

// As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"
let form = document.getElementById("comment-form")
let commentsList = document.getElementById("list") 

form.addEventListener("submit", function(e) {
    e.preventDefault()
    let comment = e.target.comment.value
    let pTag = document.createElement("p")
    pTag.innerText = comment
    commentsList.append(pTag)
    form.reset() 
})