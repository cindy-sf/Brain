<template>
    <div id="home" @scroll="handleScroll" v-bind:class="[openFace ? openFace : closeFace]">
        <img src="@/assets/crown.png" alt="Couronne" id="couronne">
        <img src="@/assets/part1.png" alt="Img1" id="one">
        <img src="@/assets/part2.png" alt="Img2" id="two">
        <img src="@/assets/part3.png" alt="Img3" id="three">
        <img src="@/assets/part4.png" alt="Img4" id="four">
        <img src="@/assets/part55.png" alt="Img5" id="five">
    </div>
</template>

<script>
export default {
    data() {
        return {
            openFace: false,
            closeFace: 'closeFace',
        };
    },

    methods: {
        handleScroll(event) {
        if (window.scrollY > 5) {
            this.openFace = "openFace";
        } 
        else {
            this.openFace = false;
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

img {
    position: fixed;
    transition: all .9s ease-in;
    right: 150px;
        &#couronne {
            width: 350px;
            height: 170px;
            top: -25px;
            object-fit: contain;
            right: 300px;
    }
}

.closeFace{
    #one {
        top: 100px;
        z-index: 5;
    }

    #two {
        top: 145px;
        z-index: 4;
    }
    #three {
        top: 198px;
        z-index: 3;
    }
    #four {
        top: 290px;
        z-index: 2;
    }
    #five {
        top: 440px;
        z-index: 1;
    }
}
.openFace {
    #one {
        top: 5px;
        z-index: 5;
    }
    #two {
        top: 105px;
        z-index: 4;
    }
    #three {
        top: 205px;
        z-index: 3;
    }
    #four {
        top: 355px;
        z-index: 2;
    }
    #five {
        top: 550px;
        z-index: 1;
    }
    #couronne{
        opacity: 0;
    }
}
</style>
