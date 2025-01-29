<template>
    <!-- Редактировани услуги -->
    <FormKit @submit="updateService()" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-6 items-center justify-center">
        <p class="mainHeading w-full">Редактировани услуги</p>
        <FormKit v-model="service.title" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Наименование услуги" name="Наименование услуги" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <div class="flex flex-col gap-6 w-full md:w-2/3 lg:w-1/2 rounded-xl border border-white/10 p-4">
            <div class="flex flex-col gap-2">
                <p>Наименование иконки</p>
                <FormKit v-model="service.icon" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Иконка" name="Иконка" outer-class="w-full" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
            </div>
            <div class="flex items-center gap-2">
                <p>Отображение иконки</p>
                <p>-</p>
                <Icon class="text-3xl text-[#673ab7]" :name="service.icon"/>
            </div>
            <NuxtLink target="_blank" class="w-fit flex flex-col after:w-full after:h-px after:bg-white after:transition-all after:duration-500 hover:after:w-0" to="https://icon-sets.iconify.design/">Список доступных иконок</NuxtLink>
        </div>
        <FormKit :validation="imageValidation('servicesMain')" accept="image/*" @change="(e) => {files.servicesMain = e.target.files[0]; console.log('Выбрано main:', files.servicesMain);}" messages-class="text-[#E9556D] font-Cormorant" type="file" :validation-messages="{required: 'Основное изображение обязательно'}" label="Основное изображение" name="servicesMain" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <div v-if="service.servicesMain" class="relative w-full md:w-2/3 lg:w-1/2 rounded-xl border border-white/15 overflow-hidden">
            <img :src="getImageUrl('servicesMain', service.servicesMain)">
            <button type="button" @click="service.servicesMain = ''" class="absolute top-2 right-2">
                <Icon class="text-3xl text-red-500" name="material-symbols:delete-forever"/>
            </button>
        </div>
        <FormKit :validation="imageValidation('servicesAction')" accept="image/*" @change="(e) => {files.servicesAction = e.target.files[0];  console.log('Выбрано action:', files.servicesAction);}" messages-class="text-[#E9556D] font-Cormorant" type="file" :validation-messages="{required: 'Дополнительное изображение обязательно'}" label="Дополнительное изображение" name="servicesAction" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <div v-if="service.servicesAction" class="relative w-full md:w-2/3 lg:w-1/2 rounded-xl border border-white/15 overflow-hidden">
            <img :src="getImageUrl('servicesAction', service.servicesAction)">
            <button type="button" @click="service.servicesAction = ''" class="absolute top-2 right-2">
                <Icon class="text-3xl text-red-500" name="material-symbols:delete-forever"/>
            </button>
        </div>        
        <FormKit v-model="service.shortDesc" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="textarea" placeholder="Краткое описание" name="Краткое описание" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <FormKit v-model="service.fullDesc" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="textarea" placeholder="Полное описание" name="Полное описание" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <div class="flex gap-4 flex-col w-full md:w-2/3 lg:w-1/2 rounded-xl border border-white/10 p-4" v-for="(advantage, index) in service.advantages" :key="index">
            <div class="flex items-center justify-between gap-4">
                <p>Преимущество № {{ index+1 }}</p>
                <button @click="removeAdvantage(index)" type="button">
                    <Icon class="text-3xl" name="material-symbols:delete-forever-rounded"/>
                </button>
            </div>
            <FormKit :name="`Наименование преимущества ${index+1}`" v-model="service.advantages[index].title" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Наименование преимущества" outer-class="w-full" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
            <FormKit :name="`Описание преимущества  ${index+1}`" v-model="service.advantages[index].description" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="textarea" placeholder="Описание преимущества" outer-class="w-full" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        </div>
        <button @click="addAdvantage()" type="button" class="px-4 py-2 border border-[#673ab7] hover:bg-[#673ab7] hover:text-white rounded-full w-fit text-center transition-all duration-500 text-[#673ab7] bg-transparent">Добавить преимущество</button>
        <div class="flex gap-4 flex-col w-full md:w-2/3 lg:w-1/2 rounded-xl border border-white/10 p-4" v-for="(stage, index) in service.stages" :key="index">
            <div class="flex items-center justify-between gap-4">
                <p>Стадия № {{ index+1 }}</p>
                <button @click="removeStage(index)" type="button">
                    <Icon class="text-3xl" name="material-symbols:delete-forever-rounded"/>
                </button>
            </div>
            <FormKit :name="`Наименование стадии ${index+1}`" v-model="service.stages[index].title" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Наименование стадии" outer-class="w-full" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
            <FormKit :name="`Описание стадии ${index+1}`" v-model="service.stages[index].description" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="textarea" placeholder="Описание стадии" outer-class="w-full" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        </div>
        <button @click="addStage()" type="button" class="px-4 py-2 border border-[#673ab7] hover:bg-[#673ab7] hover:text-white rounded-full w-fit text-center transition-all duration-500 text-[#673ab7] bg-transparent">Добавить стадию</button>
        <button type="submit" class="px-4 py-2 mt-10 border border-[#673ab7] bg-[#673ab7] text-white rounded-full w-fit text-center transition-all duration-500 hover:text-[#673ab7] hover:bg-transparent">Сохранить</button>
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

    const loadService = async () => {
        try {
            const { data, error } = await supabase
            .from('services')
            .select('*')
            .eq('id', route.params.id)
            .single()

            if (error) throw error
            
            service.value = {
            ...data,
            // Инициализируем поля для совместимости
            servicesMain: data.servicesMain || '',
            servicesAction: data.servicesAction || ''
            }

        } catch (error) {
            console.error('Ошибка загрузки:', error)
            showMessage('Не удалось загрузить данные услуги', false)
        }
    }

    // Динамическая валидация для изображений
    const imageValidation = (field) => {
        return !service.value[field] ? 'required' : ''
    }


    
    /* создание формы */
    const files = ref({
        servicesMain: null,
        servicesAction: null
    })
    const service = ref({
        id: '',
        title: '',
        icon: '',
        shortDesc: '',
        fullDesc: '',
        servicesMain: '',
        servicesAction: '',
        advantages: [],
        stages: []
    })


    /* изменение преимуществ и стадий */
    const addItem = (list) => {
        list.value.push({ title: '', description: '' })
    }

    const removeItem = (list, index) => {
        if (list.value.length > 1) {
            list.value.splice(index, 1)
        }
    }

    // Используем универсальные функции для преимуществ и стадий
    const addAdvantage = () => addItem(computed(() => service.value.advantages))
    const removeAdvantage = (index) => removeItem(computed(() => service.value.advantages), index)

    const addStage = () => addItem(computed(() => service.value.stages))
    const removeStage = (index) => removeItem(computed(() => service.value.stages), index)


    /* получение публичного URL */
    const getImageUrl = (folder, filename) => {
        const { data: { publicUrl } } = supabase.storage
            .from('images')
            .getPublicUrl(`${folder}/${filename}`)
        
        return publicUrl
    }


    /* обновление данных */
    const updateService = async () => {
        try {
            const updates = { ...service.value }

            // Обработка изображений
            for (const [key, file] of Object.entries(files.value)) {
                if (file) {
                    // Загрузка нового изображения
                    const extension = file.name.split('.').pop()
                    const newFilename = `${Date.now()}_${key}_${Math.random()
                        .toString(36)
                        .substring(2, 7)}.${extension}`

                    const { error: uploadError } = await supabase.storage
                        .from('images')
                        .upload(`${key}/${newFilename}`, file)

                    if (uploadError) throw uploadError

                    updates[key] = newFilename
                } else {
                    // Сохраняем существующее значение
                    updates[key] = service.value[key]
                }
            }

            // Обновляем запись
            const { error } = await supabase
                .from('services')
                .update(updates)
                .eq('id', route.params.id)

            if (error) throw error

            showMessage('Данные успешно обновлены!', true)
            await loadService()

        } catch (error) {
            console.error('Ошибка обновления:', error)
            showMessage(error.message || 'Ошибка при обновлении данных', false)
        }
    }


    /* инициализация */
    onMounted(() => {
        loadService()
    })
</script>