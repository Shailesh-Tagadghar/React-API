import React from 'react'

export default function Header() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href='/students'>Header</a>
                <form className="d-flex">
                <a href='/students'><button class="btn btn-outline-success me-2" type="button">Get Student Record</button></a>
                <button class="btn btn-outline-success me-2" type="button">Add Student Record</button>
                <button class="btn btn-outline-success me-2" type="button">Update Student Record</button>
                <button class="btn btn-outline-success me-2" type="button">Delete Student Record</button>
                </form>
            </div>
        </nav>

    )
}
