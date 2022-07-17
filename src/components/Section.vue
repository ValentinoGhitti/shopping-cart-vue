<template>
    <section>
        <div class="container" id="about">
            <div class="d-lg-flex d-md-flex justify-content-evenly">
                <div class="col-sm-5">
                    <img class="img-fluid" src="../../public/img/section-dos.png" alt="img">
                </div>
                <div class="content col-sm-5">
                    <div>
                        <h2>Sobre nosotros</h2>
                    </div>
                    <span>
                        <strong>Convide Rutero</strong>, autentica variedad de la cerveza noble, cree que la fuerza del crecimiento esta en las raíces y 
                        en el esfuerzo. Consideramos a nuestros clientes, las raíces y pretendemos distinguirnos por su fidelidad y confianza. Sumamos el esfuerzo y elegimos el camino largo, cuidando cada detalle hasta lograr los mejores frutos.
                    </span>
                </div>
            </div>
        </div>
        <div class="container" id="trajectory">
            <div class="d-flex flex-wrap-reverse d-lg-flex d-md-flex justify-content-evenly" >
                <div class="content-dos col-sm-5">
                    <div>
                        <h2>Trayectoria</h2>
                    </div>
                    <span>
                        En más de 18 años de recorrido <strong>Convide Rutero</strong> cosechó confianza y en muchos casos amistad de Clientes que comparten en gran medida nuestro camino y el modo de transitarlo. 
                        Agradecemos a los clientes que nos eligieron y nuestro compromiso para con ellos es infinito.
                    </span>
                </div>
                <div class="col-sm-5">
                    <img class="img-fluid" src="../../public/img/section.png" alt="img">
                </div>                
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Section'
}
</script>

<style scoped>
    .content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: right;
    }
    .content-dos {
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: left;        
    }
@media screen and (max-width: 425px) {
    .content , .content-dos {
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;    
    }
}
</style>