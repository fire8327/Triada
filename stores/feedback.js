export const useFeedbackStore = defineStore("feedback", () => {
    const { showMessage } = useMessagesStore()

    const clearForm = (submitForm) => {
        Object.keys(submitForm).forEach(key => {
          submitForm[key] = ""
        })
    }
    
    const submitFeedback = async (message, form = null) => {
        const token = "7878421990:AAEoXGs1IIo_ew-vKYWGaL161q4-SC4q1kM"
        const chatId = "-4779290378"
        const URL = `https://api.telegram.org/bot${token}/sendMessage`

        const {data, error} = await useFetch(URL, {
            body:{
                'chat_id': chatId,
                'parse_mode': 'html',
                'text': message
            },
            method:'post'
        })

        if (error.value) return showMessage("При отправке произошла ошибка!", false)
            console.log(message)
        showMessage("Успешная отправка!", true)

        if(form) {
            clearForm(form)
        }
    }

    return { submitFeedback, clearForm }
})