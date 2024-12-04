import classes from "./AuthForm.module.css";

interface FormFieldProps {
  name: string;
  type: string;
}

const FormField: React.FC<FormFieldProps> = ({ ...props }) => {
  const transformLabelsToShowThemProperly = (notTransformedlabel: string) => {
    let transformedLabel =
      notTransformedlabel[0].toUpperCase() +
      notTransformedlabel
        .slice(1)
        .replace(/([A-Z])/g, " $1")
        .trim();

    return transformedLabel;
  };

  const transformPlaceHolderToShowThemProperly = (notTransformedPL: string) => {
    if (notTransformedPL === "confirmPassword") {
      return "Confirm your Password";
    }

    let transformedPL =
      "Enter your " +
      notTransformedPL
        .slice(0)
        .replace(/([A-Z])/g, " $1")
        .trim();
    return transformedPL;
  };
  

  return (
    <div className={classes.field} key={props.name}>
      <label className={classes.label}>
        {transformLabelsToShowThemProperly(props.name)}
      </label>
      <input
        className={classes.input}
        name={props.name}
        type={props.type}
        placeholder={transformPlaceHolderToShowThemProperly(props.name)}
      />
    </div>
  );
};

export default FormField;
