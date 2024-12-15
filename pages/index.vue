<template>
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Почему вам стоит выбрать именно нас?</p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="flex flex-col p-4 border border-[#f9f9f9]/70 rounded-xl gap-4">
                <div class="flex items-center justify-between gap-4 text-red-500">
                    <p class="text-2xl tracking-wider">Индивидуальный подход</p>
                    <Icon class="text-3xl" name="material-symbols:person"/>
                </div>
                <p class="grow">Мы понимаем, что каждый бизнес уникален. Поэтому наши стратегии разрабатываются с учётом ваших целей, аудитории и особенностей рынка.</p>
            </div>
            <div class="flex flex-col p-4 border border-[#f9f9f9]/70 rounded-xl gap-4">
                <div class="flex items-center justify-between gap-4 text-red-500">
                    <p class="text-2xl tracking-wider">Комплексные решения</p>
                    <Icon class="text-3xl" name="carbon:decision-tree"/>
                </div>
                <p class="grow">От разработки брендинга до запуска масштабных рекламных кампаний — мы предлагаем полный спектр услуг, чтобы вам не приходилось искать подрядчиков в разных местах.</p>
            </div>
            <div class="flex flex-col p-4 border border-[#f9f9f9]/70 rounded-xl gap-4">
                <div class="flex items-center justify-between gap-4 text-red-500">
                    <p class="text-2xl tracking-wider">Прозрачность</p>
                    <Icon class="text-3xl" name="mdi:circle-opacity"/>
                </div>
                <p class="grow">Мы регулярно предоставляем отчёты о проделанной работе и достигнутых результатах. Ваша инвестиция в рекламу работает эффективно.</p>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-6">
        <p class="mainHeading">О компании</p>
        <div class="flex max-lg:flex-col gap-6">
            <img src="/images/about/main.jpg" alt="" class="w-full lg:w-1/2 rounded-xl">
            <div class="flex flex-col gap-4 w-full lg:w-1/2">
                <p>
                    Triada — рекламное агентство полного цикла. Мы создаём эффективные стратегии, которые помогают бизнесу расти и выделяться. Индивидуальный подход, креатив и инновации — наши главные принципы.
                </p>
                <ul class="list-inside list-disc">
                    <li>Индивидуальный подход</li>
                    <li>Креативные решения</li>
                    <li>Прозрачность и доверие</li>
                    <li>Инновационные технологии</li>
                    <li>Ориентация на результат</li>
                    <li>Высокое качество работы</li>
                    <li>Партнёрство на годы</li>
                    <li>Социальная ответственность</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Наши партнёры</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <NuxtLink to="https://www.ogilvy.com/" target="_blank" class="w-full rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 bg-white">
                <img src="/images/partners/1.jpg" alt="" class="object-cover aspect-video w-full">
            </NuxtLink>
            <NuxtLink to="https://www.bbdo.com" target="_blank" class="w-full rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 bg-white">
                <img src="/images/partners/2.webp" alt="" class="object-cover aspect-video w-full">
            </NuxtLink>
            <NuxtLink to="https://www.dentsu.com" target="_blank" class="w-full rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 bg-white">
                <img src="/images/partners/3.png" alt="" class="object-cover aspect-video w-full">
            </NuxtLink>
            <NuxtLink to="https://www.wundermanthompson.com" target="_blank" class="w-full rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 bg-white">
                <img src="/images/partners/4.webp" alt="" class="object-cover aspect-video w-full">
            </NuxtLink>
            <NuxtLink to="https://www.mccannworldgroup.com" target="_blank" class="w-full rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 bg-white">
                <img src="/images/partners/5.png" alt="" class="object-cover aspect-video w-full">
            </NuxtLink>
            <NuxtLink to="https://www.havas.com" target="_blank" class="w-full rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 bg-white">
                <img src="/images/partners/6.webp" alt="" class="object-cover aspect-video w-full">
            </NuxtLink>
            <NuxtLink to="https://www.leoburnett.com" target="_blank" class="w-full rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 bg-white">
                <img src="/images/partners/7.png" alt="" class="object-cover aspect-video w-full">
            </NuxtLink>
            <NuxtLink to="https://www.tbwa.com" target="_blank" class="w-full rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 bg-white">
                <img src="/images/partners/8.webp" alt="" class="object-cover aspect-video w-full">
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>

</script>
