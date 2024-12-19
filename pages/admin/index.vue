<template>
    <div class="flex flex-col gap-6">
        <p class="mainHeading">Редактирование заявок</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="service in services" class="flex flex-col gap-4 bg-[#252525] rounded-xl p-6 border border-white/10 shadow-[0px_0px_13px_-7px_white] transition-all duration-500 hover:shadow-none">
                <NuxtLink :to="`/admin/edit-${service.id}`" class="self-end">
                    <Icon class="text-3xl text-amber-500" name="material-symbols:edit-outline"/>
                </NuxtLink>
                <div class="w-16 h-16 flex items-center justify-center p-2 bg-[#673ab7] rounded-full">
                    <Icon class="text-3xl" :name="service.icon"/>
                </div>
                <span class="font-medium">{{ service.title }}</span>
                <span class="text-sm text-gray-400">{{ service.shortDesc }}</span>
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
</script>