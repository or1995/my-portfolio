<template>
    <div v-if="first || second" class="backdrop">
        <button class="exit" @click="exit"><span>&#215;</span></button>
        <button class="left" @click="leftimg"><span>&#10094;</span></button>
        <img v-if="first" :src="require('../../../assets/projectspics/' + stringLink)"/>
        <img v-if="second" :src="require('../../../assets/projectspics/' + stringLink)"/>
        <button class="right" @click="rightimg"><span>&#10095;</span></button>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        first: Boolean,
        second: Boolean
    },
    emits: ['quit-imgs'],
    data() {
        return {
            imgnum: 1,
            imgnuminvert: 4
        }
    },
    computed: {
        stringLink() {
            if(this.first) {
                return this.namenospace + '/' + this.imgnum.toString() + '.png';
            } else {
                return this.namenospace + '/' + this.imgnuminvert.toString() + '.png';
            }
        },
        namenospace() {
            return this.name.replaceAll(' ', '');
        },
    },
    methods: {
        exit() {
            this.$emit('quit-imgs');
        },
        leftimg() {
            if(this.first) {
                if(this.imgnum === 1) {
                    this.imgnum = 3;
                } else {
                    this.imgnum = this.imgnum - 1
                }
            } else {
                if(this.imgnuminvert === 4) {
                    this.imgnuminvert = 6;
                } else {
                    this.imgnuminvert = this.imgnuminvert - 1
                }                
            }
        },
        rightimg() {
            if(this.first) {
                if(this.imgnum === 3) {
                    this.imgnum = 1;
                } else {
                    this.imgnum = this.imgnum + 1
                }
            } else {
                if(this.imgnuminvert === 6) {
                    this.imgnuminvert = 4;
                } else {
                    this.imgnuminvert = this.imgnuminvert + 1
                }               
            }
        }
    }
}
</script>

<style scoped>
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgb(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 100000000;
    }

    .backdrop img {
        height: 80%;
        width: auto;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.38);
    }

    .exit {
        position: absolute;
        top: 1rem;
        right: 2rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .exit span {
        font-family: var(--main-font);
        font-size: 3rem;
        color: var(--accent-color);
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }

    .left {
        margin-left: 2rem;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .left span {
        font-size: 3rem;
        color: var(--accent-color);
        opacity: .2;
        transition: all .3s;
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }

    .left:hover span {
        opacity: .9;
        transition: all .3s
    }

    .right {
        margin-right: 2rem;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .right span {
        font-size: 3rem;
        color: var(--accent-color);
        opacity: .2;
        transition: all .3s;
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }

    .right:hover span {
        opacity: .9;
        transition: all .3s
    }

     @media only screen and (max-width: 700px) { 
        .backdrop img {
            height: auto;
            width: 70%;
        } 
    }

</style>