import { Button } from "@/components/button/Button";
import { LoadingSVG } from "@/components/button/LoadingSVG";
import { SettingsDropdown } from "@/components/playground/SettingsDropdown";
import { useConfig } from "@/hooks/useConfig";
import { ConnectionState } from "livekit-client";
import { ReactNode } from "react";

type PlaygroundHeader = {
  logo?: ReactNode;
  title?: ReactNode;
  githubLink?: string;
  height: number;
  accentColor: string;
  connectionState: ConnectionState;
  onConnectClicked: () => void;
};

export const PlaygroundHeader = ({
  logo,
  title,
  githubLink,
  accentColor,
  height,
  onConnectClicked,
  connectionState,
}: PlaygroundHeader) => {
  const { config } = useConfig();
  return (
    <div
      className={`flex gap-4 pt-4 text-${accentColor}-500 justify-between items-center shrink-0`}
      style={{
        height: height + "px",
      }}
    >
      <div className="flex items-center gap-3 basis-2/3">
        <div className="flex lg:basis-1/2">
          <a href="https://livekit.io">{logo ?? <LKLogo />}</a>
        </div>
        <div className="lg:basis-1/2 lg:text-center text-xs lg:text-base lg:font-semibold text-white">
          {title}
        </div>
      </div>
      <div className="flex basis-1/3 justify-end items-center gap-2">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            className={`text-white hover:text-white/80`}
          >
            <GithubSVG />
          </a>
        )}
        {config.settings.editable && <SettingsDropdown />}
        <Button
          accentColor={
            connectionState === ConnectionState.Connected ? "red" : accentColor
          }
          disabled={connectionState === ConnectionState.Connecting}
          onClick={() => {
            onConnectClicked();
          }}
        >
          {connectionState === ConnectionState.Connecting ? (
            <LoadingSVG />
          ) : connectionState === ConnectionState.Connected ? (
            "Disconnect"
          ) : (
            "Connect"
          )}
        </Button>
      </div>
    </div>
  );
};

const LKLogo = () => (
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="38.284mm" height="46.2937mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
viewBox="0 0 2673.63 3233.01"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
 <defs>
  <style type="text/css">
   <![CDATA[
    .fil3 {fill:url(#id0);fill-rule:nonzero}
    .fil0 {fill:url(#id1);fill-rule:nonzero}
    .fil2 {fill:url(#id2);fill-rule:nonzero}
    .fil1 {fill:url(#id3);fill-rule:nonzero}
    .fil4 {fill:url(#id4);fill-rule:nonzero}
   ]]>
  </style>
  <linearGradient id="id0" gradientUnits="userSpaceOnUse" x1="2673.63" y1="582.13" x2="331.79" y2="582.13">
   <stop offset="0" style="stop-opacity:1; stop-color:#A2323C"/>
   <stop offset="1" style="stop-opacity:1; stop-color:#E62137"/>
  </linearGradient>
  <linearGradient id="id1" gradientUnits="userSpaceOnUse" xlink:href="#id0" x1="0.02" y1="2500.14" x2="1939.83" y2="2500.14">
  </linearGradient>
  <linearGradient id="id2" gradientUnits="userSpaceOnUse" xlink:href="#id0" x1="2241.3" y1="2249.67" x2="2673.63" y2="2249.67">
  </linearGradient>
  <linearGradient id="id3" gradientUnits="userSpaceOnUse" xlink:href="#id0" x1="2673.63" y1="1486.62" x2="0.02" y2="1486.62">
  </linearGradient>
  <linearGradient id="id4" gradientUnits="userSpaceOnUse" xlink:href="#id0" x1="0.02" y1="1595.62" x2="2673.63" y2="1595.62">
  </linearGradient>
 </defs>
 <g id="图层_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
  <g id="_3029474336336">
   <path class="fil0" d="M1207.56 2594.21c-373.24,-223.95 -746.48,-447.89 -1119.72,-671.84 -63.32,-37.99 -87.83,-81.28 -87.83,-155.13 0,201.01 0,402 0,603.01 0,73.85 24.51,117.12 87.83,155.13 373.24,223.92 746.48,447.86 1119.72,671.8 79.54,47.77 178.97,47.77 258.52,0 157.92,-94.74 315.83,-189.47 473.77,-284.23 0,-200.99 0,-402 0,-602.99 -157.94,94.73 -315.85,189.49 -473.77,284.25 -79.54,47.72 -178.97,47.72 -258.52,0z"/>
   <path class="fil1" d="M331.82 2068.75c-81.33,-48.8 -162.66,-97.59 -243.98,-146.38 -63.32,-37.99 -87.83,-81.28 -87.83,-155.13 0,-73.83 24.51,-117.12 87.83,-155.11 373.24,-223.94 746.48,-447.88 1119.72,-671.82 79.54,-47.73 178.97,-47.73 258.52,0 373.25,223.95 746.47,447.88 1119.74,671.82 63.31,37.99 87.83,81.28 87.83,155.11 0,73.85 -24.51,117.14 -87.83,155.13 -81.33,48.79 -162.66,97.58 -244.02,146.38 -291.88,-175.16 -583.77,-350.3 -875.72,-525.43 -79.54,-47.75 -178.97,-47.75 -258.52,0 -291.94,175.13 -583.84,350.27 -875.74,525.43z"/>
   <path class="fil2" d="M2673.63 1767.24c0,73.85 -24.51,117.14 -87.83,155.13 -114.83,68.89 -229.67,137.78 -344.51,206.68 0,201.01 0,402 0,603.01 114.83,-68.89 229.67,-137.81 344.51,-206.68 63.31,-38.01 87.83,-81.28 87.83,-155.13 0,-201.01 0,-402 0,-603.01z"/>
   <path class="fil3" d="M2341.79 1164.25c81.36,-48.8 162.69,-97.6 244.02,-146.39 63.31,-37.98 87.83,-81.27 87.83,-155.13 0,-73.82 -24.51,-117.11 -87.83,-155.1 -373.27,-223.94 -746.49,-447.88 -1119.74,-671.82 -79.54,-47.73 -178.97,-47.73 -258.52,0 -291.94,175.14 -583.84,350.29 -875.74,525.45 0,200.99 0,402.01 0,603 291.9,-175.16 583.8,-350.3 875.74,-525.46 79.54,-47.73 178.97,-47.73 258.52,0 291.95,175.16 583.84,350.3 875.72,525.46z"/>
   <path class="fil4" d="M2673.63 862.73c0,73.86 -24.51,117.14 -87.83,155.13 -373.27,223.95 -746.49,447.9 -1119.74,671.84 -79.54,47.73 -178.97,47.73 -258.52,0 -402.5,-241.52 -805.03,-483.03 -1207.56,-724.53 0,200.99 0,402.01 0,602.99 402.53,241.5 805.05,483.03 1207.56,724.52 79.54,47.73 178.97,47.73 258.52,0 373.25,-223.94 746.47,-447.88 1119.74,-671.83 63.31,-37.99 87.83,-81.28 87.83,-155.1 0,-201.02 0,-402.01 0,-603.03z"/>
  </g>
 </g>
</svg>
);
export default LKLogo;
const GithubSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 98 96"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
      fill="currentColor"
    />
  </svg>
);
