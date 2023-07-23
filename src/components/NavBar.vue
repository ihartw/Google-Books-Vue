<template> 
  <nav class="navbar blue-grey lighten-5">
    <div class="nav-wrapper">
      <form v-on:submit.prevent>
        <div class="input-field">
          <input placeholder="Search by name or author" :value="userInput" @input="valueChange" @keyup.enter="submitValue" type="search" autocomplete="off" />
          <label @click="submitValue" class="label-icon clickable" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons" @click="clearInput">close</i>
          <div v-if="isTyping" class="typing-bubbles">
            <img src="../assets/img//typing.gif" width="65">
          </div>
        </div>
      </form>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar',
    props: ['userInput'],
    data() {
      return {
        input: '',
        isTyping: false
      }
    },
    methods: {
      valueChange(event) {
        this.input = event.target.value;
        this.$emit('changedValue', this.input);
        this.isTyping = true
        let self = this
        setTimeout(function() {
          self.isTyping = false
        }, 500);
      },
      submitValue() {
        if (this.input == '') {
          M.toast({
            html: 'No search value entered'
          });
        };
        this.$emit('submitValue');
      },
      clearInput() {
        this.input = ''
        this.$emit('inputCleared', this.input)
      }
    }
  }
</script>

<style>
  input::placeholder {
    color: black;
  }
  nav .input-field label.active i {
    color: black;
  }
  .typing-bubbles {
    position: absolute;
    top: 10px;
    right: 50px;
  }
</style>
