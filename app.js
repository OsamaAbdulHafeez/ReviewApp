// var image = document.querySelector('img')
// var names = document.querySelector('h2')
// var designations = document.querySelector('h4')
// var review = document.querySelector('p')
// console.log(designations)

// const personReviews = [
//     {
//         image: './Assets/images/One.jpg',
//         name: 'Susan Smith',
//         designation: 'Web Developer',
//         review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam sunt ea ad. Id nobis ullam hic eum. Quaerat unde, temporibus tempora provident inventore reiciendis adipisci fugit ullam pariatur autem.'
//     },
//     {
//         image: './Assets/images/Two.png',
//         name: 'Mathew Jack',
//         designation: 'Android Developer',
//         review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore a pariatur libero, perferendis illo autem repudiandae saepe vitae. Asperiores illo iste molestiae est temporibus ipsum.'
//     },
//     {
//         image: './Assets/images/Three.jpg',
//         name: 'David inglis',
//         designation: 'Graphic Designer',
//         review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro natus dicta repellendus molestiae quidem delectus pariatur hic culpa numquam veritatis. Quod dolor hic enim, eum natus quisquam ratione quae provident minima quas totam'
//     }
// ]
// let count = 0

// image.src = personReviews[0].image
// names.textContent = personReviews[0].name
// designations.textContent = personReviews[0].designation
// review.textContent = personReviews[0].review

// function next() {
//     if (count < personReviews.length - 1) {
//         count++
//         image.src = personReviews[count].image
//         names.textContent = personReviews[count].name
//         designations.textContent = personReviews[count].designation
//         review.textContent = personReviews[count].review
//         console.log(count)
//     }
// }
// function previous() {
//     if (count>0) {
//         count--
//         image.src = personReviews[count].image
//         names.textContent = personReviews[count].name
//         designations.textContent = personReviews[count].designation
//         review.textContent = personReviews[count].review
//         console.log(count)
//     }
// }

var image = document.querySelector('img')
var names = document.querySelector('h2')
var designations = document.querySelector('h4')
var review = document.querySelector('p')
console.log(designations)

const personReviews = [
    {
        image: './Assets/images/One.jpg',
        name: 'Susan Smith',
        designation: 'Web Developer',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam sunt ea ad. Id nobis ullam hic eum. Quaerat unde, temporibus tempora provident inventore reiciendis adipisci fugit ullam pariatur autem.'
    },
    {
        image: './Assets/images/Two.png',
        name: 'Mathew Jack',
        designation: 'Android Developer',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore a pariatur libero, perferendis illo autem repudiandae saepe vitae. Asperiores illo iste molestiae est temporibus ipsum.'
    },
    {
        image: './Assets/images/Three.jpg',
        name: 'David inglis',
        designation: 'Graphic Designer',
        review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro natus dicta repellendus molestiae quidem delectus pariatur hic culpa numquam veritatis. Quod dolor hic enim, eum natus quisquam ratione quae provident minima quas totam'
    }
]
let count = 0

function showUser(num) {
    image.src = personReviews[num].image
    names.textContent = personReviews[num].name
    designations.textContent = personReviews[num].designation
    review.textContent = personReviews[num].review
    // console.log(personReviews[count])
}
showUser(count)
function next() {
    count++
    if (count < personReviews.length) {
        showUser(count)
        console.log(count)
    }
    else if(count == personReviews.length){
        showUser(count = 0)
        console.log(count)
    }
}
function previous() {
    count--
    if (count > -1) {
        showUser(count)
        console.log(count)
    }
    else if(count == -1){
        console.log(count)
        showUser(count=personReviews.length-1)
    }
}
// image.src = personReviews[0].image
// names.textContent = personReviews[0].name
// designations.textContent = personReviews[0].designation
// review.textContent = personReviews[0].review

// function next() {
//     if (count < personReviews.length - 1) {
//         count++
//         image.src = personReviews[count].image
//         names.textContent = personReviews[count].name
//         designations.textContent = personReviews[count].designation
//         review.textContent = personReviews[count].review
//         console.log(count)
//     }
// }
// function previous() {
//     if (count>0) {
//         count--
//         image.src = personReviews[count].image
//         names.textContent = personReviews[count].name
//         designations.textContent = personReviews[count].designation
//         review.textContent = personReviews[count].review
//         console.log(count)
//     }
// }

