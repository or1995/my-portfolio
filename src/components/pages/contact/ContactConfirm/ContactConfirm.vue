<template>
    <teleport to="body" >
        <transition name="info">
            <div v-if="modalshow" class="confirmcont">
                <div class="confirmmodal">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script>
export default ({
    props: {
        show: Boolean
    },
    data() {
        return {
            modalshow: false
        }
    },
    watch: {
        show: function(newVal) {
            this.modalshow = newVal;
            setTimeout(() => {
                this.modalshow = false;
            }, 4000);
        }
    }
})
</script>

<style scoped>
    .confirmcont {
        position: fixed;
        top: 1rem;
        left: 0;
        z-index: 1000000000;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .confirmmodal {
        background-color: var(--accent-color);
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.38);
    }

    .info-enter-active {
        animation: infoani .3s ease-in;
    }

    .info-leave-active {
        animation: infoani .3s ease-in reverse;
    }
</style>

<style>
    @keyframes infoani {
        0% {
            opacity: 0;
            transform: translateY(-1rem);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
