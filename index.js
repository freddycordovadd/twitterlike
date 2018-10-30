const $like = document.getElementsByClassName('like')

Object.values($like).forEach(e => {
    e.addEventListener('click', () => {
        e.classList.toggle('is-liked')
    })
})
