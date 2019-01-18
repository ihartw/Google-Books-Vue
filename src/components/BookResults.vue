<template>
	<div class="book-results">
		<div v-if="books.length === 0" class="had-container">
			<img src="../assets/img/books.png" class="animated fadeIn" width="250">
		</div>
		<div v-else class="had-container">
			<div class="carousel">
				<div class="carousel-item card large animated fadeIn" v-for="book in books" :key="book.id">
					<div class="card-image waves-effect waves-block waves-light">
						<img v-if="book.volumeInfo.imageLinks" :src="book.volumeInfo.imageLinks.thumbnail" class="activator" />
						<img v-else src="../assets/img/no-img.jpg" />
					</div>
					<div class="card-content">
						<span v-if="book.volumeInfo.title" class="card-title truncate">{{ book.volumeInfo.title }}</span>
						<p class="authors" v-if="book.volumeInfo.authors">{{ book.volumeInfo.authors[0] }}</p>
						<p><a class="activator">See More</a></p>
					</div>
					<div class="card-action">
						<span class="card-title grey-text text-darken-4"><a :style="{color: 'black'}" :href="book.volumeInfo.infoLink" target="_blank"><i class="material-icons right">info_outline</i></a></span>
					</div>
					<div class="card-reveal">
						<span v-if="book.volumeInfo.title" class="card-title grey-text text-darken-4">{{ book.volumeInfo.title }}<i class="material-icons right">close</i></span>
						<p v-if="book.volumeInfo.description">{{ book.volumeInfo.description }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'BookResults',
		props: ['input', 'books'],
	}
</script>

<style>
	.card .card-title {
		font-weight: bold;
		font-size: 18px;
	}
	.carousel {
		height: 520px;
	}
	.carousel .carousel-item {
		width: 275px;
		height: 450px;
	}
	.card .card-content {
		padding: 10px;
	}
	.card .card-content p.authors {
		margin-bottom: 10px;
	}
	.books a.btn-floating {
		position: relative;
		top: 30px;
	}
	.activator {
		cursor: pointer;
	}
</style>