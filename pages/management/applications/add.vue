<script setup>
import { useField, useForm, ErrorMessage } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";

definePageMeta({
    layout: "applications-layout",
    name: "Add an application",
});

const client = useSupabaseClient();

const validationSchema = toTypedSchema(
    zod.object({
        applicationName: zod.string().min(1),
        applicationIconLink: zod.string().url(),
        cameraMovement: zod.string(),
        cameraMovementChoppy: zod.string(),
        cameraMovementUnpredictable: zod.string(),
        cameraMovementNoAlternativeMethods: zod.string(),
        visualSettings: zod.string(),
        visualSettingsSubtitles: zod.string(),
        visualSettingsVFX: zod.string(),
        visualSettingsColorblind: zod.string(),
        auditorySettings: zod.string(),
        auditorySettingsScreenReader: zod.string(),
        auditorySettingsEqualizer: zod.string(),
        auditorySettingsSpatialAudio: zod.string(),
        inputSettings: zod.string(),
        inputSettingsAlternativeMovement: zod.string(),
        inputSettingsRemapping: zod.string(),
        inputSettingsMultipleInputDevices: zod.string(),
        inputSettingsAimAssist: zod.string(),
    }),
);

const { handleSubmit, errors } = useForm({
    validationSchema,
});

const { value: applicationName } = useField("applicationName");

const { value: applicationIconLink } = useField("applicationIconLink");

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

const { value: auditorySettings } = useField(
    "auditorySettings",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: auditorySettingsScreenReader } = useField(
    "auditorySettingsScreenReader",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: auditorySettingsEqualizer } = useField(
    "auditorySettingsEqualizer",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: auditorySettingsSpatialAudio } = useField(
    "auditorySettingsSpatialAudio",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: inputSettings } = useField(
    "inputSettings",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: inputSettingsAlternativeMovement } = useField(
    "inputSettingsAlternativeMovement",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: inputSettingsRemapping } = useField(
    "inputSettingsRemapping",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: inputSettingsMultipleInputDevices } = useField(
    "inputSettingsMultipleInputDevices",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: inputSettingsAimAssist } = useField(
    "inputSettingsAimAssist",
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

watch(visualSettings, (newValue) => {
    if (newValue === "false") {
        visualSettingsSubtitles.value = "false";
        visualSettingsVFX.value = "false";
        visualSettingsColorblind.value = "false";
    }
});

watch(auditorySettings, (newValue) => {
    if (newValue === "false") {
        auditorySettingsScreenReader.value = "false";
        auditorySettingsEqualizer.value = "false";
        auditorySettingsSpatialAudio.value = "false";
    }
});

watch(inputSettings, (newValue) => {
    if (newValue === "false") {
        inputSettingsAlternativeMovement.value = "false";
        inputSettingsRemapping.value = "false";
        inputSettingsMultipleInputDevices.value = "false";
        inputSettingsAimAssist.value = "false";
    }
});

const onSubmit = handleSubmit(async (values) => {
    alert(JSON.stringify(values, null, 2));

    try {
        const { data, error } = await client.from("applications").insert({
            applicationName: values.applicationName,
            applicationIconLink: values.applicationIconLink,
            cameraMovement: values.cameraMovement === "true",
            cameraMovementChoppy: values.cameraMovementChoppy === "true",
            cameraMovementUnpredictable: values.cameraMovementUnpredictable ==="true",
            cameraMovementNoAlternativeMethods: values.cameraMovementNoAlternativeMethods === "true",
            visualSettings: values.visualSettings === "true",
            visualSettingsSubtitles: values.visualSettingsSubtitles === "true",
            visualSettingsVFX: values.visualSettingsVFX === "true",
            visualSettingsColorblind: values.visualSettingsColorblind === "true",
            auditorySettings: values.auditorySettings === "true",
            auditorySettingsScreenReader: values.auditorySettingsScreenReader === "true",
            auditorySettingsEqualizer: values.auditorySettingsEqualizer === "true",
            auditorySettingsSpatialAudio: values.auditorySettingsSpatialAudio === "true",
            inputSettings: values.inputSettings === "true",
            inputSettingsAlternativeMovement: values.inputSettingsAlternativeMovement === "true",
            inputSettingsRemapping: values.inputSettingsRemapping === "true",
            inputSettingsMultipleInputDevices: values.inputSettingsMultipleInputDevices === "true",
            inputSettingsAimAssist: values.inputSettingsAimAssist === "true",
        });

        if (error) {
            console.error("Error during insert:", error);
        } else {
            console.log("Record inserted successfully:", data);
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
                                Application supports input related customization.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="inputSettings"
                                    value="true"
                                    v-model="inputSettings"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="inputSettings"
                                    value="false"
                                    v-model="inputSettings"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                            v-if="inputSettings && inputSettings === 'true'"
                        >
                            <span class="large-text">
                                Alternative movement methods supported (e.g. teleportation).
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="inputSettingsAlternativeMovement"
                                    value="true"
                                    v-model="inputSettingsAlternativeMovement"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="inputSettingsAlternativeMovement"
                                    value="false"
                                    v-model="inputSettingsAlternativeMovement"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                            v-if="inputSettings && inputSettings === 'true'"
                        >
                            <span class="large-text">
                                Control remapping supported.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="inputSettingsRemapping"
                                    value="true"
                                    v-model="inputSettingsRemapping"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="inputSettingsRemapping"
                                    value="false"
                                    v-model="inputSettingsRemapping"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                            v-if="inputSettings && inputSettings === 'true'"
                        >
                            <span class="large-text">
                                Multiple input devices suppported.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="inputSettingsMultipleInputDevices"
                                    value="true"
                                    v-model="inputSettingsMultipleInputDevices"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="inputSettingsMultipleInputDevices"
                                    value="false"
                                    v-model="inputSettingsMultipleInputDevices"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                            v-if="inputSettings && inputSettings === 'true'"
                        >
                            <span class="large-text">
                                Aim assist supported.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="inputSettingsAimAssist"
                                    value="true"
                                    v-model="inputSettingsAimAssist"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="inputSettingsAimAssist"
                                    value="false"
                                    v-model="inputSettingsAimAssist"
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

                        <div class="horizontal-margin top-margin vertical">
                            <span class="large-text">
                                Application supports personalization of auditory settings.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="auditorySettings"
                                    value="true"
                                    v-model="auditorySettings"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="auditorySettings"
                                    value="false"
                                    v-model="auditorySettings"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                            v-if="auditorySettings && auditorySettings === 'true'"
                        >
                            <span class="large-text">
                                Screen reader supported.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="auditorySettingsScreenReader"
                                    value="true"
                                    v-model="auditorySettingsScreenReader"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="auditorySettingsScreenReader"
                                    value="false"
                                    v-model="auditorySettingsScreenReader"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                            v-if="auditorySettings && auditorySettings === 'true'"
                        >
                            <span class="large-text">
                                Audio equalizer supported.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="auditorySettingsEqualizer"
                                    value="true"
                                    v-model="auditorySettingsEqualizer"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="auditorySettingsEqualizer"
                                    value="false"
                                    v-model="auditorySettingsEqualizer"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                            v-if="auditorySettings && auditorySettings === 'true'"
                        >
                            <span class="large-text">
                                Spatial audio supported.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="auditorySettingsSpatialAudio"
                                    value="true"
                                    v-model="auditorySettingsSpatialAudio"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="auditorySettingsSpatialAudio"
                                    value="false"
                                    v-model="auditorySettingsSpatialAudio"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div class="top-margin large-margin">
                            <div
                                class="field label border round no-margin"
                                :class="{ invalid: errors.applicationIconLink }"
                            >
                                <input
                                    type="text"
                                    aria-invalid="true"
                                    aria-describedby="addressError"
                                    v-model="applicationIconLink"
                                />
                                <label>Application's icon link</label>
                                <ErrorMessage
                                    class="horizontal-margin error-text"
                                    name="applicationIconLink"
                                />
                            </div>
                        </div>

                        <div class="top-margin large-margin center-align">
                            <button type="submit">Submit</button>
                        </div>

                    </form>
                </div>
            </article>
        </div>
    </div>
</template>
