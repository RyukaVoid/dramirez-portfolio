<template>
    <div class="navbar">
        <div class="nav-wrapper">
            <a href="#" class="navbar-brand">Dr.</a>
            <nav>
                <div @click="toggleNavigation" class="navbar-toggler">
                    <fa :icon="['fas', 'bars']" />
                </div>
                <div class="nav-list" :data-show="showNavigation">
                    <a class="nav-link" href="#">Inicio</a>
                    <a class="nav-link" href="#">Sobre Mi</a>
                    <a class="nav-link" href="#">Proyectos</a>
                    <a class="nav-link" href="#">Resumen</a>
                    <a class="nav-link" href="#">Blogs</a>
                    <a class="nav-link" href="#">
                        <fa size="xl" :icon="['fab', 'github']"></fa>
                    </a>
                </div>
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faBars, faGithub);

const showNavigation = ref(false);

const toggleNavigation = () => {
    showNavigation.value = !showNavigation.value;
};
</script>

<style scoped lang="scss">
@import '../assets/scss/variables.scss';

.navbar {
    background-color: $navbar-bg-color;
    font-size: $font-size;
    box-shadow: $navbar-box-shadow;
    height: $navbar-height;
    color: $font-color;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    height: $navbar-height;
    a{
        color: $font-color;
        &:hover {
            color: $quaternary-color;
        }
    }

    .navbar-toggler {
        display: none;
        font-size: 1.5rem;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
            transform: scale(1.2);
        }
    }

    .navbar-brand {
        font-weight: bold;
        font-size: 1.5rem;
        padding: 13px 10px 13px 10px;
        transition: all 0.3s ease;
        text-shadow: $navbar-text-shadow;

        &:hover {
            transform: scale(1.3);
        }
    }

    .nav-wrapper {
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        max-width: $max-width;
        padding: 0px 25px;
    }

    .nav-link {
        display: inline-block;
        padding: 13px 10px 13px 10px;
        font-weight: bold;
        margin-left: 1em;

        transition: all 0.2s ease;
        text-shadow: $navbar-text-shadow;

    }
}

@media screen and (max-width: 768px) {
    .navbar {
        .nav-list[data-show='false'] {
            display: none !important;
        }

        .nav-list[data-show='true'] {
            background-color: $primary-color;
            width: 100%;
            padding: 15px 0;
            display: flex !important;
            flex-direction: column;
            align-items: center;
            position: fixed;
            justify-content: center;
            top: 0;
            left: 0;
            height: 100vh;
            filter: brightness(0.9);
            z-index: -1;
            
            a {
                font-size: 1.3rem;
                margin: 0.5em 0;
            }
        }
    }

    .navbar-toggler {
        display: block !important;
    }
}
</style>
