import React from "react";

interface IconProps {
  className?: string;
}

export function NextjsIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 180 180" fill="none" className={className}>
      <mask height="180" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
        <circle cx="90" cy="90" fill="black" r="90" />
      </mask>
      <g mask="url(#mask0)">
        <circle cx="90" cy="90" fill="black" r="90" />
        <path
          d="M149.508 157.438L69.147 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
          fill="url(#paint0_linear)"
        />
        <rect fill="url(#paint1_linear)" height="72" width="12" x="115" y="54" />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear"
          x1="109"
          x2="144.5"
          y1="116.5"
          y2="160.5"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear"
          x1="121"
          x2="120.799"
          y1="54"
          y2="106.875"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function PostgresIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.012 0C6.98 0 3.018 3.518 2.88 8.082c-.08 2.658 1.137 4.965 3.125 6.36v-.012c.11.077.22.148.33.22.09.06.182.115.275.17.202.12.41.228.625.328.093.044.188.082.283.123.238.1.482.19.734.266.077.022.153.047.23.068.324.088.66.155 1.004.2.046.006.09.015.137.02.532.06 1.08.08 1.637.06.072 0 .142-.008.213-.01.378-.022.753-.07 1.12-.145.053-.01.107-.023.16-.036.353-.082.7-.19 1.036-.324.03-.013.06-.024.09-.037.387-.16.758-.352 1.107-.574.053-.035.105-.07.157-.107.295-.203.573-.427.83-.673l-.004-.004c1.69-1.614 2.628-3.774 2.628-6.05C21.01 3.55 16.99 0 12.012 0zm3.896 11.233c-.156.452-.39.873-.69 1.24-.132.16-.28.307-.44.44-.396.33-.872.56-1.393.66-.17.034-.345.05-.522.052-.32.002-.638-.052-.94-.158-.45-.16-.846-.43-1.155-.788-.308-.357-.52-.792-.617-1.26-.098-.47-.07-.954.08-1.408.152-.452.418-.853.773-1.162.357-.31.792-.516 1.26-.598.47-.08.953-.04 1.402.12.45.16.838.435 1.134.8.295.366.486.81.554 1.28.038.26.028.525-.03.784h.003z" />
    </svg>
  );
}

export function MongoIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.001 0C11.393 0 .86 8.35.86 15.088c0 4.965 3.99 8.912 8.955 8.912 2.185 0 4.195-.785 5.766-2.094l-3.582-9.906zm0 24c.608 0 11.14-8.35 11.14-15.088 0-4.965-3.99-8.912-8.955-8.912-2.186 0-4.196.785-5.767 2.094l3.582 9.906z" />
    </svg>
  );
}

export function SupabaseIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.247L.416 13.914a.792.792 0 0 0 .618 1.284H12v8.958a.396.396 0 0 0 .716.247l10.868-13.765a.792.792 0 0 0-.222-1.284z" />
    </svg>
  );
}

export function ReactIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" className={className}>
      <circle cx="0" cy="0" r="2.05" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function VueIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 1.61H14.06L12 5.16L9.94 1.61H0L12 22.39L24 1.61ZM12 14.08L5.16 2.23H9.14L12 7.15L14.86 2.23H18.84L12 14.08Z" />
    </svg>
  );
}

export function AngularIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0L1.75 3.65l1.56 13.56L12 24l8.69-6.79 1.56-13.56L12 0zm0 3.22l6.23 13.88h-2.19l-1.26-3.15h-5.56l-1.26 3.15H5.77L12 3.22zm2.08 8.65L12 6.78l-2.08 5.09h4.16z" />
    </svg>
  );
}

export function TailwindIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

export function TypescriptIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm9.589 11.589v1.898H8.258v7.653H5.973v-7.653H3.516v-1.898h7.198zm10.77 4.153c0 3.328-2.613 5.484-6.387 5.484-2.148 0-3.867-.57-4.992-1.453l1.195-1.883c.96.727 2.29 1.274 3.797 1.274 2.14 0 3.93-.977 3.93-3.18 0-1.828-1.234-2.656-3.883-3.695-3.234-1.266-4.664-2.695-4.664-4.969 0-3.039 2.453-5.062 5.867-5.062 1.93 0 3.445.477 4.453 1.188l-1.125 1.898c-.805-.539-1.992-.984-3.328-.984-1.937 0-3.414 1.031-3.414 2.867 0 1.625 1.094 2.438 3.656 3.445 3.344 1.328 4.891 2.805 4.891 5.07z" />
    </svg>
  );
}

export function JavascriptIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.017-.888-1.798-2.696-2.527-.79-.319-1.572-.619-1.572-1.258 0-.48.375-.769 1.004-.769.75 0 1.275.285 1.68.794l1.32-.854c-.645-.96-1.635-1.395-2.955-1.395-1.785 0-2.88 1.05-2.88 2.415 0 1.485 1.155 2.1 2.46 2.61.885.345 1.545.69 1.545 1.395 0 .6-.51 1.005-1.245 1.005-.99 0-1.65-.495-2.13-1.275l-1.32.795c.705 1.26 1.83 1.875 3.405 1.875 2.01 0 3.105-1.065 2.925-2.815zM12.44 12.01v7.035c0 1.245-.555 1.77-1.53 1.77-.42 0-.825-.09-1.125-.24l-.39 1.365c.42.195.96.315 1.665.315 1.95 0 3.12-.99 3.12-3.105V12.01h-1.74z" />
    </svg>
  );
}

export function Html5Icon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.234-2.625h11.203l.234-2.625H5.422l.703 7.875h9.469l-.328 3.656-3.289.891-3.289-.891-.211-2.391H5.828l.398 4.5 5.75 1.594 5.75-1.594.82-9.165H8.531z" />
    </svg>
  );
}

export function Css3Icon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm14.39 9.75l.235-2.625H5.422l-.234 2.625h10.702zm-3.89 7.875l-3.289-.891-.211-2.391H5.828l.398 4.5 5.75 1.594 5.75-1.594.492-5.508H9.375l-.188-2.109h9.164l-.82 9.164-5.555 1.235z" />
    </svg>
  );
}

export function BootstrapIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.096 17.653c-.563 2.877-2.735 4.797-6.074 4.797H5.25A2.25 2.25 0 0 1 3 20.2V3.8A2.25 2.25 0 0 1 5.25 1.55h9.919c3.084 0 5.176 1.776 5.176 4.394 0 1.753-.948 3.197-2.47 3.86 1.954.606 3.176 2.302 3.176 4.604 0 1.258-.335 2.378-.955 3.245zM8.136 4.966v4.618h6.417c1.554 0 2.626-.856 2.626-2.28 0-1.472-1.072-2.338-2.626-2.338H8.136zm0 7.64v5.334h7.027c1.867 0 3.064-.997 3.064-2.65 0-1.677-1.197-2.684-3.064-2.684H8.136z" />
    </svg>
  );
}
