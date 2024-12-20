<template>
     <footer class="grid-container py-6 mt-10">
        <div class="flex flex-col gap-4">
            <div class="flex md:items-center max-md:flex-col md:justify-between max-md:gap-8">
                <!-- Логотип -->
                <NuxtLink to="/">
                    <img src="/images/body/logo.webp" alt="" class="w-32"> 
                </NuxtLink>   

                <!-- Правый блок -->
                <div class="flex max-md:flex-col items-start gap-4 xl:gap-8">
                    <div class="flex flex-col gap-4 text-lg">
                        <p class="text-[#673ab7] font-Cormorant font-semibold">Адрес</p>   
                        <p>Москва, ул Пушкина, д. 1 <br> пн—сб с 10:00 — 20:00</p>
                    </div>
                    <div class="flex flex-col gap-4 text-lg">
                        <p class="text-[#673ab7] font-Cormorant font-semibold">Помощь</p>
                        <NuxtLink to="/feedback" class="transition-all duration-500 hover:text-gray-400">Оставить заявку</NuxtLink>   
                    </div>
                    <div class="flex flex-col gap-4 text-lg">
                        <p class="text-[#673ab7] font-Cormorant font-semibold">Контакты</p>   
                        <div class="flex items-center gap-4">
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
                </div>
            </div>

            <!-- Линия -->
            <div class="w-full h-0.5 bg-[#673ab7] rounded-full"></div>
            <p class="text-center text-base">© 2024 Triada</p>
        </div>
    </footer>
</template>

<script setup>

</script>