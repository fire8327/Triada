<template>
    <!-- Наименование услуги -->
    <div class="flex flex-col gap-6 items-center text-center">
        <NuxtLink to="/services" class="self-start px-4 py-2 rounded-xl border border-white/10 shadow-[0px_0px_13px_-7px_white] bg-[#191919]">Вернуться назад</NuxtLink>
        <p class="mainHeading">Услуга: {{ data[0].title }}</p>
        <p class="text-lg text-gray-400 max-w-2xl">{{ data[0].shortDesc }}</p>
        <img :src="`https://ovlfsydfwucmkdxpwngo.supabase.co/storage/v1/object/public/images/servicesMain/${data[0].servicesMain}`" alt="" class="rounded-xl aspect-video object-cover w-full lg:w-2/3">
    </div>
    
    <!-- Преимущества -->
    <div class="w-full py-16 px-6 bg-[#191919] rounded-xl border border-white/10 flex flex-col gap-6">
        <p class="mainHeading text-center">Преимущества</p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div v-for="advantage in data[0].advantages" class="bg-[#252525] shadow-[0px_0px_13px_-7px_white] rounded-xl p-6 flex flex-col gap-6 items-center text-center border border-white/10">
                <p class="text-[#673ab7] font-semibold">{{ advantage.title }}</p>
                <p class="text-gray-400 text-lg mt-auto">{{ advantage.description }}</p>
            </div>
        </div>
    </div>

    
    <div class="flex flex-col gap-6 items-center text-center">
        <p class="mainHeading text-[#673ab7]">Подробности и этапы услуги</p>
        <!-- Подробности услуги -->
        <p class="text-gray-400 text-lg max-w-2xl">{{ data[0].fullDesc }}</p>
        
        <!-- Этапы услуги -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div v-for="(stage, index) in data[0].stages" class="bg-[#252525] shadow-[0px_0px_13px_-7px_white] rounded-xl p-6 flex flex-col gap-6 items-center text-center border border-white/10">
                <p class="text-[#673ab7] font-semibold">{{ index+1 }}. {{ stage.title }}</p>
                <p class="text-gray-400 text-lg mt-auto">{{ stage.desc }}</p>
            </div>
        </div>  
    </div>

    <!-- Разделительная линия -->
    <div class="w-full bg-white h-0.5 rounded-xl"></div>

    <div class="flex flex-col items-center text-center gap-6">
        <!-- Призыв к действию -->
        <p class="mainHeading text-[#673ab7]">Ваши желания осуществимы</p>
        <p class="text-gray-400 text-lg">Наши специалисты воплотили в жизнь уже сотни проектов. <br> Обратись к нам!</p>
        <img :src="`https://ovlfsydfwucmkdxpwngo.supabase.co/storage/v1/object/public/images/servicesAction/${data[0].servicesAction}`" alt="" class="rounded-xl aspect-video object-cover w-full lg:w-2/3">

        <!-- Проверка входа -->
        <div class="flex items-center gap-2 self-end" v-if="authenticated && role == 'user'">
            <button @click="startTimer" :disabled="isTimerActive" :class="{'text-white bg-[#673ab7]' : isTimerActive}" class="px-4 py-2 border border-[#673ab7] hover:text-[#673ab7] hover:bg-transparent rounded-full w-fit text-center transition-all duration-500 text-white bg-[#673ab7]">{{ timer > 0 ? `Заявка отправится через ${timer} секунд` : "Отправить заявку" }}</button>
            <button v-if="isTimerActive" @click="cancelTimer" class="px-4 py-2 border border-red-500 text-red-500 rounded-full w-fit text-center transition-all duration-500 hover:text-white hover:bg-red-500">Отмена</button>
        </div>        
        <p v-else class="text-lg text-gray-400 self-end">*Для оформления заявки войдите в аккаунт</p>
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


    /* проверка входа и определение пользователя */
    const { authenticated, id, role } = storeToRefs(useUserStore())
    const { data: users } = await supabase
    .from('users')
    .select('*')
    .eq('id',id.value)


    /* создание сообщений */
    const { showMessage } = useMessagesStore()


    /* функция фидбека */
    const { submitFeedback } = useFeedbackStore()


    /* создание функции на отправку */
    const createBid = async () => {
        let msg = `<b>Новая заявка!</b>\n`
        + `<b>Услуга:</b> ${data[0].title}\n`
        + `<b>Фамилия:</b> ${users[0].surname}\n`
        + `<b>Имя:</b> ${users[0].name}\n`
        + `<b>Отчество:</b> ${users[0].patronymic}\n`
        + `<b>Телефон:</b> ${users[0].phone}\n`
        + `<b>Почта:</b> ${users[0].email}\n`    

        const { data:insertBids, error } = await supabase
        .from('bids')
        .insert([
            { userId: id.value, serviceId: route.params.id }
        ])
        .select()

        if (insertBids) {
            console.log(insertBids)
            await submitFeedback(msg)
        } else {      
            showMessage('Произошла ошибка!', false)
        }
    }


    /* таймер на отправку */
    const timer = ref(0)
    const isTimerActive = ref(false)
    let timerInterval = null

    // старт таймера
    const startTimer = () => {
        if (isTimerActive.value) return;
        timer.value = 5 // Таймер на 5 секунд
        isTimerActive.value = true

        timerInterval = setInterval(() => {
            timer.value -= 1
            if (timer.value <= 0) {
                clearInterval(timerInterval)
                isTimerActive.value = false
                
                createBid() // использование функции отправки
            }
        }, 1000)
    }

    //отмена таймера
    const cancelTimer = () => {
        clearInterval(timerInterval)
        isTimerActive.value = false
        timer.value = 0
    }
</script>