<template>
    <div id="app" class="animated fadeIn">
        <nav-bar 
        :userInput="input" 
        @changedValue="input = $event" 
        @submitValue="searchBooks" 
        @inputCleared="input = $event">
        </nav-bar>
        <loading-bar :loading="loading"></loading-bar>
        <title-section :input="input" :isTyping="isTyping"></title-section>
        <book-results :input='input' :books="books"></book-results>
        <user-helper></user-helper>
        <connectivity></connectivity>
    </div>
</template>

<script>
    import NavBar from './components/NavBar'
    import LoadingBar from './components/LoadingBar'
    import UserHelper from './components/UserHelper'
    import TitleSection from './components/TitleSection'
    import BookResults from './components/BookResults'
    import Connectivity from './components/Connectivity'

    export default {
        name: 'App',
        components: {
            'nav-bar': NavBar,
            'loading-bar': LoadingBar,
            'user-helper': UserHelper,
            'title-section': TitleSection,
            'book-results': BookResults,
            'connectivity': Connectivity
        },
        props: ['userInput'],
        data: function() {
            return {
                input: '',
                books: [],
                loading: false,
                isTyping: false,
                title: ''
            }
        },
        watch: {
            input: function() {
                this.isTyping = true
                let self = this
                setTimeout(function() {
                    self.isTyping = false
                }, 500);
            }
        },
        methods: {
            searchBooks: function(event) {
                this.loading = true
                let search = this.input;
                let queryURL = 'https://www.googleapis.com/books/v1/volumes?q=' + search
                this.$http.get(queryURL).then((data) => {
                    this.books = data.body.items;
                })
                .then(() => {
                    let elems = document.querySelectorAll('.carousel');
                    let instances = M.Carousel.init(elems);
                    this.loading = false
                    this.results = true
                    console.log(this.results)
                })
                .catch((error) => {
                    this.loading = false
                    console.log(error);
                    M.toast({ html: 'Oops! Something went wrong!' });
                });
            }
        }
    }
</script>

<style>
    body {
        background: #f4f4f4;
    }
    #app {
        text-align: center;
        margin-bottom: 50px;
    }
</style>