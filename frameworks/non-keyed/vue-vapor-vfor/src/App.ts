import { child as _child, next as _next, toDisplayString as _toDisplayString, setText as _setText, setAttr as _setAttr, setClass as _setClass, renderEffect as _renderEffect, createFor as _createFor, insert as _insert, delegateEvents as _delegateEvents, template as _template } from 'vue';
const t0 = _template("<div class=\"jumbotron\"><div class=\"row\"><div class=\"col-md-6\"><h1>Vue.js 3 (non-keyed)</h1></div><div class=\"col-md-6\"><div class=\"row\"><div class=\"col-sm-6 smallpad\"><button type=\"button\" class=\"btn btn-primary btn-block\" id=\"run\"> Create 1,000 rows </button></div><div class=\"col-sm-6 smallpad\"><button type=\"button\" class=\"btn btn-primary btn-block\" id=\"runlots\"> Create 10,000 rows </button></div><div class=\"col-sm-6 smallpad\"><button type=\"button\" class=\"btn btn-primary btn-block\" id=\"add\"> Append 1,000 rows </button></div><div class=\"col-sm-6 smallpad\"><button type=\"button\" class=\"btn btn-primary btn-block\" id=\"update\"> Update every 10th row </button></div><div class=\"col-sm-6 smallpad\"><button type=\"button\" class=\"btn btn-primary btn-block\" id=\"clear\"> Clear </button></div><div class=\"col-sm-6 smallpad\"><button type=\"button\" class=\"btn btn-primary btn-block\" id=\"swaprows\"> Swap Rows </button></div></div></div></div></div>")
const t1 = _template("<tr><td class=\"col-md-1\"> </td><td class=\"col-md-4\"><a> </a></td><td class=\"col-md-1\"><a><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></a></td><td class=\"col-md-6\"></td></tr>")
const t2 = _template("<table class=\"table table-hover table-striped test-data\"><tbody></tbody></table>")
const t3 = _template("<span class=\"preloadicon glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>")
_delegateEvents("click")
import { ref, shallowRef, watch } from 'vue'
import { buildData } from './data'


const __sfc__ = {
  __name: 'App',
  __vapor: true,
  setup(__props) {

    const selected = ref()
    const rows = shallowRef([])

    function setRows(update = rows.value.slice()) {
      rows.value = update
    }

    function add() {
      rows.value = rows.value.concat(buildData(1000))
    }

    function remove(id) {
      rows.value.splice(
        rows.value.findIndex((d) => d.id === id),
        1
      )
      setRows()
    }

    function select(id) {
      selected.value = id
    }

    function run() {
      setRows(buildData())
      selected.value = undefined
    }

    function update() {
      const _rows = rows.value
      for (let i = 0; i < _rows.length; i += 10) {
        _rows[i].label += ' !!!'
      }
      setRows()
    }

    function runLots() {
      setRows(buildData(10000))
      selected.value = undefined
    }

    function clear() {
      setRows([])
      selected.value = undefined
    }

    function swapRows() {
      const _rows = rows.value
      if (_rows.length > 998) {
        const d1 = _rows[1]
        const d998 = _rows[998]
        _rows[1] = d998
        _rows[998] = d1
        setRows()
      }
    }


    const n6 = t0()
    const p0 = _child(n6)
    const p1 = _next(_child(p0))
    const p2 = _child(p1)
    const p3 = _child(p2)
    const n0 = _child(p3)
    const p4 = _next(p3)
    const n1 = _child(p4)
    const p5 = _next(p4)
    const n2 = _child(p5)
    const p6 = _next(p5)
    const n3 = _child(p6)
    const p7 = _next(p6)
    const n4 = _child(p7)
    const p8 = _next(p7)
    const n5 = _child(p8)
    const n14 = t2()
    const n13 = _child(n14)
    const n15 = t3()
    n0.$evtclick = run
    n1.$evtclick = runLots
    n2.$evtclick = add
    n3.$evtclick = update
    n4.$evtclick = clear
    n5.$evtclick = swapRows

    const nodeMap = new Map();
    const trueClassName = "danger";
    const falseClassName = "";
    let trueValueElements;

    watch(
      () => selected.value,
      (newValue) => {
        console.log('selected changed',trueValueElements)
        if (trueValueElements !== undefined) {
          for (const n of trueValueElements) {
            _setClass(n, falseClassName);
          }
        }
        trueValueElements = nodeMap.get(newValue);
        if (trueValueElements !== undefined) {
          for (const n of trueValueElements) {
            _setClass(n, trueClassName);
          }
        }
      },
    );

    const n7 = _createFor(() => (rows.value), (_for_item0) => {
      const n12 = t1()
      const n9 = _child(n12)
      const p0 = _next(n9)
      const n10 = _child(p0)
      const p1 = _next(p0)
      const n11 = _child(p1)
      const x9 = _child(n9)
      const x10 = _child(n10)
      n10.$evtclick = () => (select(_for_item0.value.id))
      n11.$evtclick = () => (remove(_for_item0.value.id))
      _renderEffect(() => {
        const _id = _for_item0.value.id
        const _label = _for_item0.value.label
        _setText(x9, _toDisplayString(_id))

        _setText(x10, _toDisplayString(_label))
        _setAttr(n12, "data-label", _label)
        // _setClass(n12, { danger: _id === selected.value })
      })

      // new solution for setClass in vFor
      _setClass(n12, { trueClassName: _for_item0.value.id === selected.value })

      let elements = nodeMap.get(_for_item0.value.id);
      if (elements === undefined) {
        elements = [n12];
        nodeMap.set(_for_item0.value.id, elements);
        if (_for_item0.value.id === selected.value) {
          trueValueElements = elements;
        }
      } else {
        elements.push(n12)
      }

      return n12
    }, null, 1)
    _insert(n7, n13)



    return [n6, n14, n15]

  }

}
__sfc__.__file = "src/App.vue"
export default __sfc__