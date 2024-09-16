<template>
  <div
    class="shadow-sm cursor-pointer px-4 py-2 mb-2 rounded-md font-medium mx-1 select-none capitalize"
    :class="
      isActive
        ? 'bg-blue-600 text-white'
        : 'bg-white hover:bg-blue-200 transition-colors duration-200'
    "
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
