
import { useState } from "react";
import Bar from "../components/Bar";
import Head from "../components/head/Head";
import Header from "../components/Header";

export default  function Layout ({children}){
    const [barStatus, setBarStatus] = useState(false);

    return (
      <div className="d-flex" >

        <Bar barStatus={barStatus ? "active":""} />
        <div className="d-flex flex-column w-100">
          {/* Pass barStatus and setBarStatus to Head as props */}
          <Head barStatus={barStatus} setBarStatus={setBarStatus} />
          {children}
        </div>
      </div>
    );
}