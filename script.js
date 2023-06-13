const reviews = Array.from(document.querySelectorAll('.review'));
const tabs = Array.from(document.querySelectorAll('.tab'));

tabs.forEach(showReview);

function showReview(item) {
    item.addEventListener('click', () => {
        if (!item.classList.contains('tab-active')) {
            tabs.forEach((item) => {item.classList.remove('tab-active')});
            item.classList.add('tab-active');
    
            let index = tabs.indexOf(item);
    
            reviews.forEach((item) => {item.classList.remove('review-active')});
            reviews[index].classList.add('review-active');
        }
    })
}