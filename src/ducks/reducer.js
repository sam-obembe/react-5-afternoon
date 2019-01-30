var initialState = {
  loanType: 'Home Purchase',
  propertyType: 'Single Family Home',
  city: '',
  propToBeUsedOn: '',
  found: 'false',
  realEstateAgent: "false",
  cost: 0,
  downPayment: 0,
  credit: '',
  history: '',
  addressOne: '',
  addressTwo: '',
  addressThree: '',
  firstName: '',
  lastName: '',
  email: ''
}
var UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE"
var UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE"
var UPDATE_CITY = "UPDATE_CITY"
var UPDATE_PROP = "UPDATE_PROP"
var UPDATE_FOUND = "UPDATE_FOUND"
var UPDATE_AGENT = "UPDATE_AGENT"
var UPDATE_COST = "UPDATE_COST"
var DOWN_PAYMENT = "DOWN_PAYMENT"
var UPDATE_CREDIT = "UPDATE_CREDIT"
var UPDATE_HISTORY = "UPDATE_HISTORY"
var ADDRESS_ONE = "ADDRESS_ONE"
var ADDRESS_TWO = "ADDRESS_TWO"
var ADDRESS_THREE = "ADDRESS_THREE"
var FIRST_NAME = "FIRST_NAME"
var LAST_NAME = "LAST_NAME"
var UPDATE_EMAIL = "UPDATE_EMAIL"


function reducer(state = initialState, action){
  switch(action.type){
    case UPDATE_LOAN_TYPE: return Object.assign({},state,{loanType:action.payload});
    case UPDATE_PROPERTY_TYPE: return Object.assign({},state,{propertyType: action.payload});
    case UPDATE_CITY: return Object.assign({},state,{city: action.payload});
    case UPDATE_PROP: return Object.assign({},state,{propToBeUsedOn:action.payload});
    case UPDATE_FOUND: return Object.assign({},state, {found: action.payload});
    case UPDATE_AGENT: return Object.assign({},state,{realEstateAgent: action.payload});
    case UPDATE_COST: return Object.assign({},state,{cost: action.payload});
    case DOWN_PAYMENT: return Object.assign({},state,{downPayment: action.payload});
    case UPDATE_CREDIT: return Object.assign({},state, {credit: action.payload});
    case UPDATE_HISTORY: return Object.assign({},state,{history: action.payload});
    case ADDRESS_ONE: return Object.assign({},state,{addressOne: action.payload});
    case ADDRESS_TWO: return Object.assign({}, state, {addressTwo: action.payload});
    case ADDRESS_THREE: return Object.assign({}, state, {addressThree: action.payload});
    case FIRST_NAME: return Object.assign({}, state, {firstName: action.payload});
    case LAST_NAME: return Object.assign({}, state, {lastName: action.payload});
    case UPDATE_EMAIL: return Object.assign({}, state, {email: action.payload})
    default: return state
  }

  
}

export function updateLoanType(loanType){
  return{
    type: UPDATE_LOAN_TYPE,
    payload: loanType
  }
}

export function updatePropertyType(property){
  return{
    type: UPDATE_PROPERTY_TYPE,
    payload: property
  }
}

export function updateCity(city){
  return{
    type:UPDATE_CITY,
    payload: city,
  }
}

export function updateProp(prop){
  return{
    type: UPDATE_PROP,
    payload: prop
  }
}

export function updateFound(found){
  return{
    type: UPDATE_FOUND,
    payload: found
  }
}

export function updateAgent(agent){
  return{
    type: UPDATE_AGENT,
    payload: agent
  }
}

export function updateCost(cost){
  return{
    type: UPDATE_COST,
    payload: cost
  }
}

export function downPayment(payment){
  return{
    type: DOWN_PAYMENT,
    payload: payment
  }
}

export function updateCredit(credit){
  return{
    type: UPDATE_CREDIT,
    payload: credit
  }
}

export function updateHistory(history){
  return{
    type: UPDATE_HISTORY,
    payload: history
  }
}

export function addressOne(addressOne){
  return{
    type: ADDRESS_ONE,
    payload: addressOne
  }
}

export function addressTwo(addressTwo){
  return{
    type: ADDRESS_TWO,
    payload: addressTwo
  }
}

export function addressThree(addressThree){
  return{
    type: ADDRESS_THREE,
    payload: addressThree
  }
}

export function firstName(firstName){
  return {
    type: FIRST_NAME,
    payload: firstName
  }
}

export function lastName(lastName){
  return{
    type: LAST_NAME,
    payload: lastName
  }
}

export function updateEmail(email){
  return{
    type: UPDATE_EMAIL,
    payload: email
  }
}

export default reducer;