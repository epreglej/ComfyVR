<script setup>
import { useField, useForm, ErrorMessage } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";

definePageMeta({
    layout: "applications-layout",
    name: "Add an application",
});

const validationSchema = toTypedSchema(
    zod.object({
        // applicationName: zod.string().min(1, "Application name is required"),
        applicationName: zod.string().min(1),
        cameraMovement: zod.string(),
    }),
);

const { handleSubmit, errors } = useForm({
    validationSchema,
});

const { value: applicationName } = useField("applicationName");
const { value: cameraMovement } = useField("cameraMovement", zod.boolean(), {
    initialValue: "false",
});
const { value: cameraMovementChoppy } = useField(
    "cameraMovementChoppy",
    zod.boolean(),
    {
        initialValue: "false",
    },
);
const { value: cameraMovementUnpredictable } = useField(
    "cameraMovementUnpredictable",
    zod.boolean(),
    {
        initialValue: "false",
    },
);
const { value: cameraMovementNoAlternativeMethods } = useField(
    "cameraMovementNoAlternativeMethods",
    zod.boolean(),
    {
        initialValue: "false",
    },
);
const { value: avatarMovement } = useField("avatarMovement", zod.boolean(), {
    initialValue: "false",
});

watch(cameraMovement, (newValue) => {
    if (newValue === "false") {
        cameraMovementChoppy.value = "false";
        cameraMovementUnpredictable.value = "false";
        cameraMovementNoAlternativeMethods.value = "false";
    }
});

const onSubmit = handleSubmit((values) => {
    alert(JSON.stringify(values, null, 2));
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
                        <div class="vertical-margin">
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

                        <!-- <div
                            v-if="applicationNameError"
                            class="no-margin center-align error-text"
                        >
                            {{ applicationNameError }}
                        </div> -->

                        <!-- <span class="large-text bold horizontal-margin">
                            To fully use the application:
                        </span> -->

                        <div class="horizontal-margin vertical-margin vertical">
                            <span class="large-text">
                                Application contains camera movement.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="cameraMovement"
                                    value="true"
                                    v-model="cameraMovement"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="cameraMovement"
                                    value="false"
                                    v-model="cameraMovement"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                            v-if="cameraMovement && cameraMovement === 'true'"
                        >
                            <span class="large-text">
                                Camera movement is choppy.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="cameraMovementChoppy"
                                    value="true"
                                    v-model="cameraMovementChoppy"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="cameraMovementChoppy"
                                    value="false"
                                    v-model="cameraMovementChoppy"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                            v-if="cameraMovement === 'true'"
                        >
                            <span class="large-text">
                                Camera movement is unpredictable.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="cameraMovementUnpredictable"
                                    value="true"
                                    v-model="cameraMovementUnpredictable"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="cameraMovementUnpredictable"
                                    value="false"
                                    v-model="cameraMovementUnpredictable"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                            v-if="cameraMovement === 'true'"
                        >
                            <span class="large-text">
                                Alternative camera movement methods not
                                supported.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="cameraMovementNoAlternativeMethods"
                                    value="true"
                                    v-model="cameraMovementNoAlternativeMethods"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="cameraMovementNoAlternativeMethods"
                                    value="false"
                                    v-model="cameraMovementNoAlternativeMethods"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div class="horizontal-margin top-margin vertical">
                            <span class="large-text">
                                Application contains avatar movement.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="avatarMovement"
                                    value="true"
                                    v-model="avatarMovement"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="avatarMovement"
                                    value="false"
                                    v-model="avatarMovement"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div class="top-margin center-align">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </article>
        </div>
    </div>
</template>
