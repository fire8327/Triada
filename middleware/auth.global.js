// Массив маршрутов
const routesRequiringAuth = [
    '/profile'
]
const routesNotRequiringAuth = [
    '/auth',
    '/reg'
]


// Middleware для проверки аутентификации пользователя
export default defineNuxtRouteMiddleware((to) => {
    const userStore = useUserStore()
    const isAuthenticated = userStore.authenticated

    // Проверка наличия требования аутентификации для текущего маршрута
    const requiresAuth = routesRequiringAuth.includes(to.path)
    const notRequiresAuth = routesNotRequiringAuth.includes(to.path)

    // Если маршрут требует аутентификации, но пользователь не аутентифицирован, перенаправляем на /auth
    if (requiresAuth && !isAuthenticated) {
        return navigateTo('/auth')
    }

    // Если маршрут не требует аутентификации, но пользователь аутентифицирован, перенаправляем на /profile
    if (notRequiresAuth && isAuthenticated) {
        return navigateTo('/profile')
    }
})