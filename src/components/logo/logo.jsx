import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { logoClasses } from './classes';

// ----------------------------------------------------------------------

export const Logo = forwardRef(
  ({ href = '/', isSingle = false, disableLink = false, sx, className, ...other }, ref) => {
    const theme = useTheme();

    const PRIMARY_MAIN = theme.vars.palette.primary.main;

    const singleLogo = (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1017 479"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M534.761 384.886V93.9773H654.932C676.712 93.9773 695.51 98.2386 711.324 106.761C727.233 115.189 739.496 126.979 748.114 142.131C756.731 157.188 761.04 174.706 761.04 194.688C761.04 214.763 756.636 232.33 747.83 247.386C739.117 262.349 726.665 273.949 710.472 282.188C694.278 290.426 675.055 294.545 652.801 294.545H578.654V239.148H639.733C650.339 239.148 659.193 237.301 666.296 233.608C673.493 229.915 678.938 224.754 682.631 218.125C686.324 211.402 688.171 203.589 688.171 194.688C688.171 185.691 686.324 177.926 682.631 171.392C678.938 164.763 673.493 159.65 666.296 156.051C659.099 152.453 650.244 150.653 639.733 150.653H605.074V384.886H534.761Z"
          fill="currentColor"
        />
        <path
          d="M427.943 181.193C426.996 170.777 422.782 162.68 415.301 156.903C407.915 151.032 397.356 148.097 383.625 148.097C374.534 148.097 366.958 149.28 360.898 151.648C354.837 154.015 350.292 157.282 347.261 161.449C344.231 165.521 342.669 170.208 342.574 175.511C342.385 179.867 343.237 183.703 345.131 187.017C347.119 190.331 349.96 193.267 353.654 195.824C357.441 198.286 361.987 200.464 367.29 202.358C372.593 204.252 378.559 205.909 385.188 207.33L410.188 213.011C424.582 216.136 437.271 220.303 448.256 225.511C459.335 230.72 468.616 236.922 476.097 244.119C483.672 251.316 489.402 259.602 493.284 268.977C497.167 278.352 499.155 288.864 499.25 300.511C499.155 318.883 494.515 334.65 485.33 347.813C476.144 360.975 462.934 371.061 445.699 378.068C428.559 385.076 407.868 388.58 383.625 388.58C359.288 388.58 338.076 384.934 319.989 377.642C301.902 370.35 287.839 359.271 277.801 344.403C267.763 329.536 262.602 310.739 262.318 288.011H329.648C330.216 297.386 332.725 305.199 337.176 311.449C341.627 317.699 347.735 322.434 355.5 325.653C363.36 328.873 372.451 330.483 382.773 330.483C392.243 330.483 400.292 329.205 406.921 326.648C413.644 324.091 418.805 320.54 422.404 315.994C426.002 311.449 427.849 306.241 427.943 300.369C427.849 294.877 426.144 290.189 422.83 286.307C419.515 282.33 414.402 278.92 407.489 276.08C400.671 273.144 391.958 270.445 381.352 267.983L350.955 260.881C325.765 255.104 305.926 245.777 291.438 232.898C276.949 219.924 269.752 202.405 269.847 180.341C269.752 162.348 274.582 146.581 284.335 133.04C294.089 119.498 307.583 108.939 324.818 101.364C342.053 93.7879 361.703 90 383.767 90C406.305 90 425.86 93.8352 442.432 101.506C459.099 109.081 472.025 119.735 481.21 133.466C490.396 147.197 495.083 163.106 495.273 181.193H427.943Z"
          fill="currentColor"
        />
        <path
          d="M157.24 93.9773H226.558V295.114C226.464 313.958 221.966 330.436 213.064 344.545C204.163 358.561 191.852 369.451 176.132 377.216C160.507 384.981 142.42 388.864 121.871 388.864C103.689 388.864 87.1644 385.691 72.297 379.347C57.5243 373.002 45.7345 363.153 36.9277 349.801C28.2155 336.449 23.9068 319.356 24.0015 298.523H94.0299C94.314 306.004 95.7345 312.396 98.2913 317.699C100.943 322.907 104.589 326.837 109.229 329.489C113.869 332.14 119.409 333.466 125.848 333.466C132.572 333.466 138.253 332.045 142.894 329.205C147.534 326.269 151.038 321.96 153.405 316.278C155.867 310.597 157.145 303.542 157.24 295.114V93.9773Z"
          fill="currentColor"
        />
        <path
          d="M909.897 388.864C955.658 388.864 992.754 351.767 992.754 306.007C992.754 260.246 955.658 223.15 909.897 223.15C864.136 223.15 827.04 260.246 827.04 306.007C827.04 351.767 864.136 388.864 909.897 388.864Z"
          fill={PRIMARY_MAIN}
        />
      </svg>
    );

    const fullLogo = (
      <svg
        xmlns="http://www.w3.org/2000/svg "
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 1080 288"
      >
        <path
          d="M796.674 266.418L796.684 266.426L796.694 266.434C806.825 274.504 818.568 278.546 831.723 278.546C841.63 278.546 850.137 276.571 856.803 272.142L856.822 272.129L856.841 272.116C862.888 268.015 867.716 263.263 871.161 257.805L871.17 257.79L871.18 257.775C871.299 257.583 871.418 257.392 871.535 257.201V269.909V274.909H876.535H898H903V269.909V37.1819V32.1819H898H875.782H870.782V37.1819V108.072C867.49 102.933 862.921 98.4724 857.231 94.643C850.655 90.0937 842.108 88.091 832.1 88.091C818.832 88.091 806.999 92.1244 796.801 100.192C786.672 108.206 778.952 119.427 773.492 133.562C768.01 147.753 765.342 164.3 765.342 183.091C765.342 202.029 768.008 218.687 773.488 232.952L773.492 232.961C778.948 247.086 786.627 258.333 796.674 266.418ZM866.688 149.95L866.691 149.961C869.634 159.127 871.159 169.992 871.159 182.636C871.159 195.424 869.605 206.522 866.594 216.004C863.593 225.377 859.318 232.397 853.951 237.36C848.792 242.058 842.493 244.455 834.736 244.455C826.624 244.455 820.106 241.922 814.837 236.97C809.356 231.684 805.039 224.444 802.038 215.005C799.074 205.409 797.56 194.635 797.56 182.636C797.56 170.78 799.045 160.236 801.943 150.954C804.879 141.673 809.153 134.646 814.598 129.599L814.604 129.594C819.861 124.709 826.449 122.182 834.736 122.182C842.663 122.182 849.031 124.57 854.175 129.195L854.188 129.207L854.201 129.218C859.525 133.94 863.753 140.741 866.688 149.95Z"
          fill="currentColor"
          stroke="black"
          strokeWidth="10"
        />
        <path
          d="M640.279 266.265L640.285 266.269L640.291 266.274C651.064 274.474 663.596 278.545 677.681 278.545C691.764 278.545 704.269 274.475 714.985 266.269C725.664 258.139 733.815 246.866 739.552 232.703C745.369 218.495 748.205 202.072 748.205 183.545C748.205 164.872 745.371 148.338 739.555 134.055C733.821 119.818 725.67 108.502 714.985 100.367C704.269 92.1611 691.764 88.0908 677.681 88.0908C663.596 88.0908 651.064 92.1622 640.291 100.362L640.285 100.367L640.279 100.372C629.66 108.506 621.513 119.817 615.718 134.046L615.714 134.055L615.71 134.064C609.96 148.344 607.158 164.874 607.158 183.545C607.158 202.07 609.962 218.49 615.714 232.695L615.717 232.704L615.721 232.713C621.519 246.868 629.666 258.135 640.279 266.265ZM698.699 236.64C693.341 241.776 686.474 244.454 677.681 244.454C668.889 244.454 662.022 241.776 656.664 236.64C650.979 231.191 646.638 223.908 643.768 214.576C640.855 205.103 639.376 194.771 639.376 183.545C639.376 172.321 640.854 161.946 643.771 152.391C646.644 142.977 650.992 135.614 656.686 130.088C662.047 124.886 668.907 122.182 677.681 122.182C686.456 122.182 693.316 124.886 698.677 130.088C704.371 135.614 708.719 142.977 711.592 152.391C714.508 161.946 715.987 172.321 715.987 183.545C715.987 194.771 714.508 205.103 711.595 214.576C708.725 223.908 704.384 231.191 698.699 236.64Z"
          fill="currentColor"
          stroke="black"
          strokeWidth="10"
        />
        <path
          d="M519.698 269.909V274.909H524.698H546.916H551.916V269.909V159.454C551.916 152.256 553.344 146.05 556.071 140.715C558.9 135.227 562.65 131.072 567.305 128.101L567.315 128.095L567.324 128.088C571.983 125.085 577.305 123.545 583.444 123.545C586.094 123.545 588.554 123.783 590.836 124.242L590.914 124.258L590.992 124.271C593.777 124.74 595.166 125.032 595.556 125.15L602 127.095V120.363V93.0905V88.6578L597.599 88.1266C596.117 87.9477 594.087 87.829 591.601 87.752C589.124 87.6754 587.028 87.636 585.327 87.636C575.539 87.636 566.678 90.7047 558.906 96.7599L561.979 100.704L558.906 96.7599C555.984 99.0369 553.402 101.578 551.163 104.375V95.3633V90.3633H546.163H524.698H519.698V95.3633V269.909Z"
          fill="currentColor"
          stroke="black"
          strokeWidth="10"
        />
        <path
          d="M354.43 269.909V274.909H359.43H382.777H387.777V269.909V189.909H424.953C440.674 189.909 454.041 186.452 464.687 179.145L464.698 179.138L464.709 179.13C475.132 171.894 482.824 162.175 487.758 150.107C492.681 138.217 495.101 125.098 495.101 110.818C495.101 96.5351 492.68 83.4447 487.749 71.6209C482.745 59.6223 474.979 50.0146 464.482 42.934C453.832 35.6308 440.405 32.1819 424.577 32.1819H359.43H354.43V37.1819V269.909ZM424.2 154.909H387.777V67.1819H423.824C433.674 67.1819 441.012 69.1798 446.273 72.7008L446.29 72.7123L446.308 72.7237C451.738 76.2933 455.668 81.2003 458.132 87.612L458.138 87.6293L458.145 87.6466C460.766 94.3179 462.13 102.015 462.13 110.818C462.13 119.62 460.767 127.362 458.139 134.12L458.135 134.129L458.132 134.138C455.657 140.578 451.73 145.587 446.314 149.313C441.123 152.884 433.899 154.909 424.2 154.909Z"
          fill="currentColor"
          stroke="black"
          strokeWidth="10"
        />
        <path
          d="M290.836 95.8518L291.279 100.364H295.812H318.406H323.542L323.405 95.2301C323.069 82.6824 319.837 71.3186 313.627 61.2664C307.519 51.276 299.221 43.4035 288.816 37.6917C278.322 31.8551 266.425 29 253.259 29C240.193 29 228.219 31.9043 217.447 37.7906C206.742 43.5987 198.186 51.8025 191.834 62.325L191.83 62.3305C185.458 72.9177 182.359 85.2009 182.359 99C182.359 115.663 187.054 129.633 196.834 140.426C206.294 150.866 218.991 158.736 234.674 164.178L234.683 164.181L258.407 172.363L258.428 172.37L258.448 172.377C265.002 174.574 271.068 177.127 276.656 180.029C281.879 182.74 285.975 186.198 289.058 190.378C291.843 194.151 293.448 199.311 293.448 206.273C293.448 213.902 291.6 220.351 288.051 225.807C284.422 231.312 279.497 235.654 273.159 238.84C266.841 241.941 259.614 243.545 251.376 243.545C244.339 243.545 237.843 242.297 231.839 239.841C226.068 237.381 221.321 233.691 217.528 228.723C213.955 223.891 211.749 217.596 211.175 209.553L210.843 204.909H206.188H182.087H176.782L177.096 210.204C177.889 223.616 181.312 235.586 187.484 245.984L187.49 245.994L187.496 246.005C193.743 256.413 202.322 264.541 213.147 270.339L213.158 270.345C224.121 276.181 236.917 279 251.376 279C266.856 279 280.346 275.871 291.622 269.356C302.813 262.927 311.403 254.189 317.262 243.174C323.144 232.233 326.042 220.048 326.042 206.727C326.042 195.275 324.101 185.265 319.971 176.9C316.004 168.864 310.894 162.157 304.598 156.889C298.631 151.771 292.313 147.686 285.64 144.674C279.364 141.814 273.594 139.54 268.343 137.875L248.779 131.518L248.764 131.512L248.748 131.507C245.361 130.432 241.601 129.019 237.461 127.256C233.561 125.522 229.816 123.334 226.227 120.681C222.913 118.16 220.169 115.022 217.989 111.219C216.037 107.637 214.953 103.171 214.953 97.6364C214.953 91.0441 216.501 85.3281 219.498 80.3471C222.58 75.3277 226.848 71.3611 232.419 68.4299C237.986 65.5332 244.632 64 252.506 64C263.218 64 271.933 66.8969 278.962 72.4648C285.791 77.8739 289.82 85.496 290.836 95.8518Z"
          fill="currentColor"
          stroke="black"
          strokeWidth="10"
        />
        <path
          d="M120.235 32.1819H115.235V37.1819V203.546C115.235 212.763 114.029 220.271 111.79 226.215L111.786 226.226L111.782 226.237C109.605 232.098 106.557 236.21 102.804 238.928C99.0781 241.627 94.435 243.091 88.6031 243.091C83.2894 243.091 78.7329 241.909 74.7981 239.66C70.8291 237.39 67.7081 234.264 65.3843 230.198C63.1667 226.136 61.971 221.244 61.971 215.364V210.364H56.971H34H29V215.364C29 227.92 31.4875 239.043 36.6705 248.552C41.8033 257.969 48.915 265.325 57.9741 270.501L57.9892 270.509L58.0044 270.518C67.0594 275.607 77.3042 278.091 88.6031 278.091C100.61 278.091 111.287 275.189 120.431 269.207C129.587 263.217 136.541 254.516 141.389 243.382C146.253 232.211 148.583 218.877 148.583 203.546V37.1819V32.1819H143.583H120.235Z"
          fill="currentColor"
          stroke="black"
          strokeWidth="10"
        />
        <path
          d="M1016 284C1049.14 284 1076 257.137 1076 224C1076 190.863 1049.14 164 1016 164C982.863 164 956 190.863 956 224C956 257.137 982.863 284 1016 284Z"
          fill={PRIMARY_MAIN}
        />
      </svg>
    );

    const baseStyles = {
      flexShrink: 0,
      color: 'inherit',
      display: 'inline-flex',
      verticalAlign: 'middle',
      width: isSingle ? 64 : 80,
      height: isSingle ? 64 : 22,
      ...sx,
    };

    return (
      <Box
        ref={ref}
        component={RouterLink}
        href={href}
        className={logoClasses.root.concat(className ? ` ${className}` : '')}
        aria-label="logo"
        sx={{
          ...baseStyles,
          ...(disableLink && { pointerEvents: 'none' }),
        }}
        {...other}
      >
        {isSingle ? singleLogo : fullLogo}
      </Box>
    );
  }
);
