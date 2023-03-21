<template>
  <NuxtLayout>
    <div class=" bg-white p-10 rounded-2xl">
      <form @submit.prevent="searchHandler">
        <div class=" mb-4">
          <p>
            <label for="search-code">輸入代碼查詢</label>
          </p>
          <input pattern="^\d{5}$" class="valid:ring-lime-200 invalid:ring-red-200 appearance-none ring ring-primary p-3 rounded-xl w-full outline-none" id="search-code" type="search" v-model="couponCode" maxlength="5" minlength="1" required>
        </div>
        <p class=" text-center">
          <button :disabled="loading" class=" disabled:bg-gray-400 bg-emerald-300 p-4 rounded-3xl hover:opacity-80 transition-opacity" type="submit">
            <span v-if="loading"><i class='bx bx-loader bx-spin' ></i></span>
            <span v-else>送出</span>
          </button>
        </p>
      </form>
      <div v-if="data" class=" pt-10">
        <table class="border-collapse table-auto w-full text-sm mb-10">
          <thead>
            <tr>
              <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">名稱</th>
              <th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">內容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">標題</td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{{ data.Coupon[0].Title }}</td>
            </tr>
            <tr>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">代碼</td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"><code>{{ data.Coupon[0].CouponCode }}</code></td>
            </tr>
            <tr>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">有效期限</td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{{ data.Coupon[0].EndDate }}</td>
            </tr>
            <tr>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">可否外送</td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{{ data.Coupon[0].Delivery === 'False' ? '否' : '是' }}</td>
            </tr>
          </tbody>
        </table>
        <p class=" text-center">
          <button @click="reset" class="bg-emerald-300 p-4 rounded-3xl hover:opacity-80 transition-opacity" type="button">清除</button>
        </p>
      </div>
    </div>
</NuxtLayout>
</template>

<script setup>
const couponCode = ref('22391')

const {
  loading,
  query,
  data,
  reset
} = useQueryApi()

const searchHandler = () => {
  const regexp = /^\d{5}$/
  const IsMatch = regexp.test(couponCode.value)
  if (IsMatch) {
    query({ code: couponCode.value })
  }
}
</script>