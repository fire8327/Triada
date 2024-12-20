<template>
    <!-- Форма обратной связи -->
    <FormKit @submit="sendFeedback" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-6 items-center justify-center">
        <p class="text-3xl font-Cormorant uppercase tracking-widest font-semibold">Завка на обратную связь</p>
        <FormKit v-model="feedbackForm.name" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Имя" name="Имя" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <FormKit v-model="feedbackForm.phone" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Телефон" name="Телефон" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <FormKit v-model="feedbackForm.title" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="select" :options="['Вопрос по услугам','Предложение о сотрудничестве','Сообщение об ошибке','Жалоба','Благодарность','Другое']" placeholder="Тема зявки" name="Тема зявки" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <FormKit v-model="feedbackForm.desc" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="textarea" placeholder="Описание заявки" name="Описание заявки" outer-class="w-full md:w-2/3 lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <button type="submit" class="px-4 py-2 border border-[#673ab7] bg-[#673ab7] text-white rounded-full w-[160px] text-center transition-all duration-500 hover:text-[#673ab7] hover:bg-transparent">Отправить</button>
    </FormKit>
</template>

<script setup>
    /* название и язык страницы */
    useSeoMeta({
        title: 'Обратная связь',
        lang: 'ru'
	})


    /* создание формы */
    const feedbackForm = ref({
        name: "",
        phone: "",
        title: "",
        desc: ""
    })


    /* функция отправки */
    const { submitFeedback } = useFeedbackStore()

    const sendFeedback = async () => {
        let message = `<b>Заявка на обратную связь!</b> \n` +
        `<b>Имя:</b> ${feedbackForm.value.name} \n` +
        `<b>Телефон:</b> ${feedbackForm.value.phone} \n` +
        `<b>Тема:</b> ${feedbackForm.value.title} \n` +
        `<b>Описание:</b> ${feedbackForm.value.desc}`
        await submitFeedback(message, feedbackForm.value)
    }
</script>