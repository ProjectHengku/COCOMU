import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
// accounts pages
import SignUpView from "@/views/accounts/SignUpView.vue"
import FirstSurveyView from "@/views/accounts/FirstSurveyView.vue"
// movies pages
import MovieListView from "@/views/movies/MovieListView.vue"
// reviews pages
import ReviewListView from "@/views/reviews/ReviewListView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "HomeView",
            component: HomeView,
        },
        {
            path: "/accounts",
            children: [
                {
                    path: "signup",
                    name: "SignUpView",
                    component: SignUpView,
                },
                {
                    path: "signup/survey",
                    name: "FirstSurveyView",
                    component: FirstSurveyView,
                },
            ],
        },
        {
            path: "/movies",
            children: [
                {
                    path: "",
                    name: "MovieListView",
                    component: MovieListView,
                },
            ],
        },
        {
            path: "/reviews",
            children: [
                {
                    path: "",
                    name: "ReviewListView",
                    component: ReviewListView,
                },
            ],
        },
    ],
})

export default router
