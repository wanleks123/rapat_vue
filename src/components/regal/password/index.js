import { PhEye, PhEyeClosed } from "@phosphor-icons/vue";

export default {
    root: ({ props, context, instance, parent }) => {
        return {
            class: [
                'relative',
                { 'ltr:[&>input]:pr-10 rtl:[&>input]:pl-10': props.toggleMask },
                { 'flex [&>input]:w-full': props.fluid, 'inline-flex': !props.fluid },
                {
                    '[&>input]:pt-7 [&>input]:pb-2':
                        parent.instance.$name === 'IftaLabel' ||
                        (parent.instance.$name === 'FloatLabel' &&
                            parent.instance?.$props?.variant === 'in')
                },
                { filled: instance['$filled'] }
            ],
        }
    },
    overlay: {
        class: [
            // Spacing
            'p-3 mt-1',

            // Shape
            'border',
            'shadow-md rounded-md',

            // Colors
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-white/80',
            'border-surface-200 dark:border-surface-700'
        ]
    },
    meter: {
        class: [
            // Position and Overflow
            'overflow-hidden',
            'relative',

            // Shape and Size
            'border-0',
            'h-[10px]',
            'rounded-md',

            // Spacing
            'mb-3',

            // Colors
            'bg-surface-100 dark:bg-surface-700'
        ]
    },
    meterLabel: ({ instance }) => ({
        class: [
            // Size
            'h-full',

            // Colors
            {
                'bg-red-500 dark:bg-red-400/50': instance?.meter?.strength == 'weak',
                'bg-orange-500 dark:bg-orange-400/50':
                    instance?.meter?.strength == 'medium',
                'bg-green-500 dark:bg-green-400/50':
                    instance?.meter?.strength == 'strong'
            },

            // Transitions
            'transition-all duration-1000 ease-in-out'
        ]
    }),
    maskIcon: ({ props }) => ({
        class: [
            'absolute top-1/2 -mt-2 z-10',
            {
                'ltr:right-2 rtl:left-2': props.size === 'small',
                'ltr:right-3 rtl:left-3 -mt-2': !props.size,
                'ltr:right-5 rtl:left-5 -mt-3 w-6 h-6': props.size === 'large'
            },
            'text-surface-600 dark:text-white/70'
        ],
    }),
    unmaskIcon: ({ props }) => ({
        class: [
            'absolute top-1/2 z-10',
            {
                'ltr:right-2 rtl:left-2 -mt-2': props.size === 'small',
                'ltr:right-3 rtl:left-3 -mt-2': !props.size,
                'ltr:right-5 rtl:left-5 -mt-3 w-6 h-6': props.size === 'large'
            },
            'text-surface-600 dark:text-white/70'
        ],
    }),
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass:
            'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
