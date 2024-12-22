<template>
    <!-- Редактирование услуг -->
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Редактирование услуг</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="service in services"
                class="flex flex-col gap-4 bg-[#252525] rounded-xl p-6 border border-white/10 shadow-[0px_0px_13px_-7px_white] transition-all duration-500 hover:shadow-none">
                <NuxtLink :to="`/admin/edit-${service.id}`" class="self-end">
                    <Icon class="text-3xl text-amber-500" name="material-symbols:edit-outline" />
                </NuxtLink>
                <div class="w-16 h-16 flex items-center justify-center p-2 bg-[#673ab7] rounded-full">
                    <Icon class="text-3xl" :name="service.icon" />
                </div>
                <span class="font-medium">{{ service.title }}</span>
                <span class="text-sm text-gray-400">{{ service.shortDesc }}</span>
            </div>
        </div>
    </div>

    <!-- Смена статуса для заявок -->
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Заявки</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div class="flex flex-col gap-4 rounded-xl border border-white/10 bg-[#252525] shadow-[0px_0px_13px_-7px_white] p-4" v-for="bid in refBids" :key="bid.id">
                <div v-if="showConfirmButton === bid.id" class="flex flex-col gap-2 text-lg">
                    <button @click="updateBidStatus(bid.id, 'Отменена'); showConfirmButton = null"
                        class="px-4 py-1.5 border border-red-500 bg-red-500 text-white rounded-full w-fit text-center transition-all duration-500 hover:text-red-500 hover:bg-transparent">
                        Отменить
                    </button>
                    <button @click="updateBidStatus(bid.id, 'Подтверждена'); showConfirmButton = null"
                        class="px-4 py-1.5 border border-green-500 bg-green-500 text-white rounded-full w-fit text-center transition-all duration-500 hover:text-green-500 hover:bg-transparent">
                        Подтвердить
                    </button>
                    <button @click="showConfirmButton = null"
                        class="px-4 py-1.5 border border-white bg-white text-[#252525] rounded-full w-fit text-center transition-all duration-500 hover:text-white hover:bg-transparent">
                        Назад
                    </button>
                </div>
                <button v-else-if="bid.status == 'Новая'" @click="showConfirmButton = bid.id" class="self-end">
                    <Icon class="text-3xl text-amber-500" name="uil:exchange" />
                </button>
                <div class="flex flex-col gap-2 mt-auto">
                    <p><span class="text-[#673ab7] font-semibold">ID:</span> {{ bid.id }}</p>
                    <p><span class="text-[#673ab7] font-semibold">Пользователь:</span> {{ bid.users.surname }} {{ bid.users.name }} {{ bid.users.patronymic }}</p>
                    <p><span class="text-[#673ab7] font-semibold">Услуга:</span> {{ bid.services.title }}</p>
                    <p><span class="text-[#673ab7] font-semibold">Статус:</span> {{ bid.status }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    /* название и язык страницы */
    useSeoMeta({
        title: 'Админ панель',
        lang: 'ru'
	})


    /* подключение БД и получение заявок */
    const supabase = useSupabaseClient()

    const { data:services, error:servicesError } = await supabase
    .from('services')
    .select('*')   
    .order('id', { ascending: true })


    /* заявки */
    const { data:bids, error:bidsError } = await supabase
    .from('bids')
    .select('*, services(*), users(*)')   
    .order('id', { ascending: true })
    
    const refBids = ref(bids)

    
    /* создание сообщений и роутера */
    const { showMessage } = useMessagesStore()


    /* изменение статуса */
    const showConfirmButton = ref(null); // Подтверждение

    // Универсальная функция для обновления статуса заявки
    const updateBidStatus = async (bidId, status) => {
        const { data, error } = await supabase
            .from('bids')
            .update({ status })
            .eq('id', bidId)

        if (error) {
            console.error(error)
            showMessage("Произошла ошибка!", false)
        } else {
            // Обновление статуса в интерфейсе
            const bidIndex = refBids.value.findIndex((bid) => bid.id === bidId)
            if (bidIndex !== -1) {
                refBids.value[bidIndex].status = status
            }
            showMessage(`Заявка ${status.toLowerCase()}!`, true)
        }
    }
</script>