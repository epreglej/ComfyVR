<script setup>
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";

// const applicationName = ref("");
// const cameraMovement = ref("false");
// const cameraMovementChoppy = ref("false");
// const cameraMovementUnpredictable = ref("false");
// const cameraMovementNoAlternativeMethods = ref("false");
// const errors = ref([]);

definePageMeta({
    layout: "applications-layout",
    name: "Add an application",
});

// watch(cameraMovement, (newValue) => {
//     if (newValue === "false") {
//         cameraMovementChoppy.value = "false";
//         cameraMovementUnpredictable.value = "false";
//         cameraMovementNoAlternativeMethods.value = "false";
//     }
// });

const validationSchema = toTypedSchema(
    zod.object({
        applicationName: zod.string().min(1),
        cameraMovement: zod.string(),
    }),
);

const { handleSubmit, errors } = useForm({
    validationSchema,
});

const { value: applicationName } = useField("applicationName");
const { value: cameraMovement } = useField("cameraMovement");

const onSubmit = handleSubmit((values) => {
    alert(JSON.stringify(values, null, 2));
});
</script>

<template>
    <div class="page right responsive active">
        <div class="horizontal-margin">
            <article class="round">
                <div class="horizontal-margin">
                    <form class="vertical" @submit.prevent="onSubmit">
                        <div class="field label border round vertical-margin">
                            <input
                                type="text"
                                aria-invalid="true"
                                aria-describedby="addressError"
                                v-model="applicationName"
                            />
                            <label>Application's name</label>
                        </div>

                        <span class="large-text bold horizontal-margin">
                            To fully use the application:
                        </span>

                        <div class="horizontal-margin vertical">
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

                        <div
                            v-if="errors && errors.length"
                            class="no-margin center-align error-text"
                        >
                            {{ errors[0] }}
                        </div>

                        <div class="vertical-margin center-align">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </article>
        </div>
    </div>
</template>
