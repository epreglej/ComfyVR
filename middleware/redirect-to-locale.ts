export default defineNuxtRouteMiddleware((to, from) => {
    const locale = useCookie("locale");

    if (to.path === "/") {
        if (locale.value == croatianLanguage.code) {
            return navigateTo("/hr");
        } else {
            return navigateTo("/en");
        }
    }
});
