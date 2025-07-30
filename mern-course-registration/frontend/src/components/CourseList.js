import React from "react";

function CourseList({ courses, onEdit, onDelete }) {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Credits</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course => (
                    <tr key={course._id}>
                        <td>{course.code}</td>
                        <td>{course.name}</td>
                        <td>{course.credits}</td>
                        <td>
                            <button onClick={() => onEdit(course)}>Edit</button>
                            <button onClick={() => onDelete(course._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CourseList;










// Sure! Let’s go through your `CourseList` component step by step in **simple words**.

// ---

// ## 🧩 What is `CourseList`?

// It’s a React component that:

// * **Shows a table** of all courses.
// * **Lets you edit or delete** each course.

// It receives these 3 things from its parent component:

// ```js
// { courses, onEdit, onDelete }
// ```

// ---

// ## 🧱 Step-by-Step Explanation

// ### 1. 📦 Import React

// ```js
// import React from "react";
// ```

// * Allows you to use JSX and create the component.

// ---

// ### 2. 🧠 Define the Component

// ```js
// function CourseList({ courses, onEdit, onDelete }) {
// ```

// * `courses`: a list (array) of course objects.
// * `onEdit`: a function to edit a course.
// * `onDelete`: a function to delete a course.

// ---

// ### 3. 📋 Return a Table

// ```js
// return (
//   <table border="1">
// ```

// * Creates a simple HTML table with a border.

// ---

// ### 4. 🔤 Table Header

// ```js
// <thead>
//   <tr>
//     <th>Code</th>
//     <th>Name</th>
//     <th>Credits</th>
//     <th>Actions</th>
//   </tr>
// </thead>
// ```

// * This row labels the columns:

//   * **Code**
//   * **Name**
//   * **Credits**
//   * **Actions** (like edit and delete)

// ---

// ### 5. 🔁 Table Body (Data Rows)

// ```js
// <tbody>
//   {courses.map(course => (
//     <tr key={course._id}>
//       <td>{course.code}</td>
//       <td>{course.name}</td>
//       <td>{course.credits}</td>
//       <td>
//         <button onClick={() => onEdit(course)}>Edit</button>
//         <button onClick={() => onDelete(course._id)}>Delete</button>
//       </td>
//     </tr>
//   ))}
// </tbody>
// ```

// * Loops through each course using `.map()`.
// * For each course:

//   * Adds a new table row `<tr>`.
//   * Shows the course's **code**, **name**, and **credits**.
//   * Adds two buttons:

//     * **Edit**: Calls `onEdit(course)` when clicked.
//     * **Delete**: Calls `onDelete(course._id)` when clicked.

// 🗝️ **Key point**:
// Every row must have a unique `key`. Here, it's `course._id`.

// ---

// ### 6. ✅ Export the Component

// ```js
// export default CourseList;
// ```

// * Makes the component available to be used in other files.

// ---

// ## ✅ Summary (In Simple Terms)

// | Feature       | What It Does                    |
// | ------------- | ------------------------------- |
// | Table         | Shows all courses in a list     |
// | Edit Button   | Lets you edit a selected course |
// | Delete Button | Removes a course from the list  |
// | Props Used    | `courses`, `onEdit`, `onDelete` |

// ---

// Would you like a full example showing how `CourseList` and `CourseForm` work together in a parent component (`App.js`)?
