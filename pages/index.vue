<template>
    <form @submit="onSubmit">
        <input name="email" v-model="email" type="email" />
        <span>{{ errors.email }}</span>

        <input name="password" v-model="password" type="password" />
        <span>{{ errors.password }}</span>

        <button>Submit</button>
    </form>
</template>

<script setup>
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";

const validationSchema = toTypedSchema(
    zod.object({
        email: zod.string().min(1).email({ message: "Must be a valid email" }),
        password: zod.string().min(1).min(8, { message: "Too short" }),
    }),
);

const { handleSubmit, errors } = useForm({
    validationSchema,
});

const { value: email } = useField("email");
const { value: password } = useField("password");

const onSubmit = handleSubmit((values) => {
    alert(JSON.stringify(values, null, 2));
});
</script>
