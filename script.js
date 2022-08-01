let ratings = document.querySelector('.ratings');
let btn = document.querySelector('button');
let ratingsArr = document.querySelectorAll('.rating');
let span = document.querySelector('span');
let feedback = document.querySelector('.feedback');
let appreciation = document.querySelector('.appreciation');

/* 
    function removes active class from rating element
*/
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

/* 
    function to provide the rating a user picks
*/
let getRating = (ratingArr) => {
    let score = 0;
    ratingArr.forEach(rating => {
        if (rating.classList[1] == 'active')
            score = parseInt(rating.innerText);
    });
    return score;
}

/* 
    function adds the active class to selected rating element
*/
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

/* 
    function prevents user from submitting without picking a rating
*/
btn.addEventListener('click', (e) => {
    if (!getRating(ratingsArr))
    {
        alert("Select a Rating please!")
        return ;
    }

    feedback.style.display = 'none';
    span.innerText = getRating(ratingsArr);
    appreciation.classList.add('active');
});