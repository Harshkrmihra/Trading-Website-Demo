import React, { useState, useRef, useEffect } from "react";
import "./Funds.css";

const Funds = () => {
  const [tabSelected, setTabSelected] = useState({
    currentTab: 1,
    noTabs: 2,
  });

  const wrapperRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab >= 1 &&
          tabSelected.currentTab < tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab + 1,
          });
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: 1,
          });
        }
      }
    }

    if (e.keyCode === 37) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab > 1 &&
          tabSelected.currentTab <= tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab - 1,
          });
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.noTabs,
          });
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <div className="main-fund ">
        <div className=" container my-5 ">
          <h1 className=" text-center uppercase">FUND TRANSFER</h1>
          <hr className="  bg-black font-extrabold" />
        </div>

        <section
          className="container flex flex-wrap "
          aria-multiselectable="false"
        >
          <ul
            className=" container overflow-hidden  flex items-center   border-b border-slate-200"
            role="tablist"
            ref={wrapperRef}
          >
            <li className="flex-1" role="presentation">
              <button
                className={` h-10  items-center justify-center w-[40vw] whitespace-nowrap rounded-t border-b-2  text-md font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                  tabSelected.currentTab === 1
                    ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                    : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                }`}
                id="tab-label-1b"
                role="tab"
                aria-setsize="3"
                aria-posinset="1"
                tabindex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
                aria-controls="tab-panel-1b"
                aria-selected={`${
                  tabSelected.currentTab === 1 ? "true" : "false"
                }`}
                onClick={() =>
                  setTabSelected({ ...tabSelected, currentTab: 1 })
                }
              >
                <span className="font-bold text-[2vh] lg:text-[25px]"> Deposit Funds</span>
              </button>
            </li>
            <li className="flex-1" role="presentation ">
              <button
                className={`h-10  items-center justify-center w-[40vw] whitespace-nowrap rounded-t border-b-2  text-md font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                  tabSelected.currentTab === 2
                    ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600  hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                    : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                }`}
                id="tab-label-2b"
                role="tab"
                aria-setsize="3"
                aria-posinset="2"
                tabindex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
                aria-controls="tab-panel-2b"
                aria-selected={`${
                  tabSelected.currentTab === 2 ? "true" : "false"
                }`}
                onClick={() =>
                  setTabSelected({ ...tabSelected, currentTab: 2 })
                }
              >
                <span className="font-bold text-[2vh] lg:text-[25px] ">Withdraw funds</span>
              </button>
            </li>
          </ul>

          <div className=" ">

            {/* --------------------------------Deposite-section-------------------------------- */}

            <div
              className={`px-5 py-4 ${
                tabSelected.currentTab === 1 ? "" : "hidden"
              }`}
              id="tab-panel-1b"
              aria-hidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
              role="tabpanel"
              aria-labelledby="tab-label-1b"
              tabindex="-1"
            >
              <div>
                <p className="text-gray-600 font-bold">
                  As a customer of TradingBells, you have the below options to
                  transfer funds to your trading account:
                </p>
              </div>

              {/* ---------------------------------Table-section-------------------------------- */}
              <table class="w-full table-fixed">
                <thead>
                  <tr className="bg-black/40 border-3   h-[5vw] border-solid border-black/60 ">
                    <th class="text-center text-[1vw] w-[4vw] font-bold ">
                      {" "}
                      Method
                    </th>
                    <th class="text-center text-[1vw] w-[12vw] font-bold">
                      {" "}
                      Bank Account
                    </th>
                    <th class="text-center text-[1vw] w-[15vw] font-bold">
                      {" "}
                      Process
                    </th>
                    <th class="text-center text-[1vw] w-[5vw] font-bold ">
                      Time Taken
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border-2 border-gray-400 text-[0.8vw] p-2">
                      1. UPI
                    </td>
                    <td class="border-2 border-gray-400 text-[0.8vw] p-2">
                      {" "}
                      UPI Enabled Bank
                    </td>
                    <td class="border-2 border-gray-400 text-[0.8vw] p-2">
                      {" "}
                      Login to your online trading software and transfer using
                      the UPI Transfer. Enter the amount and UPI ID. IIFL
                      Markets will send a collect request to the Virtual Payment
                      Address (VPA). You will receive a mobile notification in
                      your UPI app. Accept it and the payment is complete!
                    </td>
                    <td class="border-2 border-gray-400 text-[0.8vw] p-2">
                      1-2 Minutes
                    </td>
                  </tr>
                  <tr>
                    <td class="border-2 border-gray-400 text-[0.8vw] p-2">
                      {" "}
                      2. Payment Gateway
                    </td>
                    <td class="border-2 border-gray-400 text-[0.8vw] p-2">
                      {" "}
                      Registered Bank with IIFL (HDFC Bank, Axis Bank, ICICI
                      Bank, Bank Of Baroda, Federal Bank, Kotak Mahindra Bank,
                      Yes Bank)
                    </td>
                    <td class="border-2 border-gray-400 text-[0.8vw] p-2">
                      Login to{" "}
                      <a href="ttweb.indiainfoline.com" target="_blank">
                        ttweb.indiainfoline.com
                      </a>{" "}
                      &amp; Click on Trade. Click on My Accounts &gt;&gt; Funds
                      Transfer &gt;&gt; Funds payin &gt;&gt; Select product
                      &gt;&gt; Select Bank &gt;&gt; Select Account number
                      &gt;&gt; Enter amount &gt;&gt; Click on payin. Net banking
                      Facility has to be activated for the same. After clicking
                      on Pay in, you will be connected to Bank Gateway. Please
                      follow the directions given by the Bank gateway.
                    </td>
                    <td class="border-2 border-gray-400 text-[0.8vw] p-2">
                      Instant
                    </td>
                  </tr>
                  <tr>
                    <td class="border-2 border-gray-400 text-[0.8vw] p-2">
                      3. IMPS
                    </td>
                    <td class="border-2 border-gray-400 text-[0.8vw] p-2">
                      {" "}
                      Any Bank (with registered details with IIFL)
                    </td>
                    <td class="border-2 border-gray-400 text-[0.8vw] p-2">
                      {" "}
                      Transfer online through internet banking and take a
                      screenshot of the confirmation page. Your trading account
                      shall automatically reflect the balance transferred almost
                      instantly.
                    </td>
                    <td class="border-2 border-gray-400 text-[0.8vw] p-2">
                      {" "}
                      1-2 minutes during market hours
                    </td>
                  </tr>
                  <tr>
                    <td class="border-2 border-gray-400 text-[0.8vw] p-2">
                      4. NEFT/RTGS
                    </td>
                    <td class="border-2 border-gray-400 text-[0.8vw] p-2">
                      {" "}
                      Any Bank (with registered details with IIFL)
                    </td>
                    <td class="border-2 border-gray-400 text-[0.8vw] p-2">
                      {" "}
                      Transfer online through internet banking or offline by
                      filling the NEFT/RTGS form at your bank branch. Your
                      trading account shall automatically reflect the balance
                      transferred within 2-4 hours.
                    </td>
                    <td class="border-2 border-gray-400 text-[0.8vw] p-2">
                      {" "}
                      2 to 4 hours during market hours
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* ----------------------------imp-Notes-section---------------------------- */}

              <div className="md:border-2 md:border-gray-500 my-5 md:my-5  lg:p-6 md:p-6 p-6">
                <h1 className="text-[4vh]">Important Points To Note:-</h1>
                <ul className="my-5 contents">
                  <li className="my-3">
                    1. As per required guidelines, you can only transfer funds
                    from your <strong> registered bank account</strong> with
                    TradingBells.
                  </li>
                  <li className="my-3">
                    2. We are one of the few brokers to maintain{" "}
                    <strong>
                      a single bank account for both Equity and Commodity
                    </strong>
                    , which means you do not need to transfer between your
                    Equity and Commodity Accounts separatly. Bank Account
                    details are mentioned below
                  </li>
                  <li className="my-3">
                    3. As per the regulations, we{" "}
                    <strong> cannot accept </strong> Cash transfers or transfers
                    through Debit or Credit Cards.
                  </li>
                  <li className="my-3">
                    4. If you do not see the credit in your trading account
                    immediately after transferring funds from the instant
                    payment gateway or IMPS option, or after the stipulated time
                    for NEFT / RTGS transfers, you need to send us a{" "}
                    <strong> support@tradingbells.com </strong>
                    of the debit from your bank account to
                    <a href="/"> support@tradingbells.com </a> so we can
                    coordinate with your bank and the payment gateway. If the
                    payment fails for any reason, you will need to wait at least
                    24 hours for the funds to reflect in your trading account or
                    get refunded to your bank account.
                  </li>
                </ul>
              </div>

              {/* ---------------------------------Bank-Details-section---------------------------------- */}

              <div className=" bank-d-fund flex-wrap  bg-inherit">
                <h1 className="text-[2vw] py-2">Designated Bank Details</h1>
                <div className=" bank-payment flex flex-col  md:flex-col lg:flex-row  gap-5  lg:gap-[10vw]">
                  {/* -----------YES-BANK------------ */}
                  <div>
                    <h4 className="font-semibold">YES BANK</h4>
                    <h6>
                      <span className="font-bold"> Bank: </span> YES BANK{" "}
                    </h6>
                    <h6>
                      <span className="font-bold"> Name: </span> IIFL Securities
                      Ltd.{" "}
                    </h6>
                    <h6>
                      <span className="font-bold"> A/c No,: </span> IILEQ1
                      followed by client code. For example if your client code
                      is ABCD1234, then A/c No. will be IILEQ1ABCD1234{" "}
                    </h6>
                    <h6>
                      <span className="font-bold"> IFSC Code: </span> YESB0CMSNO{" "}
                    </h6>
                    <h6>
                      <span className="font-bold"> Bank Branch: </span>{" "}
                      Elphistone, Mumbai{" "}
                    </h6>
                  </div>
                  {/* -----------CITIBANK------------ */}
                  <div>
                    <h4 className="font-semibold">CITIBANK</h4>
                    <h6>
                      <span className="font-bold"> Bank: </span> CITIBANK{" "}
                    </h6>
                    <h6>
                      <span className="font-bold"> Name: </span> IIFL Securities
                      Ltd.{" "}
                    </h6>
                    <h6>
                      <span className="font-bold"> A/c No,: </span> 523500
                      followed by client code. For example if your client code
                      is ABCD1234, then A/c No. will be 523500ABCD1234{" "}
                    </h6>
                    <h6>
                      <span className="font-bold"> IFSC Code: </span>{" "}
                      CITI0100000{" "}
                    </h6>
                    <h6>
                      <span className="font-bold"> Bank Branch: </span> MUMBAI{" "}
                    </h6>
                  </div>
                </div>
              </div>
              <h6 className="text-center my-5">
                If you face any problems, please feel free to reach out to our
                support team <a href="/">here.</a>
              </h6>
            </div>

            {/* --------------------------------withdraw-section-------------------------------- */}

            <div
              className={`px-5 py-4 ${
                tabSelected.currentTab === 2 ? "" : "hidden"
              }`}
              id="tab-panel-2b"
              aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
              role="tabpanel"
              aria-labelledby="tab-label-2b"
              tabindex="-1"
            >
              <div className=" py-5">
                <h1 className="text-[4vh]">Important Points To Note:-</h1>
                <ul className="my-5 contents">
                  <li className="my-3">
                    1. You can place a fund withdrawal request by entering your
                    details here or by sending an email to{" "}
                    <a href="mailto:chaurasiyaneha1124@gmail.com">
                      {" "}
                      support@tradingbells.com{" "}
                    </a>{" "}
                    stating your Client ID, amount to be withdrawn and the
                    segment (Equity / Commodity).
                  </li>
                  <li className="my-3">
                    2. Funds transferred through the{" "}
                    <strong> payment gateway takes 24 hours to settle</strong>,
                    therefore same day payout request cannot be processed for
                    such cases.
                  </li>
                  <li className="my-3">
                    3. In case of Intraday trading, funds are available for
                    withdrawal only after T+1 days. In case of selling your
                    holdings, funds are settled on T+2 days, and cannot be
                    withdrawn before that.
                  </li>
                  <li className="my-3">
                    4. All withdrawals are{" "}
                    <strong> processed at 9 AM on Mondays to Fridays</strong>{" "}
                    and any withdrawal request placed after this time will be
                    processed on the next working day.
                  </li>
                  <li className="my-3">
                    5. Funds may take up to 24 hours to be credited to your bank
                    account once they are processed by us.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Funds;
