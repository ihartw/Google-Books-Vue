<template>
  <div class="book-results">
    <div v-if="books.length === 0" class="had-container">
      <img v-if="!loading" src="../assets/img/search-books.png" class="animated fadeIn" width="200">
      <img v-if="loading" src="../assets/img/searching.gif" width="100" />
    </div>
    <div v-else class="had-container">
      <img v-if="loading" src="../assets/img/searching.gif" width="100" />
      <div class="carousel">
        <div class="carousel-item card large animated fadeIn" v-for="book in books" :key="book.id">
          <div class="card-image waves-effect waves-block waves-light">
            <img v-if="book.volumeInfo.imageLinks" :src="book.volumeInfo.imageLinks.thumbnail" class="activator" />
            <img v-else src="../assets/img/no-img.jpg" height="270px" />
          </div>
          <div class="card-content">
            <span v-if="book.volumeInfo.title" class="card-title truncate">{{ book.volumeInfo.title }}</span>
            <p class="authors" v-if="book.volumeInfo.authors">{{ book.volumeInfo.authors[0] }}</p>
            <p>
              <a :href="book.volumeInfo.infoLink" target="_blank">View in store</a>
            </p>
          </div>
          <div class="card-action">
            <span class="card-title grey-text text-darken-4">
              <a class="activator">
                <i class="material-icons right blue-text">info_outline</i>
              </a>
            </span>
          </div>
          <div class="card-reveal">
            <i class="material-icons right card-title">close</i>
            <p v-if="book.volumeInfo.title" class="left-align info-title">{{ book.volumeInfo.title }}</p>
            <p class="left-align" v-if="book.volumeInfo.description">{{ book.volumeInfo.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BookResults',
    props: ['input', 'books', 'loading'],
    data() {
      return {
        width: window.innerWidth
      }
    }
  }
</script>

<style>
  .card .card-title {
    font-weight: bold;
    font-size: 18px;
  }

  .info-title {
    font-weight: bold;
    font-size: 22px;
    line-height: 1;
  }

  .carousel {
    height: 520px;
  }

  .carousel .carousel-item {
    width: 255px;
    height: 420px;
  }

  .card .card-content {
    padding: 10px;
  }

  .card .card-content p.authors {
    margin-bottom: 10px;
  }

  .activator {
    cursor: pointer;
  }
  
  .card .card-action {
    padding: 10px;
  }

  @media screen and (max-width: 600px) {
    .carousel {
      height: 400px;
      width: width;
    }

    .carousel .carousel-item {
      width: 200px;
      height: 320px;
    }
  }
</style>
