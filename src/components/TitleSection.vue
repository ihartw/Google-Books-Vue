<template>
    <div class="title-section container">
        <h3>Book Finder</h3>
        <div class="row">
            <div class="col s4 offset-s4 bound-input">
                <h5 class="center-align">{{ input }}</h5>
            </div>
            <div class="col s1 bound-input">
                <div v-if="isTyping" class="typing-bubbles">
                    <img src="../assets/img//typing.gif" width="65">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TitleSection',
        props: ['input', 'isTyping']
    }
</script>

<style>
    .typing-bubbles {
        position: relative;
        right: 30px;
        top: 15px;
    }
    .bound-input {
        height: 50px;
    }
</style>