export default function () {
  const loading = ref(false)
  const data = ref(null)
  const err = ref(false)
  const fetchData = async ({ code }) => {
    data.value = null
    loading.value = true
    err.value = false
    const fetch_response = await fetch('/api/coupon', {
      method: 'POST',
      body: JSON.stringify({
        code: code
      })
    })
    const res = await fetch_response.json()
    if (res.Coupon.length > 0) {
      data.value = res
    } else {
      err.value = true
    }
    loading.value = false
  }

  const reset = () => {
    data.value = null
  }

  return {
    loading,
    data,
    query: fetchData,
    reset,
    err
  }
}