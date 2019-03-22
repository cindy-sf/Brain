<template>
    <main>
        <h1>Change the world</h1>
        <p>
            Become The King ! <br>
            Lorem ipsum, dolor sit amet doloribus consectetur adipisicing elit. <br>
            Don't loose your mind...
        </p>
        <button><a href="#page1">Learn More</a></button>
    </main>
</template>

<style lang="scss">

main {
    width: 100%;
    height: 50vh;
    background-color: #f8f8f8;
    padding-left: 150px;
    overflow-x: hidden;
}
main h1 {
    margin-top: 100px;
}
main p {
    margin-top: 30px;
    width: 300px;
    font-weight: 300;
}
main button {
    margin-top: 20px;
    width: 150px;
    height: 50px;
    background-color: transparent;
    border: 1px solid;
    transition: .3s ease-in;
}
main button:hover {
    background-color: #000000;
    
}
main button a {
    line-height: 50px;
    display: block;
}
main button:hover a {
    color: #fff;
}

</style>
