/**
 * Render Preview component
 * @returns
 */
export declare const preview_render: ({ children, text, preview, subject }: {
    children: any;
    text: any;
    preview: any;
    subject: any;
}) => any;
export declare const preview_editable: {
    enabled: boolean;
    render: ({ children, text, preview, subject }: {
        children: any;
        text: any;
        preview: any;
        subject: any;
    }) => any;
    save_action: () => Promise<boolean>;
};
