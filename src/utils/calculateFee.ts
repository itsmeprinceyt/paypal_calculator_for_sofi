export interface FeeResult {
    fee: number;
    recipientAmount: number;
    paymentToReceive: number;
}

export const calculateFeeAndRecipientAmount = (amount: number): FeeResult => {
    if (amount === 0) {
        return { fee: 0, recipientAmount: 0, paymentToReceive: 0 };
    }

    const feeRate = 0.0499; // 4.99%
    const fixedFee = 0.49; // Fixed fee ($0.49)

    const fee = parseFloat((amount * feeRate + fixedFee).toFixed(2));
    const recipientAmount = parseFloat((amount - fee).toFixed(2));
    const paymentToReceive = parseFloat(
        ((amount + fixedFee) / (1 - feeRate)).toFixed(2)
    );

    return { fee, recipientAmount, paymentToReceive };
};
