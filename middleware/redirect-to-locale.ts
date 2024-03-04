export default defineNuxtRouteMiddleware((to, from) => {
    if (process.server) {
        const locale = useCookie("locale", {
            sameSite: "none",
            secure: true,
        });

        console.log("Redirecting...");
        if (to.path === "/") {
            console.log(locale.value);
            console.log(croatianLanguage.code); // Ensure croatianLanguage is defined and accessible
            console.log(locale.value == croatianLanguage.code);
            if (locale.value == croatianLanguage.code) {
                return navigateTo("/hr");
            } else {
                //return navigateTo("/en");
            }
        }
    }
});
