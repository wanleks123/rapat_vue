export default {
    root: ({ props, state, parent }) => ({
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
            // '[&>*:last-child]:text-surface-500 dark:[&>*:last-child]:text-surface-400',
            '[&>:not([aria-invalid=true])~label]:text-surface-500 dark:[&>:not([aria-invalid=true])~label]:text-surface-400',
            '[&>[aria-invalid=true]~label]:text-red-400 dark:[&>[aria-invalid=true]~label]:text-red-300',

            '[&>*:last-child]:absolute',
            '[&>*:last-child]:left-3',
            '[&>*:last-child]:pointer-events-none',
            '[&>*:last-child]:transition-all',
            '[&>*:last-child]:duration-200',
            '[&>*:last-child]:ease',

            // Position for all labels except those following textarea
            // {'[&>:not(textarea)~label]:top-1/2 [&>:not(textarea)~label]:-translate-y-1/2 ': props.variant !== 'in'},

            // Position for labels following textareas
            // '[&>textarea~label]:top-2 [&>textarea~label]:translate-y-0',

            // Position for label following InputIcon element
            '[&>:not([data-pc-name=inputicon]:first-child)~label]:start-3',
            '[&>[data-pc-name=inputicon]:first-child~label]:start-10',

            // Focus Label Appearance
            '[&>*:last-child]:-top-5 [&>*:last-child]:text-xs [&>*:last-child]:z-10 [&>*:last-child]:translate-y-0 font-normal',
            '[&>*:last-child]:has-focus:text-primary',

            '[&>*:last-child]:pt-7 [&>*:last-child]:pb-2',
            '[&:first-child_[data-pc-name=pcinputtext]]:rounded-l-md [&:last-child_[data-pc-name=pcinputtext]]:rounded-r-md'
        ]
    })
};
