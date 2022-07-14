<template>
  <h1>Pinia + Vue 3</h1>

  <h1>Counter {{ count }}</h1>
  <button @click="store.increment()">Increment</button>
  <button @click="store.reset()">Reset</button>

  <h1>Tier List</h1>

  <div class="tier-w">

    <div class="item" v-for="(_tier, index) in sortedTierList" :key="index">
      <div class="left">
        {{ _tier.title }}
      </div>

      <div class="right">
        <div class="rank">{{ _tier.rank }}</div>
        <button @click="store.promote(index)">/\</button>
        <button @click="store.demote(index)">\/</button>
      </div>
    </div>

    <input type="text" v-model="newItem">
    <button @click="store.addTier(newItem); newItem = ''">Add item</button>

  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useStore()

const { count, sortedTierList } = storeToRefs(store)

const newItem = ref('')

</script>


<style scoped>
.tier-w{
  display: flex;
  flex-direction: column;
  width: 300px;
}

.item {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.right{
  display: flex;
  flex-direction: flex-end;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
