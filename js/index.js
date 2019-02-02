// Your code goes here
// Your code goes here
const destination_btn = document.querySelectorAll('.btn')
const img_all = document.querySelectorAll('.img')


destination_btn[0].addEventListener('click', (event) => {
    event.stopPropagation();
    alert('this button was clicked');
})

destination_btn[1].addEventListener('mouseenter', (event) => {
    event.stopPropagation();
    event.target.style.color = 'red'
})

destination_btn[1].addEventListener('mouseleave', (event) => {
    event.stopPropagation()
    event.target.style.color = 'white'
})

img_all[0].addEventListener('click', (event) => {
    event.target.style.display = 'none'
})