export default {
    root: ({ context }) => ({
        class: [
            // Position and Shadows
            'absolute',
            // 'shadow-md',
            'p-fadein',
            // Spacing
            {
                'py-0 px-2':
                    context?.right ||
                    context?.left ||
                    (!context?.right &&
                        !context?.left &&
                        !context?.top &&
                        !context?.bottom),
                'pb-1.5 px-0': context?.top,
                'pt-1.5 px-0': context?.bottom
            }
        ]
    }),
    arrow: ({ context }) => ({
        class: [
            // Position

            'absolute',

            // Size
            'w-0',
            'h-0',

            // Shape
            'border-transparent',
            'border-solid',
            {
                'border-y-[10px] border-r-[10px] border-l-0 border-r-surface-700':
                    context?.right ||
                    (!context?.right &&
                        !context?.left &&
                        !context?.top &&
                        !context?.bottom),
                'border-y-[10px] border-l-[10px] border-r-0 border-l-surface-700':
                context?.left,
                'border-x-[10px] border-t-[10px] border-b-0 border-t-surface-700':
                context?.top,
                'border-x-[10px] border-b-[10px] border-t-0 border-b-surface-700':
                context?.bottom
            },

            // Spacing
            {
                '-mt-[10px] top-1/2':
                    context?.right ||
                    context?.left ||
                    (!context?.right &&
                        !context?.left &&
                        !context?.top &&
                        !context?.bottom),
                '-ml-[10px] left-1/2': context?.top || context?.bottom
            }
        ]
    }),
    text: ({ context }) => ({
        class: [
            'p-3',
            'bg-surface-700',
            'text-white',
            'rounded-md',
            'whitespace-pre-line',
            'break-words',
            'max-w-md'
        ]
    })
};
