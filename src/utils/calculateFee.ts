export interface FeeResult {
  fee: number;
  recipientAmount: number;
  paymentToReceive: number;
}

export const calculateFeeAndRecipientAmount = (amount: number): FeeResult => {
  if (typeof amount !== "number" || isNaN(amount)) {
    throw new Error("Amount must be a valid number");
  }

  if (amount < 0) {
    throw new Error("Amount cannot be negative");
  }

  if (amount <= 0) {
    return { fee: 0, recipientAmount: 0, paymentToReceive: 0 };
  }

  const feeRate = 0.0499 as const;
  const standardFixedFee = 0.49 as const;
  const reducedFixedFee = 0.36 as const;
  const threshold = 1 as const;

  const fixedFee = amount < threshold ? reducedFixedFee : standardFixedFee;

  const roundUp = (value: number): number => {
    if (typeof value !== "number" || isNaN(value)) {
      throw new Error("Value must be a valid number");
    }
    return Math.ceil(value * 100) / 100;
  };

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
