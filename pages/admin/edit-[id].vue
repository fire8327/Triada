<template>
    <!-- Форма редактирование товара -->
    <FormKit @submit="updateServices" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-6 items-center justify-center">
        <p class="text-3xl font-Cormorant uppercase tracking-widest font-semibold">Редактирование товара</p>
        <FormKit v-model="services.title" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Наименование услуги" name="Наименование услуги" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <FormKit v-model="services.icon" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Иконка" name="Иконка" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <FormKit v-model="services.shortDesc" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="textarea" placeholder="Краткое описание" name="Краткое описание" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <FormKit v-model="services.fullDesc" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="textarea" placeholder="Полное описание" name="Полное описание" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <div class="flex gap-4 flex-col md:w-2/3 lg:w-1/2 rounded-xl border border-white/10 p-4" v-for="(advantage, index) in services.advantages" :key="index">
            <p>Преимущество № {{ index+1 }}</p>
            <FormKit v-model="services.advantages[index].title" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Наименование преимущества" outer-class="w-full" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
            <FormKit v-model="services.advantages[index].description" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="textarea" placeholder="Описание преимущества" outer-class="w-full" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        </div>
        <button type="submit" class="px-4 py-2 border border-[#673ab7] bg-[#673ab7] text-white rounded-full w-[160px] text-center transition-all duration-500 hover:text-[#673ab7] hover:bg-transparent">Отправить</button>
    </FormKit>
</template>

<script setup>
    /* название и язык страницы */
    useSeoMeta({
        title: 'Редактирование услуги',
        lang: 'ru'
	})


    /* создание сообщений */
    const { showMessage } = useMessagesStore()


    /* подключение БД и роут */
    const supabase = useSupabaseClient() 
    const route = useRoute()

    const { data, error } = await supabase
    .from('services')
    .select('*')   
    .eq('id', route.params.id)

    
    /* создание формы */
    const services = ref({
        title: data[0].title,
        icon: data[0].icon,
        shortDesc: data[0].shortDesc,
        fullDesc: data[0].fullDesc,
        advantages: ref(data[0].advantages)
    }) 


    /* обновление данных */
    const updateServices = async () => {    
        const { data, error } = await supabase
        .from('services')
        .update(services.value)
        .eq('id', route.params.id)
           
        if(error) {
            console.log(error)
            showMessage("Произошла ошибка!", false)   
        } else {            
            showMessage("Данные обновлены!", true)   
        }
    }
</script>