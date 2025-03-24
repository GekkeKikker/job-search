// const { ref } = require("vue");
import { ref, computed } from "vue";

let a = ref(1);
let b = ref(2);

let c = computed(() => a.value + b.value);
console.log(c.value);

a.value = 10;
console.log(c.value);
