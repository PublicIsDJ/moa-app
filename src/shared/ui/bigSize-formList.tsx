interface FormField {
    label: string;
    placeholders: string[];
}

interface FormListProps {
    fields: FormField[];
    className?: string;
    textareaClassName?: string;
}

export function BigSizeFormList({ fields, className = '', textareaClassName=""}: FormListProps) {
    return (
        <div className={`flex-1 flex flex-col gap-6 rounded-[20px] px-6 py-10 bg-[#F6F6F6] ${className}`}>
            {fields.map((field, index) => (
                <div key={index} className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">{field.label}</label>
                    {field.placeholders.map((placeholder, idx) => (
                        <textarea
                            key={idx}
                            placeholder={placeholder}
                            className={`bg-white resize-none h-32 ${textareaClassName}`}
                        /> ))}
                    
                </div>
            ))}
        </div>
    );
}
