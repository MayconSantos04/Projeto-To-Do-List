import Text from "./components/text";
import Trash from "./assets/icons/Trash.svg?react";
import Check from "./assets/icons/Check.svg?react";
import Plus from "./assets/icons/Plus.svg?react";
import Icon from "./components/Icon.tsx";

export default function App() {
  return (
    <div className="flex flex-col gap-2 bg-green-400">
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
        <Icon svg={Plus} className="fill-green-base" />
      </div>
    </div>
  );
}
