<template>
    <div class="col-12 col-sm-4 col-md-4 col-lg-3 mb-3">
        <div class="card">
            <img :src="product.url" :alt="`img-${product.title}`" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{product.title}}</h5>
                <p class="card-text"><span>${{product.price}}</span></p>
                <button @click="add(product)" class="btn btn-dark btn-outline-warning">Agregar al carro</button>
            </div>
        </div>
    </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
    props: ['product'],
    setup() {
        const store = useStore()
        const add = product => {
            store.dispatch('addToCart', product)
        }
        return {add}
    }
}
</script>