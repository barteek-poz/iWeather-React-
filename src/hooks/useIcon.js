import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiDaySprinkle,
  WiDaySnow,
  WiDaySleet,
  WiRainMix,
  WiDayLightning,
  WiSnowWind,
  WiFog,
  WiDayRainMix,
  WiSleet,
  WiSnow,
  WiDayRain,
  WiThunderstorm,
  WiDaySnowThunderstorm,
  WiNightClear,
  WiNightAltCloudy,
  WiCloudy,
  WiNightAltRainMix,
  WiNightAltSleet,
  WiNightLightning,
  WiNightFog,
  WiRainWind,
  WiNightAltSprinkle,
  WiNightAltSnow,
} from "react-icons/wi";

const useIcon = (iconCode, isDay) => {
  let icon;
  if (isDay === 1) {
    switch (iconCode) {
      case 1000:
        icon = <WiDaySunny />;
        break;

      case 1003:
        icon = <WiDayCloudy />;
        break;

      case 1006:
      case 1009:
      case 1030:
        icon = <WiCloud />;
        break;

      case 1063:
        icon = <WiDaySprinkle />;
        break;

      case 1066:
      case 1210:
      case 1216:
      case 1222:
      case 1255:
      case 1258:
      case 1261:
      case 1264:
        icon = <WiDaySnow />;
        break;

      case 1069:
      case 1249:
      case 1252:
        icon = <WiDaySleet />;
        break;

      case 1072:
      case 1150:
      case 1153:
      case 1168:
      case 1171:
      case 1183:
      case 1189:
      case 1195:
        icon = <WiRainMix />;
        break;

      case 1087:
      case 1273:
        icon = <WiDayLightning />;
        break;

      case 1114:
      case 1117:
        icon = <WiSnowWind />;
        break;

      case 1135:
      case 1147:
        icon = <WiFog />;
        break;

      case 1180:
      case 1186:
      case 1192:
        icon = <WiDayRainMix />;
        break;

      case 1198:
      case 1201:
      case 1204:
      case 1207:
        icon = <WiSleet />;
        break;

      case 1213:
      case 1219:
      case 1225:
      case 1237:
        icon = <WiSnow />;
        break;

      case 1240:
      case 1243:
      case 1246:
        icon = <WiDayRain />;
        break;

      case 1276:
        icon = <WiThunderstorm />;
        break;

      case 1279:
      case 1282:
        icon = <WiDaySnowThunderstorm />;
        break;

      default:
        icon = <WiDaySunny />;
        break;
    }
  }

  if (isDay === 0) {
    switch (iconCode) {
      case 1000:
        icon = <WiNightClear />;
        break;

      case 1003:
        icon = <WiNightAltCloudy />;
        break;

      case 1006:
      case 1009:
      case 1030:
        icon = <WiCloudy />;
        break;

      case 1063:
      case 1180:
      case 1186:
      case 1192:
      case 1240:
      case 1243:
      case 1246:
        icon = <WiNightAltRainMix />;
        break;

      case 1066:
      case 1210:
      case 1216:
      case 1222:
      case 1255:
      case 1258:
      case 1261:
      case 1264:
        icon = <WiNightAltSnow />;
        break;

      case 1069:
      case 1204:
      case 1207:
      case 1249:
      case 1252:
        icon = <WiNightAltSleet />;
        break;

      case 1072:
      case 1114:
      case 1117:
      case 1219:
      case 1225:
      case 1237:
        icon = <WiSnowWind />;
        break;

      case 1087:
      case 1273:
      case 1279:
        icon = <WiNightLightning />;
        break;

      case 1135:
      case 1147:
        icon = <WiNightFog />;
        break;

      case 1150:
      case 1153:
      case 1168:
      case 1171:
      case 1198:
      case 1201:
        icon = <WiRainWind />;
        break;

      case 1183:
      case 1189:
      case 1195:
        icon = <WiNightAltSprinkle />;
        break;

      case 1276:
      case 1282:
        icon = <WiThunderstorm />;
        break;

      default:
        icon = <WiNightClear />;
        break;
        
    }
  }

  return icon;
};

export default useIcon;
