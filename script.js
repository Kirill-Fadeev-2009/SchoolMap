const floorData = {
    1: {
        image: 'Images/1_floor.jpeg',
        viewBox: "0 0 8000 8000",
        html: `
            <g class="room-group" data-side="С" data-room="101">
                <path class="hitbox" d="m 3797.6608,4460.8187 h 259.6491 l -1.1695,221.0527 -260.8188,1.1695 z" />
            </g>
            <g class="room-group" data-side="С" data-room="102">
                <path class="hitbox" d="m 3797.701,4451.0511 1.654,-125.7079 h 504.4856 v 357.275 l -241.4915,1.6541 1.6541,-233.2212 z" />
            </g>
            <g class="room-group" data-side="С" data-room="103">
                <path class="hitbox" d="m 3796.4912,4311.1111 2.3392,-390.6433 2350.8772,2.3392 2.3392,760.2339 H 4308.7719 l 2.3392,-364.9122 z" />
            </g>
            <g class="room-group" data-side="С" data-room="104">
                <path class="hitbox" d="m 3796.4912,3588.3041 h 2145.0293 v 320.4678 l -2149.7076,2.3392 z" />
            </g>
            <g class="room-group" data-side="С" data-room="105">
                <path class="hitbox" d="m 5950.8772,3585.9649 h 203.5088 v 325.1462 l -203.5088,-2.3392 z" />
            </g>
            <g class="room-group" data-side="С" data-room="106">
                <path class="hitbox" d="m 3796.0469,3412.3071 1.6541,-517.7179 h 208.4104 l 3.3081,157.1348 152.1727,-1.654 v 360.5831 z" />
            </g>
            <g class="room-group" data-side="С" data-room="107">
                <path class="hitbox" d="m 4322.0351,2883.0108 267.9563,1.6541 3.3081,527.6422 h -423.437 l 1.654,-357.275 150.5186,-1.654 z" />
            </g>
            <g class="room-group" data-side="С" data-room="108">
                <path class="hitbox" d="m 4603.2238,2849.9298 h 279.5346 v 215.0266 h 172.0213 l 1.6541,349.0048 h -454.8641 z" />
            </g>
            <g class="room-group" data-side="С" data-room="109">
                <path class="hitbox" d="m 5195.374,2851.5838 h 305.9995 l 1.654,565.6855 -439.9775,-3.3081 1.654,-347.3507 h 132.3241 z" />
            </g>
            <g class="room-group" data-side="С" data-room="110">
                <path class="hitbox" d="m 5622.2222,3078.3626 h 300.5848 v 333.3333 l -302.924,3.5088 z" />
            </g>
            <g class="room-group" data-side="С" data-room="111">
                <path class="hitbox" d="m 5763.7427,2660.8187 228.0702,-1.1696 -1.1696,281.8714 h -371.9298 l 1.1695,-260.8187 145.0293,-2.3392 z" />
            </g>
            <g class="room-group" data-side="С" data-room="112">
                <path class="hitbox" d="m 5930.9942,3078.3626 219.883,-1.1696 1.1696,335.6725 h -219.883 z" />
            </g>
            <g class="room-group" data-side="С" data-room="113">
                <path class="hitbox" d="m 5763.7427,2460.8187 h 364.9123 v 184.7953 l -362.5731,4.6784 z" />
            </g>
            <g class="room-group" data-side="С" data-room="114">
                <path class="hitbox" d="m 5763.7427,1926.3158 374.269,1.1696 -2.3392,208.1871 h -373.0994 z" />
            </g>
            <g class="room-group" data-side="С" data-room="115">
                <path class="hitbox pool" d="m 3808.1871,2647.9532 -4.6783,-1674.85378 1080.7017,9.35672 V 1548.538 l 860.8187,4.6784 14.0351,603.5087 98.2456,-9.3567 -4.6783,313.4503 -79.5322,-4.6783 -4.6783,215.2046 z" />
            </g>
            <g class="room-group" data-side="С" data-room="116">
                <path class="hitbox" d="m 5756.0973,1769.8345 380.4317,0.827 1.6541,146.3836 h -382.0858 z" />
            </g>
            <g class="room-group" data-side="С" data-room="117">
                <path class="hitbox" d="m 5386.4169,992.43057 h 81.8756 l -0.8271,294.42103 278.7076,0.8271 v 254.7238 l -361.4101,-2.4811 z" />
            </g>
            <g class="room-group" data-side="С" data-room="118">
                <path class="hitbox" d="m 5476.5627,992.43057 136.4592,1.65405 -0.827,281.18868 -135.6322,2.4811 z" />
            </g>
            <g class="room-group" data-side="С" data-room="119">
                <path class="hitbox" d="M 5620.4651,994.08462 H 5747 v 282.84268 h -126.5349 z" />
            </g>
            <g class="room-group" data-side="С" data-room="120">
                <path class="hitbox" d="m 5105.2283,994.08462 272.9184,-0.82702 0.827,349.8318 h -95.1079 v -181.1186 l -178.6375,3.3081 z" />
            </g>
            <g class="room-group" data-side="С" data-room="121">
                <path class="hitbox" d="m 4890.0585,1407.6023 205.2631,-0.5848 -0.5847,132.1638 -204.6784,1.7544 z" />
            </g>
            <g class="room-group" data-side="С" data-room="122">
                <path class="hitbox" d="m 4890.6433,994.15205 204.6783,-0.5848 v 282.45615 l -204.6783,0.5848 z" />
            </g>
            <g class="room-group" data-side="С" data-room="123">
                <path class="hitbox" d="m 6702.924,992.98246 h 657.3099 v 571.92984 l -658.4795,1.1696 z" />
            </g>
            <g class="room-group" data-side="С" data-room="124">
                <path class="hitbox" d="m 6702.924,1575.4386 450.2924,1.1696 -2.3392,147.3684 -449.1228,-1.1696 z" />
            </g>
            <g class="room-group" data-side="С" data-room="125">
                <path class="hitbox" d="m 6701.7544,1733.3333 657.3099,-1.1696 2.3392,584.7954 -659.6491,-1.1696 z" />
            </g>
            <g class="room-group" data-side="С" data-room="126">
                <path class="hitbox" d="m 6701.7544,2326.3158 659.6491,1.1696 1.1696,721.6374 -445.614,-1.1696 2.3392,-411.6959 h -218.7135 z" />
            </g>
            <g class="room-group" data-side="С" data-room="127">
                <path class="hitbox" d="m 6702.924,2647.9532 h 207.0175 v 398.8304 l -210.5263,3.5088 z" />
            </g>
            <g class="room-group" data-side="С" data-room="128">
                <path class="hitbox" d="m 6701.7544,3059.6491 657.3099,-2.3392 2.3392,532.1638 -661.9883,1.1696 z" />
            </g>
            <g class="room-group" data-side="С" data-room="129">
                <path class="hitbox" d="m 6701.7544,3600 659.6491,-1.1696 1.1696,852.6316 -661.9883,-1.1696 z" />
            </g>


            <g class="room-group" data-side="Ю" data-room="101"">
                <path class="hitbox" d="m 2914.6199,7202.3392 175.4386,-2.3392 2.3392,306.4328 h -35.087l -2.3391,72.5146h -135.6726 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="102"">
                <path class="hitbox" d="m 2601.1696,7319.2983 h 306.4327l -2.3391,259.6491h -304.0936 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="103"">
                <path class="hitbox" d="m 1971.6287,7198.4297 621.9232,-6.6162 3.3081,383.7399 -628.5394,3.3081 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="104"">
                <path class="hitbox" d="m 1335.6725,7200 631.579,-2.3392 -2.3392,395.3217 -624.5614,-4.6784 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="105"">
                <path class="hitbox" d="m 673.68421,7207.0176 664.32749,-11.696 -2.3392,385.965 -659.64911,-2.3392 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="106"">
                <path class="hitbox" d="m 676.02339,6650.2924v -540.3509l 442.10531,4.6784v 538.0117 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="107"">
                <path class="hitbox" d="m 654.97076,6105.2632 4.67836,-575.4386 463.15788,-4.6784 -4.6783,580.117 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="108"">
                <path class="hitbox" d="m 671.34503,5525.1462 4.67836,-530.9941 444.44441,-2.3392 -2.3391,533.3333 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="109"">
                <path class="hitbox" d="m 1127.4854,4989.4737 247.9532,2.3392 -2.3392,238.5965 -247.9532,-4.6784 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="110"">
                <path class="hitbox" d="m 2170.7602,6392.9825h 369.5907l -2.3392,388.3041h -369.5906 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="111"">
                <path class="hitbox" d="m 2549.7076,6392.9825h 273.6842v 385.9649l -278.3626,2.3392 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="112"">
                <path class="hitbox" d="m 2830.4094,6392.9825h 383.6257v 388.3041h -385.9649 z" />
            </g>


            <g class="room-group" data-side="В" data-room="101"">
                <path class="hitbox" d="m 3387.1345,7200h 400l 2.3392,304.0936 -400,2.3392 z" />
            </g>
            <g class="room-group" data-side="В" data-room="102"">
                <path class="hitbox" d="m 4315.7895,7202.3392 584.7953,-2.3392 -2.3392,383.6257h -584.7953 z" />
            </g>
            <g class="room-group" data-side="В" data-room="103"">
                <path class="hitbox" d="m 4905.2632,7204.6784 568.421,-2.3392 -4.6783,374.269 h -561.4036 z" />
            </g>
            <g class="room-group" data-side="В" data-room="104"">
                <path class="hitbox" d="M 5478.3626,7197.6608 6088.8889,7200v 376.6082l -610.5263,7.0175 z" />
            </g>
            <g class="room-group" data-side="В" data-room="105"">
                <path class="hitbox" d="m 6095.9064,7197.6608 645.6141,4.6784 2.3392,376.6082h -647.9533 z" />
            </g>
            <g class="room-group" data-side="В" data-room="106"">
                <path class="hitbox" d="m 6748.538,7202.3392 610.5263,2.3392 4.6784,378.9473 -615.2047,-4.6783 z" />
            </g>
            <g class="room-group" data-side="В" data-room="107"">
                <path class="hitbox" d="m 6909.9415,6154.386 449.1228,4.6783 2.3392,610.5264 -451.462,4.6783 z" />
            </g>
            <g class="room-group" data-side="В" data-room="108"">
                <path class="hitbox" d="m 6905.2632,5546.1988h 456.1403l 2.3392,601.1696h -451.462 z" />
            </g>
            <g class="room-group" data-side="В" data-room="109"">
                <path class="hitbox" d="m 6907.6023,4991.8129 453.8012,2.3392 2.3392,540.3508 -458.4795,4.6784 z" />
            </g>
            <g class="room-group" data-side="В" data-room="110"">
                <path class="hitbox" d="m 6077.193,5391.8129h 428.0702l 2.3391,704.0935 -430.4093,-4.6783 z" />
            </g>
            <g class="room-group" data-side="В" data-room="111"">
                <path class="hitbox" d="m 6081.8714,6105.2632h 425.7309l -4.6783,666.6666h -423.3918 z" />
            </g>
            <g class="room-group" data-side="В" data-room="112"">
                <path class="hitbox" d="m 4545.0292,6392.9825 h 661.9884 l -2.3392,392.9824 -661.9883,-3.5087 z" />
            </g>
            <g class="room-group" data-side="В" data-room="113"">
                <path class="hitbox" d="m 4204.6784,6392.9825 329.8245,2.3391 3.5088,385.965 -740.3509,2.3391 2.3392,-160.2339 404.6784,-1.1696 z" />
            </g>
            <g class="room-group" data-side="В" data-room="113"">
                <path class="hitbox" d="m 4204.6784,6392.9825 329.8245,2.3391 3.5088,385.965 -740.3509,2.3391 2.3392,-160.2339 404.6784,-1.1696 z" />
            </g>
            <g class="room-group" data-side="В" data-room="114"">
                <path class="hitbox" d="m 3797.701,5724.6703 c 8.2702,0 292.767,-1.654 292.767,-1.654 v 84.3566 l -133.9781,3.3081 -1.6541,370.5074 -157.1348,3.3081 z" />
            </g>
            <g class="room-group" data-side="В" data-room="115"">
                <path class="hitbox" d="m 4100.3923,5572.4977 191.8699,1.654 1.6541,237.3563 -193.524,-1.654 z" />
            </g>
            <g class="room-group" data-side="В" data-room="116"">
                <path class="hitbox" d="m 3967.2412,5821.4323 325.021,-0.827 2.4811,168.7132 h -327.5021 z" />
            </g>
            <g class="room-group" data-side="В" data-room="117"">
                <path class="hitbox" d="m 3965.5872,5999.2428 327.502,-0.827 v 183.5996 l -328.3291,1.6541 z" />
            </g>
            <g class="room-group" data-side="В" data-room="118"">
                <path class="hitbox" d="m 3796.874,6193.5938 497.0423,1.654 0.827,187.7348 -497.0423,1.6541 z" />
            </g>
            <g class="room-group" data-side="В" data-room="119"">
                <path class="hitbox" d="m 3939.9494,5574.9787 149.6916,0.8271 1.654,138.9402 -152.1727,0.8271 z" />
            </g>
            <g class="room-group" data-side="В" data-room="120"">
                <path class="hitbox" d="m 3797.701,5574.9787 h 133.9781 v 140.5944 H 3797.701 Z" />
            </g>
            <g class="room-group" data-side="В" data-room="121"">
                <path class="hitbox" d="m 3796.874,5249.9577 h 497.0423 v 315.9238 l -497.8694,0.827 z" />
            </g>
            <g class="room-group" data-side="В" data-room="122"">
                <path class="hitbox" d="m 3797.701,4917.4935 h 495.3882 l 0.8271,321.7129 -497.0423,3.3081 z" />
            </g>
            <g class="room-group" data-side="В" data-room="123"">
                <path class="hitbox" d="m 3796.874,4701.6398 h 495.3882 l 1.6541,204.2753 H 3796.874 Z" />
            </g>


            <g class="room-group" data-side="З" data-room="101"">
                <path class="hitbox" d="m 671.34503,4495.9064 h 446.78367 v 184.7954 l -444.44449,4.6783 z" />
            </g>
            <g class="room-group" data-side="З" data-room="102"">
                <path class="hitbox" d="m 672.51462,3782.4561 h 445.61408 l -1.1696,704.0936 -444.44448,-1.1696 z" />
            </g>
            <g class="room-group" data-side="З" data-room="103"">
                <path class="hitbox" d="m 673.68421,3574.269 443.27489,1.1696 v 196.4912 l -445.61407,1.1696 z" />
            </g>
            <g class="room-group" data-side="З" data-room="104"">
                <path class="hitbox" d="m 671.34503,2694.7368 444.44447,-1.1695 v 871.345 l -444.44447,-1.1696 z" />
            </g>
            <g class="room-group" data-side="З" data-room="105"">
                <path class="hitbox" d="m 671.54469,1559.77 446.59371,3.3081 -1.654,1121.4466 H 671.54469 Z" />
            </g>
            <g class="room-group" data-side="З" data-room="106"">
                <path class="hitbox" d="m 1124.7546,1561.4241 158.7889,-1.6541 v 264.6482 l -157.1348,1.6541 z" />
            </g>
        `
    },
    2: {
        image: 'Images/2_floor.jpg',
        viewBox: "0 0 4000 4000",
        html: `
            <g class="room-group" data-side="С" data-room="201">
                <path class="hitbox" d="m 3086.8726,2174.25 236.1158,-0.827 0.4135,90.1457 -237.7698,0.8271 z" />
            </g>
            <g class="room-group" data-side="С" data-room="202">
                <path class="hitbox" d="m 3085.9649,1926.3158 236.8421,1.1696 -0.5848,81.2865 -236.2573,-0.5848 z" />
            </g>
            <g class="room-group" data-side="С" data-room="203">
                <path class="hitbox pool" d="m 2497.6169,1415.8676 577.2638,-1.654 -3.3081,919.6523 h -577.2638 z" />
            </g>
            <g class="room-group" data-side="С" data-room="205">
                <path class="hitbox" d="m 3085.3801,1751.462 237.4269,0.5848 -0.5848,100.5848 -236.8421,-0.5848 z" />
            </g>
            <g class="room-group" data-side="С" data-room="206">
                <path class="hitbox" d="m 3174.8538,1408.7719 147.3684,1.1696 v 187.1345 h -146.7836 z" />
            </g>
            <g class="room-group" data-side="С" data-room="207">
                <path class="hitbox pool" d="m 1918.1287,1414.0351 569.5906,2.3392 -1.1696,918.1286 h -570.7602 z" />
            </g>
            <g class="room-group" data-side="С" data-room="208">
                <path class="hitbox" d="m 2000,2343.8597 h 155.5556 v 85.3801 l -156.7252,-2.3392 z" />
            </g>
            <g class="room-group" data-side="С" data-room="209">
                <path class="hitbox" d="m 3218.7135,1149.7076 104.0935,1.1696 -1.1696,177.7778 -101.7544,-3.5088 z" />
            </g>
            <g class="room-group" data-side="С" data-room="210">
                <path class="hitbox" d="m 2946.7836,1150.8772 164.9123,0.5848 -0.5848,123.9766 -164.9123,-1.1696 z" />
            </g>
            <g class="room-group" data-side="С" data-room="211">
                <path class="hitbox" d="m 2946.2783,1018.0684 164.578,-0.8271 v 126.9484 l -164.1645,1.2406 z" />
            </g>
            <g class="room-group" data-side="С" data-room="212">
                <path class="hitbox" d="m 2946.6918,891.11995 164.578,-0.41351 0.4136,122.81326 h -165.4051 z" />
            </g>
            <g class="room-group" data-side="С" data-room="213">
                <path class="hitbox" d="m 2886.3189,764.17154 224.1239,0.41351 1.2406,119.9187 -225.3645,0.82702 z" />
            </g>
            <g class="room-group" data-side="С" data-room="214">
                <path class="hitbox" d="m 3458.6205,489.59908 229.0861,2.06757 0.4135,308.4805 H 3458.207 Z" />
            </g>
            <g class="room-group" data-side="С" data-room="215">
                <path class="hitbox" d="m 3458.207,804.69579 229.9131,0.41351 0.4135,273.3319 -230.7401,1.6541 z" />
            </g>
            <g class="room-group" data-side="С" data-room="216">
                <path class="hitbox" d="m 3457.3099,1085.9649 230.4094,1.7544 1.1696,269.5906 -231.579,2.3392 z" />
            </g>
            <g class="room-group" data-side="С" data-room="217">
                <path class="hitbox" d="m 3458.4795,1362.5731 229.2398,2.924 1.7544,281.2865 -232.1638,-1.1696 z" />
            </g>
            <g class="room-group" data-side="С" data-room="218">
                <path class="hitbox" d="m 3459.0341,1650.7429 h 229.4995 l 1.6541,279.5346 -231.1536,0.4135 z" />
            </g>
            <g class="room-group" data-side="С" data-room="219">
                <path class="hitbox" d="m 3457.7935,1936.4802 231.1536,-0.4136 0.4136,281.6022 -230.7402,0.4135 z" />
            </g>


            <g class="room-group" data-side="Ю" data-room="201">
                <path class="hitbox" d="m 1279.5322,3595.3216 256.1403,-1.1695 0.5848,189.4736 -257.3099,1.1696 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="202">
                <path class="hitbox" d="m 964.91228,3594.7368 308.77192,0.5848 v 187.7193 H 963.74269 Z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="203">
                <path class="hitbox" d="m 647.95322,3595.3216 309.35672,0.5848 0.5848,187.1345 -308.77193,1.7544 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="204">
                <path class="hitbox" d="m 345.02924,3599.4152 156.72515,-0.5848 -0.5848,-4.0936 h 143.27486 v 188.8889 l -300.00001,0.5848 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="205">
                <path class="hitbox" d="m 345.02924,3049.7076 221.05263,1.7544 0.5848,270.7602 -221.63743,-0.5848 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="206">
                <path class="hitbox" d="m 345.61404,2764.3275 219.29824,-0.5848 1.16959,281.2865 -220.46783,0.5848 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="207">
                <path class="hitbox" d="m 346.19883,2485.3801 218.71345,1.1696 1.75439,271.9298 H 344.44444 Z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="208">
                <path class="hitbox" d="m 1152.8735,3190.6643 545.0098,1.654 v 193.524 l -544.1828,-2.4811 z" />
            </g>


            <g class="room-group" data-side="B" data-room="201">
                <path class="hitbox" d="m 1898.8304,3594.7368 117.5439,-0.5847 v 150.2924 l -118.7135,2.3391 z" />
            </g>
            <g class="room-group" data-side="B" data-room="202">
                <path class="hitbox" d="m 2165.4971,3595.3216 281.8713,1.1696 2.3392,186.5497 -285.3801,0.5848 z" />
            </g>
            <g class="room-group" data-side="B" data-room="203">
                <path class="hitbox" d="m 2454.9708,3595.9064 285.9649,-0.5848 0.5848,188.3041 -288.3041,0.5848 z" />
            </g>
            <g class="room-group" data-side="B" data-room="204">
                <path class="hitbox" d="m 2746.1988,3594.7368 286.5497,1.1696 1.1696,187.1345 -288.3041,0.5848 z" />
            </g>
            <g class="room-group" data-side="B" data-room="205">
                <path class="hitbox" d="m 3039.1813,3594.7368 299.4152,1.7544 v 188.3041 h -300 z" />
            </g>
            <g class="room-group" data-side="B" data-room="206">
                <path class="hitbox" d="m 3345.0292,3595.3216 342.6901,-0.5848 0.5848,187.7193 -345.614,1.7544 z" />
            </g>
            <g class="room-group" data-side="B" data-room="207">
                <path class="hitbox" d="m 3463.7427,3073.6842 225.1462,1.1696 1.1696,302.924 -226.3158,2.924 z" />
            </g>
            <g class="room-group" data-side="B" data-room="208">
                <path class="hitbox" d="m 3464.3275,2768.4211 223.9766,1.1695 -0.5848,296.4913 -224.5614,1.1696 z" />
            </g>
            <g class="room-group" data-side="B" data-room="209">
                <path class="hitbox" d="m 3463.7427,2480.7018 223.9766,1.1695 v 279.5322 h -225.1462 z" />
            </g>
            <g class="room-group" data-side="B" data-room="210">
                <path class="hitbox" d="m 3048.538,2345.0292 210.5263,1.1696 1.7544,280.7018 -212.8655,0.5848 z" />
            </g>
            <g class="room-group" data-side="B" data-room="211">
                <path class="hitbox" d="m 3048.538,2633.9181 h 211.1111 l 0.5848,269.0059 -212.2807,0.5848 z" />
            </g>
            <g class="room-group" data-side="B" data-room="212">
                <path class="hitbox" d="m 3049.2429,2910.3027 210.0645,1.654 0.827,467.2694 h -212.5455 z" />
            </g>
            <g class="room-group" data-side="B" data-room="213">
                <path class="hitbox" d="m 2293.5673,3191.2281 316.959,-1.1696 v 194.7368 h -317.5438 z" />
            </g>
            <g class="room-group" data-side="B" data-room="214">
                <path class="hitbox" d="m 2155.5556,3190.6433 130.9941,0.5848 2.3392,192.9824 -132.7485,0.5848 z" />
            </g>
            <g class="room-group" data-side="B" data-room="215">
                <path class="hitbox" d="m 2082.4502,3274.6074 h 66.989 l 1.2406,109.5809 -68.6432,1.2405 z" />
            </g>
            <g class="room-group" data-side="B" data-room="216">
                <path class="hitbox" d="m 2023.3918,3274.269 54.386,0.5848 v 109.3567 l -54.9708,0.5848 z" />
            </g>
            <g class="room-group" data-side="B" data-room="216">
                <path class="hitbox" d="m 2023.3918,3274.269 54.386,0.5848 v 109.3567 l -54.9708,0.5848 z" />
            </g>
            <g class="room-group" data-side="B" data-room="217">
                <path class="hitbox" d="m 1897.61,3274.1939 119.9187,0.827 v 110.4079 l -119.9187,-0.4135 z" />
            </g>
            <g class="room-group" data-side="B" data-room="218">
                <path class="hitbox" d="m 1898.8505,2797.0002 256.3779,2.481 -0.827,384.5669 -256.3779,1.654 z" />
            </g>
            <g class="room-group" data-side="B" data-room="219">
                <path class="hitbox" d="m 1897.1964,2432.2819 258.032,0.8271 0.827,358.929 -258.859,-0.827 z" />
            </g>
            <g class="room-group" data-side="B" data-room="220">
                <path class="hitbox" d="m 1898.0235,2345.0307 97.589,-0.4135 v 81.462 l -98.0025,1.2406 z" />
            </g>


            <g class="room-group" data-side="З" data-room="201">
                <path class="hitbox" d="m 345.61404,2192.9825 220.46783,0.5848 v 285.9649 H 345.61404 Z" />
            </g>
            <g class="room-group" data-side="З" data-room="202">
                <path class="hitbox" d="m 345.61404,1916.9591 220.46783,-0.5848 0.5848,270.7602 H 344.44444 Z" />
            </g>
            <g class="room-group" data-side="З" data-room="203">
                <path class="hitbox" d="m 346.19883,1623.9766 219.29825,0.5848 1.16959,286.5497 -221.63743,-0.5848 z" />
            </g>
            <g class="room-group" data-side="З" data-room="204">
                <path class="hitbox" d="m 346.19883,1336.8421 218.12866,0.5848 1.16959,280.7018 -220.46784,0.5848 z" />
            </g>
            <g class="room-group" data-side="З" data-room="205">
                <path class="hitbox" d="m 346.19883,1058.4795 h 218.71345 l 0.5848,272.5147 -221.05264,0.5847 z" />
            </g>
            <g class="room-group" data-side="З" data-room="206">
                <path class="hitbox" d="m 345.61404,773.68421 220.46783,1.16959 v 277.7778 l -220.46783,-1.1696 z" />
            </g>
            <g class="room-group" data-side="З" data-room="207">
                <path class="hitbox" d="m 590.05848,773.68421 58.47953,0.5848 1.75439,129.82456 h -78.94737 v -46.78363 h 18.12866 z" />
            </g>
            <g class="room-group" data-side="З" data-room="208">
                <path class="hitbox" d="m 973.68421,773.09942 71.34499,0.58479 2.3392,260.81869 -129.23974,1.7544 1.16959,-83.62572 53.21637,-1.75439 z" />
            </g>
            <g class="room-group" data-side="З" data-room="209">
                <path class="hitbox" d="m 1051.462,773.68421 76.6082,0.5848 v 177.19298 h 54.3859 l -0.5848,83.04091 h -131.5789 z" />
            </g>
            <g class="room-group" data-side="З" data-room="210">
                <path class="hitbox" d="m 1186.5497,772.51462 411.6959,1.75439 0.5848,259.06429 -411.1111,1.7544 z" />
            </g>
            <g class="room-group" data-side="З" data-room="211">
                <path class="hitbox" d="m 1476.0234,1133.3333 122.807,0.5848 v 92.3977 l -122.807,0.5848 z" />
            </g>
            <g class="room-group" data-side="З" data-room="212">
                <path class="hitbox" d="m 949.12281,1133.3333 460.81869,1.1696 v 92.3977 H 947.36842 Z" />
            </g>
            <g class="room-group" data-side="З" data-room="213">
                <path class="hitbox" d="m 760.23392,1134.5029 115.78947,-0.5848 1.16959,91.8129 -116.95906,1.1696 z" />
            </g>
            <g class="room-group" data-side="З" data-room="214">
                <path class="hitbox act" d="m 760.23392,1332.1637 h 90.05848 l 1.16959,35.0878 649.12281,1.1696 v -33.9182 h 97.076 v 178.9474 h 11.6959 v 500.5848 H 759.06433 Z" />
            </g>
            <g class="room-group" data-side="З" data-room="215">
                <path class="hitbox" d="m 760.23392,1232.7485 h 116.37427 v 94.7369 l -115.78948,-0.5848 z" />
            </g>
            <g class="room-group" data-side="З" data-room="216">
                <path class="hitbox" d="m 1476.0234,1232.1637 121.6374,0.5848 1.1696,95.9065 -122.807,-1.7544 z" />
            </g>
            <g class="room-group" data-side="З" data-room="217">
                <path class="hitbox" d="m 1233.3333,2157.8947 468.4211,-0.5848 0.5848,177.7778 -470.7603,-0.5848 z" />
            </g>
            <g class="room-group" data-side="З" data-room="218">
                <path class="hitbox" d="m 760.23392,2156.7251 466.66668,0.5848 v 176.6082 l -466.66668,1.7544 z" />
            </g>
        `
    },
    3: {
        image: 'Images/3_floor.jpg',
        viewBox: "0 0 4000 4000",
        html: `
            <g class="room-group" data-side="С" data-room="301">
                <path class="hitbox" d="m 3087.1345,1926.9006 195.3216,1.1696 0.5848,407.0175 -197.6608,-0.5848 z" />
            </g>
            <g class="room-group" data-side="С" data-room="302">
                <path class="hitbox" d="m 3087.2861,1412.5595 196.8321,-0.827 -2.4811,431.7073 -195.178,-0.827 z" />
            </g>
            <g class="room-group" data-side="С" data-room="303">
                <path class="hitbox" d="m 2887.1459,1048.6683 183.5997,0.827 -0.827,267.1293 -183.5997,0.827 z" />
            </g>
            <g class="room-group" data-side="С" data-room="304">
                <path class="hitbox" d="m 2887.1459,952.73335 h 182.7727 l -0.8271,89.31875 h -183.5996 z" />
            </g>
            <g class="room-group" data-side="С" data-room="305">
                <path class="hitbox" d="m 2886.7324,841.91194 182.7727,1.24053 v 104.20521 l -183.5997,-0.41351 z" />
            </g>
            <g class="room-group" data-side="С" data-room="306">
                <path class="hitbox" d="m 3458.207,490.01259 230.3266,1.65406 0.4135,157.96186 -230.3266,0.82703 z" />
            </g>
            <g class="room-group" data-side="С" data-room="307">
                <path class="hitbox" d="m 3458.6205,655.41769 h 229.4996 l 0.4135,176.15643 -230.7401,-0.41352 z" />
            </g>
            <g class="room-group" data-side="С" data-room="308">
                <path class="hitbox" d="m 3458.6205,836.94978 229.4996,-0.82702 0.4135,223.71034 -230.3266,-1.654 z" />
            </g>
            <g class="room-group" data-side="С" data-room="309">
                <path class="hitbox" d="m 3458.6205,1064.3818 230.7402,0.4135 -0.4136,228.259 H 3458.207 Z" />
            </g>
            <g class="room-group" data-side="С" data-room="310">
                <path class="hitbox" d="m 3457.38,1296.7759 232.3942,0.8271 0.4135,210.478 h -232.3942 z" />
            </g>
            <g class="room-group" data-side="С" data-room="311">
                <path class="hitbox" d="m 3457.7935,1513.0431 231.1536,1.2405 0.4136,241.905 h -232.3942 z" />
            </g>
            <g class="room-group" data-side="С" data-room="312">
                <path class="hitbox" d="m 3457.7935,1761.1508 229.0861,0.827 2.0675,217.0942 -229.913,-0.8271 z" />
            </g>
            <g class="room-group" data-side="С" data-room="313">
                <path class="hitbox" d="m 3458.207,1982.3801 230.3266,0.4135 0.8271,235.7022 -231.1537,0.4136 z" />
            </g>


            <g class="room-group" data-side="Ю" data-room="301">
                <path class="hitbox" d="m 1442.6901,3593.5673 93.5672,0.5848 0.5848,189.4736 -94.7368,1.1696 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="302">
                <path class="hitbox" d="m 1101.7544,3594.1521 335.0877,0.5847 -0.5848,188.8889 -336.8421,1.1696 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="303">
                <path class="hitbox" d="m 775.7499,3593.8392 320.0589,0.827 0.4135,188.5618 -321.29943,1.6541 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="304">
                <path class="hitbox" d="m 672.37171,3593.8392 98.41603,0.827 -0.41351,188.9754 -99.65657,0.827 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="305">
                <path class="hitbox" d="m 344.86962,3597.9743 154.65377,0.8271 v -4.9622 l 167.05914,0.4135 0.41352,190.2159 -322.12643,-0.4135 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="306">
                <path class="hitbox" d="m 345.28314,3231.1885 220.8158,1.2406 -0.41351,89.7322 H 345.69665 Z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="307">
                <path class="hitbox" d="m 345.02924,2946.1988 221.63743,-0.5848 -1.16959,282.4562 -220.46784,-1.7544 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="308">
                <path class="hitbox" d="m 345.61404,2609.3567 220.46783,0.5848 v 329.8246 l -221.05263,-0.5848 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="309">
                <path class="hitbox" d="m 345.61404,2484.2105 219.29824,1.7544 0.5848,116.9591 -220.46784,0.5848 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="310">
                <path class="hitbox" d="m 1153.287,3189.8373 85.5972,1.2405 0.4135,194.351 -86.8377,-0.4135 z" />
            </g>
            <g class="room-group" data-side="Ю" data-room="311">
                <path class="hitbox" d="m 1243.8463,3189.4238 292.3535,1.654 -1.654,193.9375 h -291.5265 z" />
            </g>


            <g class="room-group" data-side="B" data-room="301">
                <path class="hitbox" d="m 1898.0235,3594.2527 119.0916,0.827 -0.827,152.1727 -119.0917,-0.4135 z" />
            </g>
            <g class="room-group" data-side="B" data-room="302">
                <path class="hitbox" d="m 2164.3257,3594.6662 265.8887,-0.4135 0.827,188.5618 -266.3022,2.0676 z" />
            </g>
            <g class="room-group" data-side="B" data-room="303">
                <path class="hitbox" d="m 2436.0035,3594.6662 h 90.9728 l 0.8271,189.3889 -91.7999,0.4135 z" />
            </g>
            <g class="room-group" data-side="B" data-room="304">
                <path class="hitbox" d="m 2533.179,3594.6662 432.5344,0.8271 -0.8271,188.5618 -433.3613,0.827 z" />
            </g>
            <g class="room-group" data-side="B" data-room="305">
                <path class="hitbox" d="m 2970.262,3593.8392 398.2128,1.2405 0.4135,188.9754 -399.0398,1.2405 z" />
            </g>
            <g class="room-group" data-side="B" data-room="306">
                <path class="hitbox" d="m 3374.6775,3594.2527 314.6832,0.827 0.4135,190.2159 -316.3373,-1.2405 z" />
            </g>
            <g class="room-group" data-side="B" data-room="307">
                <path class="hitbox" d="m 3463.7427,3040.3509 223.9766,0.5848 1.7544,339.1813 h -226.9006 z" />
            </g>
            <g class="room-group" data-side="B" data-room="308">
                <path class="hitbox" d="m 3464.3275,2651.462 224.5614,0.5848 0.5848,381.2865 -225.731,1.1696 z" />
            </g>
            <g class="room-group" data-side="B" data-room="309">
                <path class="hitbox" d="m 3463.7427,2345.0292 224.5614,0.5848 0.5848,301.1696 -226.3158,-1.1696 z" />
            </g>
            <g class="room-group" data-side="B" data-room="310">
                <path class="hitbox" d="m 3047.3684,2465.4971 211.6959,0.5848 -0.5848,442.1052 -211.1111,1.1696 z" />
            </g>
            <g class="room-group" data-side="B" data-room="311">
                <path class="hitbox" d="m 3048.0024,2913.1972 212.132,0.8271 -0.4135,318.8183 h -211.305 z" />
            </g>
            <g class="room-group" data-side="B" data-room="313">
                <path class="hitbox" d="m 2307.8146,3190.2508 303.1048,0.827 -0.4135,192.6969 -303.5183,0.8271 z" />
            </g>
            <g class="room-group" data-side="B" data-room="314">
                <path class="hitbox" d="m 2082.0366,3190.2508 220.4023,-0.4135 0.4135,195.178 h -281.1886 l 1.2405,-110.4079 58.3053,0.4135 z" />
            </g>
            <g class="room-group" data-side="B" data-room="315">
                <path class="hitbox" d="m 1899.4152,2534.5029 254.9708,1.1696 v 647.9532 l -254.9708,-1.1696 z" />
            </g>
            <g class="room-group" data-side="B" data-room="316">
                <path class="hitbox" d="m 2000.5746,2345.4443 152.9997,1.654 v 180.2916 l -255.5508,-0.8271 0.827,-114.9565 102.5512,-0.827 z" />
            </g>
            <g class="room-group" data-side="B" data-room="317">
                <path class="hitbox" d="m 1897.6608,2344.7368 97.6608,0.2924 0.8772,61.1112 h -98.538 z" />
            </g>


            <g class="room-group" data-side="З" data-room="301">
                <path class="hitbox" d="m 345.69665,2140.3419 219.98878,1.6541 0.82702,338.2534 -222.46985,0.827 z" />
            </g>
            <g class="room-group" data-side="З" data-room="302">
                <path class="hitbox" d="m 344.86962,2000.5746 221.64283,0.8271 -2.48108,132.324 -218.33472,0.8271 z" />
            </g>
            <g class="room-group" data-side="З" data-room="303">
                <path class="hitbox" d="m 344.44444,1645.614 221.63743,0.5848 -1.16959,347.9532 H 345.02924 Z" />
            </g>
            <g class="room-group" data-side="З" data-room="304">
                <path class="hitbox" d="m 345.61404,1359.0643 220.46783,-0.5848 -0.58479,280.7018 -221.05264,1.1696 z" />
            </g>
            <g class="room-group" data-side="З" data-room="305">
                <path class="hitbox" d="m 344.86962,1077.6142 219.98878,-0.827 -0.82703,276.2265 -219.16175,-0.827 z" />
            </g>
            <g class="room-group" data-side="З" data-room="306">
                <path class="hitbox" d="m 344.86962,772.85531 220.81581,0.82702 0.41351,53.75666 h -9.51079 l -0.41352,36.38912 h 9.92431 l -0.41351,40.52425 h -9.09728 v 40.11073 l 9.51079,-0.41351 0.41351,125.70792 -222.46985,0.4135 z" />
            </g>
            <g class="room-group" data-side="З" data-room="307">
                <path class="hitbox" d="m 571.4746,772.4418 76.91337,0.41351 1.65405,131.49705 h -78.98093 l 0.41351,-47.96748 17.78105,0.41351 V 828.26601 H 571.4746 Z" />
            </g>
            <g class="room-group" data-side="З" data-room="308">
                <path class="hitbox" d="m 919.65233,773.26882 208.41037,2.48108 -1.654,257.2049 -208.41042,2.4811 z" />
            </g>
            <g class="room-group" data-side="З" data-room="309">
                <path class="hitbox" d="m 1133.0249,773.26882 191.8699,0.82703 -0.827,261.34005 -191.0429,-0.827 z" />
            </g>
            <g class="room-group" data-side="З" data-room="310">
                <path class="hitbox" d="m 1329.857,774.92287 267.9562,-0.82702 v 260.51305 l -269.6103,1.654 z" />
            </g>
            <g class="room-group" data-side="З" data-room="311">
                <path class="hitbox" d="m 1266.176,2156.8824 435.0154,0.8271 v 176.1564 H 1266.176 Z" />
            </g>
            <g class="room-group" data-side="З" data-room="312">
                <path class="hitbox" d="m 760.03641,2157.7095 500.35039,0.827 -0.827,176.9834 H 760.03641 Z" />
            </g>
        `
    }
};

function changeFloor(level) {
    const floor = floorData[level];
    document.getElementById('floor-img').src = floor.image;

    const svgElement = document.getElementById('map-svg');
    svgElement.setAttribute('viewBox', floor.viewBox);

    const content = document.getElementById('svg-content');
    content.innerHTML = floor.html;
    
    // Навешиваем события на новые элементы
    initInteractivity();

    document.querySelectorAll('.floor-nav button').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-f' + level).classList.add('active');
}

// Функция для обработки наведения
function initInteractivity() {
    const groups = document.querySelectorAll('.room-group');
    const display = document.getElementById('info-text');

    groups.forEach(group => {
        group.addEventListener('mouseenter', () => {
            const side = group.getAttribute('data-side');
            const room = group.getAttribute('data-room');
            
            // Выводим в единое окно
            display.innerHTML = `
                <div class="info-card">
                    <span class="info-label">Кабинет:</span> <span class="info-value">${side}${room}</span><br>
                </div>
            `;
        });

        group.addEventListener('mouseleave', () => {
            display.innerHTML = "Наведите курсор на кабинет на карте";
        });
    });
}

// Поиск тоже должен обновлять инфо-панель
function findRoom() {
    const side = document.getElementById('search-side').value;
    const number = document.getElementById('search-input').value.trim();
    if (!side || !number) return;

    for (let level in floorData) {
        if (floorData[level].html.includes(`data-room="${number}"`) && floorData[level].html.includes(`data-side="${side}"`)) {
            changeFloor(level);
            setTimeout(() => {
                const target = document.querySelector(`.room-group[data-side="${side}"][data-room="${number}"]`);
                if (target) {
                    highlightRoom(target);
                    // Эмулируем наведение, чтобы обновить инфо-панель
                    target.dispatchEvent(new Event('mouseenter'));
                }
            }, 100);
            return;
        }
    }
}

function highlightRoom(group) {
    document.querySelectorAll('.hitbox').forEach(el => el.classList.remove('highlight'));
    const path = group.querySelector('.hitbox');
    path.classList.add('highlight');
    group.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Загрузка 1 этажа при старте
window.onload = () => changeFloor(1);