<template>
    <main class="Wrapper">
      <h1 class="Title">O que você precisa fazer?</h1>
      <Form @addTask="addTask" @clear="clear" @copy="copy" />
      <h1>TAREFAS ORIGINAIS</h1>
      <Task :values="items" />
  
      <h1>TAREFAS COPIADAS</h1>
      <button class=btn2 @click="clearCopy">
        Limpar a cópia de tarefas
      </button>
      <Task :values="copyItems" />
    </main>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import Task from './components/Task';
  import Form from './components/Form';
  export default defineComponent({
    name: 'App',
    data: function () {
      return {
        items: ['Levar cachorro para passear', 'Ir ao mercado','Cortar grama'],
        copyItems: [],
        value: '',
      };
    },
    methods: {
      addTask: function (value) {
        this.items.push(value);
      },
      clear: function () {
        this.items = [];
      },
      clearCopy: function () {
        this.copyItems = [];
      },
      copy: function () {
        this.copyItems = [...this.items];
      },
    },
    components: {
      Task,
      Form,
    },
  });
  </script>
  
  <style>
  main {
    margin: 50px;
    text-align: center;
  }

  h1{
    text-align: center;
    background-color: black;
  }

  @import url('https://fonts.googleapis.com/css?family=Dosis');

:root {
  /* generic */
  --gutterSm: 0.4rem;
  --gutterMd: 0.8rem;
  --gutterLg: 1.6rem;
  --gutterXl: 2.4rem;
  --gutterXx: 7.2rem;
  --colorPrimary400: #7e57c2;
  --colorPrimary600: #5e35b1;
  --colorPrimary800: #4527a0;
  --fontFamily: "Dosis", sans-serif;
  --fontSizeSm: 1.2rem;
  --fontSizeMd: 1.6rem;
  --fontSizeLg: 2.1rem;
  --fontSizeXl: 2.8rem;
  --fontSizeXx: 3.6rem;
  --lineHeightSm: 1.1;
  --lineHeightMd: 1.8;
  --transitionDuration: 300ms;
  --transitionTF: cubic-bezier(0.645, 0.045, 0.355, 1);
  
  /* floated labels */
  --inputPaddingV: var(--gutterMd);
  --inputPaddingH: var(--gutterLg);
  --inputFontSize: var(--fontSizeLg);
  --inputLineHeight: var(--lineHeightMd);
  --labelScaleFactor: 0.8;
  --labelDefaultPosY: 50%;
  --labelTransformedPosY: calc(
    (var(--labelDefaultPosY)) - 
    (var(--inputPaddingV) * var(--labelScaleFactor)) - 
    (var(--inputFontSize) * var(--inputLineHeight))
  );
  --inputTransitionDuration: var(--transitionDuration);
  --inputTransitionTF: var(--transitionTF);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.form__label {
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  margin-left: 2rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
  transform: translateY(0rem);
}

html {
  font-size: 10px;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  color: #455A64;
  background-color: #7E57C2;
  font-family: var(--fontFamily);
  font-size: var(--fontSizeMd);
  line-height: var(--lineHeightMd);
}

.Wrapper {
  flex: 0 0 80%;
  max-width: 80%;
}

.Title {
  margin: 0 0 var(--gutterXx) 0;
  padding: 0;
  color: #fff;
  font-size: var(--fontSizeXx);
  font-weight: 400;
  line-height: var(--lineHeightSm);
  text-align: center;
  text-shadow: -0.1rem 0.1rem 0.2rem var(--colorPrimary800);
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-size: 62,5%;
}

body {
  height: 100vh;
	width: 100%;
  background: #0f2027; /* fallback for old browsers */
  background: linear-gradient(to right,#2c5364, #203a43, #0f2027);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
}

.form__label {
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  margin-left: 2rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
  transform: translateY(0rem);
}

.form__input {
  font-family: 'Roboto', sans-serif;
  color: #333;
  font-size: 1.2rem;
	margin: 0 auto;
  padding: 1.5rem 2rem;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 90%;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
}

.form__input:placeholder-shown + .form__label {
  opacity: 0;
  visibility: hidden;
  -webkit-transform: translateY(-4rem);
  transform: translateY(-4rem);
}


  </style>