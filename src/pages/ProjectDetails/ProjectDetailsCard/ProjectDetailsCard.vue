<template>
    <img-modal :name="name" :first="firstmodal" :second="secondmodal" @quit-imgs="quitimgs"/>
    <base-card class="allowoverflow marginb detailscardwidth">
        <div class="detailscontainer" :class="{'inverted': invert}">
            <div class="projectimgs" :class="{'invertedimg': invert}" @click="openimgs">
                <img :src="require('../../../assets/projectspics/' + stringLink)"/>
            </div>
            <div class="projecttext">
                <h2 class="projecttitle"><span>{{ firstLetter }}</span>{{ rest }}</h2>
                <ul class="projectfeatures">
                    <slot>
                    </slot>
                </ul>  
            </div>
        </div>
    </base-card>
</template>

<script>
import ImgModal from '../ImgModal/ImgModal.vue';
export default {
    props: {
        invert: Boolean, 
        title: String,
        name: String
    },
    components: {
        ImgModal
    },
    data() {
        return {
            pagenum: 1,
            pagenuminvert: 4,
            firstmodal: false,
            secondmodal: false
        }
    },
    mounted() {
        this.turnpage();
    },
    methods: {
        turnpage() {
            this.theInterval = setInterval(() => {
                if(!this.invert) {
                    if(this.pagenum < 3) {
                        this.pagenum = this.pagenum + 1;
                    } else if (this.pagenum === 3) {
                        this.pagenum = 1;
                    }
                } else {
                    if(this.pagenuminvert < 6) {
                        this.pagenuminvert = this.pagenuminvert + 1;
                    } else if (this.pagenuminvert === 6) {
                        this.pagenuminvert = 4;
                    }
                }
                
            }, 5000);
        },
        next() {
            clearInterval(this.theInterval);
            if(this.pagenum < 3) {
                this.pagenum = this.pagenum + 1;
            } else if (this.pagenum === 3) {
                this.pagenum = 1;
            }
            this.turnpage();
        },
        back() {
            clearInterval(this.theInterval);
            if(this.pagenum > 1) {
                this.pagenum = this.pagenum - 1;
            } else if (this.pagenum === 1) {
                this.pagenum = 3;
            }
            this.turnpage();
        },
        openimgs() {
            console.log('hello');
            if(!this.invert) {
                this.firstmodal = true;
            } else {
                this.secondmodal = true;
            }
        },
        quitimgs() {
            this.firstmodal = false;
            this.secondmodal = false;
        }
    },
    computed: {
        stringLink() {
            if(!this.invert) {
                return this.namenospace + '/' + this.pagenum.toString() + '.png';
            } else {
                return this.namenospace + '/' + this.pagenuminvert.toString() + '.png';
            }
        },
        namenospace() {
            return this.name.replaceAll(' ', '');
        },
        firstLetter() {
            return this.title.substring(0,1);
        },
        rest() {
            return this.title.substring(1);
        }
    }
}
</script>

<style scoped>
    .detailscontainer {
        width: 112rem;
        height: 30rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--main-dark-color);
        background: var(--gradient);
        border-radius: 5px;
        overflow: hidden;
    }

    .marginb {
        margin-bottom: 1rem;
    }

    .inverted {
        flex-direction: row-reverse;
    }

    .projectimgs {
        height: 100%;
        width: 50%;
        background-color: var(--main-dark-color);
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        transform-origin: 50% 50%;
        position: relative;
        overflow: hidden;
        border-bottom-right-radius: 2rem;
        border-bottom-left-radius: 0rem;
        /*transform: rotate(-2deg);*/
    }

    .invertedimg {
        border-bottom-right-radius: 0rem;
        border-bottom-left-radius: 2rem;
    }

    .projectimgs img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        cursor: zoom-in;
    }

    .projecttext {
        width: 50%;
        display: flex;
        padding: 2rem;
        flex-direction: column;
        align-items: center;
        justify-content: center
    }

    .allowoverflow {
        overflow: visible !important;
    }

    .projecttitle {
        font-size: 2.1rem;
        text-transform: uppercase;
        font-weight: 500;
        color: var(--light-text);
        font-family: var(--main-font);
    }

    .projecttitle span {
        color: var(--accent-color);
    }

    .projectfeatures {
        padding: 1rem 5rem; 
    }

    .projectfeatures li {
        list-style: none;
        font-family: var(--main-font);
        font-size: 1.5rem;
        margin-bottom: .8rem;
        color: var(--light-text);
        position: relative;
    }

    .projectfeatures li::before {
        content: '';
        position: absolute;
        top: .8rem;
        left: -1rem;
        width: .3rem;
        height: .3rem;
        border-radius: 50%;
        background-color: var(--accent-color);
    }

    @media only screen and (max-width: 1919px) { 
        .detailscardwidth {
            width: 100%;
        }

        .detailscontainer {
            width: 100%;
        }
    }

    @media only screen and (max-width: 1200px) { 
        .projecttitle {
            font-size: 2rem;
        }

        .detailscontainer {
            height: auto;
            padding: 2rem;
        }  

        .projectimgs {
            height: 25rem;
            width: 25rem;
        } 

        .projectfeatures {
            padding: 1rem 2rem; 
        }        
    }

    @media only screen and (max-width: 750px) {   
        .projecttext {
            width: 100%;
        }

        .inverted {
            flex-direction: column-reverse;
        }

        .detailscontainer {
            flex-direction: column-reverse;
        }
    }

    @media only screen and (max-width: 430px) { 
        .projectimgs {
            height: 20rem;
            width: 20rem;
        } 
    }
</style>