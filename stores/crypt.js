
// Функция для шифрования пароля
async function encryptPassword(password, secretKey) {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secretKey),
    { name: 'AES-GCM' },
    false,
    ['encrypt']
  )
  const iv = crypto.getRandomValues(new Uint8Array(12)) // Случайный вектор инициализации
  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    encoder.encode(password)
  )

  // Преобразуем зашифрованные данные в строку Base64
  const encryptedString = btoa(String.fromCharCode(...new Uint8Array(encrypted)))
  const ivString = btoa(String.fromCharCode(...iv))

  // Возвращаем строку в формате "iv:encryptedData"
  return `${ivString}:${encryptedString}`
}

// Функция для дешифровки пароля
async function decryptPassword(encryptedPassword, secretKey) {
  const encoder = new TextEncoder()
  const [ivString, encryptedString] = encryptedPassword.split(':')

  // Преобразуем строки Base64 обратно в Uint8Array
  const iv = new Uint8Array(atob(ivString).split('').map(char => char.charCodeAt(0)))
  const encrypted = new Uint8Array(atob(encryptedString).split('').map(char => char.charCodeAt(0)))

  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secretKey),
    { name: 'AES-GCM' },
    false,
    ['decrypt']
  )

  // Расшифровываем данные
  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    key,
    encrypted
  )

  // Преобразуем расшифрованные данные в строку
  return new TextDecoder().decode(decrypted)
}

// Создаём хранилище Pinia
export const useCryptStore = defineStore('crypt', () => {
  const config = useRuntimeConfig()
  const secretKey = ref(config.public.secretKey) // Ключ шифрования

 // Проверка длины ключа
 const encoder = new TextEncoder()
 const keyBytes = encoder.encode(secretKey.value)
 console.log("Длина ключа в байтах:", keyBytes.length) // Должно быть 16

  // Шифрование пароля
  const encrypt = (password) => {
    return encryptPassword(password, secretKey.value) // Возвращаем Promise
  }

  // Дешифровка пароля
  const decrypt = (encryptedPassword) => {
    return decryptPassword(encryptedPassword, secretKey.value) // Возвращаем Promise
  }

  return {
    encrypt,
    decrypt,
  }
})