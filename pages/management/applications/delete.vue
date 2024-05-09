<script setup>
import { useField, useForm, ErrorMessage } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";

definePageMeta({
    layout: "applications-layout",
    name: "Delete an application",
});

const client = useSupabaseClient();

const validationSchema = toTypedSchema(
    zod.object({
        applicationName: zod.string().min(1),
    }),
);

const { handleSubmit, errors } = useForm({
    validationSchema,
});

const { value: applicationName } = useField("applicationName");

const onSubmit = handleSubmit(async (values) => {
    try {
        const { data, error } = await client.from("applications").delete().eq("applicationName", values.applicationName);;

        if (error) {
            console.error("Error during delete:", error);
        } else {
          alert("Application deleted!");
          await navigateTo("/");
        }
    } catch (error) {
        console.error("Error:", error);
    }
});
</script>

<template>
    <div class="page right responsive active">
        <div class="horizontal-margin">
        <div class="space"/>
            <article class="round">
                <div class="horizontal-margin">
                    <form class="vertical" @submit.prevent="onSubmit">
                    <p class="top-margin center-align"><h6 class="center-align">Form</h6></p>
                        <div class="top-margin large-margin">
                            <div
                                class="field label border round no-margin"
                                :class="{ invalid: errors.applicationName }"
                            >
                                <input
                                    type="text"
                                    aria-invalid="true"
                                    aria-describedby="addressError"
                                    v-model="applicationName"
                                />
                                <label>Application's name</label>
                                <ErrorMessage
                                    class="horizontal-margin error-text"
                                    name="applicationName"
                                />
                            </div>
                        </div>

                        <div class="top-margin large-margin center-align">
                            <button type="submit">Delete</button>
                        </div>

                    </form>
                </div>
            </article>
        </div>
    </div>
</template>
