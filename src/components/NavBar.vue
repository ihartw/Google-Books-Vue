<template>
    <nav class="navbar teal lighten-2">
        <div class="nav-wrapper">
            <form v-on:submit.prevent>
                <div class="input-field">
                    <input 
                    :value="userInput" 
                    @input="valueChange" 
                    @keyup.enter="submitValue" 
                    type="search" 
                    autocomplete="off">
                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                    <i class="material-icons" @click="clearInput">close</i>
                </div>
            </form>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar',
        props: ['userInput'],
        data: function() {
            return {
                input: ''
            }
        },
        methods: {
            valueChange: function(event) {
                this.input = event.target.value;
                this.$emit('changedValue', this.input)
            },
            submitValue: function(event) {
                if(this.input == '') {
                    M.toast({ html: 'No search value entered' });
                    return
                };
                this.$emit('submitValue');
            },
            clearInput: function(event) {
                this.input = ''
                this.$emit('inputCleared', this.input)
            }
        }
    }
</script>

<style>
    nav .brand-logo {
        text-align: center;
        margin-left: 20px;
    }
    nav input {
        color: white;
    }
    .help-btn {
        cursor: pointer;
    }
</style>