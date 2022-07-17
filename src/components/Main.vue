<template>
    <div class="content">
        <div class="d-flex justify-content-start">
            <div class="col-sm-2"></div>            
            <div class="col-sm-3">
                <h2 class="fs-1">Convide Rutero</h2>
                <span>Nos proponemos la evolución constante de nuestros conceptos y constituir este espacio en la mejor opción para descubrir el infinito universo de la cerveza, premiar las buenas relaciones personales y destacar año tras año la imagen de las empresas clientes.</span>
            </div>               
            <div class="col-sm-7"></div>         
        </div>
    </div>
</template>

<script>
export default {
name: 'Main'
}
</script>
<style scoped>
#welcome {
    background-image: url(../../public/img/bg-uno.jpg);
    background-position: center;
    background-size: cover;
    height: 100vh;
}
.content {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    color: white;
}

@media screen and (max-width: 374px) {
    .span {
        font-size: 1px;
    }
}

</style>