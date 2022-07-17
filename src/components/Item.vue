<template>
    <tr>
        <th scope=""><img :src="item.url" :alt="`img-${item.title}`" class="cardT"></th>
        <td class="fs-6">{{item.title}}</td>
        <td class="p-0">
            <span class="btn-amount" @click="decrement(item.id)" >
                <i class="bi bi-dash"></i>
            </span>
            <span class="p-1 fs-5">{{item.amount}}</span>
            <span class="btn-amount" @click="increment(item.id)">
                <i class="bi bi-plus"></i>
            </span>
        </td>
    </tr>   
</template>

<script>
import {useStore} from 'vuex'
export default {
    props: ['item'],
    setup() {
        const store = useStore()
        const increment = (id) => {store.commit('increment', id)}
        const decrement = (id) => {store.commit('decrement', id)}
        return {increment, decrement}
    }
}
</script>

<style scoped>
* {
    box-sizing: content-box;
}
.cardT {
    height: 100px;
}

</style>