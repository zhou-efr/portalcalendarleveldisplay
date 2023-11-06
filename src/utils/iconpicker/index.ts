// randomly pick 9 to 18 icons from the /assets/icons folder
// those icons should be the same for a given month
// for a given day, each icon should be selected as _on or not randomly
// return an array of image objects

import ChamberIconBladesHazard from '@/assets/icons/Chamber_icon_blades_hazard.png';
import ChamberIconBladesHazardOn from '@/assets/icons/Chamber_icon_blades_hazard_on.png';
import ChamberIconBridgeShield from '@/assets/icons/Chamber_icon_bridge_shield.png';
import ChamberIconBridgeShieldOn from '@/assets/icons/Chamber_icon_bridge_shield_on.png';
import ChamberIconCake from '@/assets/icons/Chamber_icon_cake.png';
import ChamberIconCakeOn from '@/assets/icons/Chamber_icon_cake_on.png';
import ChamberIconCrusherHazard from '@/assets/icons/Chamber_icon_crusher_hazard.png';
import ChamberIconCrusherHazardOn from '@/assets/icons/Chamber_icon_crusher_hazard_on.png';
import ChamberIconCubeButton from '@/assets/icons/Chamber_icon_cube_button.png';
import ChamberIconCubeButtonOn from '@/assets/icons/Chamber_icon_cube_button_on.png';
import ChamberIconCubeDispenser from '@/assets/icons/Chamber_icon_cube_dispenser.png';
import ChamberIconCubeDispenserOn from '@/assets/icons/Chamber_icon_cube_dispenser_on.png';
import ChamberIconCubeHazard from '@/assets/icons/Chamber_icon_cube_hazard.png';
import ChamberIconCubeHazardOn from '@/assets/icons/Chamber_icon_cube_hazard_on.png';
import ChamberIconDirtyWater from '@/assets/icons/Chamber_icon_dirty_water.png';
import ChamberIconDirtyWaterOn from '@/assets/icons/Chamber_icon_dirty_water_on.png';
import ChamberIconEmpty from '@/assets/icons/Chamber_icon_empty.png';
import ChamberIconEmptyOn from '@/assets/icons/Chamber_icon_empty_on.png';
import ChamberIconExcursionFunnel from '@/assets/icons/Chamber_icon_excursion_funnel.png';
import ChamberIconExcursionFunnelOn from '@/assets/icons/Chamber_icon_excursion_funnel_on.png';
import ChamberIconExcursionSwitch from '@/assets/icons/Chamber_icon_excursion_switch.png';
import ChamberIconExcursionSwitchOn from '@/assets/icons/Chamber_icon_excursion_switch_on.png';
import ChamberIconFaithPlate from '@/assets/icons/Chamber_icon_faith_plate.png';
import ChamberIconFaithPlateOn from '@/assets/icons/Chamber_icon_faith_plate_on.png';
import ChamberIconFlingEnter from '@/assets/icons/Chamber_icon_fling_enter.png';
import ChamberIconFlingEnterOn from '@/assets/icons/Chamber_icon_fling_enter_on.png';
import ChamberIconFlingExit from '@/assets/icons/Chamber_icon_fling_exit.png';
import ChamberIconFlingExitOn from '@/assets/icons/Chamber_icon_fling_exit_on.png';
import ChamberIconLaserField from '@/assets/icons/Chamber_icon_laser_field.png';
import ChamberIconLaserFieldOn from '@/assets/icons/Chamber_icon_laser_field_on.png';
import ChamberIconLaserHazard from '@/assets/icons/Chamber_icon_laser_hazard.png';
import ChamberIconLaserHazardOn from '@/assets/icons/Chamber_icon_laser_hazard_on.png';
import ChamberIconLaserRedirection from '@/assets/icons/Chamber_icon_laser_redirection.png';
import ChamberIconLaserRedirectionOn from '@/assets/icons/Chamber_icon_laser_redirection_on.png';
import ChamberIconLaserSensor from '@/assets/icons/Chamber_icon_laser_sensor.png';
import ChamberIconLaserSensorOn from '@/assets/icons/Chamber_icon_laser_sensor_on.png';
import ChamberIconLightBridge from '@/assets/icons/Chamber_icon_light_bridge.png';
import ChamberIconLightBridgeOn from '@/assets/icons/Chamber_icon_light_bridge_on.png';
import ChamberIconPassCube from '@/assets/icons/Chamber_icon_pass_cube.png';
import ChamberIconPassCubeOn from '@/assets/icons/Chamber_icon_pass_cube_on.png';
import ChamberIconPelletCatcher from '@/assets/icons/Chamber_icon_pellet_catcher.png';
import ChamberIconPelletCatcherOn from '@/assets/icons/Chamber_icon_pellet_catcher_on.png';
import ChamberIconPelletHazard from '@/assets/icons/Chamber_icon_pellet_hazard.png';
import ChamberIconPelletHazardOn from '@/assets/icons/Chamber_icon_pellet_hazard_on.png';
import ChamberIconPlayerButton from '@/assets/icons/Chamber_icon_player_button.png';
import ChamberIconPlayerButtonOn from '@/assets/icons/Chamber_icon_player_button_on.png';
import ChamberIconPropulsionGel from '@/assets/icons/Chamber_icon_propulsion_gel.png';
import ChamberIconPropulsionGelOn from '@/assets/icons/Chamber_icon_propulsion_gel_on.png';
import ChamberIconRepulsionGel from '@/assets/icons/Chamber_icon_repulsion_gel.png';
import ChamberIconRepulsionGelOn from '@/assets/icons/Chamber_icon_repulsion_gel_on.png';
import ChamberIconTurretHazard from '@/assets/icons/Chamber_icon_turret_hazard.png';
import ChamberIconTurretHazardOn from '@/assets/icons/Chamber_icon_turret_hazard_on.png';
import ChamberIconWaterHazard from '@/assets/icons/Chamber_icon_water_hazard.png';
import ChamberIconWaterHazardOn from '@/assets/icons/Chamber_icon_water_hazard_on.png';
import {StaticImageData} from "next/image";

const icons: {[key: string]: {[key: string]: StaticImageData}} = {
    "Chamber_icon_blades_hazard": {
        "on": ChamberIconBladesHazardOn,
        "off": ChamberIconBladesHazard,
    },
    "Chamber_icon_bridge_shield": {
        "on": ChamberIconBridgeShieldOn,
        "off": ChamberIconBridgeShield,
    },
    "Chamber_icon_cake": {
        "on": ChamberIconCakeOn,
        "off": ChamberIconCake,
    },
    "Chamber_icon_crusher_hazard": {
        "on": ChamberIconCrusherHazardOn,
        "off": ChamberIconCrusherHazard,
    },
    "Chamber_icon_cube_button": {
        "on": ChamberIconCubeButtonOn,
        "off": ChamberIconCubeButton,
    },
    "Chamber_icon_cube_dispenser": {
        "on": ChamberIconCubeDispenserOn,
        "off": ChamberIconCubeDispenser,
    },
    "Chamber_icon_cube_hazard": {
        "on": ChamberIconCubeHazardOn,
        "off": ChamberIconCubeHazard,
    },
    "Chamber_icon_dirty_water": {
        "on": ChamberIconDirtyWaterOn,
        "off": ChamberIconDirtyWater,
    },
    "Chamber_icon_empty": {
        "on": ChamberIconEmptyOn,
        "off": ChamberIconEmpty,
    },
    "Chamber_icon_excursion_funnel": {
        "on": ChamberIconExcursionFunnelOn,
        "off": ChamberIconExcursionFunnel,
    },
    "Chamber_icon_excursion_switch": {
        "on": ChamberIconExcursionSwitchOn,
        "off": ChamberIconExcursionSwitch,
    },
    "Chamber_icon_faith_plate": {
        "on": ChamberIconFaithPlateOn,
        "off": ChamberIconFaithPlate,
    },
    "Chamber_icon_fling_enter": {
        "on": ChamberIconFlingEnterOn,
        "off": ChamberIconFlingEnter,
    },
    "Chamber_icon_fling_exit": {
        "on": ChamberIconFlingExitOn,
        "off": ChamberIconFlingExit,
    },
    "Chamber_icon_laser_field": {
        "on": ChamberIconLaserFieldOn,
        "off": ChamberIconLaserField,
    },
    "Chamber_icon_laser_hazard": {
        "on": ChamberIconLaserHazardOn,
        "off": ChamberIconLaserHazard,
    },
    "Chamber_icon_laser_redirection": {
        "on": ChamberIconLaserRedirectionOn,
        "off": ChamberIconLaserRedirection,
    },
    "Chamber_icon_laser_sensor": {
        "on": ChamberIconLaserSensorOn,
        "off": ChamberIconLaserSensor,
    },
    "Chamber_icon_light_bridge": {
        "on": ChamberIconLightBridgeOn,
        "off": ChamberIconLightBridge,
    },
    "Chamber_icon_pass_cube": {
        "on": ChamberIconPassCubeOn,
        "off": ChamberIconPassCube,
    },
    "Chamber_icon_pellet_catcher": {
        "on": ChamberIconPelletCatcherOn,
        "off": ChamberIconPelletCatcher,
    },
    "Chamber_icon_pellet_hazard": {
        "on": ChamberIconPelletHazardOn,
        "off": ChamberIconPelletHazard,
    },
    "Chamber_icon_player_button": {
        "on": ChamberIconPlayerButtonOn,
        "off": ChamberIconPlayerButton,
    },
    "Chamber_icon_propulsion_gel": {
        "on": ChamberIconPropulsionGelOn,
        "off": ChamberIconPropulsionGel,
    },
    "Chamber_icon_repulsion_gel": {
        "on": ChamberIconRepulsionGelOn,
        "off": ChamberIconRepulsionGel,
    },
    "Chamber_icon_turret_hazard": {
        "on": ChamberIconTurretHazardOn,
        "off": ChamberIconTurretHazard,
    },
    "Chamber_icon_water_hazard": {
        "on": ChamberIconWaterHazardOn,
        "off": ChamberIconWaterHazard,
    },
};

const months = ["juanuary", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

function cyrb128(str: String) {
    let h1 = 1779033703, h2 = 3144134277,
        h3 = 1013904242, h4 = 2773480762;
    for (let i = 0, k; i < str.length; i++) {
        k = str.charCodeAt(i);
        h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
        h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
        h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
        h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
    }
    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
    h1 ^= (h2 ^ h3 ^ h4), h2 ^= h1, h3 ^= h1, h4 ^= h1;
    return [h1>>>0, h2>>>0, h3>>>0, h4>>>0];
}

function sfc32(a: number, b: number, c: number, d: number) {
    return function() {
        a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0;
        var t = (a + b) | 0;
        a = b ^ b >>> 9;
        b = c + (c << 3) | 0;
        c = (c << 21 | c >>> 11);
        d = d + 1 | 0;
        t = t + d | 0;
        c = c + t | 0;
        return (t >>> 0) / 4294967296;
    }
}

interface icon {
    name: string,
    image: StaticImageData,
    on: boolean,
}

const getIcons = (month: number, day: number) : icon[] => {
    const seed = cyrb128(months[month]);
    const rng = sfc32(seed[0], seed[1], seed[2], seed[3]);

    const iconOnOffSeed = cyrb128(months[month] + day.toString());
    const iconOnOffRng = sfc32(iconOnOffSeed[0], iconOnOffSeed[1], iconOnOffSeed[2], iconOnOffSeed[3]);

    const iconsToUse = Object.keys(icons).sort(() => rng() - 0.5).slice(0, 9 + Math.floor(rng() * 10));
    return iconsToUse.map((icon) => {
        const on = iconOnOffRng() > 0.5;
        return {
            "name": icon,
            "image": on ? icons[icon].on : icons[icon].off,
            "on": on,
        }
    });
}

export {
    getIcons,
}