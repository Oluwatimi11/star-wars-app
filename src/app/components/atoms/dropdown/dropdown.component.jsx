import React, { useState } from "react";
import {
  DropDownContent,
  DropDownDiv,
  DropDownHeader,
  DropDownItem,
  DropDownLink,
  DropDownSpan,
} from "./dropdown.styles";
import { AiFillCaretDown } from "react-icons/ai";

function Dropdown({ selected, setSelected, movieList }) {
  const [isActive, setIsActive] = useState(false);
  console.log("14", movieList);
  return (
    <DropDownDiv className="dropdown">
      <DropDownHeader
        className="dropdown-btn"
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected}
        <DropDownSpan>
          <AiFillCaretDown />
        </DropDownSpan>
      </DropDownHeader>
      {isActive && (
        <DropDownContent className="dropdown-content">
          {movieList ? (
            <>
              {movieList?.map((option) => (
                <DropDownItem
                  className="dropdown-item"
                  onClick={(e) => {
                    setSelected(option.title);
                    setIsActive(false);
                  }}
                >
                  <DropDownLink to={`/movie/${option.episode_id}`}>{option.title}</DropDownLink>
                </DropDownItem>
              ))}
            </>
          ) : (
            <>Loading...</>
          )}
        </DropDownContent>
      )}
    </DropDownDiv>
  );
}

export default Dropdown;

// const Dropdown = ({ trigger, menu }) => {
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(!open);
//   };

//   return (
//     <DropDownDiv className="dropdown">
//       {React.cloneElement(trigger, {
//         onClick: handleOpen,
//       })}
//       {open ? (
//         <ul className="menu">
//           {menu.map((menuItem, index) => (
//             <li key={index} className="menu-item">
//               {React.cloneElement(menuItem, {
//                 onClick: () => {
//                   menuItem.props.onClick();
//                   setOpen(false);
//                 },
//               })}
//             </li>
//           ))}
//         </ul>
//       ) : null}
//     </DropDownDiv>
//   );
// };
