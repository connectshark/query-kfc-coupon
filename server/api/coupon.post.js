export default defineEventHandler( async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const { code } = await readBody(event)
  const form = new URLSearchParams({
    data: `{"Method":"QueryCoupon","CouponCode":"${code}","_XMLTable":"Coupon;Coupon_Product","_APIMethod":"GetData"}`
  })
  const fetch_response = await fetch(runtimeConfig.apiBase, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: form
  })
  const res = await fetch_response.json()
  return res
})