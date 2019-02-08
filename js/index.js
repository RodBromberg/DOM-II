// Your code goes here
// Your code goes here
const destination_btn = document.querySelectorAll('.btn')
const img_all = document.querySelectorAll('img')
const destintation_para = document.querySelectorAll('.destination para')
const p_tags = document.querySelectorAll('p')
const nav_Anchors = document.querySelectorAll('.nav-link');


for (let i = 0; i < p_tags.length; i++) {
    p_tags[i].addEventListener('click', (event) => {
        event.target.classList.toggle('yellow')
    })

}


nav_Anchors.forEach((elem, i) => {
    nav_Anchors[i].addEventListener('mouseover', (event) => {
        event.target.style.color = 'yellow'
    })
})

nav_Anchors.forEach((elem, i) => {
    nav_Anchors[i].addEventListener('mouseout', (event) => {
        event.target.style.color = ''
    })
})





destination_btn[0].addEventListener('click', (event) => {
    event.stopPropagation();
    alert('this button was clicked');
})

destination_btn[1].addEventListener('mouseenter', (event) => {
    event.stopPropagation();
    event.target.style.color = 'yellow'
})

destination_btn[1].addEventListener('mouseleave', (event) => {
    event.stopPropagation()
    event.target.style.color = ''
})

destination_btn[2].addEventListener('mouseenter', (event) => {
    event.stopPropagation();
    event.target.style.color = 'red'
})

destination_btn[2].addEventListener('mouseout', (event) => {
    event.stopPropagation()
    event.target.style.color = ''
})




// img_all[0].addEventListener('click', (event) => {
//     event.target.style.display = 'none'
// })

// img_all[0].addEventListener('click', (event) => {
//     event.target.classList.toggle('over')
// })


// for (let i = 0; i < img_all.length; i++) {
//     img_all[i].addEventListener('click', (event) => {
//         event.stopPropagation()
//         event.target.classList.toggle('over')
//     })
// }


img_all.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        event.target.classList.toggle('over')
    })
})


const cont = document.querySelector('h1')
cont.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red'

})

cont.addEventListener('mouseout', (event) => {
    event.target.style.color = ''

})