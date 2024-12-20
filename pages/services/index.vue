<template>
    <!-- Список всех услуг -->
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Наши услуги</p>
        <p class="text-gray-400 text-lg">
            В <span class="animate-text text-transparent !bg-clip-text font-medium">Triada</span> мы предлагаем полный спектр услуг в сфере маркетинга, разработки и дизайна, чтобы помочь вашему бизнесу выделиться на фоне конкурентов. Мы стремимся к созданию уникальных решений, которые идеально подходят под ваши цели.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink v-for="service in data" :to="`/services/service-${service.id}`" class="flex flex-col gap-4 bg-[#252525] rounded-xl p-6 border border-white/10 shadow-[0px_0px_13px_-7px_white] transition-all duration-500 hover:shadow-none">
                <div class="w-16 h-16 flex items-center justify-center p-2 bg-[#673ab7] rounded-full">
                    <Icon class="text-3xl" :name="service.icon"/>
                </div>
                <span class="font-medium">{{ service.title }}</span>
                <span class="text-sm text-gray-400">{{ service.shortDesc }}</span>
            </NuxtLink>
        </div>
    </div>

    <!-- Шаги исполнения услуги -->
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 rounded-xl bg-[#252525] p-6 border border-white/10 shadow-[0px_0px_13px_-7px_white]">
        <div class="text-center">
            <h3 class="font-medium mb-2">Шаг 1</h3>
            <p class="text-sm text-gray-400">Мы изучаем вашу задачу и предлагаем оптимальные решения.</p>
        </div>
        <div class="text-center">
            <h3 class="font-medium mb-2">Шаг 2</h3>
            <p class="text-sm text-gray-400">Составляем план работы и согласуем его с вами.</p>
        </div>
        <div class="text-center">
            <h3 class="font-medium mb-2">Шаг 3</h3>
            <p class="text-sm text-gray-400">Реализуем проект с соблюдением сроков и качества.</p>
        </div>
        <div class="text-center">
            <h3 class="font-medium mb-2">Шаг 4</h3>
            <p class="text-sm text-gray-400">Передаём готовый проект и оказываем поддержку.</p>
        </div>
    </div>
</template>

<script setup>
    /* название и язык страницы */
    useSeoMeta({
        title: 'Страница услуг',
        lang: 'ru'
	})


    /* подключение БД */
    const supabase = useSupabaseClient()

    const { data, error } = await supabase
    .from('services')
    .select('*')   
    .order('id', { ascending: true })
</script>