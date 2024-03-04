export default defineNuxtRouteMiddleware((to, from) => {
    const locale = useCookie("locale", {
        sameSite: "none",
        secure: true,
    });

    if (to.path === "/") {
        if (locale.value == croatianLanguage.code) {
            return navigateTo("/hr");
        } else {
            return navigateTo("/en");
        }
    }
});
