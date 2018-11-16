<template>
    <section class="main-button" role="group">
        <button @click="activeBtn = 'btn1'" :class="{active: activeBtn === 'btn1' }"></button>
        <button @click="activeBtn = 'btn2'" :class="{active: activeBtn === 'btn2' }"></button>
        <button @click="activeBtn = 'btn3'" :class="{active: activeBtn === 'btn3' }"></button>
        <button @click="activeBtn = 'btn4'" :class="{active: activeBtn === 'btn4' }"></button>
    </section>
</template>

<script>
export default {
    data() {
        return {
            activeBtn: '',
        }
    }
    
}
</script>

<style lang="scss" scoped>
.main-button {
    height: 100vh;
    position: relative;
    width: 50%;
    float: right;
    // background: red; 
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
    /* transition: .5s ease-in; */
}
.main-button button:hover {
    cursor: pointer;
    animation: none;
    background-color: #000;
    /* width: 15px; */
    /* height: 15px; */
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
