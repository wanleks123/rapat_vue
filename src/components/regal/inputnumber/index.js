export default {
    root: ({ props, parent, state }) => ({
        class: [
            // Flex
            'inline-flex',
            'relative',
            { 'flex-col': props.showButtons && props.buttonLayout === 'vertical' },
            { 'flex-1 w-[1%]': parent.instance.$name === 'InputGroup' },
            { 'w-full': props.fluid },

            // Shape
            {
                'first:rounded-l-md rounded-none last:rounded-r-md':
                    parent.instance.$name === 'InputGroup' ||
                    (parent.instance.$parentInstance?.$name === 'InputGroup' &&
                        !props.showButtons)
            },
            {
                'border-0 border-y border-l last:border-r border-surface-300 dark:border-surface-700':
                    parent.instance.$name === 'InputGroup' && !props.showButtons
            },
            {
                'first:ml-0 -ml-px':
                    parent.instance.$name === 'InputGroup' && !props.showButtons
            },

            //Sizing
            { 'w-16!': props.showButtons && props.buttonLayout == 'vertical' },

            // States
            'transition-colors duration-200',

            {
                'hover:border-surface-400 dark:hover:border-surface-600':
                    parent.instance.$name !== 'InputGroup'
            },
            {
                'hover:border-primary-500 dark:hover:border-primary-400':
                    parent.instance.$name === 'InputGroup' && state.focused
            },

            {
                'outline-hidden outline-offset-0 border border-primary-500 dark:border-primary-400 border-primary-500 dark:border-primary-400 z-10':
                    parent.instance.$name === 'InputGroup' && state.focused
            }
        ]
    }),
    pcInputText: {
        root: ({ parent, context }) => ({
            class: [
                // Font
                'leading-none',

                // Display
                'flex-auto',
                { 'w-[1%]': parent.props.fluid },
                { 'w-full': parent.instance.$parentInstance?.$name === 'InputGroup' },

                //Text
                {
                    'text-center':
                        parent.props.showButtons && parent.props.buttonLayout == 'vertical'
                },

                // Spacing
                'm-0',

                // Size
                {
                    'py-3 px-3.5': parent.props.size == 'large',
                    'py-1.5 px-2': parent.props.size == 'small',
                    'py-2 px-3': parent.props.size == null
                },

                { 'pt-7 pb-2': parent.instance.$parentInstance?.$name === 'IftaLabel' },

                // Shape
                {
                    'rounded-md':
                        parent.instance.$parentInstance?.$parentInstance?.$name !==
                        'InputGroup'
                },
                {
                    'rounded-l-none rounded-r-none':
                        parent.props.showButtons &&
                        parent.props.buttonLayout === 'horizontal'
                },
                {
                    'rounded-none':
                        parent.props.showButtons &&
                        parent.props.buttonLayout === 'vertical'
                },

                {
                    'border-0':
                        parent.instance.$parentInstance?.$name === 'InputGroup' &&
                        !parent.props.showButtons
                },

                // Colors
                'text-surface-800 dark:text-white/80',
                'placeholder:text-surface-400 dark:placeholder:text-surface-500',
                { 'bg-surface-0 dark:bg-surface-950': !context.disabled },
                { border: parent.instance.$parentInstance?.$name !== 'InputGroup' },
                { 'border-surface-300 dark:border-surface-700': !parent.props.invalid },

                // Invalid State
                'invalid:focus:ring-red-200',
                'invalid:hover:border-red-500',
                { 'border-red-500 dark:border-red-400': parent.props.invalid },

                // States
                { 'hover:border-primary': !parent.props.invalid },
                {
                    'focus:outline-hidden focus:outline-offset-0':
                        parent.instance.$parentInstance?.$name === 'InputGroup'
                },
                {
                    'focus:outline-hidden focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10 transition-colors duration-200':
                        parent.instance.$parentInstance?.$name !== 'InputGroup'
                },
                {
                    'bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default':
                    context.disabled
                },

                // Filled State *for FloatLabel
                {
                    filled:
                        parent.instance?.$parentInstance?.$name === 'FloatLabel' &&
                        parent.state.d_modelValue !== null
                },

                //Position
                {
                    'order-2':
                        parent.props.buttonLayout == 'horizontal' ||
                        parent.props.buttonLayout === 'vertical'
                }
            ]
        })
    },
    buttonGroup: ({ props }) => ({
        class: [
            'absolute',

            // Flex
            'flex',
            'flex-col',

            'top-px right-px',

            'z-11',

            {
                'h-[calc(100%-2px)]':
                    props.showButtons && props.buttonLayout === 'stacked'
            }
        ]
    }),
    incrementButton: ({ props }) => ({
        class: [
            // Display
            {
                'flex flex-initial shrink-0':
                    props.showButtons && props.buttonLayout === 'horizontal'
            },
            {
                'flex flex-auto': props.showButtons && props.buttonLayout === 'stacked'
            },

            // Alignment
            'items-center',
            'justify-center',
            'text-center align-bottom',

            //Position
            'relative',
            { 'order-3': props.showButtons && props.buttonLayout === 'horizontal' },
            { 'order-1': props.showButtons && props.buttonLayout === 'vertical' },

            //Color
            'text-surface-800 dark:text-surface-0',
            'bg-transparent',
            {
                'dark:bg-surface-900':
                    props.showButtons && props.buttonLayout !== 'stacked'
            },
            'border border-surface-300 dark:border-surface-700',
            { 'border-0': props.showButtons && props.buttonLayout === 'stacked' },
            {
                'border-l-0':
                    props.showButtons &&
                    props.buttonLayout !== 'stacked' &&
                    props.buttonLayout === 'horizontal'
            },
            {
                'border-b-0':
                    props.showButtons &&
                    props.buttonLayout !== 'stacked' &&
                    props.buttonLayout === 'vertical'
            },

            // Sizing
            'w-[3rem]',
            { 'px-3 py-2': props.showButtons && props.buttonLayout !== 'stacked' },
            { 'p-0': props.showButtons && props.buttonLayout === 'stacked' },
            { 'w-full': props.showButtons && props.buttonLayout === 'vertical' },

            // Shape
            'rounded-md',
            {
                'rounded-br-none rounded-tl-none rounded-bl-none':
                    props.showButtons && props.buttonLayout == 'stacked'
            },
            {
                'rounded-bl-none rounded-tl-none':
                    props.showButtons && props.buttonLayout === 'horizontal'
            },
            {
                'rounded-bl-none rounded-br-none':
                    props.showButtons && props.buttonLayout === 'vertical'
            },

            //States
            'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]',

            //Misc
            'cursor-pointer overflow-hidden select-none'
        ]
    }),
    incrementIcon: 'inline-block w-4 h-4',
    decrementButton: ({ props }) => ({
        class: [
            // Display
            {
                'flex flex-initial shrink-0':
                    props.showButtons && props.buttonLayout === 'horizontal'
            },
            {
                'flex flex-auto': props.showButtons && props.buttonLayout === 'stacked'
            },

            // Alignment
            'items-center',
            'justify-center',
            'text-center align-bottom',

            //Position
            'relative',
            { 'order-1': props.showButtons && props.buttonLayout === 'horizontal' },
            { 'order-3': props.showButtons && props.buttonLayout === 'vertical' },

            //Color
            'text-surface-800 dark:text-surface-0',
            'bg-transparent',
            {
                'dark:bg-surface-900':
                    props.showButtons && props.buttonLayout !== 'stacked'
            },
            'border border-surface-300 dark:border-surface-700',
            { 'border-0': props.showButtons && props.buttonLayout === 'stacked' },
            {
                'border-r-0':
                    props.showButtons &&
                    props.buttonLayout !== 'stacked' &&
                    props.buttonLayout === 'horizontal'
            },
            {
                'border-t-0':
                    props.showButtons &&
                    props.buttonLayout !== 'stacked' &&
                    props.buttonLayout === 'vertical'
            },

            // Sizing
            'w-[3rem]',
            { 'px-3 py-2': props.showButtons && props.buttonLayout !== 'stacked' },
            { 'p-0': props.showButtons && props.buttonLayout === 'stacked' },
            { 'w-full': props.showButtons && props.buttonLayout === 'vertical' },

            // Shape
            'rounded-md',
            {
                'rounded-tr-none rounded-tl-none rounded-bl-none':
                    props.showButtons && props.buttonLayout === 'stacked'
            },
            {
                'rounded-tr-none rounded-br-none ':
                    props.showButtons && props.buttonLayout === 'horizontal'
            },
            {
                'rounded-tr-none rounded-tl-none ':
                    props.showButtons && props.buttonLayout === 'vertical'
            },

            //States
            'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]',

            //Misc
            'cursor-pointer overflow-hidden select-none'
        ]
    }),
    decrementIcon: 'inline-block w-4 h-4'
};
