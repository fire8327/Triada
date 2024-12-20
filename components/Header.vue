<template>
     <header class="w-full py-4 grid-container border-b-2 border-[#673ab7] relative">
        <div class="flex items-center justify-between">
            <!-- Логотип -->
            <NuxtLink to="/">
                <img src="/images/body/logo.webp" alt="" class="w-32"> 
            </NuxtLink>

            <!-- Меню -->
            <nav class="flex items-center gap-8 max-lg:bg-[#252525] max-lg:px-4 max-lg:absolute max-lg:flex-col max-lg:w-full max-lg:py-8 max-lg:left-0 z-[4] duration-500 transition-all" :class="isMenuShow ? 'max-lg:top-[calc(100%+1.5px)]' : 'max-lg:top-0 max-lg:-translate-y-full'">
                <NuxtLink to="/">Главная</NuxtLink>
                <NuxtLink to="/services">Услуги</NuxtLink>
                <NuxtLink to="/about">О нас</NuxtLink>
                <NuxtLink to="/reviews">Отзывы</NuxtLink>
                <NuxtLink to="/payment">Способы оплаты</NuxtLink>
                <NuxtLink to="/admin" v-if="role == 'admin'">Админ панель</NuxtLink>
                <div class="flex items-center gap-4">
                    <NuxtLink :to="authenticated ? '/profile' : '/auth'">
                        <Icon class="text-3xl text-[#673ab7]" name="material-symbols:account-circle"/>
                    </NuxtLink>
                </div>
            </nav>

            <!-- Оверлей -->
            <div @click="isMenuShow = !isMenuShow" class="w-full inset-0 bg-black/50 fixed top-24 z-[3] transition-all duration-500 lg:hidden" :class="isMenuShow ? 'max-lg:top-32' : 'max-xl:top-0 max-xl:-translate-y-full'"></div>
            
            <!-- Кнопка открытия меню -->
            <button class="lg:hidden cursor-pointer" @click="isMenuShow = !isMenuShow">
                <Icon class="text-3xl text-[#673ab7]" name="ph:list-bold"/>
            </button>
        </div>

        <!-- Уведомления -->
        <button type="button" @click="messageTitle = null" class="fixed top-10 right-10 z-[11] cursor-pointer flex items-center gap-2 px-6 py-2 text-lg rounded-xl w-fit bg-[#252525] border border-white/10 shadow-[0px_0px_13px_-7px_white]" :class="messageType ? ' text-white' : 'text-red-500'" v-if="messageTitle">
            <Icon class="text-3xl" name="material-symbols:close-small-rounded"/>
            <span>{{messageTitle}}</span>
        </button>
    </header>
</template>

<script setup>
    /* открытие мобильного меню */
    const isMenuShow = ref(false) 


    /* закрытие мобильного меню */
    const nuxtApp = useNuxtApp()
    nuxtApp.hook('page:start', () => {
        isMenuShow.value = false
    })


    /* запрет скролла */
    watch(isMenuShow, (newValue) => {
        const html = document.documentElement; // Тег <html>
        if (newValue) {
            html.classList.add('overflow-y-hidden') // Запрещаем скролл
        } else {
            html.classList.remove('overflow-y-hidden')// Восстанавливаем скролл
        }
    })


    /* создание сообщений */
    const { messageTitle, messageType } = storeToRefs(useMessagesStore())

    
    /* проверка входа */
    const { authenticated, role } = storeToRefs(useUserStore())
</script>
