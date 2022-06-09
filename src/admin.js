import App from "./admin/App.svelte";
import menuFix from "./admin/utils/admin-menu-fix";

let app;

const target = document.getElementById("svelte-admin-app");
if (target) new App({ target });

menuFix("svelte-app");

export default app;
