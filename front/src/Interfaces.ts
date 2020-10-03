export interface ItemProps {
  id: number;
  title: string;
  checked: boolean;
  description: string;
}

export interface AppProps {
  logic: {
    listData: ItemProps[];
    handleAdd: (newItem: string) => void;
    handleCheck: (id: number) => void;
    handleRemove: (id: number) => void;
    handleUpdate: (itemdeets: Omit<ItemProps, 'checked'>) => void;
    removeChecked: () => void;
  };
}

export interface TodoItemProps {
  itemProps: {
    item: ItemProps;
    handleCheck: (id: number) => void;
    handleRemove: (id: number) => void;
    handleUpdate: (itemdeets: Omit<ItemProps, 'checked'>) => void;
  };
}

export type UpdateItemProps = Omit<ItemProps, 'checked'>;

export interface ModalProps {
  thisInfo: Omit<ItemProps, 'checked'>;
  isOpen: boolean;
  toggleModal: () => void;
  handleUpdate: (itemdeets: Omit<ItemProps, 'checked'>) => void;
}
