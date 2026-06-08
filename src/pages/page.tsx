import Text from "../components/Text";
import Icon from "../components/Icon.tsx";
import Trash from "../assets/icons/Trash.svg?react";
import Check from "../assets/icons/Check.svg?react";
import Plus from "../assets/icons/Plus.svg?react";
import Badge from "../components/Badge.tsx";
import Button from "../components/Button.tsx";
import ButtonIcon from "../components/Button-icon.tsx";
import InputText from "../components/Input-text.tsx";
import InputCheckbox from "../components/Input-checkbox.tsx";
import Card from "../components/Card.tsx";
import Container from "../components/Container.tsx";

export default function PageConponents() {
    return (
    <div className="flex flex-col gap-2 bg-green-400">
      <Container>
        <Text className="text-pink-base">Olá mundo</Text>
        <Text variant="body-md" className="text-pink-base">
          Olá mundo
        </Text>
        <Text variant="body-md-bold" className="text-pink-base">
          Olá mundo
        </Text>
        <Text variant="body-sm-bold" className="text-pink-base">
          Olá mundo
        </Text>

        <div>
          <Icon svg={Trash} className="fill-green-base" />
          <Icon svg={Check} className="fill-green-base" />
          <Icon svg={Plus} className="fill-green-base" animate />
        </div>

        <div>
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">3 de 5</Badge>
        </div>

        <div>
          <Button icon={Plus}>Nova Tarefa</Button>
        </div>

        <div className="flex gap-1 ">
          <ButtonIcon icon={Trash} />
          <ButtonIcon icon={Trash} variant="secondary" />
          <ButtonIcon icon={Trash} variant="tertiary" />
        </div>

        <div>
          <InputText />
        </div>

        <div>
          <InputCheckbox />
        </div>

        <div>
          <Card size="md">Olá, mundo!</Card>
        </div>
      </Container>
    </div>
  );
}