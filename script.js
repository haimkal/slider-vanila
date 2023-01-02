
window.addEventListener('load', () => {

    let currentImg = 0
    let imgArr = Array.from(document.getElementsByClassName('image'))
    const rightBtn = document.getElementById('right-arrow')
    const leftBtn = document.getElementById('left-arrow')
    const imgBox = document.getElementById('img-box')
    const form = document.querySelector('form');
    const deleteBtn = document.getElementById('delete-btn')

    function switchImg(currentImg) {
        console.log(imgArr)
        imgArr.forEach((img, index) => {
            img.classList.remove('active')
            if (currentImg === index) {
                img.classList.add('active')
            }
        })
    }

    deleteBtn.addEventListener('click', () => {
        removeImg(currentImg);
    })

    rightBtn.addEventListener('click', () => {
        currentImg++
        if (currentImg === imgArr.length) {
            currentImg = 0
        }
        switchImg(currentImg)
    })

    leftBtn.addEventListener('click', () => {
        currentImg--
        if (currentImg < 0) {
            currentImg = imgArr.length - 1
        }
        switchImg(currentImg)
    })


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const values = {
            url: e.target.imgUrl.value,
            description: e.target.imgDescription.value
        }
        let newImage = document.createElement('img');
        newImage.src = values.url
        newImage.setAttribute('alt', values.description);
        newImage.classList.add('image')

        imgBox.appendChild(newImage)
        imgArr = [...imgArr, newImage]

    })

    // function removeImg(index) {
    //     // let imgArr = Array.from(document.getElementsByClassName('image'))
    //     imgArr[index].classList.remove('active')
    //     currentImg++
    //     imgArr.splice(index, 1)


    //     switchImg(currentImg)
    // }
})