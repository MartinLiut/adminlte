<template>
    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100">
                <div class="login100-form-title" style="background-image: url(images/bg-01.jpg);">
                    <span class="login100-form-title-1">
                        INGRESO
                    </span>
                </div>
                
                <transition name="fade">
                    <router-view>
                        <Login/>
                    </router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Login    from './Login.vue';
    import Register from './Register.vue';

    export default {
        name: 'Main',
        data() {
            return {

            }
        },
        components: {
            Login,
            Register
        },
        mounted() {

        }
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
</style>
