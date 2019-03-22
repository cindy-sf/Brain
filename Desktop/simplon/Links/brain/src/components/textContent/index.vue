<template>
    <section id="page1">
        <div>
            <h2>{{ text.id ? `0${text.id}` : " " }}</h2>
            <h3>{{ text.title || "Coming Soon ..." }}</h3>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            text: {},
        }
    },

    updated() {
        console.log(this.text);
    },

    created() {
        this.$ebus.$on("text-content", payload => {
            this.text = payload;
        })
    },
}
</script>


<style lang="scss" scoped>
section#page1 {
    margin-top: 70vh;
    width: 500px;
    height: 500px;
    background-color: #00a9c8;
    position: relative;
    float: left;
    transition: background-color .5s ease-out;
    margin-left: 10px;
}
section#page1 div {
    position: absolute;
    width: 500px;
    height: 500px;
    background-color: #fff;
    border: 1px solid;
    top: -20px;
    left: 20px;
    transition: all .3s ease-out;
    &:hover {
        cursor: pointer;
        // left: 0;
        // top: 0;
    }
}
section#page1 div h3 {
    text-align: center;
    line-height: 375px;
    letter-spacing: 7px;
    font-size: 25px;
    font-weight: 300;
}
section#page1 div h3:before {
    width: 50px;
    height: 3px;
    content: '';
    background-color: #000;
    display: block;
    position: absolute;
    top: 280px;
    left: 105px;
}
h2 {
    font-family: 'Inconsolata', monospace;
    padding: 10px;
    font-size: 30px;
    font-weight: 400;
}

</style>
