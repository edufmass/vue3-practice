<template>
    <section class="product_section layout_padding">
        <div class="container">
        <div class="product_heading">
            <h2>
            All products
            </h2>
        </div>
        <div class="product_container">

            <div class="box"
                v-for="(clock, i) in inventory"
                :key="clock.id"
            >
                <div class="box-content">
                    <div class="img-box">
                    <img :src="'src/assets/images/'+clock.image" alt="">
                    </div>
                    <div class="detail-box">
                    <div class="text">
                        <h6>
                        {{ clock.name.toUpperCase() }}
                        </h6>
                        <h5>
                        <span>$</span> {{ clock.price }}
                        </h5>
                    </div>
                    <div class="like">
                        <h6>
                        Like
                        </h6>
                        <div class="star_container">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="btn-box">
                    <a href="">
                    Add To Cart {{ i }}
                    </a>
                </div>
            </div>
            
        </div>
        </div>
    </section>
</template>

<script lang="ts">
export default {
    name: 'Products',
    props: ['inventory']
}
</script>