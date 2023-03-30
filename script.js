window.onload = function () {
    var btn = document.getElementById('btn');


    window.addEventListener('scroll', () => {
        console.log(document.documentElement.scrollTop)
        if (document.documentElement.scrollTop > 150) {
            btn.style.display = 'flex'
        }
        else {
            btn.style.display = 'none'
        }
    })

    btn.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    })
}