import Swiper from "swiper"; // Инициализация слайдера
import { Navigation, Pagination } from "swiper/modules";

const swiper = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination],
    // Optional parameters
    direction: "horizontal",
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "progressbar",
    },
});
