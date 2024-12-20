<template>
    <!-- Список доступных способов оплаты -->
    <div class="flex flex-col gap-8 w-full grow justify-center">
        <p>Мы предлагаем удобные и гибкие способы оплаты, чтобы сотрудничество с нами было комфортным для каждого клиента. Вы можете выбрать один из следующих вариантов:</p>
        <div class="flex flex-col gap-6 w-full">
            <div class="w-full h-px bg-[#f9f9f9]"></div>
            <div class="flex flex-col gap-2">
                <p class="font-semibold text-2xl font-Cormorant">1. Перевод по номеру телефона</p>
                <p class="text-gray-400">Вы можете перевести оплату напрямую на номер телефона нашего менеджера. Реквизиты доступны при заключении договора.</p>
            </div>
            <div class="flex flex-col gap-2">
                <p class="font-semibold text-2xl font-Cormorant">2. Оплата по QR-коду</p>
                <p class="text-gray-400">Удобный способ перевода через мобильное приложение вашего банка. QR-код предоставляется в договоре или по запросу.</p>
            </div>
            <div class="flex flex-col gap-2">
                <p class="font-semibold text-2xl font-Cormorant">3. Перевод на банковский счёт</p>
                <p class="text-gray-400">Оплатите услуги вручную, используя реквизиты компании. Мы предоставим все необходимые данные для перевода.</p>
            </div>
            <div class="w-full h-px bg-[#f9f9f9]"></div>
        </div>
        <p class="text-center"><span class="animate-text text-transparent !bg-clip-text font-semibold">Triada</span> — удобство и доверие на каждом этапе сотрудничества.</p>
    </div>
</template>

<script setup>
    /* название и язык страницы */
    useSeoMeta({
        title: 'Страница оплаты',
        lang: 'ru'
	})
</script>