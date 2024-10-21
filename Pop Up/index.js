const btn = document.getElementById('btn')
const box = document.getElementById('child')

btn.addEventListener('click', () => {
    if(box.style.display == 'none'){
        box.style.display = 'block'
    }else{
        box.style.display = 'none'
    }
})