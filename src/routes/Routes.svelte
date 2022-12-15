<script>
  import { Router, Route } from "svelte-navigator";
  import { lang } from "$services/store";
  import Index from "./Index.svelte";
  import Login from "./Login.svelte";
  import HeaderDesk from "./Desktop/Header/HeaderDesk.svelte";
  import IndexDesk from "./Desktop/IndexDesk.svelte";
  export let langugage;
  console.log($lang, "lakaknana", langugage);
</script>

<div class="relative flex flex-col h-screen justify-between">
<HeaderDesk/>


  <Router>
    <Route path="/:lang/home" component={IndexDesk} />
    <Route path="/:lang" component={IndexDesk} />
  </Router>
 
  <div>footer</div>
</div>
