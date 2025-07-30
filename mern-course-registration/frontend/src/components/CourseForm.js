import React, { useState, useEffect } from 'react';

function CourseForm({ course, onSubmit }) {
    const [formData, setFormData] = useState({
        code: '', name: '', credits: ''
    });

    useEffect(() => {
        if (course) setFormData(course);
    }, [course]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!formData.code && !formData.name && !formData.credits) return;
        onSubmit({ ...formData, credits: parseInt(formData.credits) });
        setFormData({ code: '', name: '', credits: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="code" value={formData.code} onChange={handleChange} placeholder="Course Code" />
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Course Name" />
            <input name="credits" value={formData.credits} onChange={handleChange} placeholder="Credits" type="number" />
            <button type="submit">{course ? 'Update' : 'Add'} Course</button>
        </form>
    );
}

export default CourseForm;








// # CourseForm Component Breakdown

// ## 🔧 **Component Overview**

// ```js
// function CourseForm({ course, onSubmit }) {
// ```

// * This is a **functional component** named `CourseForm`.
// * It takes **two props**:

//   * `course`: An object representing a course (used when editing).
//   * `onSubmit`: A function to call when the form is submitted.

// ---

// ## 🧠 Step 1: State Initialization

// ```js
// const [formData, setFormData] = useState({
//     code: '', name: '', credits: ''
// });
// ```

// * This defines a piece of **state** called `formData`.
// * It holds the input values for the form: `code`, `name`, and `credits`.
// * Initially, all fields are empty strings.

// ---

// ## ⚡ Step 2: Populate the Form When Editing

// ```js
// useEffect(() => {
//     if (course) setFormData(course);
// }, [course]);
// ```

// * This `useEffect` runs **whenever the `course` prop changes**.
// * If `course` is provided (not null or undefined), it sets `formData` to the course's values.

//   * This allows **editing** an existing course (i.e., pre-fills the form with the selected course's data).

// ---

// ## ✍️ Step 3: Handle Input Changes

// ```js
// const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
// };
// ```
// Whenever you type in the form, this updates the correct value in formData.

// * This function updates the form state whenever an input changes.
// * It uses the input's `name` to update the corresponding key in `formData`.
// * For example:

//   * Typing in the "Course Code" field updates `formData.code`.

// ---

// ## 📨 Step 4: Handle Form Submission

// ```js
// const handleSubmit = e => {
//     e.preventDefault();
// ```

// * Prevents the default form submission behavior (i.e., page refresh).

// ```js
//     if (!formData.code && !formData.name && !formData.credits) return;
// ```

// * If **all fields are empty**, the function returns early (no submission).

// ```js
//     onSubmit({ ...formData, credits: parseInt(formData.credits) });
// ```

// * Calls the `onSubmit` function passed from the parent component.
// * Sends the `formData`, but ensures that `credits` is converted from a string to an integer (`parseInt`).

// ```js
//     setFormData({ code: '', name: '', credits: '' });
// ```

// * Clears the form after submission, resetting all fields to empty strings.

// ---

// ## 🖼️ Step 5: Render the Form

// ```js
// <form onSubmit={handleSubmit}>
// ```

// * Form tag listens for `submit` and calls `handleSubmit`.

// ### Course Code Input

// ```js
// <input name="code" value={formData.code} onChange={handleChange} placeholder="Course Code" />
// ```

// * Controlled input field for course code.
// * Its value is synced with `formData.code`.

// ### Course Name Input

// ```js
// <input name="name" value={formData.name} onChange={handleChange} placeholder="Course Name" />
// ```

// * Controlled input field for course name.

// ### Credits Input

// ```js
// <input name="credits" value={formData.credits} onChange={handleChange} placeholder="Credits" type="number" />
// ```

// * Controlled input field for course credits.
// * Uses `type="number"` for numeric input.
// * Value is stored as a string and converted during submission.

// ### Submit Button

// ```js
// <button type="submit">{course ? 'Update' : 'Add'} Course</button>
// ```

// * Button label is dynamic:

//   * If `course` is provided → shows **Update Course**.
//   * If `course` is not provided → shows **Add Course**.

// ---

// ## ✅ Summary

// * **Handles both creation and editing** of a course.
// * **Controlled inputs** are synced with `formData` state.
// * **On submit**, the form sends the course data to the parent using `onSubmit`.
// * After submission, it **clears** the form fields.

// ---

// Would you like a visual diagram of this component or a matching example of how it's used in a parent component with state and API calls?
