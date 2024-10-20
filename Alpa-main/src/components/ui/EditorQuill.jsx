import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditorQuill = ({ value, setValue, placeholder }) => {

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link'],
            ['blockquote', 'code-block'],
            ['clean'],
        ]
    };

    return (
        <div>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={(content) => setValue(content)}
                modules={modules}
                placeholder={placeholder || ''}
                style={{ height: '100px', marginBottom: '40px' }}
            />
        </div>
    );
};

export default EditorQuill;
