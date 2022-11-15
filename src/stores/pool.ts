import { defineStore } from 'pinia'
import { pool } from '../services/modules/pool/pool.service'

export const poolStore = defineStore({
  id: 'pool',
  state: () => ({
    pool: null,
  }),
  actions: {
    async getPool(id: String) {
      try {
        this.pool = await pool(`pool/${id}`)
      } catch (e) {
        return e
      }
    },
  },
})
