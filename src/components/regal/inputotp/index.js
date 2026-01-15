export default {
    root: ({ props }) => ({
        class: [
            // Alignment
            'flex items-center rtl:flex-row-reverse justify-center ltr:lg:justify-start rtl:lg:justify-end',
            'gap-2',
            '**:data-[pc-name=pcinputtext]:w-10',
            '**:data-[pc-name=pcinputtext]:border-0!',
            '**:data-[pc-name=pcinputtext]:border-b-2!',
            '**:data-[pc-name=pcinputtext]:rounded-none',
            '**:data-[pc-name=pcinputtext]:text-center',
            {
                '**:data-[pc-name=pcinputtext]:px-3 py-4': props.size === 'large',
            }
        ]
    }),
    pcInputText: () => ({
        root: {
            inputMode: 'numeric',
            autocomplete: 'one-time-code',
        }
    })
};
