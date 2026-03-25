import React, { useContext } from "react";
import { AccountCntxt } from "../store/AccountContext";
import Li from "./Li";

export default function Left() {
  const { activeCustomer } = useContext(AccountCntxt);

  return (
    <div>
      <ul className="flex flex-col gap-2">
        {activeCustomer &&
          activeCustomer.transections.map((transection) => (
            <Li type={transection.type}>
              <span>{transection.amount}</span>
              <span>{transection.type}</span>
            </Li>
          ))}
      </ul>
    </div>
  );
}
