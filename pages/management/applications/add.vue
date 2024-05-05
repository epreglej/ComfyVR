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
const { value: locomotion } = useField(
    "locomotion",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: locomotionController } = useField(
    "locomotionController",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: locomotionTeleportation } = useField(
    "locomotionTeleportation",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: locomotionGestures } = useField(
    "locomotionGestures",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: visualSettings } = useField(
    "visualSettings",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: visualSettingsSubtitles } = useField(
    "visualSettingsSubtitles",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: visualSettingsVFX } = useField(
    "visualSettingsVFX",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: visualSettingsColorblind } = useField(
    "visualSettingsColorblind",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

watch(cameraMovement, (newValue) => {
    if (newValue === "false") {
        cameraMovementChoppy.value = "false";
        cameraMovementUnpredictable.value = "false";
        cameraMovementNoAlternativeMethods.value = "false";
    }
});

watch(locomotion, (newValue) => {
    if (newValue === "false") {
        locomotionController.value = "false";
        locomotionTeleportation.value = "false";
        locomotionGestures.value = "false";
    }
});

watch(visualSettings, (newValue) => {
    if (newValue === "false") {
        visualSettingsSubtitles.value = "false";
        visualSettingsVFX.value = "false";
        visualSettingsColorblind.value = "false";
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

                        <div class="horizontal-margin top-margin vertical">
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
                                supported (e.g. snap turning).
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
                                Application contains avatar movement (locomotion).
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="locomotion"
                                    value="true"
                                    v-model="locomotion"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="locomotion"
                                    value="false"
                                    v-model="locomotion"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div 
                            class="horizontal-margin top-margin vertical"
                            v-if="locomotion && locomotion === 'true'"
                        >
                            <span class="large-text">
                                Controller-based locomotion supported.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="locomotionController"
                                    value="true"
                                    v-model="locomotionController"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="locomotionController"
                                    value="false"
                                    v-model="locomotionController"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div 
                            class="horizontal-margin top-margin vertical"
                            v-if="locomotion && locomotion === 'true'"
                        >
                            <span class="large-text">
                                Teleportation locomotion supported.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="locomotionTeleportation"
                                    value="true"
                                    v-model="locomotionTeleportation"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="locomotionTeleportation"
                                    value="false"
                                    v-model="locomotionTeleportation"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div 
                            class="horizontal-margin top-margin vertical"
                            v-if="locomotion && locomotion === 'true'"
                        >
                            <span class="large-text">
                                Natural gestures locomotion supported.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="locomotionGestures"
                                    value="true"
                                    v-model="locomotionGestures"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="locomotionGestures"
                                    value="false"
                                    v-model="locomotionGestures"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div class="horizontal-margin top-margin vertical">
                            <span class="large-text">
                                Application supports personalization of visual settings.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="visualSettings"
                                    value="true"
                                    v-model="visualSettings"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="visualSettings"
                                    value="false"
                                    v-model="visualSettings"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                            v-if="visualSettings && visualSettings === 'true'"
                        >
                            <span class="large-text">
                                Subtitles supported.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="visualSettingsSubtitles"
                                    value="true"
                                    v-model="visualSettingsSubtitles"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="visualSettingsSubtitles"
                                    value="false"
                                    v-model="visualSettingsSubtitles"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                            v-if="visualSettings && visualSettings === 'true'"
                        >
                            <span class="large-text">
                                VFX intensity personalization supported.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="visualSettingsVFX"
                                    value="true"
                                    v-model="visualSettingsVFX"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="visualSettingsVFX"
                                    value="false"
                                    v-model="visualSettingsVFX"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                            v-if="visualSettings && visualSettings === 'true'"
                        >
                            <span class="large-text">
                                Colorblind mode supported.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="visualSettingsColorblind"
                                    value="true"
                                    v-model="visualSettingsColorblind"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="visualSettingsColorblind"
                                    value="false"
                                    v-model="visualSettingsColorblind"
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
