import useInput from "../../hooks/use-input";
import classes from "./Checkout.module.css";

const CheckoutForm = (props) => {

    const {
        value: enteredName,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameIsBlurred,
        reset: resetName
    } = useInput();

    const {
        value: enteredStreet,
        hasError: streetHasError,
        valueChangeHandler: streetChangeHandler,
        inputBlurHandler: streetIsBlurred,
        reset: resetStreet
    } = useInput();

    const {
        value: enteredPostal,
        hasError: postalHasError,
        valueIsFiveChars: postalIsFiveChars,
        valueChangeHandler: postalChangeHandler,
        inputBlurHandler: postalIsBlurred,
        reset: resetPostal
    } = useInput();

    const {
        value: enteredCity,
        hasError: cityHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityIsBlurred,
        reset: resetCity
    } = useInput();

    let formIsValid = false;

    if (!nameHasError && !streetHasError && !postalHasError && postalIsFiveChars && !cityHasError) {
        formIsValid = true;
    }

    const formSubmissionHandler= (event)=> {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
          name: enteredName,
          street: enteredStreet,
          city: enteredCity,
          postalCode: enteredPostal
        });

        resetName();
        resetStreet();
        resetPostal();
        resetCity();
    }

    const errorMsg = <p className={classes.invalid}>The field must not be empty.</p>;

    const nameControlClasses = `${classes.control} ${!nameHasError ? "" : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${!streetHasError ? "" : classes.invalid}`;
    const postalControlClasses = `${classes.control} ${!postalHasError ? "" : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${!cityHasError ? "" : classes.invalid}`;

    return (
        <form onSubmit={formSubmissionHandler} className={classes.form}>
          <div className={nameControlClasses}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                onChange={nameChangeHandler}
                onBlur={nameIsBlurred}
                value={enteredName}
              />
              {nameHasError && errorMsg}
          </div>
          <div className={streetControlClasses}>
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              onChange={streetChangeHandler}
              onBlur={streetIsBlurred}
              value={enteredStreet}
            />
            {streetHasError && errorMsg}
          </div>
          <div className={postalControlClasses}>
            <label htmlFor="postal">Postal code</label>
            <input
              type="text"
              id="postal"
              onChange={postalChangeHandler}
              onBlur={postalIsBlurred}
              value={enteredPostal}
            />
            {postalHasError && <p>Please enter a valid postal code(5 characters long).</p>}
          </div>
          <div className={cityControlClasses}>
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              onChange={cityChangeHandler}
              onBlur={cityIsBlurred}
              value={enteredCity}
            />
            {cityHasError && errorMsg}
          </div>
          <div className={classes.actions}>
          <button type="button" onClick={props.onCancel}>Cancel</button>
            <button className={classes.submit}>Confirm</button>
          </div>
        </form>
      );
};

export default CheckoutForm;