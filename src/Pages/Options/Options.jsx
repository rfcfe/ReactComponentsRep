import React from "react";
import DropdownButton from "../../Components/DropdownButton/DropdownButton";

function Options() {
  const Buttons = {
    title: "Buttons",
    data: [
      { label: "Button1", onClick: () => (window.location.href = "/button1") },
      { label: "Button2", onClick: () => (window.location.href = "/button2") },
      { label: "Button3", onClick: () => (window.location.href = "/button3") },
    ],
  };

  const Modals = {
    title: "Modals",
    data: [
      { label: "Modals1", onClick: () => (window.location.href = "/modals1") },
      { label: "Modals2", onClick: () => (window.location.href = "/modals2") },
      { label: "Modals3", onClick: () => (window.location.href = "/modals3") },
    ],
  };
  const DropdownButtons = {
    title: "DropdownButtons",
    data: [
      {
        label: "DropdownButtons1",
        onClick: () => (window.location.href = "/dropdownbuttons1"),
      },
      {
        label: "DropdownButtons2",
        onClick: () => (window.location.href = "/dropdownbuttons2"),
      },
      {
        label: "DropdownButtons3",
        onClick: () => (window.location.href = "/dropdownbuttons3"),
      },
    ],
  };
  return (
    <div>
      <DropdownButton options={Buttons} />
      <DropdownButton options={Modals} />
      <DropdownButton options={DropdownButtons} />
      <DropdownButton options={Buttons} />
    </div>
  );
}

export default Options;
