<template>
    <section class="main-button" role="group">
        <Button 
            v-for="(item, index) in [1,2,3,4]" :key="index" 
            @show-text-content="changeBtnClass(index)" 
            :class="{ active: activeBtn === `btn${index}` }"
        />
    </section>
</template>

<script>
import textContent from '@/api/textContent';
import Button from '@/components/Button/index';

export default {
      components: {
        Button,
    },

    data() {
        return {
            activeBtn: '',
            text: {},
        }
    },

    methods: {
        changeBtnClass(i) {
            this.activeBtn = `btn${i}`;
            this.showText(i);
            this.changeSectionBgc(i);
        },

        showText(index) {
            this.text = textContent[index];
            this.text.id = textContent[index].id;
        },

        changeSectionBgc(index) {
            let elem = document.getElementById('page1');
            elem.style.backgroundColor = textContent[index].color;
        }
    },

     updated() {
        this.$ebus.$emit('text-content', this.text);
    },
}
</script>

<style lang="scss" scoped>
.main-button {
    height: 100vh;
    position: relative;
    width: 50%;
    float: right;
    margin-top: 50vh;
}
.main-button button {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0);
    z-index: 5;
    animation: animate 3s linear infinite;
    background-color: #fff;
}
.main-button button:hover {
    cursor: pointer;
    animation: none;
    background-color: #000;
}
.main-button button:first-child {
    top: 160px;
    left: 315px;
}

.main-button button:nth-child(2) {
    top: 270px;
    left: 250px;
}

.main-button button:nth-child(3) {
    top: 430px;
    left: 315px;
}
.main-button button:last-child {
    bottom: 115px;
    left: 260px;
}
button.active {
    background-color: #000;
    animation: none;
}
@keyframes animate{
    0%{
      box-shadow: 0 0 0 0 rgba(0, 0, 0, .7), 0 0 0 0 rgba(0, 0, 0, .7)
    }
    40%{
      box-shadow: 0 0 0 20px rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, .7)
    }
    80%{
      box-shadow: 0 0 0 20px rgba(0, 0, 0, 0), 0 0 0 10px rgba(0, 0, 0, 0)
    }
    100%{
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 10px rgba(0, 0, 0, 0)
    }
}
</style>