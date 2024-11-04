import React, { useEffect, useState } from "react";
import styles from "./CardInput.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

type Props = {
  onChange: (data: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  }) => void;
  cardDetails?: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  };
};

const CardInput: React.FC<Props> = ({
  onChange,
  cardDetails: cardDetailsFromProps,
}) => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  useEffect(() => {
    if (cardDetailsFromProps) {
      setCardDetails(cardDetailsFromProps);
    }
  }, []);

  useEffect(() => {
    onChange(cardDetails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cardDetails.cardNumber,
    cardDetails.expiryDate,
    cardDetails.cvv,
    cardDetails,
  ]);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({ ...cardDetails, cardNumber: e.target.value });
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({ ...cardDetails, expiryDate: e.target.value });
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({ ...cardDetails, cvv: e.target.value });
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardInput}>
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faCreditCard} />
        </span>{" "}
        {/* Credit card icon */}
        <input
          type="text"
          placeholder="1234 5678 1234 5678"
          data-test-id="card-number-input"
          className={styles.cardNumberInput}
          onChange={handleCardNumberChange}
          value={cardDetails.cardNumber}
        />
        <input
          type="text"
          placeholder="MM/YY"
          data-test-id="expiry-date-input"
          className={styles.expiryInput}
          onChange={handleExpiryDateChange}
          value={cardDetails.expiryDate}
        />
        <input
          type="text"
          placeholder="CVC"
          data-test-id="cvc-input"
          className={styles.cvcInput}
          onChange={handleCvvChange}
          value={cardDetails.cvv}
        />
      </div>{" "}
    </div>
  );
};

export default CardInput;
