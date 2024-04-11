<script setup>
definePageMeta({
    layout: "medium-layout",
    name: "Dashboard",
});
</script>

<template>
    <div class="main responsive right page active top-margin">
        <!-- <div class="space"></div> -->
        <div class="grid horizontal-margin">
            <div class="s12 m6 l4">
                <NuxtLink to="/" class="wave round wrap">
                    <article class="round no-elevate no-padding">
                        <img
                            class="responsive medium"
                            src="https://lh3.googleusercontent.com/mLGakWFjdX3zGBIhCUWqzjlj3gUXOY8hOed_ISzomlpNmjKWUiqCFyNGGAZFneVaK30v4GUpjn7lyIsI2Z7KPvMKrYkumzBr2nwbVe3BQKRkpam3sA=w960"
                            alt=""
                        />
                        <div class="large-padding">
                            <h6>Overview</h6>
                            <p>
                                Jump back to the default page to explore all the
                                applications in the system.
                            </p>
                        </div>
                    </article>
                </NuxtLink>
            </div>
            <div class="s12 m6 l4">
                <NuxtLink class="wave round wrap" to="/management/applications">
                    <article class="round no-elevate no-padding">
                        <img
                            class="responsive medium"
                            src="https://lh3.googleusercontent.com/fhyw5DMHcxoROzow8owQApE7MxUGVdH1lIXisNu9PZqkXYJD19fxLeauvE5OWp_jL-TG0En553TqcNUvPheP9CnsvA-yA0Q8fK7VUlXHfob2jfOLdQyn=w960"
                            alt=""
                        />
                        <div class="large-padding">
                            <h6>Application management</h6>
                            <p>
                                Add new applications to the database or modify
                                the existing.
                            </p>
                        </div>
                    </article>
                </NuxtLink>
            </div>
            <div class="s12 m6 l4">
                <NuxtLink class="wave round wrap" to="/management/users">
                    <article class="round no-elevate no-padding">
                        <img
                            class="responsive medium"
                            src="https://lh3.googleusercontent.com/V7AytLCAx5XG_KFvucW0jWaPvShdentmubcY5DVJOMC2_z4USSm1H25s2sm1KmFyoQfOt1OOCAzjsB7Tdl0IwS4fzHzRdPEMXmaj6Uz7GQl8B48zhCzv=w960"
                            alt=""
                        />
                        <div class="large-padding">
                            <h6>User management</h6>
                            <p>Create new admin accounts.</p>
                        </div>
                    </article>
                </NuxtLink>
            </div>
        </div>
        <div class="large-space"></div>
    </div>

    <!-- <button
            class="circle small-elevate extra medium-margin fixed right bottom"
        >
            <i>add</i>
        </button> -->
</template>
