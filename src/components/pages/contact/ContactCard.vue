<template>
    <base-card scrollan="fade-up">
        <div class="contactcard">
            <form class="contactform" @submit.prevent="sendEmail" v-if="!isLoading && !httpError">
                <div class="form-control">
                    <label for="name">NAME</label>
                    <input type="text" v-model="name" :class="nameErr ? 'error' : null" id="name" @focus="clearError('name')"/>
                    <h6 v-if="nameErr">Name can't be empty.</h6>
                </div>
                <div class="form-control">
                    <label for="email">EMAIL</label>
                    <input type="email" v-model="email"  :class="emailErr ? 'error' : null" id="email" @focus="clearError('email')"/>
                    <h6 v-if="emailErr">Email entered is invalid.</h6>
                </div>
                <div class="form-control">
                    <label for="message">MESSAGE</label>
                    <textarea v-model="message"  :class="messageErr ? 'error' : null" id="message" @focus="clearError('message')"></textarea>
                    <h6 v-if="messageErr">Message can't be empty.</h6>
                </div>
                <base-button class="formbutton">Send</base-button>
            </form>
            <div class="spinner" v-else-if="isLoading">
                <base-spinner></base-spinner>
            </div>
            <div class="httperror" v-if="httpError">
                <h3>Something went wrong!</h3>
                <base-button class="formbutton" @click="() => {httpError = false}">Try Again</base-button>
            </div>
            <div class="logo">
                <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path ref="leftarrow" d="M169.6 0H109.8L0 101.5L109.8 203H169.6L64.5 101.5L169.6 0Z"/>
                </svg>
                <svg viewBox="0 0 149 184" class="o" ref="o" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M0 0H148.9V183.3H0V0ZM45.8 137.5H103.1V45.8H45.8V137.5Z" />
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="148.9" height="183.3" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <svg viewBox="0 0 117 204" fill="none" class="slash" xmlns="http://www.w3.org/2000/svg">
                    <path d="M54.3 204L117 0H62.7L0 204H54.3Z" />
                </svg>
                <svg viewBox="0 0 170 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59.8 0H0L105.2 101.5L0 203H59.8L169.6 101.5L59.8 0Z"/>
                </svg>
            </div>
        </div>
    </base-card>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            name: '',
            message: '',
            emailErr: false,
            nameErr: false,
            messageErr: false,
            err: false,
            httpError: false,
            isLoading: false
        }
    },
    methods: {
        sendEmail() {
            if (this.email === '' || !this.email.includes('@')) {
                this.emailErr = true;
                this.err = true;
            } else {
                this.err = false;
            }

            if (this.name === '') {
                this.nameErr = true;
                this.err = true;
            } else {
                this.err = false;
            }

            if (this.message === '') {
                this.messageErr = true;
                this.err = true;
            } else {
                this.err = false;
            }

            if(this.err) {
                return;
            }

            this.isLoading = true;
            const data = {
                email: this.email,
                name: this.name,
                message: this.message
            }
            fetch("https://formspree.io/f/mnqlaplz", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                this.isLoading = false;
                console.log('done',response);
            }).catch(error => {
                this.isLoading = false;
                this.httpError = true;
                console.log(error)
            });
            },
            clearError(val) {
                if(val === 'name') {
                    this.nameErr = false;
                } else if (val === 'email') {
                    this.emailErr = false;
                } else if (val === 'message') {
                    this.messageErr = false;
                }
            }
        }
    }
</script>

<style scoped>
    .contactcard {
        overflow: hidden;
        background-color: var(--main-dark-color);
        width: 100%;
        height: 40rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }

    .logo {
        position: absolute;
        bottom: -10%;
        right: -10%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        transform: translateX(100%);
        animation: logomove .5s .3s linear forwards;

    }

    .logo svg {
        height: 30rem;
        fill: var(--main-very-dark-color);
        transition: all .3s;
    }

    .contactform {
        z-index: 10000;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 40rem;
        padding: 5rem;
    }

    .spinner {
        width: 40rem;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100000;
    }

    .httperror {
        width: 40rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 100000;
    }

    .httperror h3 {
        font-family: var(--main-font);
        color: var(--light-text);
        font-weight: 400;
        margin-bottom: 2rem;
    }

    .form-control {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin-bottom: 1rem;
    }

    .form-control input {
        width: 30rem;
        height: 3rem;
        margin-bottom: 1rem;
        padding-left: .5rem;
        background-color: var(--main-light-color);
        border-radius: 2px;
        color: var(--light-text);
        font-size: 1rem;
        border: none;
        border-bottom: solid 2px var(--accent-color);
        font-family: var(--main-font);
        outline: none;
        z-index: 10000;
        transition: all .3s;
        /*box-shadow: inset 0px 0px 5px 1px rgba(0,0,0,0.30);*/
    }

    .form-control input:focus {
        border-bottom: solid 3px var(--accent-light-color);
        transition: all .3s;
    }

    .form-control textarea {
        resize: none;
        width: 30rem;
        height: 8rem;
        outline: none;
        border-radius: 2px;
        padding: .5rem;
        background-color: var(--main-light-color);
        color: var(--light-text);
        border: none;
        border-bottom: solid 2px var(--accent-color);
        font-family: var(--main-font); 
        font-size: 1rem;
        z-index: 10000;
        transition: all .3s;
        margin-bottom: 1rem;
        /*box-shadow: inset 0px 0px 5px 0px rgba(0,0,0,0.30);*/
    }

    .form-control textarea:focus {
        border-bottom: solid 3px var(--accent-light-color);
        transition: all .3s;
    }

    .form-control label {
        margin-bottom: .5rem;
        font-family: var(--main-font);
        color: var(--light-text);
        font-size: 1.4rem;
        transition: all .3s;
    }

    .form-control:focus-within label {
        color: var(--accent-light-color);
        transition: all .3s;
    }

    .form-control h6 {
        font-family: var(--main-font);
        font-size: .8rem;
        color: #f39c6b;
        font-weight: 400;
    }

    .formbutton {
        margin-top: 1rem;
        width: 12rem !important;
        height: 2.5rem !important;
        font-size: 1.2rem !important;
    }

    .map {
        width: 40rem;
        border-radius: 5px;
        height: 30rem;
        margin-right: 5rem;
        z-index: 10000;
    }

    .error {
        border: 1px solid #f39c6b !important;
    }

</style>