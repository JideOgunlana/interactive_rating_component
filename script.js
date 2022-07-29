let ratings = document.querySelector('.ratings');
let btn = document.querySelector('button');
let ratingsArr = document.querySelectorAll('.rating');
let span = document.querySelector('span');
let feedback = document.querySelector('.feedback');
let appreciation = document.querySelector('.appreciation');
let ratingScore = 0;


// if the selected rating is not active remove from the one that is active and then
// make the selected rating active
// if the selected rating is already active only remove active
// if nothing is active don't remove active only add active to the selected
let removeActive = (ratingsArr) => {
    let i = 0;
    while (i < ratingsArr.length)
    {
        if (ratingsArr[i].classList[1] == 'active')
        {
            ratingsArr[i].classList.remove('active');
            break;
        }
        i++;
    }
}

ratings.addEventListener('click', (e) => {
    let selectedRating = false;

    if (e.target.classList[0] === 'rating')
    {
        if (e.target.classList[1] == 'active')
        {
            selectedRating = true;
            removeActive(ratingsArr);
            ratingScore = 0;
        }
        if (!selectedRating)
        {
            removeActive(ratingsArr);
            e.target.classList.add('active');
            ratingScore = e.target.innerText;
        }
    }
});

btn.addEventListener('click', (e) => {
    if (!ratingScore)
    {
        alert("Select a Rating please!")
        return ;
    }

    feedback.style.display = 'none';
    span.innerText = ratingScore;
    appreciation.classList.add('active');
})