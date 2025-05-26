module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/src/components/ui/waves-background.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Waves": (()=>Waves)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
class Grad {
    x;
    y;
    z;
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    dot2(x, y) {
        return this.x * x + this.y * y;
    }
}
class Noise {
    grad3;
    p;
    perm;
    gradP;
    constructor(seed = 0){
        this.grad3 = [
            new Grad(1, 1, 0),
            new Grad(-1, 1, 0),
            new Grad(1, -1, 0),
            new Grad(-1, -1, 0),
            new Grad(1, 0, 1),
            new Grad(-1, 0, 1),
            new Grad(1, 0, -1),
            new Grad(-1, 0, -1),
            new Grad(0, 1, 1),
            new Grad(0, -1, 1),
            new Grad(0, 1, -1),
            new Grad(0, -1, -1)
        ];
        this.p = [
            151,
            160,
            137,
            91,
            90,
            15,
            131,
            13,
            201,
            95,
            96,
            53,
            194,
            233,
            7,
            225,
            140,
            36,
            103,
            30,
            69,
            142,
            8,
            99,
            37,
            240,
            21,
            10,
            23,
            190,
            6,
            148,
            247,
            120,
            234,
            75,
            0,
            26,
            197,
            62,
            94,
            252,
            219,
            203,
            117,
            35,
            11,
            32,
            57,
            177,
            33,
            88,
            237,
            149,
            56,
            87,
            174,
            20,
            125,
            136,
            171,
            168,
            68,
            175,
            74,
            165,
            71,
            134,
            139,
            48,
            27,
            166,
            77,
            146,
            158,
            231,
            83,
            111,
            229,
            122,
            60,
            211,
            133,
            230,
            220,
            105,
            92,
            41,
            55,
            46,
            245,
            40,
            244,
            102,
            143,
            54,
            65,
            25,
            63,
            161,
            1,
            216,
            80,
            73,
            209,
            76,
            132,
            187,
            208,
            89,
            18,
            169,
            200,
            196,
            135,
            130,
            116,
            188,
            159,
            86,
            164,
            100,
            109,
            198,
            173,
            186,
            3,
            64,
            52,
            217,
            226,
            250,
            124,
            123,
            5,
            202,
            38,
            147,
            118,
            126,
            255,
            82,
            85,
            212,
            207,
            206,
            59,
            227,
            47,
            16,
            58,
            17,
            182,
            189,
            28,
            42,
            223,
            183,
            170,
            213,
            119,
            248,
            152,
            2,
            44,
            154,
            163,
            70,
            221,
            153,
            101,
            155,
            167,
            43,
            172,
            9,
            129,
            22,
            39,
            253,
            19,
            98,
            108,
            110,
            79,
            113,
            224,
            232,
            178,
            185,
            112,
            104,
            218,
            246,
            97,
            228,
            251,
            34,
            242,
            193,
            238,
            210,
            144,
            12,
            191,
            179,
            162,
            241,
            81,
            51,
            145,
            235,
            249,
            14,
            239,
            107,
            49,
            192,
            214,
            31,
            181,
            199,
            106,
            157,
            184,
            84,
            204,
            176,
            115,
            121,
            50,
            45,
            127,
            4,
            150,
            254,
            138,
            236,
            205,
            93,
            222,
            114,
            67,
            29,
            24,
            72,
            243,
            141,
            128,
            195,
            78,
            66,
            215,
            61,
            156,
            180
        ];
        this.perm = new Array(512);
        this.gradP = new Array(512);
        this.seed(seed);
    }
    seed(seed) {
        if (seed > 0 && seed < 1) seed *= 65536;
        seed = Math.floor(seed);
        if (seed < 256) seed |= seed << 8;
        for(let i = 0; i < 256; i++){
            const v = i & 1 ? this.p[i] ^ seed & 255 : this.p[i] ^ seed >> 8 & 255;
            this.perm[i] = this.perm[i + 256] = v;
            this.gradP[i] = this.gradP[i + 256] = this.grad3[v % 12];
        }
    }
    fade(t) {
        return t * t * t * (t * (t * 6 - 15) + 10);
    }
    lerp(a, b, t) {
        return (1 - t) * a + t * b;
    }
    perlin2(x, y) {
        let X = Math.floor(x), Y = Math.floor(y);
        x -= X;
        y -= Y;
        X &= 255;
        Y &= 255;
        const n00 = this.gradP[X + this.perm[Y]].dot2(x, y);
        const n01 = this.gradP[X + this.perm[Y + 1]].dot2(x, y - 1);
        const n10 = this.gradP[X + 1 + this.perm[Y]].dot2(x - 1, y);
        const n11 = this.gradP[X + 1 + this.perm[Y + 1]].dot2(x - 1, y - 1);
        const u = this.fade(x);
        return this.lerp(this.lerp(n00, n10, u), this.lerp(n01, n11, u), this.fade(y));
    }
}
const Waves = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ lineColor = "hsl(var(--foreground))", backgroundColor = "transparent", waveSpeedX = 0.0125, waveSpeedY = 0.005, waveAmpX = 32, waveAmpY = 16, xGap = 10, yGap = 32, friction = 0.925, tension = 0.005, maxCursorMove = 100, className, scrollY = 0 }, ref)=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const boundingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        width: 0,
        height: 0,
        left: 0,
        top: 0
    });
    const noiseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Noise(Math.random()));
    const linesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const ripplesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animationIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Helper function to safely convert colors
    const safeColorWithOpacity = (baseColor, opacity)=>{
        // Handle HSL format
        if (baseColor.startsWith('hsl')) {
            // Check if it's already hsla
            if (baseColor.startsWith('hsla')) {
                // Replace the existing alpha
                return baseColor.replace(/,\s*[\d.]+\)$/, `, ${opacity})`);
            }
            // Convert hsl to hsla
            return baseColor.replace('hsl(', 'hsla(').replace(')', `, ${opacity})`);
        }
        // Handle RGB format
        if (baseColor.startsWith('rgb')) {
            // Check if it's already rgba
            if (baseColor.startsWith('rgba')) {
                // Replace the existing alpha
                return baseColor.replace(/,\s*[\d.]+\)$/, `, ${opacity})`);
            }
            // Convert rgb to rgba
            return baseColor.replace('rgb(', 'rgba(').replace(')', `, ${opacity})`);
        }
        // Handle hex format
        if (baseColor.startsWith('#')) {
            const r = parseInt(baseColor.slice(1, 3), 16);
            const g = parseInt(baseColor.slice(3, 5), 16);
            const b = parseInt(baseColor.slice(5, 7), 16);
            return `rgba(${r}, ${g}, ${b}, ${opacity})`;
        }
        // Fallback
        return `rgba(0, 0, 0, ${opacity})`;
    };
    // Store parameters in refs to avoid useEffect dependency issues
    const paramsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        lineColor,
        backgroundColor,
        waveSpeedX,
        waveSpeedY,
        waveAmpX,
        waveAmpY,
        xGap,
        yGap,
        friction,
        tension,
        maxCursorMove
    });
    // Update params ref when props change
    paramsRef.current = {
        lineColor,
        backgroundColor,
        waveSpeedX,
        waveSpeedY,
        waveAmpX,
        waveAmpY,
        xGap,
        yGap,
        friction,
        tension,
        maxCursorMove
    };
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: -10,
        y: 0,
        lx: 0,
        ly: 0,
        sx: 0,
        sy: 0,
        v: 0,
        vs: 0,
        a: 0,
        set: false,
        lastRippleTime: 0
    });
    // Expose updateMouse method to parent
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, ()=>({
            updateMouse: (x, y)=>{
                const mouse = mouseRef.current;
                const b = boundingRef.current;
                // x and y are now page coordinates (pageX/pageY)
                // We need to subtract document scroll position from boundingRect
                mouse.x = x - b.left;
                mouse.y = y - (b.top + window.scrollY);
                if (!mouse.set) {
                    mouse.sx = mouse.x;
                    mouse.sy = mouse.y;
                    mouse.lx = mouse.x;
                    mouse.ly = mouse.y;
                    mouse.set = true;
                }
            }
        }), []);
    // We still need to track scrollY changes to update position calculations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        prevScrollYRef.current = scrollY;
    }, [
        scrollY
    ]);
    // Reference to track previous scroll position
    const prevScrollYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(scrollY);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctxRef.current = ctx;
        function setSize() {
            if (!canvas || !container) return;
            boundingRef.current = container.getBoundingClientRect();
            canvas.width = boundingRef.current.width;
            canvas.height = boundingRef.current.height;
        }
        function setLines() {
            const { width, height } = boundingRef.current;
            const { xGap, yGap } = paramsRef.current;
            linesRef.current = [];
            const oWidth = width + 200, oHeight = height + 30;
            const totalLines = Math.ceil(oWidth / xGap);
            const totalPoints = Math.ceil(oHeight / yGap);
            const xStart = (width - xGap * totalLines) / 2;
            const yStart = (height - yGap * totalPoints) / 2;
            for(let i = 0; i <= totalLines; i++){
                const pts = [];
                for(let j = 0; j <= totalPoints; j++){
                    pts.push({
                        x: xStart + xGap * i,
                        y: yStart + yGap * j,
                        wave: {
                            x: 0,
                            y: 0
                        },
                        cursor: {
                            x: 0,
                            y: 0,
                            vx: 0,
                            vy: 0
                        },
                        ripple: {
                            intensity: 0,
                            phase: 0
                        },
                        parallax: {
                            x: 0,
                            y: 0,
                            depth: Math.random() * 0.5 + 0.5
                        }
                    });
                }
                linesRef.current.push(pts);
            }
        }
        function createRipple(x, y, intensity = 1) {
            ripplesRef.current.push({
                x,
                y,
                radius: 0,
                intensity,
                startTime: Date.now(),
                duration: 2000
            });
            // Limit number of ripples for performance
            if (ripplesRef.current.length > 5) {
                ripplesRef.current.shift();
            }
        }
        function updateRipples() {
            const currentTime = Date.now();
            ripplesRef.current = ripplesRef.current.filter((ripple)=>{
                const elapsed = currentTime - ripple.startTime;
                if (elapsed > ripple.duration) return false;
                const progress = elapsed / ripple.duration;
                ripple.radius = progress * 300 // Max ripple radius
                ;
                ripple.intensity = (1 - progress) * ripple.intensity;
                return true;
            });
        }
        function movePoints(time) {
            const lines = linesRef.current;
            const mouse = mouseRef.current;
            const noise = noiseRef.current;
            const { waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, friction, tension, maxCursorMove } = paramsRef.current;
            lines.forEach((pts)=>{
                pts.forEach((p)=>{
                    // Enhanced multi-octave noise for smoother, more organic movement
                    // Base octave - large, slow movements
                    const baseMove = noise.perlin2((p.x + time * waveSpeedX) * 0.0015, (p.y + time * waveSpeedY) * 0.001);
                    // Second octave - medium detail movements
                    const detailMove = noise.perlin2((p.x + time * waveSpeedX * 1.7) * 0.004, (p.y + time * waveSpeedY * 1.7) * 0.003) * 0.35 // Increased from 0.3 for more influence
                    ;
                    // Third octave - fine detail movements
                    const fineMove = noise.perlin2((p.x + time * waveSpeedX * 3.5) * 0.008, (p.y + time * waveSpeedY * 3.5) * 0.007) * 0.15 // Increased from 0.1 for more visible fine detail
                    ;
                    // Fourth octave - very fine micro movements for extra smoothness
                    const microMove = noise.perlin2((p.x + time * waveSpeedX * 6) * 0.015, (p.y + time * waveSpeedY * 6) * 0.014) * 0.05;
                    // Combine all octaves with weighted influence for a rich, natural movement
                    const combinedMove = (baseMove + detailMove + fineMove + microMove) * 9 // Increased multiplier for more pronounced effect
                    ;
                    // Enhanced wave motion with multiple harmonics for smoother transitions
                    p.wave.x = Math.cos(combinedMove) * waveAmpX * 0.85 + Math.sin(combinedMove * 1.3) * waveAmpX * 0.3 + Math.cos(combinedMove * 2.1) * waveAmpX * 0.1;
                    p.wave.y = Math.sin(combinedMove) * waveAmpY * 0.85 + Math.cos(combinedMove * 1.2) * waveAmpY * 0.25 + Math.sin(combinedMove * 1.9) * waveAmpY * 0.1;
                    // Enhanced parallax effect with smoother response
                    const parallaxFactor = p.parallax.depth;
                    p.parallax.x = (mouse.sx - boundingRef.current.width / 2) * parallaxFactor * 0.018;
                    p.parallax.y = (mouse.sy - boundingRef.current.height / 2) * parallaxFactor * 0.012;
                    // Enhanced cursor interaction with smoother falloff
                    const dx = p.x - mouse.sx, dy = p.y - mouse.sy;
                    const dist = Math.hypot(dx, dy);
                    const influenceRadius = Math.max(70, mouse.vs * 0.2) // Reduced for more focused effect
                    ;
                    if (dist < influenceRadius) {
                        const s = 1 - dist / influenceRadius;
                        // Improved smoothing function for more natural falloff
                        const smoothFalloff = s * s * s * (s * (s * 6 - 15) + 10) // Using smoother cubic interpolation
                        ;
                        const directionForce = Math.cos(dist * 0.01) * smoothFalloff * 0.65 // Reduced for subtler effect
                        ;
                        const velocityMultiplier = Math.min(mouse.vs * 0.0008, 0.4) // Reduced for more controlled effect
                        ;
                        p.cursor.vx += Math.cos(mouse.a) * directionForce * influenceRadius * velocityMultiplier;
                        p.cursor.vy += Math.sin(mouse.a) * directionForce * influenceRadius * velocityMultiplier;
                    }
                    // Ripple effects with smoother propagation
                    p.ripple.intensity = 0;
                    ripplesRef.current.forEach((ripple)=>{
                        const rippleDist = Math.hypot(p.x - ripple.x, p.y - ripple.y);
                        if (rippleDist < ripple.radius + 60) {
                            // Smoother ripple wave function with controlled fade-out
                            const phase = (rippleDist - ripple.radius) * 0.08 // Reduced from 0.1 for gentler waves
                            ;
                            const rippleEffect = Math.sin(phase) * ripple.intensity * Math.exp(-phase * 0.2);
                            p.ripple.intensity += rippleEffect * 0.45 // Reduced from 0.5 for subtler effect
                            ;
                        }
                    });
                    // Enhanced physics with improved spring system and smoother response
                    const enhancedTension = tension * (1 + Math.abs(p.cursor.x + p.cursor.y) * 0.0008) // Reduced from 0.001
                    ;
                    p.cursor.vx += (0 - p.cursor.x) * enhancedTension;
                    p.cursor.vy += (0 - p.cursor.y) * enhancedTension;
                    p.cursor.vx *= friction;
                    p.cursor.vy *= friction;
                    p.cursor.x += p.cursor.vx * 2.2 // Reduced from 2.5 for smoother motion
                    ;
                    p.cursor.y += p.cursor.vy * 2.2 // Reduced from 2.5 for smoother motion
                    ;
                    // Apply ripple effects to cursor movement with improved smoothing
                    p.cursor.x += p.ripple.intensity * 8 // Reduced from 10 for subtler effect
                    ;
                    p.cursor.y += p.ripple.intensity * 6 // Reduced from 8 for subtler effect
                    ;
                    // Limit maximum cursor influence with smoother clamping
                    p.cursor.x = Math.min(maxCursorMove * 1.1, Math.max(-maxCursorMove * 1.1, p.cursor.x) // Reduced from 1.2 for more controlled motion
                    );
                    p.cursor.y = Math.min(maxCursorMove * 1.1, Math.max(-maxCursorMove * 1.1, p.cursor.y) // Reduced from 1.2 for more controlled motion
                    );
                });
            });
        }
        function moved(point, withCursor = true, withParallax = true) {
            let x = point.x + point.wave.x;
            let y = point.y + point.wave.y;
            if (withCursor) {
                x += point.cursor.x;
                y += point.cursor.y;
            }
            if (withParallax) {
                x += point.parallax.x;
                y += point.parallax.y;
            }
            return {
                x: Math.round(x * 10) / 10,
                y: Math.round(y * 10) / 10
            };
        }
        function drawLines() {
            const { width, height } = boundingRef.current;
            const { lineColor } = paramsRef.current;
            const ctx = ctxRef.current;
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
            // Draw main wave lines with enhanced rendering
            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.8 // Reduced from 0.9 for more delicate lines
            ;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            linesRef.current.forEach((points)=>{
                if (points.length < 2) return;
                const movedPoints = points.map((p)=>moved(p, true, true));
                // Start the path
                ctx.moveTo(movedPoints[0].x, movedPoints[0].y);
                if (movedPoints.length === 2) {
                    ctx.lineTo(movedPoints[1].x, movedPoints[1].y);
                } else {
                    // Enhanced smooth curves with cardinal spline interpolation for smoother results
                    for(let i = 0; i < movedPoints.length - 1; i++){
                        const p0 = movedPoints[Math.max(0, i - 1)];
                        const p1 = movedPoints[i];
                        const p2 = movedPoints[i + 1];
                        const p3 = movedPoints[Math.min(movedPoints.length - 1, i + 2)];
                        // Calculate tension factor based on distance for adaptive smoothing
                        const segmentLength = Math.hypot(p2.x - p1.x, p2.y - p1.y);
                        const tensionFactor = Math.min(0.25, 8 / (segmentLength + 0.1));
                        // Calculate control points for smoother curve segments
                        // Using a modified Cardinal spline with tension
                        const cp1x = p1.x + (p2.x - p0.x) * tensionFactor;
                        const cp1y = p1.y + (p2.y - p0.y) * tensionFactor;
                        const cp2x = p2.x - (p3.x - p1.x) * tensionFactor;
                        const cp2y = p2.y - (p3.y - p1.y) * tensionFactor;
                        // Use a bezier curve for smoother segments
                        if (i === 0) {
                            // For first segment, just use one control point
                            ctx.quadraticCurveTo(cp1x, cp1y, p2.x, p2.y);
                        } else {
                            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
                        }
                    }
                }
            });
            ctx.stroke();
            // Draw subtle glow effect around cursor with improved gradient
            const mouse = mouseRef.current;
            if (mouse.set && mouse.vs > 4) {
                // Create a larger, subtler gradient for smoother appearance
                const glowRadius = Math.min(25, 5 + mouse.vs * 0.08) // Dynamic radius based on velocity
                ;
                const gradient = ctx.createRadialGradient(mouse.sx, mouse.sy, 0, mouse.sx, mouse.sy, glowRadius);
                gradient.addColorStop(0, safeColorWithOpacity(lineColor, 0.025)) // Reduced opacity for subtlety
                ;
                gradient.addColorStop(0.7, safeColorWithOpacity(lineColor, 0.01));
                gradient.addColorStop(1, safeColorWithOpacity(lineColor, 0));
                ctx.fillStyle = gradient;
                ctx.fillRect(mouse.sx - glowRadius, mouse.sy - glowRadius, glowRadius * 2, glowRadius * 2);
            }
            // Draw ripple effects with enhanced appearance
            ripplesRef.current.forEach((ripple)=>{
                if (ripple.intensity > 0.08) {
                    // Draw multiple concentric ripples for richer effect
                    for(let i = 0; i < 2; i++){
                        const rippleRadius = ripple.radius - i * 8;
                        if (rippleRadius > 0) {
                            ctx.beginPath();
                            ctx.arc(ripple.x, ripple.y, rippleRadius, 0, Math.PI * 2);
                            // Vary opacity based on ripple phase for more organic look
                            const opacity = ripple.intensity * (0.2 - i * 0.07) * (1 - rippleRadius / (ripple.radius + 50));
                            ctx.strokeStyle = safeColorWithOpacity(lineColor, opacity);
                            ctx.lineWidth = 1.2 - i * 0.3 // Thinner outer rings
                            ;
                            ctx.stroke();
                        }
                    }
                }
            });
        }
        function tick(t) {
            const mouse = mouseRef.current;
            const currentTime = Date.now();
            // Enhanced mouse smoothing with adaptive responsiveness - make it more responsive
            const smoothingFactor = 0.1 + mouse.vs * 0.0008 // Increased from 0.06 to 0.1 for less delay
            ;
            mouse.sx += (mouse.x - mouse.sx) * smoothingFactor;
            mouse.sy += (mouse.y - mouse.sy) * smoothingFactor;
            const dx = mouse.x - mouse.lx, dy = mouse.y - mouse.ly;
            const d = Math.hypot(dx, dy);
            mouse.v = d;
            mouse.vs += (d - mouse.vs) * 0.15 // Increased from 0.12 to 0.15 for quicker velocity response
            ;
            mouse.vs = Math.min(80, mouse.vs);
            mouse.lx = mouse.x;
            mouse.ly = mouse.y;
            mouse.a = Math.atan2(dy, dx);
            // Create ripples on significant mouse movement - less frequent and less intense
            if (mouse.vs > 20 && currentTime - mouse.lastRippleTime > 300) {
                createRipple(mouse.sx, mouse.sy, mouse.vs * 0.015) // Reduced intensity from 0.02 to 0.015
                ;
                mouse.lastRippleTime = currentTime;
            }
            if (container) {
                container.style.setProperty("--x", `${mouse.sx}px`);
                container.style.setProperty("--y", `${mouse.sy}px`);
                container.style.setProperty("--velocity", `${mouse.vs}`);
            }
            updateRipples();
            movePoints(t);
            drawLines();
            // Store animation ID for cleanup
            animationIdRef.current = requestAnimationFrame(tick);
        }
        function onResize() {
            setSize();
            setLines();
        }
        setSize();
        setLines();
        // Start the animation loop
        animationIdRef.current = requestAnimationFrame(tick);
        window.addEventListener("resize", onResize);
        return ()=>{
            window.removeEventListener("resize", onResize);
            // Clean up animation frame
            if (animationIdRef.current) {
                cancelAnimationFrame(animationIdRef.current);
            }
        };
    }, []) // Empty dependency array to prevent restarts
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            backgroundColor,
            pointerEvents: 'none',
            zIndex: -10
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute top-0 left-0 w-full h-full overflow-hidden", className),
        onMouseMove: (e)=>{
            const mouse = mouseRef.current;
            const b = boundingRef.current;
            // Convert clientX/Y to be consistent with our page coordinate system
            mouse.x = e.clientX - b.left;
            mouse.y = e.clientY - b.top;
            if (!mouse.set) {
                mouse.sx = mouse.x;
                mouse.sy = mouse.y;
                mouse.lx = mouse.x;
                mouse.ly = mouse.y;
                mouse.set = true;
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute top-0 left-0 rounded-full pointer-events-none", "bg-foreground/10 transition-all duration-100 ease-out"),
                style: {
                    width: `calc(2px + var(--velocity, 0) * 0.01px)`,
                    height: `calc(2px + var(--velocity, 0) * 0.01px)`,
                    transform: "translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0)",
                    willChange: "transform, width, height",
                    boxShadow: `0 0 calc(2px + var(--velocity, 0) * 0.03px) rgba(var(--foreground), 0.05)`,
                    zIndex: -5
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/waves-background.tsx",
                lineNumber: 652,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 rounded-full pointer-events-none opacity-100",
                style: {
                    width: "0px",
                    height: "0px",
                    background: `radial-gradient(circle, ${safeColorWithOpacity(lineColor, 0.01)} 0%, transparent 70%)`,
                    transform: "translate3d(calc(var(--x) - 4px), calc(var(--y) - 4px), 0)",
                    willChange: "transform",
                    zIndex: -5
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/waves-background.tsx",
                lineNumber: 668,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "block w-full h-full",
                style: {
                    zIndex: -15
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/waves-background.tsx",
                lineNumber: 680,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/waves-background.tsx",
        lineNumber: 623,
        columnNumber: 5
    }, this);
});
Waves.displayName = "Waves";
}}),
"[project]/src/components/ui/wave-background-wrapper.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WaveBackgroundWrapper": (()=>WaveBackgroundWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$waves$2d$background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/waves-background.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function WaveBackgroundWrapper() {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const waveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Track scroll position
        const handleScroll = ()=>{
            setScrollY(window.scrollY);
        };
        const handleMouseMove = (e)=>{
            if (waveRef.current && waveRef.current.updateMouse) {
                // Use pageY which already accounts for scrolling
                waveRef.current.updateMouse(e.pageX, e.pageY);
            }
        };
        const handleTouchMove = (e)=>{
            if (waveRef.current && waveRef.current.updateMouse && e.touches[0]) {
                // Use pageY which already accounts for scrolling
                waveRef.current.updateMouse(e.touches[0].pageX, e.touches[0].pageY);
            }
        };
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('touchmove', handleTouchMove, {
            passive: true
        });
        // Initial scroll position
        setScrollY(window.scrollY);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 -z-20 pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$waves$2d$background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Waves"], {
                ref: waveRef,
                lineColor: theme === "dark" ? "rgba(255, 255, 255, 0.18)" : "rgba(0, 0, 0, 0.15)",
                backgroundColor: "transparent",
                waveSpeedX: 0.015,
                waveSpeedY: 0.008,
                waveAmpX: 24,
                waveAmpY: 16,
                friction: 0.94,
                tension: 0.01,
                maxCursorMove: 120,
                xGap: 32,
                yGap: 60,
                scrollY: scrollY,
                className: "pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/wave-background-wrapper.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gp-light/15 pointer-events-none",
                style: {
                    zIndex: -15
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/wave-background-wrapper.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-32 h-32 rounded-full bg-gp-accent/8 blur-2xl transition-all duration-1000 ease-out pointer-events-none",
                style: {
                    top: `calc(12% + ${scrollY * 0.05}px)`,
                    left: '18%',
                    transform: 'translate(calc(var(--x, 0px) * -0.02), calc(var(--y, 0px) * -0.015))',
                    willChange: 'transform',
                    zIndex: -15
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/wave-background-wrapper.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-40 h-40 rounded-full bg-gp-accent/6 blur-3xl transition-all duration-1200 ease-out pointer-events-none",
                style: {
                    bottom: `calc(20% + ${scrollY * 0.03}px)`,
                    right: '12%',
                    transform: 'translate(calc(var(--x, 0px) * 0.015), calc(var(--y, 0px) * 0.02))',
                    willChange: 'transform',
                    zIndex: -15
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/wave-background-wrapper.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-24 h-24 rounded-full bg-gp-accent/10 blur-xl transition-all duration-800 ease-out pointer-events-none",
                style: {
                    top: `calc(60% + ${scrollY * 0.08}px)`,
                    left: '70%',
                    transform: 'translate(calc(var(--x, 0px) * -0.025), calc(var(--y, 0px) * 0.018))',
                    willChange: 'transform',
                    zIndex: -15
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/wave-background-wrapper.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/wave-background-wrapper.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/providers.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Providers": (()=>Providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Providers({ children }) {
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
            defaultOptions: {
                queries: {
                    staleTime: 1000 * 60 * 5,
                    gcTime: 1000 * 60 * 60
                }
            }
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/providers.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c2bb7ef3._.js.map