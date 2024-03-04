<script setup lang="ts">
const locale = useCookie("locale", {
    sameSite: "strict",
    secure: true,
});

definePageMeta({
    middleware: ["redirect-to-locale"],
});
</script>
