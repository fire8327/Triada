<template>
    <!-- Форма изменения личных данных -->
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Личные данные</p>
        <FormKit @submit="updateUser" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-6 items-center justify-center">
            <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
                <FormKit v-model="user.surname" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Фамилия" name="Фамилия" outer-class="w-full lg:w-1/3" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
                <FormKit v-model="user.name" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Имя" name="Имя" outer-class="w-full lg:w-1/3" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
                <FormKit v-model="user.patronymic" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Отчество" name="Отчество" outer-class="w-full lg:w-1/3" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
            </div>
            <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
                <FormKit v-model="user.login" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Логин" name="Логин" outer-class="w-full lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
                <FormKit v-model="user.password" validation="required|length:6" messages-class="text-[#E9556D] font-Cormorant" type="password" placeholder="······" name="Пароль" outer-class="w-full lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
            </div>
            <FormKit v-model="user.phone" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Телефон" name="Телефон" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
            <FormKit v-model="user.email" validation="required|email" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Email" name="Email" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
            <button type="submit" class="px-4 py-2 border border-[#673ab7] bg-[#673ab7] text-white rounded-full w-[160px] text-center transition-all duration-500 hover:text-[#673ab7] hover:bg-transparent">Обновить</button>
        </FormKit>
    </div>

    <!-- Список заявок -->
    <div class="flex flex-col gap-6" v-if="refBids && role == 'user'">
        <p class="mainHeading">Мои заявки</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div class="flex flex-col gap-4 rounded-xl border border-white/10 bg-[#252525] shadow-[0px_0px_13px_-7px_white] p-4" v-for="bid in refBids">
                <div v-if="showConfirmButton === bid.id" class="flex items-center gap-2 text-lg self-end">
                    <button @click="cancelBid(bid.id); bid.status = 'Отменена'; showConfirmButton = false" class="px-4 py-1.5 border border-[#673ab7] bg-[#673ab7] text-white rounded-full w-fit text-center transition-all duration-500 hover:text-[#673ab7] hover:bg-transparent">Подтвердить</button>
                    <button @click="showConfirmButton = null" class="px-4 py-1.5 border border-white bg-white text-[#252525] rounded-full w-fit text-center transition-all duration-500 hover:text-white hover:bg-transparent">Отмена</button>
                </div>
                <button v-else-if="bid.status == 'Новая'" @click="showConfirmButton = bid.id" class="self-end" >
                    <Icon class="text-3xl text-red-500" name="material-symbols:tab-close-inactive"/>
                </button>
                <p class="mt-auto"><span class="text-[#673ab7] font-semibold">ID:</span> {{ bid.id }}</p>
                <p><span class="text-[#673ab7] font-semibold">Услуга:</span> {{ bid.services.title }}</p>
                <p><span class="text-[#673ab7] font-semibold">Статус:</span> {{ bid.status }}</p>
            </div>
        </div>
    </div>

    <!-- Выход из аккаунта -->
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Выход из аккаунта</p>
        <button @click="logout" class="px-4 py-2 border border-[#673ab7] bg-[#673ab7] text-white rounded-full w-[160px] text-center transition-all duration-500 hover:text-[#673ab7] hover:bg-transparent">Выход</button>   
    </div>
</template>

<script setup>
    /* название и язык страницы */
    useSeoMeta({
        title: 'Профиль',
        lang: 'ru'
	})


    /* подключение БД и проверка пользователя */
    const supabase = useSupabaseClient() 
    const { authenticated, role, id } = storeToRefs(useUserStore())

    const { data:users, error } = await supabase
    .from('users')
    .select('*')   
    .eq('id', id.value)  


    /* создание сообщений и роутера */
    const { showMessage } = useMessagesStore()
    const router = useRouter()


    /* создание формы пользователя */
    const user = ref({
        name: users[0].name,
        surname: users[0].surname,
        patronymic: users[0].patronymic,
        login: users[0].login,
        email: users[0].email,
        phone: users[0].phone,
        password: users[0].password
    }) 


    /* обновление данных */
    const updateUser = async () => {    
        const { data, error } = await supabase
        .from('users')
        .update(user.value)
        .eq('id', id.value)
           
        if(error) {
            console.log(error)
            showMessage("Произошла ошибка!", false)   
        } else {            
            showMessage("Данные обновлены!", true)   
        }
    }


    /* заявки */
    const { data:bids, error:bidsError } = await supabase
    .from('bids')
    .select('*, services(*)')   
    .eq('userId', id.value)   
    .order('id', { ascending: true })
    
    const refBids = ref(bids)


    /* отмена заявки */
    const showConfirmButton = ref(null) //подтверждение

    const cancelBid = async (bidId) => {
        const { data, error } = await supabase
        .from('bids')
        .update({ status: 'Отменена' })
        .eq('id', bidId)
           
        if(error) {
            console.log(error)
            showMessage("Произошла ошибка!", false)   
        } else {            
            showMessage("Заявка отменена!", true)   
        }
    }


    /* выход из аккаунта */
    const { logout } = useUserStore()
</script>