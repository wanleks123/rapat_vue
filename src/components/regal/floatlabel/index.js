export default {
    root: ({ props, state, parent, instance }) => {
        let child = instance.$slots.default()?.[0];
        let childSize = child?.props?.size;
        if (child?.children?.[0]?.type.__name === 'DynamicFormControl') {
            childSize = child?.children?.[0]?.props?.['field-props']?.size;
        }

        return {
            class: [
                'block relative',

                { '-mr-px': parent.instance.$name === 'InputGroup' },

                {
                    '[&>*[data-pc-name=inputtext]]:rounded-md':
                        parent.instance.$name !== 'InputGroup'
                },
                {
                    '[&:first-child>[data-pc-name=inputtext]]:rounded-l-md':
                        parent.instance.$name === 'InputGroup'
                },
                {
                    '[&:last-child>[data-pc-name=inputtext]]:rounded-r-md':
                        parent.instance.$name === 'InputGroup'
                },

                // Base Label Appearance
                '[&>label]:text-surface-500 dark:[&>label]:text-surface-400',

                '[&>label]:absolute',
                {
                    '[&>label]:start-5': childSize === 'large',
                    '[&>label]:start-3': !childSize,
                    '[&>label]:start-2': childSize === 'small',
                },

                '[&>label]:leading-none',
                '[&>label]:font-medium',
                '[&>label]:pointer-events-none',
                '[&>label]:transition-all',
                '[&>label]:duration-200',
                '[&>label]:ease',

                // Position for all labels except those following textarea
                {
                    '[&>:not(textarea)~label]:top-1/2 [&>:not(textarea)~label]:-translate-y-1/2':
                        props.variant !== 'in'
                },

                // Position for labels following textareas
                '[&>textarea~label]:top-2 [&>textarea~label]:translate-y-0',

                // Position for label following InputIcon element
                '[&>[data-pc-name=inputicon]:first-child~label]:start-10',

                'has-focus:[&>label]:text-primary',

                '[&_input]:placeholder:opacity-0 [&_input]:placeholder:transition-opacity [&_input]:placeholder:duration-200',

                // Focus Label Appearance
                'has-focus:[&>label]:-top-5 has-focus:[&>label]:text-xs has-focus:[&>label]:z-10 has-focus:[&>label]:font-normal has-focus:[&_input]:placeholder:opacity-100 has-focus:[&_textarea]:placeholder:opacity-100',
                {
                    'has-focus:[&>label]:translate-y-0 has-[.filled]:[&>label]:translate-y-0':
                        props.variant !== 'on'
                },

                // Filled Input Label Appearance
                'has-[.filled]:[&>label]:-top-5 has-[.filled]:[&>label]:text-xs has-[.filled]:[&>label]:z-10 [&>label]:has-[:filled]:font-normal has-[.filled]:[&_input]:placeholder:opacity-100 has-[.filled]:[&_textarea]:placeholder:opacity-100',

                // "In" variant
                { '[&_input]:pt-6 [&_input]:pb-2': props.variant === 'in' },
                {
                    '[&>label]:top-1/2 [&>label]:-translate-y-1/2':
                        props.variant === 'in'
                },
                {
                    'has-focus:[&>label]:top-2 has-[.filled]:[&>label]:top-2':
                        props.variant === 'in'
                },

                // "On" variant
                {
                    'has-focus:[&>label]:top-0 has-focus:[&>label]:-translate-y-1/2 has-focus:[&>label]:rounded-xs has-focus:[&>label]:bg-surface-0 dark:has-focus:[&>label]:bg-surface-950 has-focus:[&>label]:py-0 has-focus:[&>label]:px-[0.25rem]':
                        props.variant === 'on'
                },
                {
                    'has-[.filled]:[&>label]:top-0 has-[.filled]:[&>label]:-translate-y-1/2 has-[.filled]:[&>label]:rounded-xs has-[.filled]:[&>label]:bg-surface-0 dark:has-[.filled]:[&>label]:bg-surface-950 has-[.filled]:[&>label]:py-0 has-[.filled]:[&>label]:px-[0.25rem]':
                        props.variant === 'on'
                }
            ]
        };
    }
};
