export interface FeeResult {
  fee: number;
  recipientAmount: number;
  paymentToReceive: number;
}

export const calculateFeeAndRecipientAmount = (amount: number): FeeResult => {
  if (amount <= 0) {
    return { fee: 0, recipientAmount: 0, paymentToReceive: 0 };
  }
  const feeRate = 0.0499;
  const standardFixedFee = 0.49;
  const reducedFixedFee = 0.36;
  const threshold = 1;
  const fixedFee = amount < threshold ? reducedFixedFee : standardFixedFee;
  const roundUp = (value: number): number => Math.ceil(value * 100) / 100;
  const fee = roundUp(amount * feeRate + fixedFee);
  const recipientAmount = roundUp(amount - fee);
  if (recipientAmount < 0) {
    return {
      fee: amount,
      recipientAmount: 0,
      paymentToReceive: roundUp((amount + fixedFee) / (1 - feeRate)),
    };
  }
  const paymentToReceive = roundUp((amount + fixedFee) / (1 - feeRate));
  return { fee, recipientAmount, paymentToReceive };
};
