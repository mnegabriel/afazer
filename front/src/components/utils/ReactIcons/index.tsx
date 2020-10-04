import React from 'react';
import { ReactSVG } from 'react-svg';
import descriptionSVG from '../../../assets/icons/description.svg';
import editSVG from '../../../assets/icons/edit.svg';
import trashSVG from '../../../assets/icons/trash.svg';
import addSVG from '../../../assets/icons/add.svg';
import thumbsUpSVG from '../../../assets/icons/thumbsUp.svg';
import './styles.css';

export const DescriptionIcon: React.FunctionComponent = () => (
  <span role="img" aria-label="plus">
    <ReactSVG src={descriptionSVG} className="description icon" />
  </span>
);

export const EditIcon: React.FunctionComponent = () => (
  <span role="img" aria-label="plus">
    <ReactSVG src={editSVG} className="edit icon" />
  </span>
);

export const TrashIcon: React.FunctionComponent = () => (
  <span role="img" aria-label="trash">
    <ReactSVG src={trashSVG} className="trash icon" />
  </span>
);

export const AddIcon: React.FunctionComponent = () => (
  <span role="img" aria-label="tick">
    <ReactSVG src={addSVG} className="add icon" />
  </span>
);

export const ThumbsUpIcon: React.FunctionComponent = () => (
  <span role="img" aria-label="x">
    <ReactSVG src={thumbsUpSVG} className="thumbsUp icon" />
  </span>
);
