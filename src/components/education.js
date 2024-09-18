import React from "react";

const Education = () => {
    return (
        <div className="education">
            <h1>Formal Education</h1>
            <table>
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>University</th>
                        <th>Major</th>
                        <th>Year</th>
                    </tr> 
                </thead>
                <tbody>
                    <tr>
                        <td>Diploma</td>
                        <td>Bina Sarana Informatika University</td>
                        <td>Information System</td>
                        <td>2023</td>
                    </tr>
                    <tr>
                        <td>Bachelor</td>
                        <td>Bina Sarana Informatika University</td>
                        <td>Information System</td>
                        <td>On Going</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Education;