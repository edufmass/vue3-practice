<template>
    <div class="box">
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
            <a @click="addToCart(clock.name)" >
            Add To Cart
            </a>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ProductCard',
    props: ['clock', 'addToCart']
}
</script>