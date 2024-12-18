<template>
    <!-- <Swiper
      class="w-full"
      :space-between="20"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 3500 }"
      :pagination="{ clickable: true }"
      modules="[Autoplay, Pagination]"
    >
      <SwiperSlide class="flex flex-col gap-4 p-4 rounded-xl border border-white/10 bg-[#252525] w-full">
        <p class="text-[#673ab7] font-semibold">Иванов Иван</p>
        <p class="font-Cormorant">Услуга: Разработка веб-сайтов</p>
        <p class="text-gray-400 text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </SwiperSlide>
      <SwiperSlide class="flex flex-col gap-4 p-4 rounded-xl border border-white/10 bg-[#252525] w-full">
        <p class="text-[#673ab7] font-semibold">Иванов Иван</p>
        <p class="font-Cormorant">Услуга: Разработка веб-сайтов</p>
        <p class="text-gray-400 text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </SwiperSlide>
    </Swiper> -->
    <FormKit type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-6">
        <FormKit validation="required" messages-class="text-[#E9556D] font-Cormorant" type="select" :options="['Услуга 1','Услуга 2','Услуга 3']" placeholder="Выберите услугу" name="Услуга" outer-class="w-full" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <FormKit validation="required" messages-class="text-[#E9556D] font-Cormorant" type="textarea" placeholder="Текст отзыва" name="Текст отзыва" outer-class="w-full" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <button type="submit" class="px-4 py-2 border border-[#673ab7] bg-[#673ab7] text-white rounded-full w-[160px] text-center transition-all duration-500 hover:text-[#673ab7] hover:bg-transparent mx-auto">Отправить</button>
    </FormKit>
    <p class="text-gray-400 text-lg">* Войдите в аккаунт чтобы оставить отзыв.</p>
</template>

<script setup>
  /* название и язык страницы */
  useSeoMeta({
        title: 'Отзывы',
        lang: 'ru'
	})
</script>