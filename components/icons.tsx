import * as React from "react";
import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
	size = 36,
	width,
	height,
	...props
}) => (
	<svg
		fill="none"
		height={size || height}
		viewBox="0 0 32 32"
		width={size || width}
		{...props}
	>
	<path
	    fill-rule="evenodd"
		clip-rule="evenodd"
	    d="M8 8H15.0712L24 17.4492V24H8V8ZM10.4116 10.2086H14.1437L16.277 12.4663H12.5449V19.4356H21.7275V21.6933H10.4116V10.2086Z"
		fill="currentColor"
	/>
	<path
	   d="M24 8V14.2563L18.0882 8H24Z"
		fill="currentColor"
	/>
		{/* <path
			clipRule="evenodd"
			d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
			fill="currentColor"
			fillRule="evenodd"
		/> */}
	</svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
	size = 24,
	width,
	height,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			{...props}
		>
			<path
				d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
	size = 24,
	width,
	height,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			{...props}
		>
			<path
				d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const GithubIcon: React.FC<IconSvgProps> = ({
	size = 24,
	width,
	height,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			{...props}
		>
			<path
				clipRule="evenodd"
				d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
				fill="currentColor"
				fillRule="evenodd"
			/>
		</svg>
	);
};

export const MoonFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
			fill="currentColor"
		/>
	</svg>
);

export const SunFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<g fill="currentColor">
			<path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
			<path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
		</g>
	</svg>
);

export const HeartFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
			fill="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
		/>
	</svg>
);

export const SearchIcon = (props: IconSvgProps) => (
	<svg
		aria-hidden="true"
		fill="none"
		focusable="false"
		height="1em"
		role="presentation"
		viewBox="0 0 24 24"
		width="1em"
		{...props}
	>
		<path
			d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
		<path
			d="M22 22L20 20"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
);






export const DeleteIcon = (props: IconSvgProps) => (
	<svg
	  aria-hidden="true"
	  fill="none"
	  focusable="false"
	  height="1em"
	  role="presentation"
	  viewBox="0 0 20 20"
	  width="1em"
	  {...props}
	>
	  <path
		d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={1.5}
	  />
	  <path
		d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={1.5}
	  />
	  <path
		d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={1.5}
	  />
	  <path
		d="M8.60834 13.75H11.3833"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={1.5}
	  />
	  <path
		d="M7.91669 10.4167H12.0834"
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={1.5}
	  />
	</svg>
  );


export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 161 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-black dark:fill-white"
        d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
      />
      <path
        className="fill-black dark:fill-white"
        d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
      />
      <path
        className="fill-white dark:fill-black"
        d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
      />
    </svg>
  );
};



// export const ProfileCircleIcon = (props: IconSvgProps) => (
// 	<svg
// 		aria-hidden="true"
// 		fill="none"
// 		focusable="false"
// 		height="1em"
// 		role="presentation"
// 		viewBox="0 0 24 24"
// 		width="1em"
// 		{...props}
// 	>
// 		<path
// 			d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z"
// 			fill="#292D32"/>

// 		<path d="M12 6.92969C9.93 6.92969 8.25 8.60969 8.25 10.6797C8.25 12.7097 9.84 14.3597 11.95 14.4197C11.98 14.4197 12.02 14.4197 12.04 14.4197C12.06 14.4197 12.09 14.4197 12.11 14.4197C12.12 14.4197 12.13 14.4197 12.13 14.4197C14.15 14.3497 15.74 12.7097 15.75 10.6797C15.75 8.60969 14.07 6.92969 12 6.92969Z"
// 		fill="#292D32"/>

// 	</svg>
// );


export const ProfileCircleIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z"
			fill="currentColor"
			/>

		<path
			d="M12 6.92969C9.93 6.92969 8.25 8.60969 8.25 10.6797C8.25 12.7097 9.84 14.3597 11.95 14.4197C11.98 14.4197 12.02 14.4197 12.04 14.4197C12.06 14.4197 12.09 14.4197 12.11 14.4197C12.12 14.4197 12.13 14.4197 12.13 14.4197C14.15 14.3497 15.74 12.7097 15.75 10.6797C15.75 8.60969 14.07 6.92969 12 6.92969Z"
			fill="currentColor"
		/>
	</svg>
);


export const BehanceIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M9 18.75H3C2.04 18.75 1.25 17.96 1.25 17V7C1.25 6.04 2.04 5.25 3 5.25H8C10.07 5.25 11.75 6.93 11.75 9C11.75 10.03 11.33 10.96 10.66 11.64C11.9 12.25 12.75 13.53 12.75 15C12.75 17.07 11.07 18.75 9 18.75ZM2.75 12.75V17C2.75 17.14 2.86 17.25 3 17.25H9C10.24 17.25 11.25 16.24 11.25 15C11.25 13.76 10.24 12.75 9 12.75H2.75ZM2.75 11.25H8C9.24 11.25 10.25 10.24 10.25 9C10.25 7.76 9.24 6.75 8 6.75H3C2.86 6.75 2.75 6.86 2.75 7V11.25Z"
			fill="currentColor"
		/>
		<path
			d="M19.67 18.75H18C15.38 18.75 13.25 16.62 13.25 14C13.25 11.38 15.38 9.25 18 9.25C20.62 9.25 22.75 11.38 22.75 14C22.75 14.41 22.41 14.75 22 14.75H14.84C15.18 16.18 16.47 17.25 18 17.25H19.67C20.08 17.25 20.42 17.59 20.42 18C20.42 18.41 20.08 18.75 19.67 18.75ZM14.84 13.25H21.17C20.83 11.82 19.54 10.75 18.01 10.75C16.48 10.75 15.18 11.82 14.84 13.25Z"
			fill="currentColor"
		/>
		<path
			d="M19.5 8.25H16.5C16.09 8.25 15.75 7.91 15.75 7.5C15.75 7.09 16.09 6.75 16.5 6.75H19.5C19.91 6.75 20.25 7.09 20.25 7.5C20.25 7.91 19.91 8.25 19.5 8.25Z"
			fill="currentColor"
		/>

	</svg>
);

export const DribbleIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M15.8805 20.9208C15.9105 21.0808 15.8204 21.2508 15.6704 21.3108C14.5404 21.7608 13.3005 22.0008 12.0205 22.0008C9.81048 22.0008 7.77045 21.2908 6.12045 20.0708C5.98045 19.9708 5.94049 19.7708 6.03049 19.6208C6.58049 18.6408 8.73044 15.4908 13.4804 13.7308C13.6604 13.6608 13.8604 13.7508 13.9204 13.9308C15.1104 17.1208 15.6705 19.8208 15.8805 20.9208Z"
			fill="currentColor"
		/>
		<path
			d="M21.8197 13.8881C21.3597 16.3481 19.9796 18.4881 18.0496 19.9481C17.8396 20.1081 17.5396 19.9881 17.4896 19.7381C17.2796 18.6581 16.7696 16.3281 15.7896 13.5581C15.7196 13.3481 15.8597 13.1181 16.0797 13.0881C18.5697 12.7881 20.7497 13.2681 21.5697 13.4881C21.7397 13.5481 21.8497 13.7181 21.8197 13.8881Z"
			fill="currentColor"
		/>
		<path
			d="M21.5902 11.8187C20.5702 11.6387 17.9702 11.2587 15.3102 11.5487C15.1502 11.5687 15.0102 11.4787 14.9402 11.3287C14.9002 11.2387 14.8702 11.1487 14.8302 11.0587C14.6702 10.6887 14.5002 10.3087 14.3302 9.93868C14.2402 9.75868 14.3302 9.53867 14.5102 9.45867C17.3102 8.24867 18.8702 6.68867 19.4802 5.98867C19.6302 5.81867 19.8902 5.82869 20.0302 6.00869C21.1802 7.53869 21.8902 9.40867 22.0002 11.4287C22.0102 11.6787 21.8102 11.8587 21.5902 11.8187Z"
			fill="currentColor"
		/>
		<path
			d="M18.44 4.79172C17.92 5.42172 16.46 6.9217 13.69 8.0217C13.53 8.0917 13.34 8.02169 13.25 7.86169C11.97 5.54169 10.6099 3.5917 9.97994 2.7117C9.82994 2.5017 9.94997 2.20171 10.2 2.16171C10.78 2.06171 11.39 2.01172 12.01 2.01172C14.43 2.01172 16.66 2.87171 18.39 4.31171C18.54 4.42171 18.56 4.64172 18.44 4.79172Z"
			fill="currentColor"
		/>
		<path
			d="M11.0208 8.83942C7.23075 9.78942 3.88071 9.91943 2.66071 9.93943C2.43071 9.93943 2.26074 9.71943 2.32074 9.49943C3.04074 6.69943 4.96073 4.35943 7.49073 3.06943C7.64073 2.98943 7.83073 3.03942 7.93073 3.17942C8.45073 3.89942 9.86073 5.92943 11.2407 8.31943C11.3507 8.51943 11.2508 8.77942 11.0208 8.83942Z"
			fill="currentColor"
		/>
		<path
			d="M12.9197 11.5986C13.0097 11.7886 12.8998 12.0186 12.6998 12.0886C8.26977 13.5186 5.61976 17.0687 4.81976 18.2887C4.68976 18.4887 4.40977 18.4987 4.25977 18.3187C2.85977 16.5987 2.00977 14.6286 2.00977 12.2386V12.0586C2.00977 11.8586 2.16975 11.6986 2.36975 11.7086C3.62975 11.7586 7.73977 11.5886 12.0098 10.3586C12.1698 10.3086 12.3497 10.3887 12.4197 10.5387C12.5897 10.8887 12.7597 11.2386 12.9197 11.5986Z"
			fill="currentColor"
		/>

	</svg>
);

export const MailIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
			fill="currentColor"
		/>

	</svg>
);


export const FacebookIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M22 16.19C22 19.83 19.83 22 16.19 22H15C14.45 22 14 21.55 14 21V15.23C14 14.96 14.22 14.73 14.49 14.73L16.25 14.7C16.39 14.69 16.51 14.59 16.54 14.45L16.89 12.54C16.92 12.36 16.78 12.19 16.59 12.19L14.46 12.22C14.18 12.22 13.96 12 13.95 11.73L13.91 9.28C13.91 9.12 14.04 8.98001 14.21 8.98001L16.61 8.94C16.78 8.94 16.91 8.81001 16.91 8.64001L16.87 6.23999C16.87 6.06999 16.74 5.94 16.57 5.94L13.87 5.98001C12.21 6.01001 10.89 7.37 10.92 9.03L10.97 11.78C10.98 12.06 10.76 12.28 10.48 12.29L9.28 12.31C9.11 12.31 8.98001 12.44 8.98001 12.61L9.01001 14.51C9.01001 14.68 9.14 14.81 9.31 14.81L10.51 14.79C10.79 14.79 11.01 15.01 11.02 15.28L11.11 20.98C11.12 21.54 10.67 22 10.11 22H7.81C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81V16.19Z"
			fill="currentColor"
		/>

	</svg>
);


export const WhatsappIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M21.9803 11.4104C21.6403 5.61044 16.3703 1.14045 10.3003 2.14045C6.12029 2.83045 2.77029 6.22043 2.12029 10.4004C1.74029 12.8204 2.24031 15.1104 3.33031 17.0004L2.4403 20.3104C2.2403 21.0604 2.93028 21.7404 3.67028 21.5304L6.93029 20.6304C8.41029 21.5004 10.1403 22.0004 11.9903 22.0004C17.6303 22.0004 22.3103 17.0304 21.9803 11.4104ZM16.8803 15.7204C16.7903 15.9004 16.6803 16.0704 16.5403 16.2304C16.2903 16.5004 16.0203 16.7004 15.7203 16.8204C15.4203 16.9504 15.0903 17.0104 14.7403 17.0104C14.2303 17.0104 13.6803 16.8905 13.1103 16.6405C12.5303 16.3905 11.9603 16.0604 11.3903 15.6504C10.8103 15.2304 10.2703 14.7604 9.7503 14.2504C9.2303 13.7304 8.77027 13.1804 8.35027 12.6104C7.94027 12.0404 7.61029 11.4704 7.37029 10.9004C7.13029 10.3304 7.01031 9.78045 7.01031 9.26045C7.01031 8.92044 7.0703 8.59044 7.1903 8.29044C7.3103 7.98044 7.50032 7.70045 7.77032 7.45045C8.09032 7.13045 8.4403 6.98045 8.8103 6.98045C8.95029 6.98045 9.09027 7.01044 9.22027 7.07044C9.35027 7.13044 9.47029 7.22044 9.5603 7.35044L10.7203 8.99043C10.8103 9.12043 10.8803 9.23043 10.9203 9.34043C10.9703 9.45043 10.9903 9.55043 10.9903 9.65043C10.9903 9.77043 10.9503 9.89045 10.8803 10.0104C10.8103 10.1304 10.7203 10.2504 10.6003 10.3704L10.2203 10.7704C10.1603 10.8304 10.1403 10.8904 10.1403 10.9704C10.1403 11.0104 10.1503 11.0504 10.1603 11.0904C10.1803 11.1304 10.1903 11.1604 10.2003 11.1904C10.2903 11.3604 10.4503 11.5704 10.6703 11.8304C10.9003 12.0904 11.1403 12.3604 11.4003 12.6204C11.6703 12.8904 11.9303 13.1304 12.2003 13.3604C12.4603 13.5804 12.6803 13.7304 12.8503 13.8204C12.8803 13.8304 12.9103 13.8504 12.9403 13.8604C12.9803 13.8804 13.0203 13.8804 13.0703 13.8804C13.1603 13.8804 13.2203 13.8504 13.2803 13.7904L13.6603 13.4104C13.7903 13.2804 13.9103 13.1904 14.0203 13.1304C14.1403 13.0604 14.2503 13.0204 14.3803 13.0204C14.4803 13.0204 14.5803 13.0404 14.6903 13.0904C14.8003 13.1404 14.9203 13.2004 15.0403 13.2904L16.7003 14.4704C16.8303 14.5604 16.9203 14.6704 16.9803 14.7904C17.0303 14.9204 17.0603 15.0404 17.0603 15.1804C17.0003 15.3504 16.9603 15.5404 16.8803 15.7204Z"
			fill="currentColor"
		/>


	</svg>
);


export const YoutubeIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M17 4H7C4 4 2 6 2 9V15C2 18 4 20 7 20H17C20 20 22 18 22 15V9C22 6 20 4 17 4ZM13.89 13.03L11.42 14.51C10.42 15.11 9.59998 14.65 9.59998 13.48V10.51C9.59998 9.34001 10.42 8.88001 11.42 9.48001L13.89 10.96C14.84 11.54 14.84 12.46 13.89 13.03Z"
			fill="currentColor"
		/>



	</svg>
);

export const CreateIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM10.95 17.51C10.66 17.8 10.11 18.08 9.71 18.14L7.25 18.49C7.16 18.5 7.07 18.51 6.98 18.51C6.57 18.51 6.19 18.37 5.92 18.1C5.59 17.77 5.45 17.29 5.53 16.76L5.88 14.3C5.94 13.89 6.21 13.35 6.51 13.06L10.97 8.6C11.05 8.81 11.13 9.02 11.24 9.26C11.34 9.47 11.45 9.69 11.57 9.89C11.67 10.06 11.78 10.22 11.87 10.34C11.98 10.51 12.11 10.67 12.19 10.76C12.24 10.83 12.28 10.88 12.3 10.9C12.55 11.2 12.84 11.48 13.09 11.69C13.16 11.76 13.2 11.8 13.22 11.81C13.37 11.93 13.52 12.05 13.65 12.14C13.81 12.26 13.97 12.37 14.14 12.46C14.34 12.58 14.56 12.69 14.78 12.8C15.01 12.9 15.22 12.99 15.43 13.06L10.95 17.51ZM17.37 11.09L16.45 12.02C16.39 12.08 16.31 12.11 16.23 12.11C16.2 12.11 16.16 12.11 16.14 12.1C14.11 11.52 12.49 9.9 11.91 7.87C11.88 7.76 11.91 7.64 11.99 7.57L12.92 6.64C14.44 5.12 15.89 5.15 17.38 6.64C18.14 7.4 18.51 8.13 18.51 8.89C18.5 9.61 18.13 10.33 17.37 11.09Z"
			fill="currentColor"
		/>



	</svg>
);

export const InternetIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M7.64859 20.9098C7.61859 20.9098 7.57859 20.9298 7.54859 20.9298C5.60859 19.9698 4.02859 18.3798 3.05859 16.4398C3.05859 16.4098 3.07859 16.3698 3.07859 16.3398C4.29859 16.6998 5.55859 16.9698 6.80859 17.1798C7.02859 18.4398 7.28859 19.6898 7.64859 20.9098Z"
			fill="currentColor"
		/>
		<path
			d="M20.9391 16.4498C19.9491 18.4398 18.2991 20.0498 16.2891 21.0198C16.6691 19.7498 16.9891 18.4698 17.1991 17.1798C18.4591 16.9698 19.6991 16.6998 20.9191 16.3398C20.9091 16.3798 20.9391 16.4198 20.9391 16.4498Z"
			fill="currentColor"
		/>
		<path
			d="M21.0191 7.71047C19.7591 7.33047 18.4891 7.02047 17.1991 6.80047C16.9891 5.51047 16.6791 4.23047 16.2891 2.98047C18.3591 3.97047 20.0291 5.64047 21.0191 7.71047Z"
			fill="currentColor"
		/>
		<path
			d="M7.65047 3.08859C7.29047 4.30859 7.03047 5.54859 6.82047 6.80859C5.53047 7.00859 4.25047 7.32859 2.98047 7.70859C3.95047 5.69859 5.56047 4.04859 7.55047 3.05859C7.58047 3.05859 7.62047 3.08859 7.65047 3.08859Z"
			fill="currentColor"
		/>
		<path
			d="M15.4917 6.59C13.1717 6.33 10.8317 6.33 8.51172 6.59C8.76172 5.22 9.08172 3.85 9.53172 2.53C9.55172 2.45 9.54172 2.39 9.55172 2.31C10.3417 2.12 11.1517 2 12.0017 2C12.8417 2 13.6617 2.12 14.4417 2.31C14.4517 2.39 14.4517 2.45 14.4717 2.53C14.9217 3.86 15.2417 5.22 15.4917 6.59Z"
			fill="currentColor"
		/>
		<path
			d="M6.59 15.4917C5.21 15.2417 3.85 14.9217 2.53 14.4717C2.45 14.4517 2.39 14.4617 2.31 14.4517C2.12 13.6617 2 12.8517 2 12.0017C2 11.1617 2.12 10.3417 2.31 9.56172C2.39 9.55172 2.45 9.55172 2.53 9.53172C3.86 9.09172 5.21 8.76172 6.59 8.51172C6.34 10.8317 6.34 13.1717 6.59 15.4917Z"
			fill="currentColor"
		/>
		<path
			d="M22.0002 12.0017C22.0002 12.8517 21.8802 13.6617 21.6902 14.4517C21.6102 14.4617 21.5502 14.4517 21.4702 14.4717C20.1402 14.9117 18.7802 15.2417 17.4102 15.4917C17.6702 13.1717 17.6702 10.8317 17.4102 8.51172C18.7802 8.76172 20.1502 9.08172 21.4702 9.53172C21.5502 9.55172 21.6102 9.56172 21.6902 9.56172C21.8802 10.3517 22.0002 11.1617 22.0002 12.0017Z"
			fill="currentColor"
		/>
		<path
			d="M15.4917 17.4102C15.2417 18.7902 14.9217 20.1502 14.4717 21.4702C14.4517 21.5502 14.4517 21.6102 14.4417 21.6902C13.6617 21.8802 12.8417 22.0002 12.0017 22.0002C11.1517 22.0002 10.3417 21.8802 9.55172 21.6902C9.54172 21.6102 9.55172 21.5502 9.53172 21.4702C9.09172 20.1402 8.76172 18.7902 8.51172 17.4102C9.67172 17.5402 10.8317 17.6302 12.0017 17.6302C13.1717 17.6302 14.3417 17.5402 15.4917 17.4102Z"
			fill="currentColor"
		/>
		<path
			d="M15.7633 15.7633C13.2622 16.0789 10.7378 16.0789 8.23667 15.7633C7.92111 13.2622 7.92111 10.7378 8.23667 8.23667C10.7378 7.92111 13.2622 7.92111 15.7633 8.23667C16.0789 10.7378 16.0789 13.2622 15.7633 15.7633Z"
			fill="currentColor"
		/>



	</svg>
);


export const EyeSlashFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
	  <path
		d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
		fill="currentColor"
	  />
	  <path
		d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
		fill="currentColor"
	  />
	  <path
		d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
		fill="currentColor"
	  />
	  <path
		d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
		fill="currentColor"
	  />
	  <path
		d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
		fill="currentColor"
	  />
	</svg>
);



export const EyeFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
	  <path
      d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
      fill="currentColor"
    />
    <path
      d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
      fill="currentColor"
    />
	</svg>
);
