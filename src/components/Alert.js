import { useContext } from "react";
import noteContext from "../Context/notes/NoteContext";

const Alert = () => {
  const context = useContext(noteContext);
  const { alert } = context;

  return (
    <div style={{ height: "50px" }}>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>
            {alert.type[0].toUpperCase() + alert.type.slice(1) + " "}
          </strong>
          {alert.message}
        </div>
      )}
    </div>
  );
};

export default Alert;
