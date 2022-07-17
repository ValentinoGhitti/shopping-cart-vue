<template>
  <div class="container-fluid">
    <div class="row" id="nav">
      <Nav :class="{'bg-dark': scrollPosition > 500}"></Nav>
      <Main id="welcome" class="p-0 "></Main>
      <Section></Section>
      <div class="shop container mt-5">
        <h2 id="catalogue">¡Nuestra variedad!</h2>
        <div class="container mt-5" >
          <swiper
            :slidesPerView="1"
            :loop="false"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide class="d-flex">
              <Card 
                v-for="product of products" :key="product.id"
                :product="product"
              />
            </swiper-slide>
            <swiper-slide></swiper-slide><swiper-slide></swiper-slide><swiper-slide></swiper-slide>
          </swiper>
        </div>
      </div>
      <Cart/>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onMounted } from '@vue/runtime-core'
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper";

import Card from './components/Card.vue'
import Cart from './components/Cart.vue'
import Main from './components/Main.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import Section from './components/Section.vue'
export default {
  name: 'App',
  components: {
    Card,
    Cart,
    Swiper,
    SwiperSlide,
    Main,
    Nav,
    Footer,
    Section
  },
  data() {
    return {
      scrollPosition: null
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll),
    this.$swal.fire({
      title: 'Bienvenido a Convide Rutero',
      text: "¿Sos mayor de edad?",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#DC3545',
      cancelButtonText: 'Soy menor de edad',
      confirmButtonText: 'Soy mayor de edad',
      confirmButtonColor: '#146c43',
      footer: 'Para prevenir la venta de alcohol a menores de edad, te pedimos contestar con responsabilidad. Beber con moderación. Prohibida la venta a menores de 18 años.',
      backdrop: `
        rgba(0, 0, 0, 0.882)
        left top
        no-repeat
      `
    }).then((result) => {
      if (result.dismiss ) {
        location.href = "https://www.youtube.com/watch?v=ZAAjm4IJhFY&ab_channel=CervezaQuilmes"
      }
    })
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch('fetchData')
    })
    const products = computed(() => store.state.products)
    return {products, modules: [Pagination, Navigation]}
  } 
}
</script>

<style>
#app {
  text-align: center;
}
.shop {
  background-color: #F5F5F5;
}

</style>