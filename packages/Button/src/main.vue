<template>
  <div class="zg-button">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'ZgButton',
  props: {
    text: {
      type: String,
      default: '按钮'
    }
  }
}
</script>

