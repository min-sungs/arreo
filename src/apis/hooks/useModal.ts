import { useRecoilState } from "recoil";
import { modalState, Modal } from "../../recoil/atoms/ModalAtom";

interface UseModal {
  addModal: ({ key, props }: Modal) => void;
  removeCurrentModal: () => void;
}

export default function useModal(): UseModal {
  const [modalList, setModalList] = useRecoilState(modalState);

  const addModal = ({ key, props }: Modal) => {
    const newModalList = [...modalList];
    newModalList.push({ key, props });
    setModalList(newModalList);
  };

  const removeCurrentModal = () => {
    const newModalList = [...modalList];
    newModalList.pop();
    setModalList(newModalList);
  };

  return {
    addModal,
    removeCurrentModal,
  };
}
