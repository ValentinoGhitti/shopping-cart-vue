<template>
    <div >
        <h2 class="mt-5 mb-5">Tu carrito de compras</h2>
        <div class="couple d-flex justify-content-center">
            <div v-if="Object.keys(items).length === 0" class="d-flex flex-column">
                <div>
                    <img class="pictureList" src="../../public/img/list.png" alt="">
                </div>
                <div class="">
                    <h6 class="text-center">Tu carrito está vacío.</h6>
                    <h6 class="">Añade productos para verlos aquí.</h6>
                </div>
                
            </div>
            <div v-else>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cantidad</th>
                        </tr>
                    </thead>
                    <tbody id="items">
                        <Item 
                            v-for="item in items"
                            :key="item.id"
                            :item="item"
                        />
                    </tbody>
                </table>
                <Aside class="bg-dark" ></Aside>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import {useStore} from 'vuex'
import Item from './Item.vue'
import Aside from './Aside.vue'
export default {
    components: {
    Item,
    Aside
    },
    setup() {
        const store = useStore()
        const items = computed(() => store.state.cart)
        return {items}
    }
}
</script>
<style scoped>
.pictureList {
    height: 300px;
    width: 300px;
}

@media screen and (max-width: 425px) {
    .couple {
        display:flex;
        flex-direction: column;
    }
}


</style>