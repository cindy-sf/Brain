<template>
  <div>
    <cutFaceImg></cutFaceImg>
    <mainContent></mainContent>
    <mainButton></mainButton>
    <textContent></textContent>
    <topButton></topButton>
  </div>
</template>

<script lang="js">
import { Component, Vue } from 'vue-property-decorator';
import cutFaceImg from '@/components/cutFace.vue';
import mainContent from '@/components/mainContent.vue';
import textContent from '@/components/textContent.vue';
import mainButton from '@/components/mainButton.vue';
import topButton from '@/components/topButton.vue';

@Component({
  components: {
    cutFaceImg,
    mainContent,
    textContent,
    mainButton,
    topButton,
  },
})
export default class Home extends Vue {}
</script>