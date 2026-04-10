import React from 'react';

function PricingTable() {
    return (
        <div className="container mt-5">
            {/* 1. The Headings (Nav Tabs) */}
            <ul className="nav nav-tabs justify-content-center border-0 mb-5 p-3" id="pricingTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active fs-4 px-4" id="equity-tab" data-bs-toggle="tab" data-bs-target="#equity" type="button" role="tab">
                        Equity
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fs-4 px-4" id="currency-tab" data-bs-toggle="tab" data-bs-target="#currency" type="button" role="tab">
                        Currency
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fs-4 px-4" id="commodity-tab" data-bs-toggle="tab" data-bs-target="#commodity" type="button" role="tab">
                        Commodity
                    </button>
                </li>
            </ul>

            {/* 2. The Tables (Tab Content) */}
            <div className="tab-content" id="pricingTabContent">

                {/* Equity Table */}

                <div className="tab-pane fade show active" id="equity" role="tabpanel">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Equity Delivery</th>
                                <th scope="col">Equity intraday</th>
                                <th scope="col">F&O -Future</th>
                                <th scope="col">F&O -Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Brokerage</th>
                                <td>Zero Brokerage</td>
                                <td>	0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                <td>Flat Rs. 20 per executed order</td>
                            </tr>
                            <tr>
                                <th scope="row">STT/CTT</th>
                                <td>	0.1% on buy & sell</td>
                                <td>0.025% on the sell side</td>
                                <td>0.05% on the sell side</td>
                                <td>
                                    <ul>
                                        <li>
                                            0.15% of the intrinsic value on options that are bought and exercised
                                        </li>
                                        <li>
                                            0.15% on sell side (on premium)
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Transaction charges</th>
                                <td>NSE: 0.00307%<br></br>
                                    BSE: 0.00375%</td>

                                <td>NSE: 0.00307%<br></br>
                                    BSE: 0.00375%</td>

                                <td>NSE: 0.00307%<br></br>
                                    BSE: 0.00375%</td>

                                <td>NSE: 0.00307%<br></br>
                                    BSE: 0.00375%</td>

                            </tr>


                            <tr>
                                <th scope="row"> GST</th>
                                <td>	18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>	18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>	18% on (brokerage + SEBI charges + transaction charges)</td>

                                <td>	18% on (brokerage + SEBI charges + transaction charges)</td>

                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Currency Table */}
                <div className="tab-pane fade" id="currency" role="tabpanel">
                    <table class="table  table-bordered">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Currency Future</th>
                                <th scope="col">Currency Options</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Brokerage</th>
                                <td>	0.03% or ₹ 20/executed order whichever is lower</td>
                                <td> ₹ 20/executed order</td>

                            </tr>
                            <tr>
                                <th scope="row">STT/CTT</th>
                                <td>No STT</td>
                                <td>No STT</td>

                            </tr>
                            <tr>
                                <th scope="row">Transaction Charge</th>

                                <td>NSE: 0.00307%<br></br>
                                    BSE: 0.00375%</td>


                                <td>NSE: 0.00307%<br></br>
                                    BSE: 0.00375%</td>

                            </tr>

                            <tr>
                                <th scope="row">GST</th>
                                <td>	18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td> 18% on (brokerage + SEBI charges + transaction charges)</td>

                            </tr>

                            <tr>
                                <th scope="row">SEBI Charges</th>
                                <td>	₹10 / crore</td>
                                <td> ₹10 / crore</td>

                            </tr>


                            <tr>
                                <th scope="row">Stamp Charge</th>
                                <td>	0.0001% or ₹10 / crore on buy side</td>
                                <td>0.0001% or ₹10 / crore on buy side</td>

                            </tr>


                        </tbody>
                    </table>
                </div>

                {/* Commodity Table */}
                <div className="tab-pane fade" id="commodity" role="tabpanel">
                    <table class="table  table-bordered">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Commodity Future</th>
                                <th scope="col">Commodity Options</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Brokerage</th>
                                <td>	0.03% or ₹ 20/executed order whichever is lower</td>
                                <td> ₹ 20/executed order</td>

                            </tr>
                            <tr>
                                <th scope="row">STT/CTT</th>
                                <td>No STT</td>
                                <td>No STT</td>

                            </tr>
                            <tr>
                                <th scope="row">Transaction Charge</th>

                                <td>NSE: 0.00307%<br></br>
                                    BSE: 0.00375%</td>


                                <td>NSE: 0.00307%<br></br>
                                    BSE: 0.00375%</td>

                            </tr>

                            <tr>
                                <th scope="row">GST</th>
                                <td>	18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td> 18% on (brokerage + SEBI charges + transaction charges)</td>

                            </tr>

                            <tr>
                                <th scope="row">SEBI Charges</th>
                                <td>	₹10 / crore</td>
                                <td> ₹10 / crore</td>

                            </tr>


                            <tr>
                                <th scope="row">Stamp Charge</th>
                                <td>	0.0001% or ₹10 / crore on buy side</td>
                                <td>0.0001% or ₹10 / crore on buy side</td>

                            </tr>


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default PricingTable;