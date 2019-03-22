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
import cutFaceImg from '@/components/cutFace/index.vue';
import mainContent from '@/components/mainContent/index';
import textContent from '@/components/textContent/index';
import mainButton from '@/components/mainButton/index';
import topButton from '@/components/topButton/index';

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