import apiFetch from "@wordpress/api-fetch";
import App from "./admin/AdminApp.svelte";
import menuFix from "./admin/utils/admin-menu-fix";

apiFetch.use(apiFetch.createRootURLMiddleware("/wp-json/"));

let app;

const target = document.getElementById("svelte-admin-app");
if (target) new App({ target });

menuFix("svelte-app");

export default app;
