    import React from 'react';
    import { Link } from 'react-router-dom';

    const Homepage = () => (
            <div className="jumbotron">
                <h2>Employee Administrator</h2>
                <p>Employment is a relationship between two parties, usually based on a contract where work is paid for, where one party, which may be a corporation, for profit, not-for-profit organization, co-operative or other entity is the employer and the other is the employee.[1] Employees work in return for payment, which may be in the form of an hourly wage, by piecework or an annual salary, depending on the type of work an employee does or which sector she or he is working in. Employees in some fields or sectors may receive gratuities, bonus payment or stock options.</p>
                <Link to="about" className="btn btn-primary btn-lg">
                   About Page
                </Link>
            </div>
        );


    export default Homepage;