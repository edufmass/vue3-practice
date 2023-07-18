<template>
    <section class="product_section layout_padding">
        <div class="container">
        <div class="product_heading">
            <h2>
            Top Sale Watches
            </h2>
        </div>
        <div class="product_container">

            <ProductCard
                v-for="(clock) in inventory.slice(0,3)"
                :key="clock.id"
                :clock="clock"
                :addToCart="addToCart"
            />
            
        </div>
        </div>
    </section>
</template>

<script lang="ts">
import ProductCard from '@/components/ProductCard.vue';

export default {
    name: 'Home',
    components: {
        ProductCard
    },
    props: ['inventory', 'addToCart']
}
</script>