import { defineStore } from "pinia";

export interface Tier {
    rank: number,
    title: string,
}

export interface StoreInterface {
    count: number,
    tierList: Tier[],
}

export const useStore = defineStore("mainStore", {
  state: () => ({
    count: 0,
    tierList: [
        {
            title: 'Vue.JS 3',
            rank: 3
        },
        {
            title: 'React.JS',
            rank: 2
        },
        {
            title: 'Svelte',
            rank: 3
        },
    ],
  } as StoreInterface ),

  getters: {
    sortedTierList(state) {
        return state.tierList.sort((a, b) => b.rank - a.rank)
    }
  },

  actions: {
    increment(): void {
        this.count += 1
    },
    reset(): void {
        this.count = 0
    },
    promote(idx: number): void {
        this.tierList[idx].rank += 1
    },
    demote(idx: number): void {
        this.tierList[idx].rank -= 1
    },
    addTier(title: string): void {
        this.tierList.push({
            title,
            rank: 0,
        })
    }
  },
});
