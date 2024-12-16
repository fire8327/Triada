<template>
    <FormKit type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-6 items-center justify-center">
        <p class="text-3xl font-Cormorant uppercase tracking-widest font-semibold">Вход</p>
        <div class="flex items-center lg:items-start gap-4 max-lg:flex-col md:w-2/3 lg:w-1/2">
            <FormKit validation="required" messages-class="text-[#E9556D] font-Cormorant" type="text" placeholder="Логин" name="Логин" outer-class="w-full lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
            <FormKit validation="required" messages-class="text-[#E9556D] font-Cormorant" type="password" placeholder="······" name="Пароль" outer-class="w-full lg:w-1/2" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        </div>
        <button type="submit" class="px-4 py-2 bg-[#673ab7] text-white rounded-full w-[160px] text-center">Вход</button>
        <div class="flex items-center justify-center gap-4 w-full md:w-2/3 lg:w-1/2 my-10">
            <div class="w-1/3 h-px bg-white"></div>  
            <p class="font-semibold font-Cormorant tracking-widest text-white">или</p>
            <div class="w-1/3 h-px bg-white"></div>  
        </div>
        <NuxtLink to="/reg" class="mx-auto px-4 py-2 border border-[#673ab7] text-[#673ab7] rounded-full w-[160px] text-center">Регистрация</NuxtLink>
    </FormKit>
</template>