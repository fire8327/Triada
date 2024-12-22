<template>
  <!-- Слайдер -->
    <ClientOnly>
      <swiper-container ref="containerRef" class="w-full" :loop="true" :autoplay="{ delay: 2500 }" v-if="reviews">
        <swiper-slide class="flex flex-col gap-4 p-4 rounded-xl border border-white/10 bg-[#252525] w-full" v-for="review in reviews">
          <p class="text-[#673ab7] font-semibold">{{ review.users.surname }} {{ review.users.name }}</p>
          <p class="font-Cormorant">Услуга: {{ review.services.title }}</p>
          <p class="text-gray-400 text-lg">{{ review.text }}</p>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
    <!-- Форма добавления отзыва (если пользователь вошёл в аккаунт) -->
    <FormKit @submit="addReview" v-if="authenticated && role == 'user'" type="form" :actions="false" messages-class="hidden" form-class="flex flex-col gap-6">
        <FormKit v-model="reviewForm.id" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="select" :options="serviceOptions" placeholder="Выберите услугу" name="Услуга" outer-class="w-full" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <FormKit v-model="reviewForm.text" validation="required" messages-class="text-[#E9556D] font-Cormorant" type="textarea" placeholder="Текст отзыва" name="Текст отзыва" outer-class="w-full" input-class="focus:outline-none px-4 py-2 bg-transparent rounded-xl border border-white/15 w-full transition-all duration-500 focus:border-white focus:bg-[#191919]"/>
        <button type="submit" class="px-4 py-2 border border-[#673ab7] bg-[#673ab7] text-white rounded-full w-[160px] text-center transition-all duration-500 hover:text-[#673ab7] hover:bg-transparent mx-auto">Отправить</button>
    </FormKit>
    <p v-else class="text-gray-400 text-lg">* Войдите в аккаунт чтобы оставить отзыв.</p>
</template>

<script setup>
  /* название и язык страницы */
  useSeoMeta({
    title: 'Отзывы',
    lang: 'ru'
	})


  /* подключение БД */
  const supabase = useSupabaseClient()

  const { data:services, error:serviceError } = await supabase
  .from('services')
  .select('*')   
  .order('id', { ascending: true })
  

  /* создание формы отзыва */
  const reviewForm = ref({
    id: "",
    text: ""
  })


  /* Массив для опций услуг */
  const serviceOptions = ref([])

  // Преобразование данных для FormKit
  serviceOptions.value = services.map(service => ({
    value: service.id,
    label: service.title
  }))


  /* отправка отзывов */
  const addReview = async() => {
    const { data, error } = await supabase
    .from('reviews')
    .insert([
      { userId: id.value, serviceId: reviewForm.value.id, text: reviewForm.value.text }
    ])
    .select()

    if (data) {
      console.log(data)
      reviewForm.value.id = ""
      reviewForm.value.text = ""
      showMessage('Успешная отправка!', true)
    } else {      
      showMessage('Произошла ошибка!', false)
    }
  }


  /* проверка входа */
  const { authenticated, id, role } = storeToRefs(useUserStore())


  /* создание сообщений */
  const { showMessage } = useMessagesStore()


  /* слайдер */
  const containerRef = ref(null)
  const swiper = useSwiper(containerRef, {
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        320: {
          slidesPerView: 1,        
        },
        768: {
          slidesPerView: 2,         
        },
        1024: {
          slidesPerView: 3,         
        },
        1280: {
          slidesPerView: 4,         
        }
    }
  })

  onMounted(() => {
    console.log(swiper.instance)
  })


  /* получение отзывов */
  const { data:reviews, error:reviewsError } = await supabase
  .from('reviews')
  .select('*, users(*), services(*)') 
</script>