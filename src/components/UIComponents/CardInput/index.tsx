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
};

const CardInput: React.FC<Props> = ({ onChange }) => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

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
          className={styles.cardNumberInput}
          onChange={handleCardNumberChange}
        />
        <input
          type="text"
          placeholder="MM/YY"
          className={styles.expiryInput}
          onChange={handleExpiryDateChange}
        />
        <input
          type="text"
          placeholder="CVC"
          className={styles.cvcInput}
          onChange={handleCvvChange}
        />
      </div>{" "}
    </div>
  );
};

export default CardInput;
