<template>
  <div class="hero_area">
    
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">

          <router-link to="/" class="navbar-brand">
            <span>
              Vue Shop Practice
            </span>
          </router-link>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  ">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link"> About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products" class="nav-link">Products</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/past-orders" class="nav-link">Past orders</router-link>
              </li>
            </ul>

            <div class="user_optio_box">
              <a @click="toggleSideBar" >
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <span>({{ totalQuantity }})</span>
              </a>
            </div>
          </div>
        
        </nav>
      </div>
    </header>


    <!-- SLIDER -->
    <section class="slider_section ">
      <div class="slider_bg_box">
        <img src="src/assets/images/slider-bg.jpg" alt="">
      </div>
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-7">
                  <div class="detail-box">
                    <h1>
                      Stylish Watches
                    </h1>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                    </p>
                    <div class="btn-box">
                      <a href="#" class="btn1">
                        Contact Us
                      </a>
                      <a href="#" class="btn2">
                        About Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container ">
              <div class="row">
                <div class="col-md-7">
                  <div class="detail-box">
                    <h1>
                      Stylish Watches
                    </h1>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                    </p>
                    <div class="btn-box">
                      <a href="#" class="btn1">
                        Contact Us
                      </a>
                      <a href="#" class="btn2">
                        About Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol class="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
        </ol>
      </div>

    </section>
    <!-- SLIDER-->
  </div>

  <main>
    <router-view
      :inventory="inventory"
      :addToCart="addToCart"
    />
  </main>

  <SideBar
    v-if="showSidebar"
    :toggle="toggleSideBar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
  />
</template>

<script lang="ts">
import SideBar from './components/SideBar.vue'
import product from './products.json'

export default {
  components: {
    SideBar
  },
  data () {
    return {
      showSidebar: false,
      inventory: product,
      cart: {}
    }
  },
  computed: {
    totalQuantity () {
      return Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
  },
  methods: {
    addToCart (name: string) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += 1
    },
    toggleSideBar() {
      this.showSidebar = !this.showSidebar
    },
    removeItem (name: string | number) {
      delete this.cart[name]
    }
  }
}
</script>