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
                <base-button class="formbutton">Submit</base-button>
            </form>
            <div class="spinner" v-else-if="isLoading">
                <base-spinner></base-spinner>
            </div>
            <div class="httperror" v-if="httpError">
                <h3>Something went wrong!</h3>
                <base-button class="formbutton" @click="() => {httpError = false}">Try Again</base-button>
            </div>
            <div class="technology">
                <a class="gita" href="https://github.com/or1995" target="_blank">
                    <svg class="gitlogo" width="2500" height="2432" viewBox="0 0 256 249" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g><path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"/><path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"/></g></svg>
                    <svg class="git" xmlns="http://www.w3.org/2000/svg"  viewBox="-0.122 175.062 480.244 129.875"><g><path d="M92.375 230.65H52.019a1.887 1.887 0 0 0-1.886 1.886v19.731a1.89 1.89 0 0 0 1.886 1.889h15.743v24.513s-3.535 1.206-13.308 1.206c-11.53 0-27.637-4.214-27.637-39.632 0-35.425 16.772-40.087 32.518-40.087 13.63 0 19.502 2.401 23.238 3.556 1.174.36 2.26-.808 2.26-1.851l4.502-19.063c0-.487-.165-1.075-.721-1.474-1.517-1.082-10.774-6.262-34.16-6.262-26.941 0-54.576 11.463-54.576 66.562 0 55.103 31.64 63.313 58.302 63.313 22.076 0 35.468-9.434 35.468-9.434.552-.306.612-1.077.612-1.431v-61.537c0-1.04-.844-1.885-1.885-1.885M300.354 181.664a1.88 1.88 0 0 0-1.873-1.896h-22.724a1.889 1.889 0 0 0-1.882 1.896l.006 43.913h-35.419v-43.913a1.882 1.882 0 0 0-1.875-1.896h-22.722a1.887 1.887 0 0 0-1.877 1.896v118.904c0 1.048.843 1.901 1.877 1.901h22.722c1.039 0 1.875-.854 1.875-1.901v-50.86h35.419l-.062 50.86c0 1.048.844 1.901 1.883 1.901h22.777c1.041 0 1.873-.854 1.875-1.901V181.664M135.254 197.268c0-8.183-6.56-14.795-14.653-14.795-8.085 0-14.65 6.612-14.65 14.795 0 8.173 6.565 14.802 14.65 14.802 8.093 0 14.653-6.629 14.653-14.802M133.629 275.486V220.6a1.89 1.89 0 0 0-1.88-1.895h-22.651c-1.039 0-1.969 1.072-1.969 2.115v78.634c0 2.312 1.44 2.998 3.304 2.998h20.408c2.239 0 2.788-1.1 2.788-3.034v-23.932M386.71 218.884h-22.549c-1.034 0-1.876.852-1.876 1.901v58.302s-5.729 4.192-13.859 4.192c-8.13 0-10.287-3.689-10.287-11.65v-50.844c0-1.049-.841-1.901-1.875-1.901h-22.886c-1.032 0-1.879.852-1.879 1.901v54.693c0 23.646 13.179 29.431 31.31 29.431 14.873 0 26.864-8.216 26.864-8.216s.571 4.329.829 4.843c.259.512.932 1.029 1.659 1.029l14.56-.064c1.032 0 1.879-.854 1.879-1.898l-.008-79.817c0-1.05-.843-1.902-1.882-1.902M439.445 283.207c-7.821-.238-13.126-3.788-13.126-3.788v-37.653s5.233-3.208 11.654-3.782c8.12-.727 15.944 1.726 15.944 21.095.001 20.426-3.53 24.457-14.472 24.128zm8.894-66.993c-12.807 0-21.518 5.714-21.518 5.714v-40.263c0-1.05-.839-1.897-1.875-1.897h-22.787a1.887 1.887 0 0 0-1.878 1.897v118.903c0 1.048.842 1.901 1.881 1.901h15.811c.711 0 1.25-.367 1.648-1.009.393-.639.96-5.482.96-5.482s9.318 8.83 26.957 8.83c20.708 0 32.584-10.504 32.584-47.154 0-36.651-18.967-41.44-31.783-41.44M198.936 218.695h-17.045l-.026-22.519c0-.852-.439-1.278-1.424-1.278h-23.228c-.903 0-1.388.398-1.388 1.265v23.271s-11.64 2.809-12.427 3.037a1.886 1.886 0 0 0-1.361 1.812v14.623c0 1.052.84 1.898 1.879 1.898h11.909v35.178c0 26.13 18.328 28.697 30.696 28.697 5.651 0 12.411-1.814 13.527-2.228.675-.248 1.067-.947 1.067-1.705l.019-16.086c0-1.05-.886-1.897-1.884-1.897-.993 0-3.534.404-6.15.404-8.372 0-11.209-3.893-11.209-8.932l-.001-33.432h17.046c1.039 0 1.88-.847 1.88-1.898v-18.317a1.884 1.884 0 0 0-1.88-1.893"/></g></svg>
                </a>
                <a class="linkeda" href="https://www.linkedin.com/in/omar-ali-webdevelopment" target="_blank">
                    <svg class="linked" xmlns="http://www.w3.org/2000/svg"  viewBox="1.786 1.783 287.865 76.248"><path d="M213.882 7.245c0-3.015 2.508-5.462 5.6-5.462h64.568c3.093 0 5.6 2.447 5.6 5.462V72.57c0 3.016-2.507 5.461-5.6 5.461h-64.568c-3.092 0-5.6-2.445-5.6-5.46V7.244z" id="linkedcon"/><path d="M1.785 65.652h31.62V55.27H13.23V15.665H1.785v49.987zM49.414 65.652v-34.43H37.97v34.43h11.444zm-5.721-39.13c3.99 0 6.474-2.644 6.474-5.95-.074-3.378-2.484-5.947-6.398-5.947-3.915 0-6.475 2.57-6.475 5.947 0 3.306 2.484 5.95 6.324 5.95h.075zM54.727 65.652h11.444V46.424c0-1.029.074-2.058.377-2.791.826-2.056 2.709-4.186 5.871-4.186 4.142 0 5.799 3.158 5.799 7.784v18.42H89.66V45.91c0-10.576-5.646-15.497-13.176-15.497-6.173 0-8.884 3.451-10.39 5.802h.077v-4.993H54.727c.151 3.231 0 34.43 0 34.43zM105.805 15.665H94.361v49.987h11.444V54.489l2.86-3.601 8.96 14.764h14.078l-15.056-21.373 13.174-14.54h-13.776s-9.411 13.008-10.24 14.552V15.665z" id="linkedtext"/><path d="M162.306 51.29c.151-.884.377-2.58.377-4.498 0-8.9-4.518-17.936-16.413-17.936-12.724 0-18.597 10.063-18.597 19.19 0 11.288 7.153 18.337 19.65 18.337 4.97 0 9.561-.732 13.327-2.275l-1.506-7.558c-3.088 1.024-6.25 1.537-10.164 1.537-5.345 0-10.012-2.195-10.389-6.871l23.715.072v.002zm-23.79-7.742c.301-2.938 2.26-7.273 7.153-7.273 5.194 0 6.4 4.628 6.4 7.273h-13.552zM190.93 15.665v17.304h-.151c-1.657-2.422-5.12-4.038-9.71-4.038-8.81 0-16.564 7.05-16.49 19.094 0 11.164 7.003 18.435 15.735 18.435 4.744 0 9.26-2.058 11.52-6.024h.225l.453 5.216h10.163c-.15-2.424-.302-6.61-.302-10.723V15.664h-11.444zm0 34.05c0 .88-.075 1.763-.227 2.495-.675 3.16-3.386 5.361-6.699 5.361-4.742 0-7.83-3.818-7.83-9.84 0-5.654 2.637-10.208 7.906-10.208 3.538 0 6.022 2.423 6.7 5.433.15.663.15 1.398.15 2.058v4.7z" id="linkedtext"/><path d="M236.85 65.61V31.18h-11.444v34.43h11.445zm-5.72-39.13c3.99 0 6.474-2.644 6.474-5.948-.075-3.379-2.484-5.949-6.398-5.949-3.917 0-6.475 2.57-6.475 5.949 0 3.304 2.483 5.948 6.324 5.948h.074zM243.184 65.61h11.443V46.385c0-1.028.075-2.058.377-2.792.827-2.057 2.71-4.186 5.872-4.186 4.14 0 5.797 3.157 5.797 7.786V65.61h11.443V45.869c0-10.575-5.645-15.496-13.174-15.496-6.173 0-8.884 3.45-10.39 5.8h.076v-4.992h-11.443c.149 3.23-.001 34.43-.001 34.43z" id="linkedlogo"/></svg>
                </a>
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
        left: -5%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        animation: logomove .5s .3s linear forwards;

    }

    .logo svg {
        
        height: 30rem;
        fill: var(--main-very-dark-color);
        transition: all .3s;
    }

    .o {
        height: 27rem !important;
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
        border-radius: 2px;
        width: 35rem;
        height: 3rem;
        margin-bottom: 1rem;
        padding-left: .5rem;
        background-color: var(--main-light-color);
        color: var(--light-text);
        font-size: 1rem;
        border: none;
        border-bottom: solid 2px var(--accent-color);
        font-family: var(--main-font);
        outline: none;
        z-index: 10000;
        transition: all .3s;
    }

    .form-control input:focus {
        border-bottom: solid 3px var(--accent-light-color);
        transition: all .3s;
    }

    .form-control textarea {
        resize: none;
        width: 35rem;
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
        color: var(--alert-color);
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
        border: 1px solid var(--alert-color) !important;
    }

    .technology {
        position: absolute;
        top: 8rem;
        right: 1rem;
        width: 50%;
        transform: rotate(43deg);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        z-index: 100000;
    }

    #linkedtext {
        fill: var(--main-very-dark-color);
        transition: all .3s;
        animation: lightformlinkone 3s infinite;
    }

    #linkedcon {
        fill: var(--main-very-dark-color);
        transition: all .3s;
        animation: lightformlinktwo 3s infinite;
    }

    #linkedlogo {
        fill: var(--main-dark-color);
        transition: all .3s;
    }

    .git {
        height: 5rem;
        width: auto;
        margin-bottom: 2rem;
        fill: var(--main-very-dark-color);
        transition: all .3s;
        animation: lightformlinkone 3s .5s infinite;

    }

    .gitlogo {
        height: 5rem;
        width: auto;
        margin-bottom: 2rem;
        fill: var(--main-very-dark-color);
        margin-right: .7rem;
        transition: all .3s;
        animation: lightformlinktwo 3s .5s infinite;
    }

    .linked {
        height: 6rem;
        width: auto;
    }

    .gita:hover .git {
        fill: var(--light-text);
        animation: none;
        transition: all .3s;
    }

    .gita:hover .gitlogo {
        fill: var(--accent-color);
        animation: none;
        transition: all .3s;
    }

    .linkeda:hover #linkedtext {
        fill: var(--light-text);
        animation: none;
        transition: all .3s;
    }

    .linkeda:hover #linkedcon {
        fill: var(--accent-color);
        animation: none;
        transition: all .3s;
    }

    .linkeda:hover #linkedlogo {
        fill: var(--main-dark-color);
        animation: none;
        transition: all .3s;
    }

</style>

<style>
    @keyframes lightformlinkone {
        0% {
            fill: var(--main-very-dark-color);
        }
        10% {
            fill: var(--light-text);
        }
        20% {
            fill: var(--light-text);
        }
        30% {
            fill: var(--main-very-dark-color);
        }
        100% {
            fill: var(--main-very-dark-color);
        }
    }

    @keyframes lightformlinktwo {
        0% {
            fill: var(--main-very-dark-color);
        }
        10% {
            fill: var(--accent-color);
        }
        20% {
            fill: var(--accent-color);
        }
        30% {
            fill: var(--main-very-dark-color);
        }
        100% {
            fill: var(--main-very-dark-color);
        }
    }
</style>