import React from 'react';
import { ReactSVG } from 'react-svg';
import descriptionSVG from '../../assets/icons/description.svg';
import editSVG from '../../assets/icons/edit.svg';
import trashSVG from '../../assets/icons/trash.svg';
import './styles.css';

export const DescriptionIcon: React.FunctionComponent = () => (
  <ReactSVG src={descriptionSVG} className="description icon" />
);

export const EditIcon: React.FunctionComponent = () => (
  <ReactSVG src={editSVG} className="edit icon" />
);

export const TrashIcon: React.FunctionComponent = () => (
  <ReactSVG src={trashSVG} className="trash icon" />
);

// export default ReactIcons = () => <h1>test</h1>;
