<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar />
    </div>
    <div class="column is-three-quarter">
      <Form />
      <ComponentTeste>Testando [Componente extra para atividade]</ComponentTeste>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue';
import Form from './components/Form.vue';
import ComponentTeste from './components/ComponentTeste.vue';
export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    Form,
    ComponentTeste,
  },
});
</script>

<style></style>