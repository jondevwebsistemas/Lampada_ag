function video_bg() {
    document.getElementById('conteudo').style.visibility = 'visible'
    document.getElementById('conteudo').classList.add('show')
    document.getElementById('video_intro').classList.add('hidden')
    document.body.style.overflow = 'visible'
}

window.onload = window.scrollTo(0,0)
