<template>
    <div class="row p-5 text-light">
        <div class="d-flex">
            <th colspan="2">Total de los productos</th>
        </div>
        <hr>
        <div class="d-flex justify-content-between">
            <span>Cantidad</span>
            <td>{{totalAmount}}</td>
        </div>
        <div class="d-flex mt-5 justify-content-between">
            <span>Subtotal</span>
            <td>${{totalPrice}}</td>
        </div>
        <div class="d-flex justify-content-between">
            <span class="d-flex mt-4 mb-5 text-danger" style="cursor: pointer;" @click="clear">
                Vaciar todo <i class="bi bi-trash3"></i>
            </span>
        </div>
        <td>
            <button class="btn btn-success mt-5 mb-5 btn-lg" @click="buyBtn">
                Comprar
                <i class="bi bi-cart2"></i>
            </button>
        </td>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import {useStore} from 'vuex'
export default {
    name: 'Aside',
    methods: {
        buyBtn() {
            this.$swal.fire({
                title: '¿Desea realizar su compra?',
                showCancelButton: true,
                cancelButtonColor: '#DC3545',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Comprar',
                confirmButtonColor: '#146c43',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal.fire({
                        imageUrl: 'https://massets.appsflyer.com/wp-content/uploads/2016/08/26140231/Hiring-cheers.gif',
                        title: '¡Su compra ha sido realizada con exito!',
                        imageHeight: 100,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.clear();
                }
            })
        }
    },
    setup() {
        const store = useStore() 
        const totalAmount = computed(() => store.getters.totalAmount)
        const totalPrice = computed(() => store.getters.totalPrice)
        const clear = () => {store.commit('clearCart')}
        return {totalAmount, totalPrice, clear}
    }
}
</script>