import React from "react";

const AddKalender = () => {
    return (
        <div className="add-app">
            <h1> Calender</h1>
            <form className="form">
                <div className="tit-datum">
                    <div>
                        <label>Title:</label>
                        <br />
                        <input type="text" placeholder="Enter your title" />
                    </div>
                    <div>
                        <label>Datum:</label>
                        <br />
                        <input type="date" />
                    </div>
                </div>
                <div className="uhr">
                    <div>
                        <label>Uhr-Zeit von:</label>
                        <br />
                        <input type="time" />
                    </div>
                    <div>
                        <label>Uhr-Zeit bis:</label>
                        <br />
                        <input type="time" />
                    </div>
                </div>
                <button>Add</button>
                {/* <div>
                    <label>Beschreibung:</label>
                    <br />
                    <textarea
                        rows="5"
                        cols="20"
                        placeholder="Enter your Beschreibung"
                    ></textarea>
                </div> */}
            </form>
        </div>
    );
};

export default AddKalender;
