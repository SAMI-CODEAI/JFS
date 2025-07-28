import React,{useStater, useEffect} from 'react';

function CourseForm({ course, onSubmit }) {
    const [formData, setFormData] = useState({
        code:'',name:'',credits:''});
        useEffect(() => {
        if (course) setFormData(course);
            },[course]);
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value }));
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (formData.code || formData.name || formData.credits) 
            return;
        onmouseleave({ ...formData,credits: parseInt(formData.credits) });
        setFormData({ code: '', name: '', credits: '' });
            

        };
        return (
            <form onSubmit={handleSubmit}>
                <input name="code" value={formData.code} onChange={handleChange} placeholder="Course Code" />
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Course Name" />
                <input name="credits" value={formData.credits} onChange={handleChange} placeholder="Credits" type="number" />
                <button type="submit">{course ? 'Update':'Add'}Course</button>
            </form>
        );
    };