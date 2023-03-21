export default function () {
  const loading = ref(false)
  const data = ref(null)
  const fetchData = async ({ code }) => {
    data.value = null
    loading.value = true
    const fetch_response = await fetch('/api/coupon', {
      method: 'POST',
      body: JSON.stringify({
        code: code
      })
    })
    const res = await fetch_response.json()
    data.value = res
    loading.value = false
  }

  const reset = () => {
    data.value = null
  }

  return {
    loading,
    data,
    query: fetchData,
    reset
  }
}