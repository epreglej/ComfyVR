<script setup>
definePageMeta({
    layout: "ratings-layout",
    name: "Comfort",
});

function generateRandomData(length, min, max) {
    const data = [];
    for (let i = 0; i < length; i++) {
        data.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return data;
}

function calculateComfortRating(record) {
    let comfortPointCounter = 0;
    let totalComfortPoints = 0;

    if (!record.cameraMovementChoppy) {
        totalComfortPoints += 1;
        comfortPointCounter += 1;
    } else {
        totalComfortPoints += 1;
    }

    if (!record.cameraMovementUnpredictable) {
        totalComfortPoints += 1;
        comfortPointCounter += 1;
    } else {
        totalComfortPoints += 1;
    }

    if (record.cameraMovementAlternativeMethods) {
        totalComfortPoints += 1;
        comfortPointCounter += 1;
    } else {
        totalComfortPoints += 1;
    }

    if (record.visualSettings) {
        totalComfortPoints += 1;
        comfortPointCounter += 1;
    } else {
        totalComfortPoints += 1;
    }

    if (record.visualSettingsVFX) {
        totalComfortPoints += 1;
        comfortPointCounter += 1;
    } else {
        totalComfortPoints += 1;
    }

    if (record.visualSettingsColorblind) {
        totalComfortPoints += 1;
        comfortPointCounter += 1;
    } else {
        totalComfortPoints += 1;
    }

    if (record.auditorySettings) {
        totalComfortPoints += 1;
        comfortPointCounter += 1;
    } else {
        totalComfortPoints += 1;
    }

    if (record.auditorySettingsEqualizer) {
        totalComfortPoints += 1;
        comfortPointCounter += 1;
    } else {
        totalComfortPoints += 1;
    }

    if (record.inputSettings) {
        totalComfortPoints += 1;
        comfortPointCounter += 1;
    } else {
        totalComfortPoints += 1;
    }

    if (record.inputSettingsAlternativeMovement) {
        totalComfortPoints += 1;
        comfortPointCounter += 1;
    } else {
        totalComfortPoints += 1;
    }

    if (record.inputSettingsRemapping) {
        totalComfortPoints += 1;
        comfortPointCounter += 1;
    } else {
        totalComfortPoints += 1;
    }

    return ((comfortPointCounter / totalComfortPoints) * 100).toFixed() + "%";
}

function calculateAccessibilityRating(record) {
    let accessibilityPointCounter = 0;
    let totalAccessibilityPoints = 0;

    if (record.cameraMovementAlternativeMethods) {
        totalAccessibilityPoints += 1;
        accessibilityPointCounter += 1;
    } else {
        totalAccessibilityPoints += 1;
    }

    if (record.visualSettings) {
        totalAccessibilityPoints += 1;
        accessibilityPointCounter += 1;
    } else {
        totalAccessibilityPoints += 1;
    }

    if (record.visualSettingsSubtitles) {
        totalAccessibilityPoints += 1;
        accessibilityPointCounter += 1;
    } else {
        totalAccessibilityPoints += 1;
    }

    if (record.visualSettingsVFX) {
        totalAccessibilityPoints += 1;
        accessibilityPointCounter += 1;
    } else {
        totalAccessibilityPoints += 1;
    }

    if (record.visualSettingsColorblind) {
        totalAccessibilityPoints += 1;
        accessibilityPointCounter += 1;
    } else {
        totalAccessibilityPoints += 1;
    }

    if (record.auditorySettings) {
        totalAccessibilityPoints += 1;
        accessibilityPointCounter += 1;
    } else {
        totalAccessibilityPoints += 1;
    }

    if (record.auditorySettingsScreenReader) {
        totalAccessibilityPoints += 1;
        accessibilityPointCounter += 1;
    } else {
        totalAccessibilityPoints += 1;
    }

    if (record.auditorySettingsSpatialAudio) {
        totalAccessibilityPoints += 1;
        accessibilityPointCounter += 1;
    } else {
        totalAccessibilityPoints += 1;
    }

    if (record.inputSettings) {
        totalAccessibilityPoints += 1;
        accessibilityPointCounter += 1;
    } else {
        totalAccessibilityPoints += 1;
    }

    if (record.inputSettingsAlternativeMovement) {
        totalAccessibilityPoints += 1;
        accessibilityPointCounter += 1;
    } else {
        totalAccessibilityPoints += 1;
    }

    if (record.inputSettingsRemapping) {
        totalAccessibilityPoints += 1;
        accessibilityPointCounter += 1;
    } else {
        totalAccessibilityPoints += 1;
    }

    if (record.inputSettingsAimAssist) {
        totalAccessibilityPoints += 1;
        accessibilityPointCounter += 1;
    } else {
        totalAccessibilityPoints += 1;
    }

    return (
        (
            (accessibilityPointCounter / totalAccessibilityPoints) *
            100
        ).toFixed() + "%"
    );
}

function calculateSafetyRating(record) {
    let safetyPointCounter = 0;
    let totalSafetyPoints = 0;

    if (!record.cameraMovementChoppy) {
        totalSafetyPoints += 1;
        safetyPointCounter += 1;
    } else {
        totalSafetyPoints += 1;
    }

    if (!record.cameraMovementUnpredictable) {
        totalSafetyPoints += 1;
        safetyPointCounter += 1;
    } else {
        totalSafetyPoints += 1;
    }

    if (record.visualSettingsVFX) {
        totalSafetyPoints += 1;
        safetyPointCounter += 1;
    } else {
        totalSafetyPoints += 1;
    }

    if (record.auditorySettings) {
        totalSafetyPoints += 1;
        safetyPointCounter += 1;
    } else {
        totalSafetyPoints += 1;
    }

    if (record.inputSettingsAlternativeMovement) {
        totalSafetyPoints += 1;
        safetyPointCounter += 1;
    } else {
        totalSafetyPoints += 1;
    }

    return ((safetyPointCounter / totalSafetyPoints) * 100).toFixed() + "%";
}

const route = useRoute();
const client = useSupabaseClient();

let record = null;

try {
    const { data, error } = await client
        .from("applications")
        .select("*")
        .eq("id", route.params.id);

    if (error) {
        console.error("Error during insertion:", error);
    } else {
        console.log("Record successfully read:", data);
        record = data[0];
    }
} catch (error) {
    console.error("Error:", error);
}

let comfortRatingPercentage = calculateComfortRating(record);
let accessibilityRatingPercentage = calculateAccessibilityRating(record);
let safetyRatingPercentage = calculateSafetyRating(record);
</script>

<template>
    <div class="main responsive right page active center-align">
        <i class="extra">
            <img class="" :src="record.applicationIconLink" />
        </i>
        <span class="large-text">{{ record.applicationName }}</span>

        <article class="medium no-elevate surface">
            <div class="absolute center">
                <div class="stickman-wrapper">
                    <a href="#" class="head" data-ui="#head-dialog"></a>
                    <NuxtLink
                        to="#"
                        class="leftear"
                        data-ui="#ears-dialog"
                    ></NuxtLink>
                    <NuxtLink
                        to="#"
                        class="rightear"
                        data-ui="#ears-dialog"
                    ></NuxtLink>
                    <NuxtLink
                        to="#"
                        class="lefteye"
                        data-ui="#eyes-dialog"
                    ></NuxtLink>
                    <NuxtLink
                        to="#"
                        class="righteye"
                        data-ui="#eyes-dialog"
                    ></NuxtLink>
                    <NuxtLink to="" class="mouth"></NuxtLink>
                    <NuxtLink to="" class="neck"></NuxtLink>
                    <NuxtLink
                        to="#"
                        class="stomach"
                        data-ui="#stomach-dialog"
                    ></NuxtLink>
                    <NuxtLink
                        to="#"
                        class="leftarm"
                        data-ui="#arms-dialog"
                    ></NuxtLink>
                    <NuxtLink
                        to="#"
                        class="rightarm"
                        data-ui="#arms-dialog"
                    ></NuxtLink>
                    <NuxtLink
                        to="#"
                        class="leftleg"
                        data-ui="#legs-dialog"
                    ></NuxtLink>
                    <NuxtLink
                        to="#"
                        class="rightleg"
                        data-ui="#legs-dialog"
                    ></NuxtLink>
                </div>
            </div>
        </article>

        <table class="center-align large-width center">
            <tbody>
                <tr>
                    <td class="large-text bold">Comfort</td>
                    <td class="large-text bold">Accessibility</td>
                    <td class="large-text bold">Safety</td>
                </tr>
                <tr>
                    <td>{{ comfortRatingPercentage }}</td>
                    <td>{{ accessibilityRatingPercentage }}</td>
                    <td>{{ safetyRatingPercentage }}</td>
                </tr>
            </tbody>
        </table>

        <div class="overlay blur"></div>
        <dialog id="head-dialog" class="left-align">
            <h6 class="bold">Comfort</h6>
            <ul class="small-margin">
                <li v-if="record.cameraMovementChoppy">
                    Camera movement may look choppy, resulting in
                    <span class="bold"> headache </span>
                </li>
                <li v-if="record.cameraMovementUnpredictable">
                    Camera may move unexpectedly or shake a lot, resulting in
                    <span class="bold">headache</span> and
                    <span class="bold"> disorientation</span>
                </li>
                <li v-if="!record.cameraMovementAlternativeMethods">
                    Alternative camera movement methods (e.g. snap turning) not
                    supported, may result in
                    <span class="bold">discomfort</span> and
                    <span class="bold"> headache</span>
                </li>
                <li v-if="!record.inputSettingsAlternativeMovement">
                    Alternative movement methods (e.g. teleportation) not
                    supported, may result in <span class="bold">headache</span>
                </li>
            </ul>

            <h6 class="bold">Accessibility</h6>
            <ul class="small-margin">
                <li v-if="!record.cameraMovementAlternativeMethods">
                    Alternative camera movement methods (e.g. voice commands)
                    not supported, may result in
                    <span class="bold">straining</span>,
                    <span class="bold">disorientation</span> and
                    <span class="bold">difficulty</span> when interacting
                </li>

                <li v-if="!record.visualSettingsSubtitles">
                    Subtitles not available, may result in
                    <span class="bold">lack of context</span> and
                    <span class="bold">confusion</span>
                </li>

                <li v-if="!record.visualSettingsVFX">
                    VFX intensity not customizable, may result in
                    <span class="bold">headache</span> and
                    <span class="bold">confusion</span>
                </li>
            </ul>

            <h6 class="bold">Safety</h6>
            <ul class="small-margin">
                <li v-if="record.cameraMovementChoppy">
                    Camera movement may look choppy, resulting in
                    <span class="bold">dizziness</span>
                </li>
                <li v-if="record.cameraMovementUnpredictable">
                    Camera may move unexpectedly or shake a lot, resulting in
                    <span class="bold">dizziness</span>
                </li>
                <li v-if="!record.visualSettingsVFX">
                    VFX intensity not customizable, may result in
                    <span class="bold">seizures</span>
                </li>
                <li v-if="!record.inputSettingsAlternativeMovement">
                    Alternative movement methods (e.g. teleportation) not
                    supported, may result in <span class="bold">dizziness</span>
                </li>
            </ul>

            <nav class="center-align no-space">
                <button class="transparent link" data-ui="#head-dialog">
                    Close
                </button>
            </nav>
        </dialog>

        <div class="overlay blur"></div>
        <dialog id="ears-dialog" class="left-align">
            <h5 class="bold">Comfort</h5>

            <ul class="small-margin">
                <li v-if="!record.auditorySettings">
                    Audiotory settings not customizable, may result in
                    <span class="bold">ear discomfort</span>
                </li>
                <li v-if="!record.auditorySettingsEqualizer">
                    Audio equalizer not supported, may result in
                    <span class="bold">ear discomfort</span> and
                    <span class="bold">frustration</span> (e.g. some sounds are
                    too loud others too quiet, user just can't get the volume
                    right)
                </li>
            </ul>

            <h5 class="bold">Accessibility</h5>
            <ul class="small-margin">
                <li v-if="!record.visualSettingsSubtitles">
                    Subtitles not available, may result in
                    <span class="bold">diminished experience</span> and
                    <span class="bold">unusability</span>
                </li>
                <li v-if="!record.auditorySettings">
                    Audiotory settings not customizable, may result in
                    <span class="bold">diminished experience</span> and
                    <span class="bold">unusability</span>
                </li>
                <li v-if="!record.auditorySettingsScreenReader">
                    Audio equalizer not supported, may result in
                    <span class="bold">diminished experience</span>
                </li>
                <li v-if="!record.auditorySettingsSpatialAudio">
                    Spatial audio not supported, may result in
                    <span class="bold">disorientation</span>
                </li>
            </ul>

            <h5 class="bold">Safety</h5>
            <ul class="small-margin">
                <li v-if="!record.auditorySettings">
                    Audiotory settings not customizable, may result in
                    <span class="bold">hearing loss</span>
                </li>
            </ul>

            <nav class="center-align no-space">
                <button class="transparent link" data-ui="#ears-dialog">
                    Close
                </button>
            </nav>
        </dialog>

        <div class="overlay blur"></div>
        <dialog id="eyes-dialog" class="left-align">
            <h6 class="bold">Comfort</h6>

            <ul class="small-margin">
                <li v-if="!record.visualSettingsVFX">
                    VFX intensity not customizable, may result in
                    <span class="bold">eye strain</span>
                </li>

                <li v-if="!record.visualSettingsColorblind">
                    Colorblind mode not available, may result in
                    <span class="bold">eye strain</span>
                </li>
            </ul>

            <h6 class="bold">Accessibility</h6>
            <ul class="small-margin">
                <li v-if="!record.visualSettings">
                    Visual settings not customizable, may result in
                    <span class="bold">diminished experience</span> and
                    <span class="bold">unusability</span>
                </li>

                <li v-if="!record.visualSettingsColorblind">
                    Colorblind mode not available, may result in
                    <span class="bold">diminished experience</span> and
                    <span class="bold">unusability</span>
                </li>

                <li v-if="!record.auditorySettingsScreenReader">
                    Screen reader not supported, may result in
                    <span class="bold">diminished experience</span> and
                    <span class="bold">unusability</span>
                </li>

                <li v-if="!record.auditorySettingsSpatialAudio">
                    Spatial audio not supported, may result in
                    <span class="bold">disorientation</span>
                </li>
            </ul>

            <nav class="center-align no-space">
                <button class="transparent link" data-ui="#eyes-dialog">
                    Close
                </button>
            </nav>
        </dialog>

        <div class="overlay blur"></div>
        <dialog id="stomach-dialog" class="left-align">
            <h6 class="bold">Comfort</h6>

            <ul class="small-margin">
                <li v-if="record.cameraMovementChoppy">
                    Camera movement may look choppy, resulting in
                    <span class="bold">nausea</span>
                </li>
                <li v-if="record.cameraMovementUnpredictable">
                    Camera may move unexpectedly or shake a lot, resulting in
                    <span class="bold">nausea</span>
                </li>
                <li v-if="!record.inputSettingsAlternativeMovement">
                    Alternative movement methods (e.g. teleportation) not
                    supported, may result in <span class="bold">nausea</span>
                </li>
            </ul>

            <h6 class="bold">Accessibility</h6>
            <ul class="small-margin">
                <li v-if="!record.cameraMovementAlternativeMethods">
                    Alternative camera movement methods (e.g. snap turning) not
                    supported, may result in
                    <span class="bold">motion sickness</span>
                </li>
            </ul>
            <nav class="center-align no-space">
                <button class="transparent link" data-ui="#stomach-dialog">
                    Close
                </button>
            </nav>
        </dialog>

        <div class="overlay blur"></div>
        <dialog id="arms-dialog" class="left-align">
            <h5 class="bold">Comfort</h5>
            <ul class="margin">
                <li v-if="!record.inputSettings">
                    Input settings not customizable, may result in
                    <span class="bold">reduced comfort</span>
                </li>
                <li v-if="!record.inputSettingsRemapping">
                    Keybind remapping not supported, may result in
                    <span class="bold">reduced comfort</span>
                </li>
            </ul>

            <h5 class="bold">Accessibility</h5>
            <ul class="margin">
                <li v-if="!record.inputSettings">
                    Input settings not customizable, may result in
                    <span class="bold">diminished experience</span> and
                    <span class="bold">unusability</span>
                </li>
                <li v-if="!record.inputSettingsRemapping">
                    Keybind remapping not supported, may result in
                    <span class="bold">diminished experience</span> and
                    <span class="bold">unusability</span>
                </li>
                <li v-if="!record.inputSettingsAimAssist">
                    Aim assist not available, may result in
                    <span class="bold">diminished experience</span> and
                    <span class="bold">frustration</span>
                </li>
            </ul>

            <nav class="center-align no-space">
                <button class="transparent link" data-ui="#arms-dialog">
                    Close
                </button>
            </nav>
        </dialog>

        <div class="overlay blur"></div>
        <dialog id="legs-dialog" class="left-align">
            <h5 class="bold">Comfort</h5>
            <ul class="margin">
                <li v-if="!record.inputSettings">
                    Input settings not customizable, may result in
                    <span class="bold">reduced comfort</span>
                </li>
            </ul>

            <h5 class="bold">Accessibility</h5>
            <ul class="margin">
                <li v-if="!record.inputSettings">
                    Input settings not customizable, may result in
                    <span class="bold">diminished experience</span> and
                    <span class="bold">unusability</span>
                </li>
                <li v-if="!record.inputSettingsAlternativeMovement">
                    Alternative movement methods (e.g. teleportation) not
                    supported, may result in
                    <span class="bold">diminished experience</span> and
                    <span class="bold">unusability</span>
                </li>
            </ul>

            <h5 class="bold">Safety</h5>
            <ul class="margin">
                <li v-if="!record.inputSettingsAlternativeMovement">
                    Alternative movement methods (e.g. teleportation) not
                    supported, may result in
                    <span class="bold">falling over</span> (e.g. user is trying
                    to reach for something that is too far because his leg
                    mobility is limited)
                </li>
            </ul>
            <nav class="center-align no-space">
                <button class="transparent link" data-ui="#legs-dialog">
                    Close
                </button>
            </nav>
        </dialog>
    </div>
</template>
