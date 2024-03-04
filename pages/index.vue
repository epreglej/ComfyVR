<script setup lang="ts">
const locale = useCookie("locale", {
    sameSite: "none",
    secure: true,
});

definePageMeta({
    middleware: ["redirect-to-locale"],
});
</script>
