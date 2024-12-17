<template>
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Почему вам стоит выбрать именно нас?</p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="flex flex-col p-4 rounded-xl gap-4 transition-all duration-500 bg-[#252525] border border-white/10 shadow-[0px_0px_13px_-7px_white]">
                <div class="flex items-center justify-between gap-4">
                    <p class="font-medium">Индивидуальный подход</p>
                    <Icon class="text-3xl text-[#673ab7]" name="material-symbols:person"/>
                </div>
                <p class="grow text-sm text-gray-400">Мы понимаем, что каждый бизнес уникален. Поэтому наши стратегии разрабатываются с учётом ваших целей, аудитории и особенностей рынка.</p>
            </div>
            <div class="flex flex-col p-4 rounded-xl gap-4 transition-all duration-500 bg-[#252525] border border-white/10 shadow-[0px_0px_13px_-7px_white]">
                <div class="flex items-center justify-between gap-4">
                    <p class="font-medium">Комплексные решения</p>
                    <Icon class="text-3xl text-[#673ab7]" name="carbon:decision-tree"/>
                </div>
                <p class="grow text-sm text-gray-400">От разработки брендинга до запуска масштабных рекламных кампаний — мы предлагаем полный спектр услуг, чтобы вам не приходилось искать подрядчиков в разных местах.</p>
            </div>
            <div class="flex flex-col p-4 rounded-xl gap-4 transition-all duration-500 bg-[#252525] border border-white/10 shadow-[0px_0px_13px_-7px_white]">
                <div class="flex items-center justify-between gap-4">
                    <p class="font-medium">Прозрачность</p>
                    <Icon class="text-3xl text-[#673ab7]" name="mdi:circle-opacity"/>
                </div>
                <p class="grow text-sm text-gray-400">Мы регулярно предоставляем отчёты о проделанной работе и достигнутых результатах. Ваша инвестиция в рекламу работает эффективно.</p>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-6">
        <p class="mainHeading">О компании</p>
        <div class="flex max-lg:flex-col gap-6">
            <img src="/images/about/main.jpg" alt="" class="w-full lg:w-1/2 rounded-xl">
            <div class="flex flex-col gap-4 w-full lg:w-1/2">
                <p>
                    <span class="animate-text text-transparent !bg-clip-text font-medium">Triada</span> — рекламное агентство полного цикла. Мы создаём эффективные стратегии, которые помогают бизнесу расти и выделяться. Индивидуальный подход, креатив и инновации — наши главные принципы.
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
        <NuxtLink to="/about" class="px-4 py-2 border border-[#673ab7] text-[#673ab7] rounded-full w-[160px] text-center transition-all duration-500 hover:text-white hover:bg-[#673ab7] self-end">Подробнее</NuxtLink>
    </div>
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Наши услуги</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink to="/" class="flex flex-col gap-4 bg-[#252525] rounded-xl p-6 border border-white/10 shadow-[0px_0px_13px_-7px_white] transition-all duration-500 hover:shadow-none">
                <div class="w-16 h-16 flex items-center justify-center p-2 bg-[#673ab7] rounded-full">
                    <Icon class="text-3xl" name="material-symbols:brand-family"/>
                </div>
                <span class="font-medium">Разработка бренда</span>
                <span class="text-sm text-gray-400">Создание логотипа, фирменного стиля и брендбука для вашего бизнеса.</span>
            </NuxtLink>
            <NuxtLink to="/" class="flex flex-col gap-4 bg-[#252525] rounded-xl p-6 border border-white/10 shadow-[0px_0px_13px_-7px_white] transition-all duration-500 hover:shadow-none">
                <div class="w-16 h-16 flex items-center justify-center p-2 bg-[#673ab7] rounded-full">
                    <Icon class="text-3xl" name="material-symbols:brand-family"/>
                </div>
                <span class="font-medium">Разработка бренда</span>
                <span class="text-sm text-gray-400">Создание логотипа, фирменного стиля и брендбука для вашего бизнеса.</span>
            </NuxtLink>
            <NuxtLink to="/" class="flex flex-col gap-4 bg-[#252525] rounded-xl p-6 border border-white/10 shadow-[0px_0px_13px_-7px_white] transition-all duration-500 hover:shadow-none">
                <div class="w-16 h-16 flex items-center justify-center p-2 bg-[#673ab7] rounded-full">
                    <Icon class="text-3xl" name="material-symbols:brand-family"/>
                </div>
                <span class="font-medium">Разработка бренда</span>
                <span class="text-sm text-gray-400">Создание логотипа, фирменного стиля и брендбука для вашего бизнеса.</span>
            </NuxtLink>
        </div>
        <NuxtLink to="/services" class="px-4 py-2 border border-[#673ab7] text-[#673ab7] rounded-full w-[160px] text-center transition-all duration-500 hover:text-white hover:bg-[#673ab7] self-end">Подробнее</NuxtLink>
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
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Портфолио</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="flex flex-col w-full border-x border-b border-[#f9f9f9]/10 rounded-xl">
                <img src="/images/portfolio/1.jpg" alt="" class="rounded-t-xl aspect-video w-full object-cover">
                <p class="px-4 py-2 rounded-b-xl bg-[#191919]">Создание сайта для интернет-продукта под названием “Kek.net”</p>
            </div>
            <div class="flex flex-col w-full border-x border-b border-[#f9f9f9]/10 rounded-xl">
                <img src="/images/portfolio/2.jpg" alt="" class="rounded-t-xl aspect-video w-full object-cover">
                <p class="px-4 py-2 rounded-b-xl bg-[#191919]">3D визуализация интерьерной студии в столице России — Москве</p>
            </div>
            <div class="flex flex-col w-full border-x border-b border-[#f9f9f9]/10 rounded-xl">
                <img src="/images/portfolio/3.jpg" alt="" class="rounded-t-xl aspect-video w-full object-cover">
                <p class="px-4 py-2 rounded-b-xl bg-[#191919]">Создание нового логотипа для крупной рекламной компании</p>
            </div>
            <div class="flex flex-col w-full border-x border-b border-[#f9f9f9]/10 rounded-xl">
                <img src="/images/portfolio/4.jpg" alt="" class="rounded-t-xl aspect-video w-full object-cover">
                <p class="px-4 py-2 rounded-b-xl bg-[#191919]">Разработка стиля компании, что производит платы для электроники</p>
            </div>
            <div class="flex flex-col w-full border-x border-b border-[#f9f9f9]/10 rounded-xl">
                <img src="/images/portfolio/5.jpg" alt="" class="rounded-t-xl aspect-video w-full object-cover">
                <p class="px-4 py-2 rounded-b-xl bg-[#191919]">Создание интернет-магазина брендовой и стильной детской одежды</p>
            </div>
            <div class="flex flex-col w-full border-x border-b border-[#f9f9f9]/10 rounded-xl">
                <img src="/images/portfolio/6.jpg" alt="" class="rounded-t-xl aspect-video w-full object-cover">
                <p class="px-4 py-2 rounded-b-xl bg-[#191919]">Реклама проекта по защите природы в сетях и на публичных платформах</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
