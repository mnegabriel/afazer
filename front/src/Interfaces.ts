export interface AppDiv {
  classes: string;
  children?: React.ReactNode;
}

export interface ItemProps {
  id: number;
  title: string;
  checked: boolean;
  description: string;
}

export interface AppLogicProps {
  listData: ItemProps[];
  todoListLogic: {
    handleCheck: (id: number) => void;
    handleRemove: (id: number) => void;
    handleUpdate: (itemdeets: Omit<ItemProps, 'checked'>) => void;
    removeChecked?: () => void;
  };
  inputLogic: {
    inputValue: string;
    setInputValue: (inputValue: string) => void;
    addItem: () => void;
    confirmation: boolean;
    setConfirmation: (confirmation: boolean) => void;
    confirmRemoval: () => void;
  };
  modalLogic: {
    modalIsOpen: boolean;
    modalId: number;
    modalTitle: string;
    setModalTitle: (title: string) => void;
    modalDescription: string;
    setModalDescription: (description: string) => void;
    openModal: (id: number) => void;
    closeModal: () => void;
    applySave: (newData: Omit<ItemProps, 'checked'>) => void;
  };
}

export interface TodoItemProps {
  itemProps: {
    item: ItemProps;
    handleUpdate: (itemdeets: Omit<ItemProps, 'checked'>) => void;
    modalIsOpen: boolean;
    toggleModal: () => void;
  };
  children?: React.ReactNode;
}

export interface ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
}

export type UpdateItemProps = Omit<ItemProps, 'checked'>;
