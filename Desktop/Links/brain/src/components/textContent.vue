<template>
    <section id="page1">
        <div>
            <h3>Comming Soon...</h3>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section#page1 {
    margin-top: 70vh;
    width: 500px;
    height: 500px;
    background-color: #00a9c8;
    position: relative;
    float: left;
}
section#page1 div {
    position: absolute;
    width: 500px;
    height: 500px;
    background-color: #fff;
    border: 1px solid;
    top: -20px;
    left: 20px;
}
section#page1 div h3 {
    text-align: center;
    line-height: 500px;
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
    left: 95px;
}
</style>
