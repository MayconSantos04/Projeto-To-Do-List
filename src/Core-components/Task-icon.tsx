import React from "react";
import Card from "../components/Card";
import InputCheckbox from "../components/Input-checkbox";
import InputText from "../components/Input-text";
import ButtonIcon from "../components/Button-icon";
import Text from "../components/Text";
import Trash from "../assets/icons/Trash.svg?react";
import X from "../assets/icons/X.svg?react";
import PencilSimple from "../assets/icons/PencilSimple.svg?react";
import Check from "../assets/icons/Check.svg?react";

export default function TaskItem() {
  const [isEditing, setIsEditing] = React.useState(false);

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    setIsEditing(false);
  }

  return (
    <Card size="md" className="flex items-center gap-3">
      {!isEditing ? (
        <>
          <InputCheckbox />
          <Text className="flex-1">Fazer Compras da semana</Text>
          <div className="flex gap-1">
            <ButtonIcon icon={Trash} variant="tertiary" />
            <ButtonIcon
              icon={PencilSimple}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </>
      ) : (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon
              icon={X}
              variant="secondary"
              onClick={handleExitEditTask}
            />
            <ButtonIcon icon={Check} variant="primary" />
          </div>
        </>
      )}
    </Card>
  );
}
