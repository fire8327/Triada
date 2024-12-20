<template>
    <!-- Описание компании -->
    <div class="flex flex-col gap-6">
        <p class="mainHeading">О компании</p>
        <div class="flex max-lg:flex-col gap-6">
            <img src="/images/about/main.jpg" alt="" class="w-full lg:w-1/2 mx-auto rounded-xl object-cover">
            <div class="flex flex-col gap-2 w-full lg:w-1/2">
                <p><span class="animate-text text-transparent !bg-clip-text font-medium">Triada</span> — это рекламное агентство полного цикла, специализирующееся на разработке стратегий, которые делают бренды яркими и запоминающимися. Мы предоставляем полный спектр услуг, включая брендинг, digital-маркетинг, медиапланирование и креативное сопровождение.</p>
                <p><span class="animate-text text-transparent !bg-clip-text font-medium">Наша миссия</span> — помочь вашему бизнесу достичь новых высот. Мы работаем с клиентами разного масштаба: от стартапов до крупных компаний. Благодаря индивидуальному подходу, глубокому анализу рынка и использованию современных технологий, мы создаём решения, которые действительно работают.</p>
                <p><span class="animate-text text-transparent !bg-clip-text font-medium">Команда Triada</span> — это профессионалы, которые готовы стать вашим надёжным партнёром в мире рекламы и маркетинга. Вместе мы сделаем ваш бренд сильнее и ближе к вашей аудитории.</p>
            </div>
        </div>
    </div>
    <div class="flex gap-6 max-lg:flex-col">
        <!-- Контакты компании -->
        <div class="lg:w-1/3 flex flex-col gap-4">
            <p class="mainHeading">Контакты</p>
            <div class="flex flex-col gap-2">
                <p class="text-sm text-gray-400">Адрес</p>
                <p class="font-Cormorant font-semibold">улица Пушкина, дом 1</p>
            </div>
            <div>
                <p class="text-sm text-gray-400">Режим работы</p>
                <p class="mt-2 font-Cormorant font-semibold">Пн-Пт: с 9:00 до 21:00</p>
                <p class="font-Cormorant font-semibold">Cб-Вс: с 12:00 до 18:00</p>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-sm text-gray-400">Email</p>
                <NuxtLink to="mailto:triada@mail.ru" class="font-Cormorant font-semibold transition-all duration-500 hover:text-[#673ab7]">triada@mail.ru</NuxtLink>
            </div>
            <div class="flex flex-col gap-2">
                <p class="text-sm text-gray-400">Телефон для связи</p>
                <NuxtLink to="tel:8 800-555-35-35" class="font-Cormorant font-semibold transition-all duration-500 hover:text-[#673ab7]">8 800-555-35-35</NuxtLink>
            </div>

            <!-- Социальные сети -->
            <div class="flex items-center gap-2">
                <NuxtLink to="https://vk.com/" target="_blank" class="transition-all duration-500 hover:text-[#673ab7]">
                    <Icon class="text-3xl" name="mdi:vk"/>
                </NuxtLink>
                <NuxtLink to="https://t.me/" target="_blank" class="transition-all duration-500 hover:text-[#673ab7]">
                    <Icon class="text-3xl" name="ic:baseline-telegram"/>
                </NuxtLink>
                <NuxtLink to="https://www.instagram.com/" target="_blank" class="transition-all duration-500 hover:text-[#673ab7]">
                    <Icon class="text-3xl" name="basil:instagram-outline"/>
                </NuxtLink>
            </div>
        </div>

        <!-- Карта -->
        <iframe class="w-full h-[400px] lg:w-2/3 lg:h-full rounded-xl border border-gray-200" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aca9938ebdc9acd66703b7f498d6b34e78c9910b76fcde25026bdbe728a855ad7&amp;source=constructor" frameborder="0"></iframe>
    </div>
</template>

<script setup>
    /* название и язык страницы */
    useSeoMeta({
        title: 'О нас',
        lang: 'ru'
	})
</script>