import CONFIG from '../../globals/config';
import customerReviews from './customer-reviews';
import listMenu from './list-menu';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant-item">
    <div class="restaurant-item__thumbnail">
      <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"alt="${restaurant.name}" class="lazyload">
      <p class="restaurant-item__rating">${restaurant.rating} <i class="fa-sharp fa-solid fa-star fa-2xs"></i></p>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant-item__content__title">${restaurant.name}</h3>
      <h4 class="restaurant-item__content__city">${restaurant.city}</h4>
      <p class="restaurant-item__content__description">${restaurant.description}</p>
      <a href="/#/detail/${restaurant.id}" class="btn">See detail</a>
    </div>
  </article>
`;

const createRestaurantDetailThumbnail = (restaurant) => `
  <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId} "alt="${restaurant.name}">
`;

const createRestaurantDetailInfoTop = (restaurant) => ` 
  <h3 class="restaurant-detail__info__title">${restaurant.name}</h3>
  <h4 class="restaurant-detail__info__city">${restaurant.address}, ${restaurant.city}</h4>
  <p class="restaurant-detail__info__description">${restaurant.description}</p>
`;

const createRestaurantDetailMenus = (restaurant) => `
  <h2 class="text-center">Menu</h2>
  <div class="restaurant-detail__menus__inner">   
    <div class="restaurant-detail__menus__foods">
      <h3>Food</h3>
      <ul>
        ${listMenu(restaurant.menus.foods)}
      </ul>
    </div>
    <div class="restaurant-detail__menus__drinks">
      <h3>Drink</h3>
      <ul>
        ${listMenu(restaurant.menus.drinks)}
      </ul>
    </div>
  </div>
`;

const createRestaurantDetailReviews = (restaurant) => `
  <h2 class="text-center">Reviews</h2>
  <div class="restaurant-detail__reviews__inner">    
    ${customerReviews(restaurant.customerReviews)}
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="btn">
    Add to Favorite
    <i class="fa-regular fa-heart"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="btn">
    Remove to Favorite
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFormReviewTemplate = () => `
  <h2 class="text-center">Write your review</h2>
  <form method="post">    
    <label for="nameInput">Name</label>
    <input type="text" id="nameInput" name="name" required>
    <label for="reviewInput">Review</label>
    <input type="text" id="reviewInput" name="review" required>
    <button class="btn">Submit Review</button
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailThumbnail,
  createRestaurantDetailInfoTop,
  createRestaurantDetailMenus,
  createRestaurantDetailReviews,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createFormReviewTemplate,
};
