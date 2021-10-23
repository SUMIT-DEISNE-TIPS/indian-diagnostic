import React from 'react'

function Reportfrom() {
    return (
        <div>

            <div class="body_from">
                <form action="#" method="GET">
                    <div class="download_report">
                        <span class="header">Download Report</span>
                        <hr />
                        <span>Patient Name</span>
                        <input type="text" name="P_Name" id="" Placeholder="Enter Name" />
                        <span>Patient ID</span>
                        <input type="text" name="P_ID" id="" placeholder="Enter ID" />
                        <span>Centre Name</span>
                        <select name="" id="">
                            <option value="Haldia">Select Center</option>
                            <option value="Haldia">Brajalalchok</option>
                            <option value="Haldia">13th More</option>
                            <option value="Haldia">Haldia</option>
                            <option value="Haldia">Balughata</option>
                        </select>
                        <div class="submit">
                            <button type="submit" class="btn_submit" name="" value="SUBMIT">Submit</button>
                            <button type="reset" class="btn_reset" name="" value="RESET">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Reportfrom
