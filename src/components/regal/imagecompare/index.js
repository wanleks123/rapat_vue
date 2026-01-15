export default {
    root: ({ props, state, parent }) => ({
        class: [
            'group relative overflow-hidden w-full aspect-video',

            '[&_img]:w-full [&_img]:h-full [&_img]:absolute',
            '[&_img+img]:[clip-path:polygon(var(--p-imagecompare-scope-x,50%)_0,100%_0,100%_100%,var(--p-imagecompare-scope-x,50%)_100%)]',
            '[&:dir(rtl)_img+img]:[clip-path:polygon(0_0,var(--p-imagecompare-scope-x,50%)_0,var(--p-imagecompare-scope-x,50%)_100%,0_100%)]',

            '[&>:last-child]:relative [&>:last-child]:appearance-none [&>:last-child]:w-[calc(100%+1rem)] [&>:last-child]:h-full',
            '[&>:last-child]:-ms-2 [&>:last-child]:bg-transparent [&>:last-child]:outline-hidden [&>:last-child]:transition-all',
            '[&>:last-child]:duration-200 hover:[&>:last-child]:w-[calc(100%+2rem)] hover:[&>:last-child]:-ms-4',

            '[&>:last-child::-webkit-slider-thumb]:appearance-none [&>:last-child::-webkit-slider-thumb]:h-4  [&>:last-child::-webkit-slider-thumb]:w-4 [&>:last-child::-webkit-slider-thumb]:bg-white/30 [&>:last-child::-webkit-slider-thumb]:rounded-full [&>:last-child::-webkit-slider-thumb]:bg-contain [&>:last-child::-webkit-slider-thumb]:cursor-ew-resize [&>:last-child::-webkit-slider-thumb]:transition-all [&>:last-child::-webkit-slider-thumb]:duration-200 focus-visible:[&>:last-child::-webkit-slider-thumb]:outline  focus-visible:[&>:last-child::-webkit-slider-thumb]:outline-1 focus-visible:[&>:last-child::-webkit-slider-thumb]:outline-offset-2 focus-visible:[&>:last-child::-webkit-slider-thumb]:outline-primary',
            '[&>:last-child::-moz-range-thumb]:appearance-none [&>:last-child::-moz-range-thumb]:h-4  [&>:last-child::-moz-range-thumb]:w-4 [&>:last-child::-moz-range-thumb]:bg-white/30 [&>:last-child::-moz-range-thumb]:rounded-full [&>:last-child::-moz-range-thumb]:bg-contain [&>:last-child::-moz-range-thumb]:cursor-ew-resize [&>:last-child::-moz-range-thumb]:transition-all [&>:last-child::-moz-range-thumb]:duration-200 focus-visible:[&>:last-child::-moz-range-thumb]:outline  focus-visible:[&>:last-child::-moz-range-thumb]:outline-1 focus-visible:[&>:last-child::-moz-range-thumb]:outline-offset-2 focus-visible:[&>:last-child::-moz-range-thumb]:outline-primary',

            '[&:hover>:last-child::-webkit-slider-thumb]:bg-white/40 [&:hover>:last-child::-webkit-slider-thumb]:w-8 [&:hover>:last-child::-webkit-slider-thumb]:h-8',
            '[&:hover>:last-child::-moz-range-thumb]:bg-white/40 [&:hover>:last-child::-moz-range-thumb]:w-8 [&:hover>:last-child::-moz-range-thumb]:h-8'
        ]
    })
};
