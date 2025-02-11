"use client";

import { motion } from "motion/react";

export default function Illustration() {
  return (
    <motion.div
      animate={{
        rotate: [0, 15, -15, 15, 0],
        scale: [1, 1.1, 1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        width="50px"
        height="50px"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M44.8952 37.3232C45.7275 38.2453 46.4745 39.4491 46.1586 39.765C45.8428 40.0809 44.8653 39.5046 44.1184 38.7575C43.3715 38.0105 41.5874 45.9465 41.4167 46.3478C41.2886 46.6508 39.2143 49.0286 38.1259 51.2912C37.7631 52.0468 37.8186 54.3222 37.682 54.4588C37.1357 55.0052 36.4442 54.9454 34.9504 53.6263C33.4565 52.3029 32.6797 60.1749 34.4638 61.4172C37.5113 63.5431 43.6062 71.9956 51.6518 71.9956C60.9649 71.9956 69.5867 62.2795 69.5867 55.1461C69.5867 48.0126 67.4953 45.3104 67.6319 39.3338C67.7471 34.2751 71.4263 31.8589 71.4263 29.3274C71.4263 27.2015 68.2635 26.6807 67.2306 26.6807C65.391 26.6807 60.6747 29.0371 60.6747 35.2485C60.6747 37.6647 59.9833 39.8504 57.512 39.8504C55.0407 39.8504 52.2792 36.4566 50.6146 33.8141"
          fill="url(#paint0_linear)"
        />
        <path
          d="M71.4262 29.3318C71.4262 28.1749 70.4915 27.4961 69.4714 27.1162C70.6963 31.1717 64.4861 31.351 64.4861 45.1781C64.4861 59.0052 56.4363 63.0308 53.1029 63.7181C49.7694 64.4097 43.8922 64.6103 39.4191 59.1162C38.0447 57.43 36.1838 55.5986 34.1137 53.8697C33.2388 55.3339 33.051 60.4353 34.4595 61.4172C37.5069 63.5431 43.6019 71.9956 51.6474 71.9956C60.9606 71.9956 69.5824 62.2795 69.5824 55.1461C69.5824 48.0127 67.4909 45.3104 67.6275 39.3339C67.747 34.2795 71.4262 31.8633 71.4262 29.3318Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M34.9504 53.6262C33.4565 52.3028 29.9181 48.5376 27.6218 46.6977C25.3213 44.8577 23.3109 44.8791 21.9323 46.9111C20.5537 48.9431 24.5786 52.5077 25.4963 53.4256C26.9048 54.8343 32.684 60.1748 34.4638 61.4171"
          fill="url(#paint2_linear)"
        />
        <path
          d="M41.4168 46.3524C41.246 46.7536 40.0723 47.0311 37.7376 44.4954C35.9535 42.5573 31.1817 36.982 28.3647 34.4506C25.5477 31.9191 23.3623 30.886 21.5228 32.2094C19.6832 33.5327 20.7289 36.2862 22.7861 38.5914C25.33 41.4388 28.2579 44.3417 31.0664 47.1293C33.2603 49.3065 38.2241 53.9127 37.6778 54.4591"
          fill="url(#paint3_linear)"
        />
        <path
          d="M50.6145 33.8188C48.9456 31.172 42.108 22.664 40.4392 20.2477C38.7703 17.8315 36.5295 17.8315 34.9759 18.9243C33.4223 20.0172 32.9656 22.2029 36.457 26.8433C38.6593 29.7718 40.4947 32.4655 44.8951 37.3236L50.0127 36.9693L50.6145 33.8188Z"
          fill="url(#paint4_linear)"
        />
        <path
          d="M44.1184 38.7622C43.3714 38.0151 36.7601 30.1774 35.2662 28.4997C32.462 25.3535 28.9152 18.6086 24.6726 21.6139C22.4446 23.1934 23.6525 25.4815 24.2842 26.3994C24.9159 27.3214 33.1364 36.807 33.9431 37.6138C34.7497 38.4207 41.5874 45.951 41.4166 46.3523"
          fill="url(#paint5_linear)"
        />
        <path
          d="M31.0663 47.129C33.1363 49.1866 37.6692 53.4001 37.7161 54.3265C38.3691 53.3062 37.1741 50.271 35.9107 49.208C28.6078 43.0564 21.5525 33.1396 20.6562 33.4341C20.272 34.8771 21.2452 36.8578 22.7903 38.5868C25.3341 41.4342 28.2621 44.3414 31.0663 47.129Z"
          fill="url(#paint6_linear)"
        />
        <path
          d="M44.8952 37.3236C45.6976 38.2073 46.4146 39.3557 46.1884 39.7228C48.856 37.5755 43.2135 31.2746 40.0209 27.4881C37.5496 24.5596 36.8753 20.8328 35.104 18.835C35.0613 18.8606 35.0186 18.8905 34.9802 18.9203C33.4266 20.0132 32.9699 22.1989 36.4612 26.8392C38.6594 29.7762 40.4947 32.4699 44.8952 37.3236Z"
          fill="url(#paint7_linear)"
        />
        <path
          d="M33.9431 37.6136C34.7498 38.4205 41.5874 45.9509 41.4167 46.3522C43.5295 43.5048 35.3388 35.1376 31.3736 30.9114C27.9335 27.2486 27.3445 24.0383 23.9897 22.2368C22.7391 23.7438 23.7336 25.5922 24.2884 26.3991C24.9159 27.3211 33.1364 36.8068 33.9431 37.6136Z"
          fill="url(#paint8_linear)"
        />
        <path
          d="M41.2631 46.5225C41.024 46.6719 40.5289 46.6847 39.7691 46.2407C40.3325 46.7018 40.8576 46.8726 41.2631 46.5225Z"
          fill="url(#paint9_linear)"
        />
        <path
          d="M26.4993 61.6174C26.4481 61.6174 26.3968 61.6088 26.3499 61.596C21.1043 59.9952 15.4191 54.2578 14.1857 49.3186C14.1174 49.0411 14.2838 48.7594 14.5612 48.6911C14.8387 48.6228 15.1204 48.7893 15.1887 49.0667C16.3283 53.6217 21.7915 59.1201 26.6529 60.6014C26.9261 60.6868 27.0797 60.9728 26.9986 61.246C26.9218 61.4765 26.7169 61.6174 26.4993 61.6174Z"
          fill="#955500"
        />
        <path
          d="M29.0004 68.1321C28.962 68.1321 28.9235 68.1278 28.8809 68.1193C24.5401 67.1076 19.4909 63.8632 15.0392 59.2185C10.8734 54.8727 8.17593 50.2537 8.00094 47.1587C7.98387 46.8727 8.20154 46.6293 8.48751 46.6123C8.77348 46.5952 9.01675 46.8129 9.03383 47.0989C9.19175 49.9122 11.8423 54.3903 15.7861 58.5013C20.1055 63.0051 24.9669 66.1428 29.1156 67.1118C29.393 67.1759 29.568 67.4533 29.504 67.7351C29.4443 67.9699 29.2351 68.1321 29.0004 68.1321Z"
          fill="#955500"
        />
        <path
          d="M51.2461 22.8344C51.0156 22.8344 50.8065 22.6808 50.7468 22.4502C50.0169 19.6882 46.7133 15.7223 43.7 14.9411C43.4226 14.8685 43.2561 14.5868 43.3286 14.3093C43.4012 14.0318 43.6829 13.8653 43.9603 13.9379C47.3536 14.8173 50.9303 19.0906 51.7455 22.1856C51.8181 22.463 51.6516 22.7448 51.3784 22.8174C51.3358 22.8302 51.2888 22.8344 51.2461 22.8344Z"
          fill="#955500"
        />
        <path
          d="M57.7724 23.7566C57.5419 23.7566 57.3328 23.5986 57.273 23.3681C55.331 15.7309 48.0793 9.77576 43.9434 9.0287C43.6617 8.97747 43.4739 8.70852 43.5251 8.42677C43.5764 8.14502 43.8453 7.95719 44.127 8.00842C48.6384 8.81952 56.206 14.9583 58.276 23.112C58.3443 23.3894 58.1779 23.6712 57.9004 23.7395C57.8578 23.748 57.8151 23.7566 57.7724 23.7566Z"
          fill="#955500"
        />
        <path
          d="M67.7172 27.5518C69.4714 27.2359 69.783 27.4365 69.4672 27.1163C68.6135 26.7962 67.6959 26.6895 67.2264 26.6895C65.3868 26.6895 60.6704 29.0459 60.6704 35.2572C60.6704 37.6735 59.9789 39.8592 57.5077 39.8592C56.5345 39.8592 55.5144 39.3298 54.5327 38.5315C58.8735 43.3384 62.2795 38.809 62.796 35.7055C63.3124 32.6019 62.5655 28.4781 67.7172 27.5518Z"
          fill="url(#paint10_linear)"
        />
        <path
          d="M34.4467 19.394C33.3711 20.6107 33.4095 22.7878 36.457 26.8433C38.6594 29.7718 40.4947 32.4655 44.8953 37.3236C45.7276 38.2457 46.4745 39.4495 46.1587 39.7654C46.8928 34.7323 39.735 29.7889 37.4088 25.9938C35.565 22.9928 35.1936 21.2169 34.4467 19.394Z"
          fill="url(#paint11_linear)"
        />
        <path
          d="M33.9431 37.6137C34.7498 38.4205 41.5874 45.9509 41.4167 46.3522C42.9277 45.2722 41.899 43.5987 39.5643 41.2636C34.7839 36.4824 28.1255 30.0576 25.4494 24.7641C25.1976 24.2646 24.7281 23.8932 24.1732 23.8206C22.7306 23.6328 23.8019 25.6947 24.2842 26.3991C24.9159 27.3212 33.1364 36.8068 33.9431 37.6137Z"
          fill="url(#paint12_linear)"
        />
        <path
          d="M22.7903 38.5911C25.3342 41.4385 28.2622 44.3414 31.0706 47.1291C33.2645 49.3063 38.2284 53.9125 37.6821 54.4589C40.7594 51.8719 26.4695 42.51 20.6605 33.4385C20.2721 34.8814 21.2452 36.8622 22.7903 38.5911Z"
          fill="url(#paint13_linear)"
        />
        <path
          opacity="0.5"
          d="M37.046 54.9796C37.3363 54.8643 37.4899 54.7277 37.5411 54.5826C37.0161 54.9881 36.3204 54.843 34.9503 53.6306C33.4565 52.3072 29.9181 48.542 27.6219 46.702C26.6103 45.8952 25.6585 45.447 24.7878 45.3701C26.0341 46.1471 25.4579 46.4331 28.2279 48.559C29.709 49.6903 35.1509 55.7266 37.046 54.9796Z"
          fill="url(#paint14_radial)"
        />
        <path
          d="M33.4266 41.1781C35.4454 43.637 39.3807 47.6968 41.152 46.574C40.6654 46.7405 39.5514 46.4716 37.7375 44.495C35.9534 42.5569 31.1815 36.9817 28.3645 34.4502C26.0853 32.4011 24.2159 31.3338 22.611 31.7052C27.2847 33.2421 31.5144 38.8558 33.4266 41.1781Z"
          fill="url(#paint15_radial)"
        />
        <path
          d="M35.6076 30.5957C38.8301 34.1005 43.6062 41.0503 46.0348 39.8379C45.6379 39.9617 44.7842 39.4324 44.1184 38.7622C43.3715 38.0151 36.76 30.1773 35.2662 28.4996C33.3241 26.3182 31.0236 22.4121 28.3859 21.2168C31.0449 23.3171 32.9998 27.7568 35.6076 30.5957Z"
          fill="url(#paint16_radial)"
        />
        <path
          d="M54.5414 38.5269C53.039 37.2974 51.6262 35.4191 50.6146 33.8182C48.9457 31.1715 42.1081 22.6635 40.4392 20.2472C39.9313 19.513 39.3679 19.0007 38.7917 18.6763C39.5685 19.7905 40.0081 21.3828 41.7624 23.3508C44.5794 26.5141 48.2586 32.2046 49.522 34.1598C50.7853 36.1192 52.8255 40.2387 54.5414 38.5269Z"
          fill="url(#paint17_linear)"
        />
        <path
          d="M63.7606 66.5914C62.7107 64.0471 61.1869 62.4975 58.976 63.9532C52.9493 67.9233 46.0135 66.5829 37.3192 59.5519C29.5639 53.2809 25.5561 48.7985 21.783 47.1763C20.8781 49.2382 24.6085 52.5466 25.4878 53.4303C26.8963 54.839 32.6754 60.1795 34.4553 61.4217C37.5027 63.5477 43.5977 72.0002 51.6433 72.0002C56.1462 71.9959 60.4784 69.7334 63.7606 66.5914Z"
          fill="url(#paint18_linear)"
        />
        <path
          d="M67.6319 39.338C67.7471 34.2793 71.4263 31.8631 71.4263 29.3316C71.4263 28.5888 71.0379 28.0381 70.4916 27.6411C71.1659 29.6134 69.5611 31.3594 67.1752 34.3306C64.5887 37.5493 64.0125 42.5525 65.7966 47.5558C67.5807 52.559 65.3356 59.4576 61.7162 61.6433C58.0925 63.829 53.2823 73.4298 39.5046 62.5824C39.5003 62.5782 39.5003 62.5782 39.4961 62.5739C38.6552 61.7927 37.8229 61.1011 36.9821 60.5803C31.1646 56.9731 27.8482 53.7329 25.3428 51.0051C24.8477 50.4714 23.5245 48.4138 21.9496 49.0883C22.7349 50.8727 24.8605 52.7809 25.5007 53.417C26.9092 54.8258 32.6883 60.1662 34.4682 61.4085C34.6986 61.5707 34.9504 61.7713 35.2193 61.9976C35.2876 62.0574 35.3602 62.1171 35.4327 62.1812C35.4498 62.1982 35.4712 62.2153 35.4882 62.2324C35.5352 62.2708 35.5779 62.3135 35.6248 62.3562C35.6334 62.3647 35.6462 62.3733 35.6547 62.3861C37.4644 64.0296 39.9528 66.7489 43.0045 68.8749C43.0045 68.8749 43.0088 68.8749 43.0088 68.8791C43.2777 69.067 43.5508 69.2463 43.824 69.4256C43.8283 69.4298 43.8325 69.4298 43.8368 69.4341C44.11 69.6091 44.3874 69.7799 44.6733 69.9421C44.6776 69.9421 44.6776 69.9464 44.6819 69.9464C46.7904 71.1588 49.1293 71.9955 51.6604 71.9955C60.9735 71.9955 69.5952 62.2793 69.5952 55.1459C69.5952 48.0125 67.4953 45.3146 67.6319 39.338Z"
          fill="url(#paint19_radial)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="65.0592"
            y1="73.8405"
            x2="57.3821"
            y2="55.8574"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.00132565" stop-color="#99643E" />
            <stop offset="1" stop-color="#AE7246" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="70.5739"
            y1="66.0896"
            x2="54.4733"
            y2="46.8874"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.00132565" stop-color="#99643E" />
            <stop offset="1" stop-color="#AE7246" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="23.5604"
            y1="48.5462"
            x2="33.0474"
            y2="55.531"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.00132565" stop-color="#99643E" />
            <stop offset="1" stop-color="#AE7246" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="20.1066"
            y1="30.0555"
            x2="36.753"
            y2="47.4751"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.00132565" stop-color="#99643E" />
            <stop offset="1" stop-color="#AE7246" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="38.083"
            y1="21.8356"
            x2="47.7438"
            y2="37.0141"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.00132565" stop-color="#99643E" />
            <stop offset="1" stop-color="#AE7246" />
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="28.1132"
            y1="24.3574"
            x2="41.2239"
            y2="42.0651"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.00132565" stop-color="#99643E" />
            <stop offset="1" stop-color="#AE7246" />
          </linearGradient>
          <linearGradient
            id="paint6_linear"
            x1="32.883"
            y1="40.4011"
            x2="27.3804"
            y2="45.5838"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8D562E" stop-opacity="0" />
            <stop offset="1" stop-color="#804B24" />
          </linearGradient>
          <linearGradient
            id="paint7_linear"
            x1="43.7022"
            y1="26.4946"
            x2="35.4223"
            y2="33.9681"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8D562E" stop-opacity="0" />
            <stop offset="1" stop-color="#804B24" />
          </linearGradient>
          <linearGradient
            id="paint8_linear"
            x1="36.0873"
            y1="31.8196"
            x2="24.7028"
            y2="40.1409"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8D562E" stop-opacity="0" />
            <stop offset="1" stop-color="#804B24" />
          </linearGradient>
          <linearGradient
            id="paint9_linear"
            x1="44.5672"
            y1="43.4201"
            x2="33.1817"
            y2="51.7417"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8D562E" stop-opacity="0" />
            <stop offset="1" stop-color="#804B24" />
          </linearGradient>
          <linearGradient
            id="paint10_linear"
            x1="58.2374"
            y1="26.6914"
            x2="71.5785"
            y2="48.3094"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8D562E" stop-opacity="0" />
            <stop offset="1" stop-color="#804B24" />
          </linearGradient>
          <linearGradient
            id="paint11_linear"
            x1="45.2173"
            y1="25.0264"
            x2="38.1448"
            y2="31.5802"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3072" stop-color="#8D562E" stop-opacity="0" />
            <stop offset="1" stop-color="#804B24" />
          </linearGradient>
          <linearGradient
            id="paint12_linear"
            x1="39.8024"
            y1="28.579"
            x2="30.4875"
            y2="36.9724"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3072" stop-color="#8D562E" stop-opacity="0" />
            <stop offset="1" stop-color="#804B24" />
          </linearGradient>
          <linearGradient
            id="paint13_linear"
            x1="32.7146"
            y1="40.2378"
            x2="21.9331"
            y2="51.5347"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3072" stop-color="#8D562E" stop-opacity="0" />
            <stop offset="1" stop-color="#804B24" />
          </linearGradient>
          <radialGradient
            id="paint14_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(35.4992 38.535) scale(12.0326 12.0348)"
          >
            <stop stop-color="#AE7246" stop-opacity="0" />
            <stop offset="1" stop-color="#8D562E" />
          </radialGradient>
          <radialGradient
            id="paint15_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(29.3466 34.1147) rotate(46.9669) scale(13.9196 8.83409)"
          >
            <stop stop-color="#AE7246" stop-opacity="0" />
            <stop offset="1" stop-color="#8D562E" />
          </radialGradient>
          <radialGradient
            id="paint16_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(37.2198 30.6056) scale(9.10722 9.10883)"
          >
            <stop stop-color="#AE7246" stop-opacity="0" />
            <stop offset="1" stop-color="#8D562E" />
          </radialGradient>
          <linearGradient
            id="paint17_linear"
            x1="46.9462"
            y1="27.1011"
            x2="41.5402"
            y2="55.9659"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3118" stop-color="#DEBA94" stop-opacity="0" />
            <stop offset="1" stop-color="#D2A374" />
          </linearGradient>
          <linearGradient
            id="paint18_linear"
            x1="40.3847"
            y1="59.0798"
            x2="34.5198"
            y2="64.4694"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3118" stop-color="#B37E53" stop-opacity="0" />
            <stop offset="1" stop-color="#804B24" />
          </linearGradient>
          <radialGradient
            id="paint19_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(46.9789 40.8793) rotate(48.1448) scale(39.613 35.9578)"
          >
            <stop offset="0.6147" stop-color="#8D562E" stop-opacity="0" />
            <stop offset="1" stop-color="#804B24" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
