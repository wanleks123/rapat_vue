export default {
    root: ({ state, attrs, instance }) => {
        return {
            class: [
                // // Shape
                // 'rounded-md shadow-lg',
                //
                // // Position
                // 'absolute left-0 top-0 mt-2',
                // 'z-40 transform origin-center',
                //
                // // Color
                // 'bg-surface-0 dark:bg-surface-900',
                // 'text-surface-700 dark:text-surface-0/80',
                //
                // // Before: Arrow
                // 'before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-[10px] before:border-x-[10px] before:border-b-[10px] before:border-t-0 before:border-b-surface-200 dark:before:border-b-surface-700',
                // 'after:absolute after:w-0 after:-top-[0.54rem] after:left-[4px] after:h-0 after:border-transparent after:border-solid after:ml-[8px] after:border-x-[8px] after:border-b-[8px] after:border-t-0 after:border-b-surface-0 dark:after:border-b-surface-900',
                'before:ml-[var(--p-popover-arrow-left)] after:ml-[calc(var(--p-popover-arrow-left)+2px)] before:z-1002 after:z-1003',

                'mt-[10px] bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0',
                'border border-surface-200 dark:border-surface-700',
                'rounded-md shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]',
                'before:bottom-full before:left-2 before:h-0 before:w-0 before:absolute before:pointer-events-none',
                'before:border-[10px] before:-ms-[10px] before:border-transparent before:border-b-surface-200 dark:before:border-b-surface-700',
                'after:bottom-full after:left-2 after:h-0 after:w-0 after:absolute after:pointer-events-none',
                'after:border-[8px] after:-ms-[8px] after:border-transparent after:border-b-surface-0 dark:after:border-b-surface-900',

                'data-[p-popover-flipped=true]:-mt-[10px] data-[p-popover-flipped=true]:mb-[10px]',
                'data-[p-popover-flipped=true]:after:bottom-auto data-[p-popover-flipped=true]:before:bottom-auto',
                'data-[p-popover-flipped=true]:after:top-full data-[p-popover-flipped=true]:before:top-full',
                'data-[p-popover-flipped=true]:after:border-b-transparent data-[p-popover-flipped=true]:after:border-t-surface-0 dark:data-[p-popover-flipped=true]:after:border-t-surface-900',
                'data-[p-popover-flipped=true]:before:border-b-transparent data-[p-popover-flipped=true]:before:border-t-surface-200 dark:data-[p-popover-flipped=true]:before:border-t-surface-700'
            ]
        };
    },
    content: ({ props, instance, attrs }) => {
        return {
            class: ['p-3 items-center flex', 'rounded-lg']
        };
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass:
            'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
