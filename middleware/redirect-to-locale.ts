export default defineNuxtRouteMiddleware((to, from) => {
    const locale = useCookie("locale", {
        sameSite: "none",
        secure: true,
    });

    console.log("Redirecting...");
    if (to.path === "/") {
        console.log(locale.value);
        console.log(croatianLanguage.code);
        console.log(locale.value == croatianLanguage.code);
        if (locale.value == croatianLanguage.code) {
            return navigateTo("/hr");
        } else {
            //return navigateTo("/en");
        }
    }
});
