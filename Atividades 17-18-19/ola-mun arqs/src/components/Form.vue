<template>
    <form v-on:submit="submit">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"></span>
        <input
          v-model="text"
          type="text"
          class="form-control"
          placeholder="Ex: Organizar escritório"
        />
      </div>
      <button type="button" class="btn btn-primary submit" @click="submit">
        Adicionar
      </button>
    </form>
    <button type="button" class="btn2 btn-danger" @click="clear">
      Limpar tarefas
    </button>
    <button type="button" class="btn3 btn-info" @click="copy">Copiar</button>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'FormVue',
    data: function () {
      return {
        text: '',
      };
    },
    methods: {
      submit: function () {
        if (this.text) {
          this.$emit('addTask', this.text);
          this.text = '';
        }
      },
      clear: function () {
        this.$emit('clear');
      },
      copy: function () {
        this.$emit('copy');
      },
    },
  });
  </script>
  
  <style>
  form {
    display: flex;
  }

.btn3 {
  margin-left: 145px;
  appearance: none;
  background-color: #1619b3;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 7px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.btn2 {
  appearance: none;
  background-color: #b31616;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 7px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.btn {
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 7px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
}

.btn:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.btn:hover {
  background-color: #2c974b;
}

.btn:focus {
  box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
  outline: none;
}

.btn:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, .1);
  color: rgba(255, 255, 255, .8);
  cursor: default;
}

.btn:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
}

.form-control{
  padding: 10px;
  width: 240px;
  margin-right: 10px;
}

</style>