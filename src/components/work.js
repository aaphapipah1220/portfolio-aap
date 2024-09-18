import React from "react";

import "../styles/work.css";

const Work = () => {
    return (
        <div className="work">
            <h1>Work</h1>
            <table className="table_work">
                <thead>
                    <tr>
                        <th>Job</th>
                        <th>Company</th>
                        <th>Length of Work</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Appearance</td>
                        <td>PT. Panasonic Industrial Components Indonesia</td>
                        <td>1 year 6 months</td>
                    </tr>
                    <tr>
                        <td>Coding Advance Teacher</td>
                        <td>Koding Next</td>
                        <td>1 year 5 months</td>
                    </tr>
                </tbody>
            </table>

            <h1>Internship</h1>
            <table className="table_internship">
                <thead>
                    <tr>
                        <th>Job</th>
                        <th>Company</th>
                        <th>Length of Internship</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pengembang Front-End Web & React</td>
                        <td>Dicoding Indonesia</td>
                        <td>4 months</td>
                    </tr>
                    <tr>
                        <td>Front-End Web Developer</td>
                        <td>PT. Idpay Asia Jaya</td>
                        <td>3 months</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    
};

export default Work;