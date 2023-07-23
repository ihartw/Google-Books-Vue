<template>
  <div id="app" class="animated fadeIn">
    <nav-bar :userInput="input" @changedValue="input = $event" @submitValue="searchBooks" @inputCleared="input = $event"/>
    <loading-bar :loading="loading"/>
    <title-section :input="input"/>
    <book-results :input='input' :books="books" :loading="loading"/>
    <user-helper/>
    <connectivity/>
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
    data() {
      return {
        input: '',
        books: [],
        loading: false,
        title: ''
      }
    },
    methods: {
      searchBooks() {
        this.loading = true
        let search = this.input;
        let queryURL = 'https://www.googleapis.com/books/v1/volumes?q=' + search
        this.$http.get(queryURL).then((data) => {
          this.books = data.body.items;
        }).then(() => {
          let elems = document.querySelectorAll('.carousel');
          let instances = M.Carousel.init(elems);
          this.loading = false;
        }).catch((error) => {
          this.loading = false;
          console.log(error);
          M.toast({
            html: 'Error while fetching books. Please try again later.'
          });
        });
      }
    }
  }
</script>

<style>
  #app {
    text-align: center;
    margin-bottom: 50px;
  }
</style>
