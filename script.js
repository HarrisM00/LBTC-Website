
const reviews = [
    { id: 1, name: "John Doe", rating: 4, review: "Great product!", date: "2024-06-15" },
    { id: 2, name: "Jane Smith", rating: 5, review: "Highly recommend, quality of products are amazing!", date: "2024-06-14" },
    { id: 3, name: "Mike Johnson", rating: 3, review: "Decent product, needs some work.", date: "2024-06-13" }
];

//display reviews
function displayReviews() {
    const reviewsContainer = document.getElementById('reviews');


    reviewsContainer.innerHTML = '';


    reviews.forEach(review => {
        const col = document.createElement('div');
        col.classList.add('col-md-4', 'mb-4');

        const card = document.createElement('div');
        card.classList.add('card', 'h-100');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const ratingStars = '⭐'.repeat(review.rating);
        cardBody.innerHTML = `
            <h5 class="card-title">${review.name}</h5>
            <p class="card-text">${ratingStars}</p>
            <p class="card-text">${review.review}</p>
            <p class="card-text"><small class="text-muted">Reviewed on ${review.date}</small></p>
        `;

        card.appendChild(cardBody);
        col.appendChild(card);
        reviewsContainer.appendChild(col);
    });
}

    window.onload = function() {
    displayReviews();
};
