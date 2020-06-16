import React from 'react';

import styles from '../styles/main.scss';

export default function Background({ size = 2 }) {
    const width = 1440 * size;
    const height = 787 * size;

    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width / 2} ${height / 2}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.background}
        >
            <g opacity="0.15">
                <path
                    d="M-19.2118 515.769C-19.2118 515.769 69.3947 722.263 299.236 771.02C529.077 819.777 703.197 690.679 880.31 631.855C973.05 601.024 1074.08 624.496 1170.63 613.989C1479.37 580.03 1625.19 217.989 1516.29 -4.08278C1422.07 -196.265 1237.18 -307.616 945.387 -354.24C653.589 -400.863 449.7 -443.764 171.647 -286.521C-106.407 -129.278 -120.131 245.632 -19.2118 515.769Z"
                    fill="#C4C4C4"
                />
                <path
                    d="M-19.2118 515.769C-19.2118 515.769 69.3947 722.263 299.236 771.02C529.077 819.777 703.197 690.679 880.31 631.855C973.05 601.024 1074.08 624.496 1170.63 613.989C1479.37 580.03 1625.19 217.989 1516.29 -4.08278C1422.07 -196.265 1237.18 -307.616 945.387 -354.24C653.589 -400.863 449.7 -443.764 171.647 -286.521C-106.407 -129.278 -120.131 245.632 -19.2118 515.769Z"
                    fill="url(#paint0_linear)"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear"
                    x1="383.258"
                    y1="833.004"
                    x2="1018.26"
                    y2="-384.928"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#4FACFE" />
                    <stop offset="1" stopColor="#38F9D7" />
                </linearGradient>
            </defs>
        </svg>
    );
}
