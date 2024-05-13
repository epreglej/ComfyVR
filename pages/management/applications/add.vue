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
        cameraMovementSmooth: zod.string(),
        cameraMovementPredictable: zod.string(),
        cameraMovementAlternativeMethods: zod.string(),
        visualSettings: zod.string(),
        visualSettingsSubtitles: zod.string(),
        visualSettingsVFX: zod.string(),
        visualSettingsColorblind: zod.string(),
        soundSettings: zod.string(),
        soundSettingsScreenReader: zod.string(),
        soundSettingsEqualizer: zod.string(),
        soundSettingsSpatialAudio: zod.string(),
        inputSettings: zod.string(),
        inputSettingsAlternativeMovement: zod.string(),
        inputSettingsRemapping: zod.string(),
        inputSettingsAimAssist: zod.string(),
        guardianSystem: zod.string(),
        sensitiveContentToggleable: zod.string(),
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

const { value: cameraMovementSmooth } = useField(
    "cameraMovementSmooth",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: cameraMovementPredictable } = useField(
    "cameraMovementPredictable",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: cameraMovementAlternativeMethods } = useField(
    "cameraMovementAlternativeMethods",
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

const { value: soundSettings } = useField(
    "soundSettings",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: soundSettingsScreenReader } = useField(
    "soundSettingsScreenReader",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: soundSettingsEqualizer } = useField(
    "soundSettingsEqualizer",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: soundSettingsSpatialAudio } = useField(
    "soundSettingsSpatialAudio",
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

const { value: inputSettingsAimAssist } = useField(
    "inputSettingsAimAssist",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: guardianSystem } = useField(
    "guardianSystem",
    zod.boolean(),
    {
        initialValue: "false",
    },
);

const { value: sensitiveContentToggleable } = useField(
    "sensitiveContentToggleable",
    zod.boolean(),
    {
        initialValue: "false",
    },
);



watch(cameraMovement, (newValue) => {
    if (newValue === "false") {
        cameraMovementSmooth.value = "false";
        cameraMovementPredictable.value = "false";
        cameraMovementAlternativeMethods.value = "false";
    }
});

watch(visualSettings, (newValue) => {
    if (newValue === "false") {
        visualSettingsSubtitles.value = "false";
        visualSettingsVFX.value = "false";
        visualSettingsColorblind.value = "false";
    }
});

watch(soundSettings, (newValue) => {
    if (newValue === "false") {
        soundSettingsScreenReader.value = "false";
        soundSettingsEqualizer.value = "false";
        soundSettingsSpatialAudio.value = "false";
    }
});

watch(inputSettings, (newValue) => {
    if (newValue === "false") {
        inputSettingsAlternativeMovement.value = "false";
        inputSettingsRemapping.value = "false";
        inputSettingsAimAssist.value = "false";
    }
});

const onSubmit = handleSubmit(async (values) => {
    try {
        const { data, error } = await client.from("applications").insert({
            applicationName: values.applicationName,
            applicationIconLink: values.applicationIconLink,
            cameraMovement: values.cameraMovement === "true",
            cameraMovementSmooth: values.cameraMovementSmooth === "true",
            cameraMovementPredictable: values.cameraMovementPredictable ==="true",
            cameraMovementAlternativeMethods: values.cameraMovementAlternativeMethods === "true",
            visualSettings: values.visualSettings === "true",
            visualSettingsSubtitles: values.visualSettingsSubtitles === "true",
            visualSettingsVFX: values.visualSettingsVFX === "true",
            visualSettingsColorblind: values.visualSettingsColorblind === "true",
            soundSettings: values.soundSettings === "true",
            soundSettingsScreenReader: values.soundSettingsScreenReader === "true",
            soundSettingsEqualizer: values.soundSettingsEqualizer === "true",
            soundSettingsSpatialAudio: values.soundSettingsSpatialAudio === "true",
            inputSettings: values.inputSettings === "true",
            inputSettingsAlternativeMovement: values.inputSettingsAlternativeMovement === "true",
            inputSettingsRemapping: values.inputSettingsRemapping === "true",
            inputSettingsAimAssist: values.inputSettingsAimAssist === "true",
            guardianSystem: values.guardianSystem === "true",
            sensitiveContentToggleable: values.sensitiveContentToggleable === "true",
        });

        if (error) {
            console.error("Error during insert:", error);
        } else {
          alert("New application added successfully!");
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
                    <p class="top-margin center-align"><h6 class="center-align">Add an application</h6></p>
                        <div class="top-margin large-margin">
                            <div
                                class="field label border round bottom-margin small-margin"
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
                                Camera movement is smooth.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="cameraMovementSmooth"
                                    value="true"
                                    v-model="cameraMovementSmooth"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="cameraMovementSmooth"
                                    value="false"
                                    v-model="cameraMovementSmooth"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                            v-if="cameraMovement === 'true'"
                        >
                            <span class="large-text">
                                Camera movement is predictable.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="cameraMovementPredictable"
                                    value="true"
                                    v-model="cameraMovementPredictable"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="cameraMovementPredictable"
                                    value="false"
                                    v-model="cameraMovementPredictable"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                            v-if="cameraMovement === 'true'"
                        >
                            <span class="large-text">
                                Alternative camera movement methods supported (e.g. snap turning).
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="cameraMovementAlternativeMethods"
                                    value="true"
                                    v-model="cameraMovementAlternativeMethods"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="cameraMovementAlternativeMethods"
                                    value="false"
                                    v-model="cameraMovementAlternativeMethods"
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
                                Application supports visual settings customization.
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
                                Application supports sound settings customization.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="soundSettings"
                                    value="true"
                                    v-model="soundSettings"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="soundSettings"
                                    value="false"
                                    v-model="soundSettings"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                            v-if="soundSettings && soundSettings === 'true'"
                        >
                            <span class="large-text">
                                Screen reader supported.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="soundSettingsScreenReader"
                                    value="true"
                                    v-model="soundSettingsScreenReader"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="soundSettingsScreenReader"
                                    value="false"
                                    v-model="soundSettingsScreenReader"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                            v-if="soundSettings && soundSettings === 'true'"
                        >
                            <span class="large-text">
                                Audio equalizer supported.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="soundSettingsEqualizer"
                                    value="true"
                                    v-model="soundSettingsEqualizer"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="soundSettingsEqualizer"
                                    value="false"
                                    v-model="soundSettingsEqualizer"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                            v-if="soundSettings && soundSettings === 'true'"
                        >
                            <span class="large-text">
                                Spatial audio supported.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="soundSettingsSpatialAudio"
                                    value="true"
                                    v-model="soundSettingsSpatialAudio"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="soundSettingsSpatialAudio"
                                    value="false"
                                    v-model="soundSettingsSpatialAudio"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                        >
                            <span class="large-text">
                                Guardian system supported / not required.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="guardianSystem"
                                    value="true"
                                    v-model="guardianSystem"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="guardianSystem"
                                    value="false"
                                    v-model="guardianSystem"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div
                            class="horizontal-margin top-margin vertical"
                        >
                            <span class="large-text">
                                Sensitive content doesn't exist / can be disabled.
                            </span>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="sensitiveContentToggleable"
                                    value="true"
                                    v-model="sensitiveContentToggleable"
                                />
                                <span>Yes</span>
                            </label>

                            <label class="radio">
                                <input
                                    type="radio"
                                    name="sensitiveContentToggleable"
                                    value="false"
                                    v-model="sensitiveContentToggleable"
                                />
                                <span>No</span>
                            </label>
                        </div>

                        <div class="vertical-margin large-margin">
                            <div
                                class="field label border round bottom-margin medium-margin"
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
