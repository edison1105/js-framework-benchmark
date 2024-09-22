<script>
import { ref } from 'vue'
import { buildData } from './data'

export default {
  data() {
    return {
      selected: ref(null),
      rows: [],
    };
  },
  methods: {
    setRows(update = this.rows.slice()) {
      this.rows = update;
    },
    add() {
      this.rows = this.rows.concat(buildData(1000));
    },
    remove(id) {
      const index = this.rows.findIndex(d => d.id === id);
      if (index !== -1) {
        this.rows.splice(index, 1);
        this.setRows();
      }
    },
    select(id) {
      this.selected = id;
    },
    run() {
      this.setRows(buildData());
      this.selected = undefined;
    },
    update() {
      const _rows = this.rows;
      for (let i = 0; i < _rows.length; i += 10) {
        _rows[i].label += ' !!!';
      }
      this.setRows();
    },
    runLots() {
      this.setRows(buildData(10000));
      this.selected = undefined;
    },
    clear() {
      this.setRows([]);
      this.selected = undefined;
    },
    swapRows() {
      const _rows = this.rows;
      if (_rows.length > 998) {
        const d1 = _rows[1];
        const d998 = _rows[998];
        this.$set(_rows, 1, d998);
        this.$set(_rows, 998, d1);
        this.setRows();
      }
    },
  },
};
</script>

<template>
  <div>
  <div class="jumbotron">
    <div class="row">
      <div class="col-md-6">
        <h1>Vue.js 2.7 (non-keyed)</h1>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-sm-6 smallpad">
            <button
              type="button"
              class="btn btn-primary btn-block"
              id="run"
              @click="run"
            >
              Create 1,000 rows
            </button>
          </div>
          <div class="col-sm-6 smallpad">
            <button
              type="button"
              class="btn btn-primary btn-block"
              id="runlots"
              @click="runLots"
            >
              Create 10,000 rows
            </button>
          </div>
          <div class="col-sm-6 smallpad">
            <button
              type="button"
              class="btn btn-primary btn-block"
              id="add"
              @click="add"
            >
              Append 1,000 rows
            </button>
          </div>
          <div class="col-sm-6 smallpad">
            <button
              type="button"
              class="btn btn-primary btn-block"
              id="update"
              @click="update"
            >
              Update every 10th row
            </button>
          </div>
          <div class="col-sm-6 smallpad">
            <button
              type="button"
              class="btn btn-primary btn-block"
              id="clear"
              @click="clear"
            >
              Clear
            </button>
          </div>
          <div class="col-sm-6 smallpad">
            <button
              type="button"
              class="btn btn-primary btn-block"
              id="swaprows"
              @click="swapRows"
            >
              Swap Rows
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <table class="table table-hover table-striped test-data">
    <tbody>
      <tr
        v-for="{ id, label } of rows"
        :class="{ danger: id === selected }"
        :data-label="label"
        v-memo="[label, id === selected]"
      >
        <td class="col-md-1">{{ id }}</td>
        <td class="col-md-4">
          <a @click="select(id)">{{ label }}</a>
        </td>
        <td class="col-md-1">
          <a @click="remove(id)">
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </a>
        </td>
        <td class="col-md-6"></td>
      </tr>
    </tbody>
  </table>
  <span
    class="preloadicon glyphicon glyphicon-remove"
    aria-hidden="true"
  ></span>
</div>
</template>
