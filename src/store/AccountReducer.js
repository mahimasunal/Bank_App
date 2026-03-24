import { customers } from "../utils/fakeData";

export function AccountReducer(state, action) {
  switch (action.type) {
    case "loggedIn":
      return {
        ...state,
        loggedInUserId: action.payload.id,
        activeCustomer: action.payload,
      };

    case "logout":
      return { ...state, loggedInUserId: null, activeCustomer: "" };

    case "fundTransfer": {
      const { transferTo, transferAmount } = action.payload;

      const beneficiary = state.customers.find(
        (cust) => cust.username === transferTo,
      );

      if (!beneficiary) return;

      const updatedActiveCustomer = {...state.activeCustomer, amount: state.activeCustomer.amount - +transferAmount}

      const updatedCustomers = state.customers.map((cust) => {

        if (cust.id !== beneficiary.id && cust.id !== state.activeCustomer.id)
          return cust;

        if (cust.id === state.activeCustomer.id) {
          return { ...cust, amount: cust.amount + (+action.payload)};
        }

        if (cust.id === beneficiary.id) {
          return { ...cust, amount: cust.amount + (+transferAmount) };
        }
      });

     return {...state, customers: updatedCustomers, activeCustomer: updatedActiveCustomer};
    }

    case 'loan' :{

      console.log(state)

      const updatedActiveCustomer = {...state.activeCustomer, amount : state.activeCustomer.amount + (+action.payload), loan : state.activeCustomer.loan + (+action.payload)}

      let updatedCustomers = state.customers.map(cust=>{
        if(cust.id !== state.activeCustomer.id) return cust

        if(cust.id === state.activeCustomer.id){
          return{...cust, amount : cust.amount + (+action.payload), loan : cust.loan + (+action.payload)}

        }
      })
      console.log(updatedCustomers)
      return({...state, customers : updatedCustomers, activeCustomer : updatedActiveCustomer})
    }
      
    case 'payLoan':{
      const updatedCustomers = state.customers.map(cust=>{
        if(cust.id != state.activeCustomer.id) return cust

        if(cust.id === state.activeCustomer.id){
          return{...cust, amount: cust.amount - (+action.payload), loan : cust.loan - (+action.payload)}
        }
      })
      return{...state, customers : updatedCustomers, activeCustomer : {...state.activeCustomer,amount: state.activeCustomer.amount - (+action.payload), loan : state.activeCustomer.loan - (+action.payload) }}
    }
      

    default:
      return state;
  }
}
