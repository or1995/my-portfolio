<template>
    <base-card class="allowoverflow marginb detailscardwidth">
        <div class="detailscontainer" :class="{'inverted': invert}">
            <div class="projectimgs" :class="{'invertedimg': invert}">
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
export default {
    props: {
        invert: Boolean, 
        title: String,
        name: String
    },
    data() {
        return {
            pagenum: 1,
            pagenuminvert: 4
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
        }
    },
    computed: {
        stringLink() {
            if(!this.invert) {
                return this.namenospace + '/' + this.pagenum.toString() + '.jpg';
            } else {
                return this.namenospace + '/' + this.pagenuminvert.toString() + '.jpg';
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
        padding: 0 4rem;
    }

    .marginb {
        margin-bottom: 2rem;
    }

    .inverted {
        flex-direction: row-reverse;
    }

    .projectimgs {
        height: 35rem;
        width: 50%;
        border: solid 3px var(--accent-color);
        background-color: var(--main-dark-color);
        box-shadow: 0 4px 8px rgba(0,0,0,0.38);
        transform-origin: 50% 50%;
        position: relative;
        overflow: hidden;
        /*transform: rotate(-2deg);*/
    }

    .invertedimg {
        /*transform: rotate(2deg) !important;*/
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