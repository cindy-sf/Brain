<template>
    <button id="bouton" @scroll="handleScroll" v-bind:class="[isVisible ? isVisible : notVisible]">
        <a href="#home"><i class="fas fa-arrow-up"></i></a>
    </button>
</template>

<script>
export default {
    data() {
        return {
            isVisible: false,
            notVisible: '',
        };
    },

    methods: {
        handleScroll(event) {
        if (window.scrollY > 100) {
            this.isVisible = "isVisible";
        } else {
            this.isVisible = false;
        }
    }
  },

  created() {
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }

}
</script>

<style lang="scss" scoped>
button#bouton {
    position:fixed;
    z-index:2;
    right: 20px;
    bottom: 0;
    transform:translateY(-50%);
    width: 50px; 
    height: 50px;
    line-height: 50px;
    background:transparent;
    border-radius: 50%;
    border: 1px solid #000;
    opacity:0;
    transition: all 0.4s linear;   
}
#bouton a {
    line-height: 50px;
    display: block;
}
#bouton:hover {
    background-color: #000000;
}
#bouton:hover i {
    color: #fff;
}
#bouton.isVisible {
  opacity:1;
}
.not-visible {
    cursor: default;
}
</style>
