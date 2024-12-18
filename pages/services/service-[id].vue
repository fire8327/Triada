<template>
    <div class="flex flex-col gap-6 items-center text-center">
        <NuxtLink to="/services" class="self-start px-4 py-2 rounded-xl border border-white/10 shadow-[0px_0px_13px_-7px_white] bg-[#191919]">Вернуться назад</NuxtLink>
        <p class="mainHeading">Услуга: {{ data[0].title }}</p>
        <p class="text-lg text-gray-400 max-w-2xl">{{ data[0].shortDesc }}</p>
    </div>
    
    <div class="w-full py-16 px-6 bg-[#191919] rounded-xl border border-white/10 flex flex-col gap-6">
        <p class="mainHeading text-center">Преимущества</p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div v-for="advantage in data[0].advantages" class="bg-[#252525] shadow-[0px_0px_13px_-7px_white] rounded-xl p-6 flex flex-col gap-6 items-center text-center border border-white/10">
                <p class="text-[#673ab7] text-2xl font-semibold">{{ advantage.title }}</p>
                <p class="text-gray-400 text-lg mt-auto">{{ advantage.description }}</p>
            </div>
        </div>
    </div>

    <div class="flex flex-col gap-6">
        <p class="mainHeading text-center text-[#673ab7]">Подробности услуги</p>
        <div class="flex flex-col gap-2 text-gray-400 text-lg">
            <p>{{ data[0].fullDesc }}</p>
        </div>
        <button v-if="authenticated" class="px-4 py-2 border border-[#673ab7] text-[#673ab7] rounded-full w-fit text-center transition-all duration-500 hover:text-white hover:bg-[#673ab7] self-end">Оставить заявку</button>
        <p v-else class="text-lg text-gray-400 self-end">*Для оформления заявки войдти в аккаунт</p>
    </div>

</template>

<script setup>
    /* название и язык страницы */
    useSeoMeta({
        title: 'Страница услуги',
        lang: 'ru'
	})


    /* подключение БД и роут */
    const supabase = useSupabaseClient() 
    const route = useRoute()

    const { data, error } = await supabase
    .from('services')
    .select('*')   
    .eq('id', route.params.id)


    /* проверка входа */
    const { authenticated, id } = storeToRefs(useUserStore())


    /* создание сообщений */
    const { showMessage } = useMessagesStore()
</script>