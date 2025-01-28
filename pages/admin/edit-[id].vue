<template>
    <!-- Форма редактирование товара -->
    <FormKit @submit="updateServices" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-6 items-center justify-center">
        <p class="text-3xl font-Cormorant uppercase tracking-widest font-semibold">Редактирование товара</p>
        <FormKit v-model="services.title" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Наименование услуги" name="Наименование услуги" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <div class="flex flex-col gap-6 w-full md:w-2/3 lg:w-1/2 rounded-xl border border-white/10 p-4">
            <div class="flex flex-col gap-2">
                <p>Наименование иконки</p>
                <FormKit v-model="services.icon" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Иконка" name="Иконка" outer-class="w-full" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
            </div>
            <div class="flex items-center gap-2">
                <p>Отображение иконки</p>
                <p>-</p>
                <Icon class="text-3xl text-[#673ab7]" :name="services.icon"/>
            </div>
            <NuxtLink target="_blank" class="w-fit flex flex-col after:w-full after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-0" to="https://icon-sets.iconify.design/">Список доступных иконок</NuxtLink>
        </div>
        <FormKit v-model="services.shortDesc" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="textarea" placeholder="Краткое описание" name="Краткое описание" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <FormKit v-model="services.fullDesc" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="textarea" placeholder="Полное описание" name="Полное описание" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <div class="flex gap-4 flex-col w-full md:w-2/3 lg:w-1/2 rounded-xl border border-white/10 p-4" v-for="(advantage, index) in services.advantages" :key="index">
            <div class="flex items-center justify-between gap-4">
                <p>Преимущество № {{ index+1 }}</p>
                <button @click="removeAdvantage(index)" type="button">
                    <Icon class="text-3xl" name="material-symbols:delete-forever-rounded"/>
                </button>
            </div>
            <FormKit v-model="services.advantages[index].title" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Наименование преимущества" outer-class="w-full" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
            <FormKit v-model="services.advantages[index].description" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="textarea" placeholder="Описание преимущества" outer-class="w-full" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        </div>
        <div class="flex items-center justify-between gap-4">
            <button @click="addAdvantage()" type="button" class="px-4 py-2 border border-[#673ab7] hover:bg-[#673ab7] hover:text-white rounded-full w-fit text-center transition-all duration-500 text-[#673ab7] bg-transparent">Добавить преимущество</button>
            <button type="submit" class="px-4 py-2 border border-[#673ab7] bg-[#673ab7] text-white rounded-full w-fit text-center transition-all duration-500 hover:text-[#673ab7] hover:bg-transparent">Сохранить</button>
        </div>
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


    /* изменение преимуществ */
    const addAdvantage = () => {
        services.value.advantages.push({ title: '', description: '' })
    }

    const removeAdvantage = (index) => {
        services.value.advantages.splice(index, 1)
    }


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