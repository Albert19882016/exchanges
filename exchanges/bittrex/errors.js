const _ = require('lodash');

const code2error = {
  10000: 'Required parameter can not be null',
  10001: 'Requests are too frequent',
  10002: 'System Error',
  10003: 'Restricted list request, please try again later',
  10004: 'IP restriction',
  10005: 'Key does not exist',
  10006: 'User does not exist',
  10007: 'Signatures do not match',
  10008: 'Illegal parameter',
  10009: 'Order does not exist',
  10010: 'Insufficient balance',
  10011: 'Order is less than minimum trade amount',
  10012: 'Unsupported symbol (not btc_usd or ltc_usd)',
  10013: 'This interface only accepts https requests',
  10014: 'Order price must be between 0 and 1,000,000',
  10015: 'Order price differs from current market price too much',
  10016: 'Insufficient coins balance',
  10017: 'API authorization error',
  10026: 'Loan (including reserved loan) and margin cannot be withdrawn',
  10027: 'Cannot withdraw within 24 hrs of authentication information modification',
  10028: 'Withdrawal amount exceeds daily limit',
  10029: 'Account has unpaid loan, please cancel/pay off the loan before withdraw',
  10031: 'Deposits can only be withdrawn after 6 confirmations',
  10032: 'Please enabled phone/google authenticator',
  10033: 'Fee higher than maximum network transaction fee',
  10034: 'Fee lower than minimum network transaction fee',
  10035: 'Insufficient BTC/LTC',
  10036: 'Withdrawal amount too low',
  10037: 'Trade password not set',
  10040: 'Withdrawal cancellation fails',
  10041: 'Withdrawal address not approved',
  10042: 'Admin password error',
  10100: 'User account frozen',
  10216: 'Non-available API',
  503: 'Too many requests (Http)' };

function getErrorFromCode(code) {
  return code2error[code] || '';
}
module.exports = {
  getErrorFromCode
};
